import React from "react";

import "./MyLife.css";

const MyLife = () => {
  return (
    <section className="about my-life">
      <h2>My Life</h2>
      <div className="main-my-life">
        <div className="specific-stuff">
          <div className="div-stuff div-stuff-1">
            <h5>Stats</h5>
          </div>
          <div className="div-stuff div-stuff-2">
            <h5>Travel</h5>
          </div>
          <div className="div-stuff div-stuff-3">
            <h5>Blog</h5>
          </div>
          <div className="div-stuff div-stuff-4">
            <h5>Cv</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyLife;
