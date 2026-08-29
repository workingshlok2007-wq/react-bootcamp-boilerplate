# Q7 — Product Filter

## 📚 Before you start — know these terms

- **Lifting state up** — moving state from a child component into their
  closest common parent, so multiple children can share and react to it.
- **Parent/child component communication** — a parent passes data down via
  props; a child talks back up by calling a function the parent passed it.
- **Callback props** — a prop that is itself a function, passed from
  parent to child so the child can notify the parent of something.
  ```jsx
  function Child({ onPick }) {
    return <button onClick={() => onPick("A")}>Pick A</button>;
  }
  ```

## 🎯 Scenario

"ShopEase" wants category filter buttons (All / Shoes / Bags) above a
product list. Clicking a filter should update the list below — but the
buttons and the list are separate components.

## 🛠️ Your Task

Lift the "selected category" state up to `ShopPage` in `Starter.jsx`. Pass
a callback down to `FilterButtons` so clicking a button updates the
parent's state. Filter `ProductList`'s items based on that state
(including an "All" option that shows everything).

Wrap the filter buttons in `.filter-bar`, style each with `.btn`, and add
`.btn-active` to whichever one is currently selected — see
`src/index.css`. Don't add new CSS.

## 🔍 Go Deeper (optional research)

Why can't `FilterButtons` and `ProductList` share state directly without a
common parent? Research "single source of truth" in React.

## 📝 Extra Practice (optional)

- Build a search box (sibling to a list) that filters a list of names as
  the user types, with state lifted to a shared parent.
- Build a "sort by price: low-high / high-low" toggle that reorders a
  product list rendered in a sibling component.
- Build a tab switcher (Home / About / Contact buttons) that shows
  different content in a sibling component based on the active tab.
