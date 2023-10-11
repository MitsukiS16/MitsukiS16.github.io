import React from "react";
import "./MyLife.css";

const MyLife = () => {
  function redirectToPage(url) {
    window.location.href = url;
  }

  return (
    <>
      <h2>My Life</h2>
      <div className="main-my-life">
        <div className="specific-stuff">
          <div
            className="div-stuff div-stuff-1"
            onClick={() => redirectToPage("https://github.com/MitsukiS16")}
          >
            <h5>Stats</h5>
          </div>
          <div
            className="div-stuff div-stuff-2"
            onClick={() => redirectToPage("https://github.com/MitsukiS16")}
          >
            <h5>Travel</h5>
          </div>
          <div
            className="div-stuff div-stuff-3"
            onClick={() => redirectToPage("https://github.com/MitsukiS16")}
          >
            <h5>Blog</h5>
          </div>
          <div
            className="div-stuff div-stuff-4"
            onClick={() => redirectToPage("https://github.com/MitsukiS16")}
          >
            <h5>Cv</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyLife;
