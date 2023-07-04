import React from "react";
import Navbar from "../Navbar/Navbar";
import Name from "../Name/Name";
import Particle from "./Particle";

import "./Header.css";

const Header = () => {
  return (
    <>
      <Particle />
      <Navbar />
      <Name />
    </>
  );
};

export default Header;
