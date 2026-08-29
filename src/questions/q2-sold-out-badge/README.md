# Q2 — Sold Out Badge

## 📚 Before you start — know these terms

- **Conditional rendering** — showing different JSX depending on a
  condition.
  ```jsx
  {isOpen ? <p>Open now</p> : <p>Closed</p>}
  ```
- **Truthy/falsy in JSX** — `0`, `""`, `null`, `undefined`, and `false` are
  all falsy; everything else is truthy. JSX renders falsy values
  differently depending on how you write the check.
- **Ternary operator** — `condition ? valueIfTrue : valueIfFalse`, a compact
  if/else you can embed directly inside JSX.
- **`&&` short-circuit rendering** — `condition && <Thing />` renders
  `<Thing />` only when `condition` is truthy; otherwise it renders
  whatever the falsy value was.
  ```jsx
  {count > 0 && <p>{count} items</p>}
  ```

## 🎯 Scenario

An online store, "UrbanThreads," wants product cards to show a red "Sold
Out" badge when stock is 0, and a normal "Add to Cart" button otherwise.

## 🛠️ Your Task

Implement the conditional badge/button logic inside `ProductCard` in
`Starter.jsx`. When `stock` is `0`, render a "Sold Out" badge (use the
`badge badge-danger` classes). Otherwise, render an "Add to Cart" button
(use `btn btn-primary`). Both come from `src/index.css` — don't add new
CSS.

## 🔍 Go Deeper (optional research)

What happens in JSX if you render `{0}` directly vs. `{stock && <Badge/>}`
when stock is 0? Test it and explain the surprising result.

## 📝 Extra Practice (optional)

- Show a "New!" badge only if a product's `addedDaysAgo` is less than 7.
- Build a login-status header: show "Welcome, {name}" if logged in, else
  show a "Login" button.
- Add a discount tag that only renders if `discountPercent > 0`.
