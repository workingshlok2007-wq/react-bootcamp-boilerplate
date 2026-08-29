# Q10 — Capstone: Mini Shopping Cart

## 📚 Before you start — know these terms

- **Context API** — a way to share data (like cart state) across many
  components without passing props down manually at every level.
- **`createContext`** — creates a Context object that a `Provider` can
  supply a value to, and that any descendant can read from.
  ```jsx
  const ThemeContext = createContext();
  ```
- **`useContext`** — the Hook a component uses to read the current value
  from the nearest matching `Provider` above it in the tree.
  ```jsx
  const theme = useContext(ThemeContext);
  ```
- **Prop drilling** — passing a prop through several layers of components
  that don't need it themselves, just to get it to a deeply nested child.
  Context avoids this.

## 🎯 Scenario

"ShopEase" (from Q7) now wants a shopping cart. Any product card anywhere
in the app should be able to add itself to the cart, and the navbar should
show a live cart item count — without passing props down through every
level manually.

## 🛠️ Your Task

In `Starter.jsx`, create a `CartContext` using `createContext`. Wrap the
app in a `CartProvider` that holds a `cart` array and an `addToCart`
function. Use `useContext` in `Navbar` to show the cart count, and in
`ProductCard` to add items to the cart — with no prop drilling between
them.

## 🔍 Go Deeper (optional research)

What problem does Context solve that "lifting state up" (Q7) doesn't scale
well for? Research "prop drilling" with a 5+ level deep component example.

## 📝 Extra Practice (optional)

- Extend the cart to also support a "Remove from Cart" action via Context.
- Build a `ThemeContext` (light/dark) that any nested component can read
  and toggle from anywhere in the tree.
- Add a running total price display in the navbar, derived from cart
  contents via Context.
