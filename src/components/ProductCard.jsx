import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card h-100">
      <img
        src={product.image}
        alt={product.title}
        className="img-fluid"
        style={{ width: "200px", height: "200px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h6 className="card-title">{product.title}</h6>
        <p>${product.price}</p>
        <Link
          to={`/products/${product.id}`}
          className="btn btn-sm btn-dark mt-auto"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
