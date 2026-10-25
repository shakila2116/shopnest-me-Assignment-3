import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar({ cartQuantity }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          ShopNest
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span
            className="navbar-toggler-icon"
            // style={{ color: "white" }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* <form className="d-flex mx-auto w-50">
            <input
              type="text"
              id="search"
              className="form-control me-2"
              placeholder="search"
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </form> */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="bi bi-cart3"></i> Cart
                <span className="badge rounded-pill bg-danger ms-1">
                  {cartQuantity}
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
