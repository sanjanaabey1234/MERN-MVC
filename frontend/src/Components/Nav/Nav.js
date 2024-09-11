import React from "react";
import "../Nav/nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div
        className="navbar-logo"
        style={{ display: "flex", alignItems: "center" }}
      >
        <i
          className="fas fa-users"
          style={{ fontSize: "2rem", color: "#4285F4" }}
        ></i>
        <span
          style={{
            marginLeft: "0.5rem",
            fontSize: "1.5rem",
            color: "#f0f4f8",
            fontWeight: "bold",
          }}
        >
          User Management
        </span>
      </div>
      <ul className={isOpen ? "navbar-links open" : "navbar-links"}>
        <li>
          <Link to="/mainhome" classname="active home a">
            Home
          </Link>
        </li>
        <li>
          <Link to="/adduser" classname="active home a">
            AddUser
          </Link>
        </li>
        <li>
          <Link to="/userdetails" classname="active home a">
            UserDetails
          </Link>
        </li>
        <li>
          <a href="/statistics">Statistics</a>
        </li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Nav;
