import { useState } from 'react'
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

const productsData = [
  { id: 1, name: "Laptop", price: 1, inStock: true },
  { id: 2, name: "Phone", price: 2, inStock: false },
  { id: 3, name: "Tablet", price: 3, inStock: true },
];

function App() {
  const [showInStock, setShowInStock] = useState(false);

  const filteredProducts = showInStock
    ? productsData.filter((product) => product.inStock)
    : productsData;

  return (
    <div>
      <h1>Product Catalog</h1>
      <Filter showInStock={showInStock} setShowInStock={setShowInStock} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App
