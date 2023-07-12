import React, { useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navdiv">
        <ul className="navbar-ul">
          <li>
            <a>About Me</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>My Life</a>
          </li>
          <li>
            <a>Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
