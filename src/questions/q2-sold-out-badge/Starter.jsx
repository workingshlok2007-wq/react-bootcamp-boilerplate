const products = [
  { id: 1, name: "Denim Jacket", stock: 5 },
  { id: 2, name: "Graphic Tee", stock: 0 },
  { id: 3, name: "Sneakers", stock: 2 },
];

function ProductCard({ name, stock }) {
  return (
    <div className="product">
      <h4>{name}</h4>
      {stock == 0 ? (
        <span className="badge badge-danger">Sold Out</span>
      ) : (
        <button className="btn btn-primary">Add to Cart</button>
      )}
    </div>
  );
}

function ProductList() {
  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} name={p.name} stock={p.stock} />
      ))}
    </div>
  );
}

export default ProductList;