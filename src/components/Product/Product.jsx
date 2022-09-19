import React from "react";
import "./Product.scss";

const Product = ({ item }) => {
  return (
    <div className="product">
      <h3>{item.name}</h3>
      <p className="price">{item.price} BDT</p>
      <p className="qty">{item.qty} Pcs</p>
    </div>
  );
};

export default Product;
