# Q3 — Like Button

## 📚 Before you start — know these terms

- **State** — data a component owns that can change over time and causes
  the component to re-render when it does.
- **`useState`** — the React Hook that creates a piece of state and a
  setter function to update it.
  ```jsx
  const [count, setCount] = useState(0);
  ```
- **Event handler** — a function that runs in response to a user action
  like a click.
  ```jsx
  <button onClick={() => setCount(count + 1)}>+1</button>
  ```
- **Re-render** — when state changes, React re-runs the component function
  to produce updated UI.

## 🎯 Scenario

"PixelGram," a photo-sharing demo site, needs a like button on each post
that toggles between "🤍 Like" and "❤️ Liked" and updates a like count.

## 🛠️ Your Task

Add `useState` for `liked` and `likeCount` in `Starter.jsx`. Clicking the
button should toggle the liked state, change the button label, and
increment/decrement the count accordingly.

## 🔍 Go Deeper (optional research)

What happens if you try to update `likeCount` using `likeCount++` instead
of `setLikeCount(...)`? Why doesn't the UI update?

## 📝 Extra Practice (optional)

- Build a dark-mode toggle button that switches a `<div>`'s background
  between light/dark using state.
- Build a simple counter with +1 / -1 / Reset buttons.
- Build an accordion FAQ item that expands/collapses on click using a
  boolean state.
