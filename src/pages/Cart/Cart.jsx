import { useState, React, useEffect } from "react";
import "./Cart.scss";
import { products } from "./products";
import SSLPayment from "../../components/SSLPayment/SSLPayment";
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

  const handleBkashClick = () => {
    alert("You need to be a Bkash Merchant to use Bkash API on Website.");
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="products">
        <div className="product">
          <h3>Name</h3>
          <p className="price">Price</p>
          <p className="qty">Quantity</p>
        </div>
        {items.length > 0 &&
          items.map((item, i) => {
            return <Product item={cartItems[item]} key={i} />;
          })}
      </div>
      <div className="total">
        <p>Total: {total} BDT</p>
      </div>
      <div className="paymentOptions">
        <p>Pay with: </p>
        <SSLPayment totalValue={total} />
        <button className="paymentBtn" onClick={handleBkashClick}>
          Bkash
        </button>
      </div>
    </div>
  );
};

export default Cart;
