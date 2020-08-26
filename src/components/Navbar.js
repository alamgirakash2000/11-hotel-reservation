import React, { Component } from "react";
import logo from "../images/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light my-0 py-2">
          <Link className="navbar-brand mr-5" to="/">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FaAlignRight />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  className="nav-link"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  className="nav-link"
                  to="/rooms"
                >
                  Rooms
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
