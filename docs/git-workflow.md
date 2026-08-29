# Git Workflow

This bootcamp uses each question as a chance to practice real Git habits,
not just React. Follow these steps exactly — the workflow itself is part of
what's being graded, and PRs that don't follow it get flagged automatically
before your instructor ever opens them.

## 0. Star the repo

Click ⭐ **Star** at the top of this repo on GitHub before you start. It's
part of the submission checklist in the root README.

## 1. Fork the repo

Fork `react-bootcamp-boilerplate` to your own GitHub account (click "Fork"
on the repo page). You'll do all your work inside your fork, and open Pull
Requests from it back to this repo.

## 2. Clone your fork locally

```bash
git clone https://github.com/<your-username>/react-bootcamp-boilerplate.git
cd react-bootcamp-boilerplate
npm install
```

## 3. Create a branch for the question you're working on

One branch per question, named **`<your-roll-number>-q<N>`** — your roll
number exactly as your instructor has it on record, lowercase or uppercase
consistently, followed by `-q1` through `-q10`. If your roll number is
`A110`, your branches are `A110-q1`, `A110-q2`, … `A110-q10`.

```bash
git checkout -b A110-q1
```

(Replace `A110` with your own roll number in every command below.) Do this
fresh for every question — don't reuse a branch or build multiple questions
on the same branch.

## 4. Edit only that question's `Starter.jsx`

While on the `A110-q1` branch, only touch
`src/questions/q1-team-cards/Starter.jsx`. Leave every other file —
including other questions' folders, `README.md`s, and `src/index.css` —
untouched on this branch. The automated check on your PR will fail if
anything else changed.

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
git push origin A110-q1
```

## 7. Repeat for each question

Go back to step 3 for `A110-q2`, `A110-q3`, and so on through `A110-q10`.
Always branch off from `main`, not from the previous question's branch:

```bash
git checkout main
git checkout -b A110-q2
```

## 8. Open a Pull Request — back to this repo, not your fork

For each of your 10 branches, open a Pull Request from
`<your-username>/react-bootcamp-boilerplate:A110-q1` into
`react-bootcamp-boilerplate:main` on the **original repo** (use GitHub's
"compare across forks" option when creating the PR). This is what puts
your submission somewhere your instructor can actually find it among 120
students' worth of branches — a PR left on your own fork will not be seen.

Fill in the PR template: your roll number, which question it is, and the
self-checklist. A bot will comment within a minute or two confirming your
branch name and file scope are correct, or telling you what to fix.

## Quick reference

| Step | Command |
|---|---|
| New branch for a question | `git checkout -b <rollnumber>-qN` |
| Check current branch | `git branch` |
| Stage your file | `git add src/questions/qN-question-name/Starter.jsx` |
| Commit | `git commit -m "explain what you built"` |
| Push | `git push origin <rollnumber>-qN` |
| Switch back to main before starting the next question | `git checkout main` |
| Open PR | From your fork's branch into `react-bootcamp-boilerplate:main` (compare across forks) |
