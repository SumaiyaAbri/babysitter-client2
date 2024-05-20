import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={{ backgroundColor: "black", padding: "7px", display: "flex", alignItems: "center" }}>
      <span style={{ color: "white", fontSize: "18px", marginRight: "10px" }}>Babysitter</span>
      <ul style={{ display: "flex", justifyContent: "flex-end", listStyle: "none" }}>
        <li style={{ margin: "0 120px" }}>
          <Link class="nav-link" to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        </li>
        <li style={{ margin: "0 120px" }}>
          <Link class="nav-link" to="/about" style={{ color: "white", textDecoration: "none" }}>About Us</Link>
        </li>
        <li style={{ margin: "0 120px" }}>
          <Link class="nav-link" to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
        </li>
        {/* <li style={{ margin: "0 120px" }}>
          <Link class="nav-link" to="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Nav;

