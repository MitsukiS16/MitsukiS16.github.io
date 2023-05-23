import React from "react";

import "./Countstuff.css";

const CountStuff = () => {
  return (
    <div class="main-count-stuff">
      <div class="count-assets">
        <img src="https://cdn-icons-png.flaticon.com/512/103/103414.png"></img>
        <p>
          423
          <br />
          <span>Assets</span>
        </p>
      </div>
      <div class="count-code-lines">
        <img src="https://cdn-icons-png.flaticon.com/512/6528/6528597.png"></img>
        <p>
          423
          <br />
          <span>Code Lines</span>
        </p>
      </div>
      <div class="count-work-hours">
        <img src="https://cdn-icons-png.flaticon.com/512/109/109613.png"></img>
        <p>
          423
          <br />
          <span>Work Hours</span>
        </p>
      </div>
      <div class="count-coffees">
        <img src="https://cdn-icons-png.flaticon.com/512/3127/3127336.png"></img>
        <p>
          423
          <br />
          <span>Coffees</span>
        </p>
      </div>
    </div>
  );
};

export default CountStuff;
