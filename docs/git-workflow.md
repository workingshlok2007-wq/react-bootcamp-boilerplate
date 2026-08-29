# Git Workflow

This bootcamp uses each question as a chance to practice real Git habits,
not just React. Follow these steps exactly — the workflow itself is part of
what's being graded, and your PR gets an automated comment telling you if
something's off before your instructor ever opens it.

## 0. Star the repo

Click ⭐ **Star** at the top of this repo on GitHub before you start. It's
part of the submission checklist in the root README.

## 1. Fork the repo

Click **Fork** at the top of this repo's GitHub page. This makes your own
copy under your account — you'll do all your work there.

## 2. Clone your fork locally

```bash
git clone https://github.com/<your-username>/react-bootcamp-boilerplate.git
cd react-bootcamp-boilerplate
npm install
```

## 3. Create one branch, named after your roll number

Everything you do lives on a **single branch**, named exactly after your
roll number — as your instructor has it on record, e.g. `A110`.

```bash
git checkout -b A110
```

(Replace `A110` with your own roll number.) You'll stay on this one branch
for all 10 questions — no switching branches between questions.

## 4. Work through the questions one at a time, one commit each

For each question:

1. Open `src/questions/qN-question-name/README.md` and read it.
2. Edit **only** that question's `Starter.jsx`.
3. Check it in the browser:
   ```bash
   npm run dev
   ```
4. Commit **just that file**, with a message explaining what you built in
   your own words:
   ```bash
   git add src/questions/q1-team-cards/Starter.jsx
   git commit -m "Extracted BakerCard component and rendered bakers array with .map(), using baker.id as the key"
   ```

Then move on to the next question and repeat — edit, check, commit. By the
time you're done with all 10, your branch has **10 commits**, each one
scoped to a single question's `Starter.jsx`. Don't touch any other files
(other questions, `README.md`s, `src/index.css`) — the automated check on
your PR will flag it if you do.

Generic commit messages like `"done"`, `"fix"`, or `"update"` are not
acceptable — see the root README for why.

## 5. Push your branch

```bash
git push origin A110
```

You can push again anytime you add more commits — no need to redo earlier
questions.

## 6. Open one Pull Request — back to this repo, not your fork

Once all 10 questions are committed and pushed, open **one Pull Request**
from your fork's `A110` branch into `react-bootcamp-boilerplate:main` on
the **original repo** (GitHub calls this "compare across forks" when you
click "New Pull Request" from your fork). This is what puts your work
somewhere your instructor can find it — a branch left only on your own
fork will not be seen.

Fill in the PR template: your roll number and the self-checklist. Within a
minute or two, a bot will comment confirming your branch name and which
questions it found commits for, or telling you what to fix. If you push
more commits to `A110` after opening the PR, they show up automatically —
you don't need to open a new one.

Your instructor reviews your 10 commits directly on this one PR — the
**Commits** tab on the PR page shows them in order, one per question.

## Quick reference

| Step | Command |
|---|---|
| One branch, once | `git checkout -b <rollnumber>` |
| Check current branch | `git branch` |
| Stage one question's file | `git add src/questions/qN-question-name/Starter.jsx` |
| Commit (once per question) | `git commit -m "explain what you built"` |
| Push (anytime you add commits) | `git push origin <rollnumber>` |
| Open PR | From your fork's `<rollnumber>` branch into `react-bootcamp-boilerplate:main` (compare across forks) — once, after your first commit or your last |
