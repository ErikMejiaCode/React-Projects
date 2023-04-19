import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h4>Product ID: {id}</h4>
    </div>
  );
}

export default ProductDetails;
