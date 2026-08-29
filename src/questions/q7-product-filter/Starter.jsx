const products = [
  { id: 1, name: "Running Shoes", category: "Shoes" },
  { id: 2, name: "Leather Bag", category: "Bags" },
  { id: 3, name: "Sneakers", category: "Shoes" },
];

function FilterButtons() {
  // TODO: needs to tell parent which category was clicked
  return (
    <div>
      <button>All</button>
      <button>Shoes</button>
      <button>Bags</button>
    </div>
  );
}

function ProductList({ items }) {
  return (
    <div>
      {items.map((p) => <p key={p.id}>{p.name}</p>)}
    </div>
  );
}

function ShopPage() {
  // TODO: hold selected category here, pass down to both children
  return (
    <div>
      <FilterButtons />
      <ProductList items={products} />
    </div>
  );
}
export default ShopPage;
