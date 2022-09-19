import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>
        <Link to="/" className="navLink">
          Store X
        </Link>
      </h1>
      <ul className="navLinks">
        <Link to="/" className="navLink">
          Home
        </Link>
        {/* <Link to="/checkout" className="navLink">
          Checkout
        </Link> */}
        <Link to="/cart" className="navLink">
          Cart
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
