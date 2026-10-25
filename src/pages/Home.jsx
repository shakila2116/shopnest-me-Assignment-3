import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-vh-100 d-flex align-items-center">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <p className="text-uppercase fw-bold text-primary mb-3">
              Shop Smart · Live Better
            </p>

            <h1 className="display-2 fw-bold text-dark mb-4">
              Welcome to <span className="text-primary">ShopNest</span>
            </h1>

            <p className="fs-5 text-secondary mb-4">
              Discover amazing products, great deals, and a seamless shopping
              experience — all in one place.
            </p>

            <Link
              to="/products"
              className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow"
            >
              Shop Now →
            </Link>

            <div className="d-flex flex-wrap gap-4 mt-5 text-dark">
              <span>🚚 Fast Delivery</span>
              <span>🔒 Secure Payments</span>
              <span>💜 Great Deals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
