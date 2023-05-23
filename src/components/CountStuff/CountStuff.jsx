import React from "react";

import "./Countstuff.css";

const CountStuff = () => {
  return (
    <div class="main-count-stuff">
      <div class="count-code-lines">
        <img src="https://cdn-icons-png.flaticon.com/512/6528/6528597.png"></img>
        <p>
          496890
          <br />
          <span>Code Lines</span>
        </p>
      </div>
      <div class="count-work-hours">
        <img src="https://cdn-icons-png.flaticon.com/512/109/109613.png"></img>
        <p>
          3625
          <br />
          <span>Work Hours</span>
        </p>
      </div>
      <div class="count-coffees">
        <img src="https://cdn-icons-png.flaticon.com/512/3127/3127336.png"></img>
        <p>
          510
          <br />
          <span>Coffees</span>
        </p>
      </div>
      <div class="count-serie-hours">
        <img src="https://cdn-icons-png.flaticon.com/512/2790/2790961.png"></img>
        <p>
          363
          <br />
          <span>Series Days</span>
        </p>
      </div>
    </div>
  );
};

export default CountStuff;
