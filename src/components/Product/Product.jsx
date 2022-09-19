import React from "react";
import "./Product.scss";

const Product = ({ item }) => {
  return (
    <div className="product">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.qty}</p>
    </div>
  );
};

export default Product;
