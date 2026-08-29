const products = [
  { id: 1, name: "Running Shoes", price: 59 },
  { id: 2, name: "Leather Bag", price: 89 },
  { id: 3, name: "Sneakers", price: 45 },
];

function Navbar() {
  // TODO: show cart item count here
  return <nav>🛒 Cart: 0</nav>;
}

function ProductCard({ product }) {
  // TODO: add this product to cart on button click
  return (
    <div className="product">
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
export default App;
