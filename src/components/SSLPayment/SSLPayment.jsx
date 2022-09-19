import React from "react";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const SSLPayment = ({ totalValue }) => {
  const [total, setTotal] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const call = async () => {
      fetch(`${process.env.REACT_APP_ROOT_URL}/sslcommerz/init`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ total }),
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.replace(data.paymentLink);
          // navigate("/sucess");
        });
    };

    if (total > 0) {
      call();
    }
  }, [total]);

  const handleClick = () => {
    setTotal(totalValue);
  };

  return (
    <button className="sslCom paymentBtn" onClick={handleClick}>
      SSLCommerz
    </button>
  );
};

export default SSLPayment;
