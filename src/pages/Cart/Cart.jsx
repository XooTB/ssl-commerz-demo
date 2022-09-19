import { useState, React, useEffect } from "react";
import "./Cart.scss";
import { products } from "./products";

import Product from "../../components/Product/Product";

const Cart = () => {
  const [cartItems, setItems] = useState(products);
  const [total, setTotal] = useState(0);

  const items = Object.keys(cartItems);

  const totals = items.map((item) => {
    const prod = cartItems[item];
    const itemTotal = prod.price * prod.qty;
    return itemTotal;
  });

  useEffect(() => {
    setTotal(
      totals.reduce((a, b) => {
        return a + b;
      })
    );
  }, []);
  return (
    <div className="cart">
      <h1>Cart</h1>
      {items.length > 0 &&
        items.map((item) => {
          return <Product item={cartItems[item]} />;
        })}
      <div className="total">
        <p>Total: {total} BDT</p>
      </div>
      <div className="paymentOptions">
        <button className="sslCom">Pay with SSLCommerz</button>
      </div>
    </div>
  );
};

export default Cart;
