# Q1 — Team Cards

## 📚 Before you start — know these terms

- **Component** — a reusable, self-contained piece of UI written as a
  function that returns JSX.
  ```jsx
  function Greeting() {
    return <p>Hello!</p>;
  }
  ```
- **Props** — data passed into a component from its parent, read like
  function arguments.
  ```jsx
  function Greeting({ name }) {
    return <p>Hello, {name}!</p>;
  }
  // <Greeting name="Riya" />
  ```
- **`.map()` in JSX** — turning an array of data into an array of JSX
  elements.
  ```jsx
  const names = ["Riya", "Arjun"];
  names.map((n) => <p key={n}>{n}</p>);
  ```
- **`key` prop** — a unique identifier React needs on each item produced by
  `.map()` so it can track list items across re-renders.
  ```jsx
  {items.map((item) => <li key={item.id}>{item.label}</li>)}
  ```

## 🎯 Scenario

Bloom & Batter bakery wants a "Meet the Team" section. The previous dev
hardcoded 3 nearly identical card blocks. The client keeps adding bakers,
meaning constant copy-pasting.

## 🛠️ Your Task

Refactor `TeamSection` in `Starter.jsx` into a reusable `BakerCard`
component. Store the bakers as an array of objects (each with an `id`,
`name`, and `role`). Render the cards using `.map()` with a proper, stable
`key`. When you're done, adding a new baker should mean adding one object
to the array — no copy-pasted JSX.

## 🔍 Go Deeper (optional research)

Why does React warn about using array index as `key`? Try reordering the
array and see what breaks.

## 📝 Extra Practice (optional)

- Build a `MovieList` component that renders a `MovieCard` (title, year,
  rating) from an array of 5 movies.
- Add a `featured: true/false` field to the baker data and conditionally
  add a "⭐ Featured" label inside `BakerCard` when true.
- Turn a hardcoded 4-item FAQ block into a `FAQItem` component rendered via
  `.map()`.
