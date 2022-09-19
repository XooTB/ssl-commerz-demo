import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import Home from "../Home/Home";
import Checkout from "../Checkout/Checkout";
import Cart from "../Cart/Cart";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
