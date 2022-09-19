import React from "react";
import "./Failed.scss";

const Failed = () => {
  return (
    <div className="failed">
      <h1>Failed! </h1>
      <p>
        Something Went Wrong while trying to process the payment. Please try
        again.
      </p>
    </div>
  );
};

export default Failed;
