import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="d-flex flex-wrap gap-2 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`btn ${
            selectedCategory === category ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
