# React Bootcamp Boilerplate

A hands-on React.js learning repo built around 10 scenario-based coding
challenges. Each challenge is framed as a real client request, teaches 2–3
related React concepts, and doubles as practice for a real Git workflow
(fork → branch per question → commit → push → PR).

This is **not** an auto-graded platform — there's no execution engine
scoring your code. Your work is reviewed by comparing your branches against
what the concepts require.

> ⭐ **Star this repo** before you start — it's step 1 of the submission
> checklist below.

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL Vite prints in your terminal. The app is a sidebar menu
— pick a question on the left to see its current (unsolved) starter
component rendered live as you edit it.

Each question lives in `src/questions/<question-folder>/`:

- `README.md` — the jargon you need, the scenario, your task, and optional
  extra practice.
- `Starter.jsx` — the file you edit. It starts broken/incomplete on
  purpose.

For the full step-by-step Git process, see
[`docs/git-workflow.md`](./docs/git-workflow.md).

### Styling

`src/index.css` ships a small, ready-made set of classes — `.btn`,
`.badge`, `.card`, `.input`, `.navbar`, `.filter-bar`, `.carousel`, and a
few more — covering everything the 10 questions need. Each question's
README names the exact classes to reach for. Use them instead of writing
your own CSS or inline styles, so what you submit is a React difference,
not a styling one.

## The Rules

- **One branch per question**, named **`<your-roll-number>-q<N>`** — e.g.
  roll number `A110` on Q1 is branch `A110-q1`. Use the same roll number
  format on all 10 branches. Don't mix multiple questions on one branch.
- **Only edit the `Starter.jsx`** inside that question's folder on that
  branch. Leave other files and other questions alone.
- **Don't add or edit CSS.** Style your markup using only the classes
  already defined in `src/index.css` (see Styling above and the note in
  each question's README). If you think a question genuinely needs a new
  class, ask first rather than adding your own stylesheet or inline
  styles.
- **Every commit message must explain, in your own words, what you
  implemented.** Generic messages like `"done"` or `"fix"` aren't
  acceptable — write what you actually built and how, e.g. *"Refactored
  hardcoded cards into a BakerCard component rendered via .map() with
  baker.id as the key."*
- **No AI-generated code.** Code must be self-written. You should be able
  to explain any line of your own code if asked in a random spot-check
  (viva-style).
- **Submission** = pushing all 10 branches and opening a Pull Request from
  each one — from your fork **back to this repo's `main`** (not left
  sitting on your own fork) — using GitHub's "compare across forks" option.

## Submission Checklist

Work through this once per question, 10 times total:

- [ ] Repo starred ⭐ (once, not per question)
- [ ] Branch named `<rollnumber>-qN` and created off `main`
- [ ] Only that question's `Starter.jsx` changed
- [ ] Only the classes from `src/index.css` used — no new CSS
- [ ] Commit message explains what you built, in your own words
- [ ] Branch pushed to your fork
- [ ] Pull Request opened from your fork into `react-bootcamp-boilerplate:main`
      (not left on your fork), with the PR template filled in

A bot checks your branch name and file scope automatically when you open
the PR and will comment if something's off — fix it and push again to the
same branch, no need to re-open the PR.

## Questions

| # | Folder | Concepts |
|---|---|---|
| 1 | `q1-team-cards` | Components, props, `.map()`, `key` |
| 2 | `q2-sold-out-badge` | Conditional rendering, ternary, `&&` |
| 3 | `q3-like-button` | `useState`, event handlers |
| 4 | `q4-newsletter-form` | Controlled inputs, forms, `preventDefault` |
| 5 | `q5-testimonials-loader` | `useEffect` on mount, loading state |
| 6 | `q6-countdown-banner` | `useEffect` + interval + cleanup |
| 7 | `q7-product-filter` | Lifting state up, callback props |
| 8 | `q8-autofocus-search` | `useRef`, DOM access |
| 9 | `q9-image-carousel` | Combining state + effects + lists |
| 10 | `q10-shopping-cart` | Context API, `useContext`, no prop drilling |
