import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => <ProductItem key={product.id} product={product} />)
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default ProductList;