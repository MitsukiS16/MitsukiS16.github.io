import React from "react";

import Navbar from "../Navbar/Navbar";
import Name from "../Name/Name";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <Navbar />
      <Name />
    </header>
  );
};

export default Header;
