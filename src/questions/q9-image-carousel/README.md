# Q9 — Image Carousel (Capstone-lite)

## 📚 Before you start — know these terms

This question combines concepts from earlier questions — no new Hooks,
just putting them together:

- **State + effects + rendering lists together** — tracking an index with
  `useState`, advancing it on a timer with `useEffect`, and rendering the
  item at that index.
- **Autoplay pattern** — a `setInterval` inside `useEffect` that advances
  state on its own, combined with buttons that let the user override it
  manually, both updating the *same* piece of state.

## 🎯 Scenario

"Bloom & Batter" (same bakery client from Q1) now wants a homepage image
carousel showing 4 cake photos, auto-advancing every 3 seconds, with
manual "Prev"/"Next" buttons too.

## 🛠️ Your Task

Implement full carousel behavior in `Starter.jsx`: track the current index
with state, auto-advance every 3 seconds using `useEffect` + `setInterval`,
add Prev/Next buttons to manually change the index, and wrap around at
both ends (after the last image, go back to the first; before the first,
go to the last).

## 🔍 Go Deeper (optional research)

How would you pause the auto-advance when the user hovers over the
carousel? (Hint: another piece of state controlling whether the interval
runs.)

## 📝 Extra Practice (optional)

- Build a testimonial slider that auto-advances every 4 seconds and shows
  dot indicators for the current slide.
- Build an image gallery with thumbnail clicks that change a large preview
  image (no autoplay needed).
- Add pause-on-hover behavior to the Q9 carousel itself.
