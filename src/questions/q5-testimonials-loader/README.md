# Q5 — Testimonials Loader

## 📚 Before you start — know these terms

- **Side effect** — anything a component does that reaches outside of
  rendering, like fetching data or setting a timer.
- **`useEffect`** — the React Hook for running side effects after a
  component renders.
  ```jsx
  useEffect(() => {
    console.log("ran after render");
  }, []);
  ```
- **Dependency array `[]`** — the second argument to `useEffect`; an empty
  array means "run this effect only once, after the first render."
- **Loading state** — a boolean piece of state used to show a placeholder
  ("Loading...") until real data is ready.

## 🎯 Scenario

"TrustBuild," a SaaS landing page, wants a testimonials section that shows
a "Loading testimonials..." message briefly, then displays 3 testimonials
once "fetched" (simulate with `setTimeout`).

## 🛠️ Your Task

In `Starter.jsx`, show "Loading testimonials..." first. After 1.5 seconds
(use `setTimeout` inside `useEffect`), show the testimonials list. Clean
up the timeout properly.

Use the `.loading-text` class from `src/index.css` for the loading
message — don't add new CSS.

## 🔍 Go Deeper (optional research)

What would happen if you forgot the `[]` dependency array entirely? Try it
and describe the behavior.

## 📝 Extra Practice (optional)

- Build a "Fetching weather..." loader that shows a fake weather result
  after 2 seconds.
- Build a component that logs "Component mounted!" to the console once,
  using `useEffect`.
- Add a loading spinner (just text "⏳ Loading...") before any list of data
  renders, using a simulated delay.
