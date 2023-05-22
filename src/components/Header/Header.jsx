import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav class="navbar">
        <div class="navdiv">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Me</a>
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
    </header>
  );
};

export default Header;
