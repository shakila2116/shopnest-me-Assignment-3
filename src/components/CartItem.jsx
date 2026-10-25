function CartItem({ item, updateQuantity, removeFromCart }) {
  return (
    <div className="card shadow-sm border-0 mb-3">
      <div className="card-body">
        <div className="row align-items-center g-3">
          <div className="col-3">
            <img
              src={item.image}
              alt={item.title}
              className="img-fluid"
              style={{ height: "80px", objectFit: "contain" }}
            />
          </div>

          <div className="col-9 col-md-5">
            <h6>{item.title}</h6>
            <p className="text-success mb-2">${item.price.toFixed(2)}</p>

            <button
              className="btn btn-outline-secondary btn-sm"
              disabled={item.quantity <= 1}
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              −
            </button>

            <span className="mx-3">{item.quantity}</span>

            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>

          <div className="col-12 col-md-4 text-md-end">
            <p className="fw-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
