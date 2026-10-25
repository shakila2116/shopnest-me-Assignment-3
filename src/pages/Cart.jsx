import CartItem from "../components/CartItem";

function Cart({ cartItems, updateQuantity, removeFromCart }) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="container py-5">
      <h2 className="mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row g-4">
          <div className="col-lg-8">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>Order Summary</h5>

                <p className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </p>

                <p className="d-flex justify-content-between">
                  <span>Estimated Tax (5%)</span>
                  <span>${tax.toFixed(2)}</span>
                </p>

                <hr />

                <h5 className="d-flex justify-content-between">
                  <span>Total</span>
                  <span className="text-success">
                    ${total.toFixed(2)}
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;