import React, { useState } from "react";
import ProductGrid from "../components/ProductGrid";
import CategoryFilter from "../components/CategoryFilter";
import useProducts from "../hooks/useProducts";

function Product() {
  const { products, loading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Show loading spinner
  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading products...</p>
      </div>
    );
  }

  // Show error message
  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Our Products</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}

export default Product;
