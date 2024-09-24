import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [close, setClose] = useState(true);

  const toggleNavbar = () => {
    setClose(false);
    setIsOpen(!isOpen);
  };
  const closeButton = () => {
    setClose(true);
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <div className="container ">
        <div className="nav">
          <div className="nav-logo">
            <img src="../../public/logo.png" alt="logo" />
          </div>
          <div className="main-navigation">
            <ul className="nav-items">
              <li className="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about">Aboute Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/plan">Create Your Plan</NavLink>
              </li>
            </ul>
          </div>

          {close && (
            <button className="navbar-toggle" onClick={toggleNavbar}>
              &#9776;
            </button>
          )}
          {!close && (
            <button className="navbar-toggle" onClick={closeButton}>
              &#x2715;
            </button>
          )}
        </div>
      </div>
      <div className="togle-nav">
        <ul className={`navbar-links ${isOpen ? "active1" : ""}`}>
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about">Aboute Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/plan">Create Your Plan</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
