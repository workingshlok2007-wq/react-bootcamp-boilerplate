# Q6 — Countdown Banner

## 📚 Before you start — know these terms

- **`setInterval`** — a browser timer function that repeatedly runs a
  callback every N milliseconds until stopped.
- **Cleanup function** — the function you `return` from inside
  `useEffect`; React calls it before the effect re-runs or the component
  unmounts, so you can cancel timers/subscriptions.
  ```jsx
  useEffect(() => {
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  ```
- **Memory leak** — when a timer or subscription keeps running after a
  component is gone, because it was never cleaned up.

## 🎯 Scenario

"FlashDeals," an e-commerce site, wants a countdown banner: "Sale ends in:
10, 9, 8... 0" that ticks down every second and shows "Sale Ended!" at
zero.

## 🛠️ Your Task

Implement the ticking countdown in `Starter.jsx`. Stop at 0 and show "Sale
Ended!". Make sure the interval is cleared properly (no memory leaks).

Wrap the number in a `.countdown` span for tabular, monospace digits —
see `src/index.css`. Don't add new CSS.

## 🔍 Go Deeper (optional research)

What bug occurs if you use `setSeconds(seconds - 1)` instead of the
functional update form `setSeconds(prev => prev - 1)`? Explain why (stale
closures).

## 📝 Extra Practice (optional)

- Build a stopwatch that counts seconds upward with Start/Stop buttons.
- Build a "words typed per minute" style live timer that updates every
  second while a form is being filled.
- Build an auto-dismissing toast notification that disappears after 3
  seconds using `setTimeout` + cleanup.
