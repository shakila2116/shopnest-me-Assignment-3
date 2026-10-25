import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";

function ProductDetail({addToCart}) {
  const { id } = useParams();
  const { products, loading, error } = useProducts();
  // const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="container py-5">Product not found.</div>;
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-md-5">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ width: "200px", height: "200px" }}
          />
        </div>

        <div className="col-md-7">
          <h2>{product.title}</h2>
          <h4 className="text-success">${product.price}</h4>
          <p>{product.description}</p>

          <button className="btn btn-dark" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
