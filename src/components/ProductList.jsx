// src/components/ProductList.jsx
import React from "react";
import { useStore } from "../context/StoreContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = useStore();

  return (
    <section id="products">
      <h2>Our Products</h2>

      <div className="sort-controls">
        {/* Optional: Add sorting buttons here */}
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
