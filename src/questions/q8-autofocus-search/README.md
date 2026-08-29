# Q8 — Auto-Focus Search Box

## 📚 Before you start — know these terms

- **`useRef`** — a Hook that gives you a mutable box (`{ current: ... }`)
  that persists across renders without causing a re-render when it
  changes.
  ```jsx
  const boxRef = useRef(null);
  <div ref={boxRef} />;
  ```
- **Direct DOM access** — using a ref to call real DOM methods (like
  `.focus()` or `.scrollIntoView()`) that React doesn't expose through
  props.
- **`useRef` vs. `useState`** — `useState` updates trigger a re-render;
  `useRef` updates do not. Use `useRef` for values you need to keep around
  but that shouldn't affect what's rendered.

## 🎯 Scenario

"QuickFind," a search-heavy app, wants the search input to be
automatically focused the moment the page loads, so users can start typing
immediately without clicking.

## 🛠️ Your Task

Auto-focus the input in `Starter.jsx` on mount using `useRef` and
`useEffect`.

## 🔍 Go Deeper (optional research)

Why would using `useState` instead of `useRef` to store the DOM node be
the wrong choice here? (Hint: think about re-renders.)

## 📝 Extra Practice (optional)

- Build a "Scroll to top" button that uses `useRef` on a page container
  and scrolls it into view on click.
- Build a video player component that uses `useRef` to call `.play()` /
  `.pause()` on a `<video>` element via custom buttons.
- Build a form where pressing Enter in the first input auto-focuses the
  second input using `useRef`.
