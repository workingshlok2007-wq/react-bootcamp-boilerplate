# Git Workflow

This bootcamp uses each question as a chance to practice real Git habits,
not just React. Follow these steps exactly — the workflow itself is part of
what's being graded.

## 1. Fork the repo

Fork `react-bootcamp-boilerplate` to your own GitHub account (click "Fork"
on the repo page). You'll work entirely inside your fork.

## 2. Clone your fork locally

```bash
git clone https://github.com/<your-username>/react-bootcamp-boilerplate.git
cd react-bootcamp-boilerplate
npm install
```

## 3. Create a branch for the question you're working on

One branch per question, named **exactly** after the question folder:

```bash
git checkout -b q1-team-cards
```

Do this fresh for every question — don't reuse a branch or build multiple
questions on the same branch.

## 4. Edit only that question's `Starter.jsx`

While on the `q1-team-cards` branch, only touch
`src/questions/q1-team-cards/Starter.jsx`. Leave every other question's
files untouched on this branch — mixing work across branches makes your
history hard to review and defeats the point of the exercise.

Run the dev server to see your work live:

```bash
npm run dev
```

## 5. Commit with a real explanation

Write your commit message in your own words, explaining what you actually
built:

```bash
git add src/questions/q1-team-cards/Starter.jsx
git commit -m "Extracted BakerCard component and rendered bakers array with .map(), using baker.id as the key"
```

Generic messages like `"done"`, `"fix"`, or `"update"` are not acceptable —
see the root README for why.

## 6. Push the branch

```bash
git push origin q1-team-cards
```

## 7. Repeat for each question

Go back to step 3 for `q2-sold-out-badge`, `q3-like-button`, and so on
through `q10-shopping-cart`. Always branch off from `main`, not from the
previous question's branch:

```bash
git checkout main
git checkout -b q2-sold-out-badge
```

## 8. Open Pull Requests

Once all 10 questions are done and pushed, open a Pull Request from each
branch (or one summary PR) back into `main` **on your own fork** — not the
original boilerplate repo. This lets your instructor review your work
branch-by-branch.

## Quick reference

| Step | Command |
|---|---|
| New branch for a question | `git checkout -b qN-question-name` |
| Check current branch | `git branch` |
| Stage your file | `git add src/questions/qN-question-name/Starter.jsx` |
| Commit | `git commit -m "explain what you built"` |
| Push | `git push origin qN-question-name` |
| Switch back to main before starting the next question | `git checkout main` |
