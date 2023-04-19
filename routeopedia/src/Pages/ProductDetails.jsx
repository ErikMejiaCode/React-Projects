import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();

  return (
    <div>
      <h4>Product ID: {productId}</h4>
    </div>
  );
}

export default ProductDetails;
