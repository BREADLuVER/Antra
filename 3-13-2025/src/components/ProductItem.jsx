function ProductItem({ product }) {
    return (
      <div style={{ padding: "10px", border: "1px solid #ddd", margin: "10px" }}>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p style={{ color: product.inStock ? "green" : "red" }}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    );
  }
  
  export default ProductItem;