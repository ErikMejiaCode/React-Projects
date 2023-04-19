import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const [goToProduct, setGoToProduct] = useState(() => {
    return false;
  });

  return (
    <div>
      // Routing using useNavigate Product
      <br />
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product
      </button>
      // Routing using Link
      <Link to={`/product/details/5`}>
        <button>Navigate to Product Detail - 5</button>
      </Link>
      // Routing using Navigate & UseState
      {goToProduct && <Navigate to="/product/details/3" />}
      <button
        onClick={() => {
          setGoToProduct({ goToProduct: true });
        }}
      >
        Navigate to Product - 3 (useState)
      </button>
    </div>
  );
}

export default Product;
