import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Success from "../Success/Success";
import Failed from "../Failed/Failed";
import Cancelled from "../Cancelled/Cancelled";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/success/val_id=:val_id&tran_id=:tran_id&amount=:amount"
          element={<Success />}
        />
        <Route path="/failed" element={<Failed />} />
        <Route path="/cancelled" element={<Cancelled />} />
      </Routes>
    </div>
  );
};

export default App;
