import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    alert(`${product.title} added to cart successfully!`);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;

    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const cartQuantity = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);
  return (
    <div>
      <Navbar  cartQuantity={cartQuantity}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
