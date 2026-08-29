# Q4 — Newsletter Signup Form

## 📚 Before you start — know these terms

- **Controlled component** — a form input whose value is driven entirely
  by React state, not by the DOM itself.
  ```jsx
  <input value={text} onChange={(e) => setText(e.target.value)} />
  ```
- **`onChange`** — the event handler that fires every time an input's
  value changes, giving you the new value via `e.target.value`.
- **Form submission in React** — handled with an `onSubmit` handler on the
  `<form>` element, not the button's `onClick`.
- **`preventDefault`** — calling `e.preventDefault()` inside a submit
  handler stops the browser's default full-page reload.

## 🎯 Scenario

"DailyBrew Coffee Co." wants a newsletter signup box that captures the
user's email and shows a "Thanks for subscribing, {email}!" message on
submit, without reloading the page.

## 🛠️ Your Task

Make the input in `Starter.jsx` a controlled component. On submit, prevent
the page reload, and show a thank-you message using the submitted email.

## 🔍 Go Deeper (optional research)

What is the difference between a "controlled" and "uncontrolled" input in
React? Why does React generally recommend controlled inputs?

## 📝 Extra Practice (optional)

- Build a feedback form with a controlled `<textarea>` that shows a live
  character count below it.
- Build a simple login form (username + password) that shows an error
  message if either field is left empty on submit.
- Build a controlled `<select>` dropdown that displays the chosen option
  below it.
