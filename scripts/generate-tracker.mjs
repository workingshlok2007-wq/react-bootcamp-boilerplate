#!/usr/bin/env node
/**
 * Scans every Pull Request on this repo and builds a roll-number x
 * question completion table (docs/submissions.md).
 *
 * This tracks SUBMISSION COMPLETENESS ONLY — whether a commit touching
 * each question's Starter.jsx shows up in a student's PR. It says nothing
 * about whether the code is correct; that's still a manual/Claude review
 * per the grading workflow, same as the rest of this repo.
 *
 * Usage:
 *   GITHUB_TOKEN=<token> node scripts/generate-tracker.mjs
 *
 * A token isn't strictly required for a public repo, but without one
 * you'll hit GitHub's low unauthenticated rate limit almost immediately
 * at 120 students. A plain `repo`-scoped (or fine-grained "Pull requests:
 * read") personal access token is enough.
 */

const OWNER = process.env.TRACKER_OWNER || 'adishshah29-eng';
const REPO = process.env.TRACKER_REPO || 'react-bootcamp-boilerplate';
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';

const QUESTION_SLUGS = {
  1: 'q1-team-cards',
  2: 'q2-sold-out-badge',
  3: 'q3-like-button',
  4: 'q4-newsletter-form',
  5: 'q5-testimonials-loader',
  6: 'q6-countdown-banner',
  7: 'q7-product-filter',
  8: 'q8-autofocus-search',
  9: 'q9-image-carousel',
  10: 'q10-shopping-cart',
};
const PATH_TO_QNUM = Object.fromEntries(
  Object.entries(QUESTION_SLUGS).map(([n, slug]) => [`src/questions/${slug}/Starter.jsx`, Number(n)])
);
const QNUMS = Object.keys(QUESTION_SLUGS).map(Number);

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
    },
  });
  if (!res.ok) {
    throw new Error(`GitHub API ${path} -> ${res.status} ${await res.text()}`);
  }
  return res.json();
}

async function ghPaginated(path) {
  const results = [];
  let page = 1;
  for (;;) {
    const sep = path.includes('?') ? '&' : '?';
    const batch = await gh(`${path}${sep}per_page=100&page=${page}`);
    results.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }
  return results;
}

async function main() {
  if (!TOKEN) {
    console.warn('Warning: no GITHUB_TOKEN set — likely to hit rate limits at 120 students.');
  }

  const prs = await ghPaginated(`/repos/${OWNER}/${REPO}/pulls?state=all`);

  /** @type {Map<string, { roll: string, prNumber: number, prUrl: string, state: string, author: string, qnums: Set<number>, foreignFiles: string[] }>} */
  const byRoll = new Map();

  for (const pr of prs) {
    const branch = pr.head.ref;
    const roll = /^[A-Za-z0-9]+$/.test(branch) ? branch : `${branch} (bad branch name)`;

    const files = await ghPaginated(`/repos/${OWNER}/${REPO}/pulls/${pr.number}/files`);
    const qnums = new Set();
    const foreignFiles = [];
    for (const f of files) {
      if (f.filename in PATH_TO_QNUM) {
        qnums.add(PATH_TO_QNUM[f.filename]);
      } else {
        foreignFiles.push(f.filename);
      }
    }

    const existing = byRoll.get(roll);
    if (!existing || pr.number > existing.prNumber) {
      byRoll.set(roll, {
        roll,
        prNumber: pr.number,
        prUrl: pr.html_url,
        state: pr.merged_at ? 'merged' : pr.state,
        author: pr.user?.login ?? 'unknown',
        qnums,
        foreignFiles,
      });
    }
  }

  const rows = [...byRoll.values()].sort((a, b) =>
    a.roll.localeCompare(b.roll, undefined, { numeric: true })
  );

  const header = ['Roll No', ...QNUMS.map((n) => `Q${n}`), 'Done', 'State', 'PR'];
  const lines = [
    '# Submission Tracker',
    '',
    `_Generated ${new Date().toISOString()} — tracks which questions have a commit in each student's PR. This is completeness, not correctness; grading is still a manual/Claude review per PR._`,
    '',
    `| ${header.join(' | ')} |`,
    `| ${header.map(() => '---').join(' | ')} |`,
  ];

  for (const row of rows) {
    const cells = QNUMS.map((n) => (row.qnums.has(n) ? '✅' : '⬜'));
    const done = `${row.qnums.size}/10`;
    const flag = row.foreignFiles.length > 0 ? ' ⚠️ extra files' : '';
    lines.push(
      `| ${row.roll} | ${cells.join(' | ')} | ${done}${flag} | ${row.state} | [#${row.prNumber}](${row.prUrl}) |`
    );
  }

  if (rows.length === 0) {
    lines.push('| _no PRs found yet_ |' + ' |'.repeat(header.length - 1));
  }

  const markdown = lines.join('\n') + '\n';
  console.log(markdown);

  const fs = await import('node:fs/promises');
  await fs.mkdir('docs', { recursive: true });
  await fs.writeFile('docs/submissions.md', markdown);
  console.error(`\nWrote docs/submissions.md (${rows.length} students found across ${prs.length} PRs).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
