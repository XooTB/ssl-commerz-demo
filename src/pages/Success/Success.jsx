import React from "react";
import { useParams } from "react-router-dom";
import "./Success.scss";

const Success = () => {
  const { val_id, tran_id, amount } = useParams();
  return (
    <div className="success">
      <h1>Success!</h1>
      <p className="tranid">Your Transaction ID is: {tran_id}</p>
      <p className="val_id">Your Validation ID is: {val_id} </p>
      <p className="amount">You Paid: {amount} BDT</p>
    </div>
  );
};

export default Success;
