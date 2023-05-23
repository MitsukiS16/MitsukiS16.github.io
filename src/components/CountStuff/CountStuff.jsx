import React from "react";

import "./Countstuff.css";

const CountStuff = () => {
  const counts = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/6528/6528597.png",
      count: 496890,
      title: "Code Lines",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/6528/6528597.png",
      count: 496890,
      title: "Code Lines",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/6528/6528597.png",
      count: 496890,
      title: "Code Lines",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/6528/6528597.png",
      count: 496890,
      title: "Code Lines",
    },
  ];

  return (
    <div class="main-count-stuff">
      {counts.map((item) => (
        <div class="count-stuff">
          <img src={item.img}></img>
          <p>
            {item.count}
            <br />
            <span>{item.title}</span>
          </p>
        </div>
      ))}

      {/* <div class="count-stuff">
        <img src="https://cdn-icons-png.flaticon.com/512/109/109613.png"></img>
        <p>
          3625
          <br />
          <span>Work Hours</span>
        </p>
      </div>
      <div class="count-stuff">
        <img src="https://cdn-icons-png.flaticon.com/512/3127/3127336.png"></img>
        <p>
          510
          <br />
          <span>Coffee Cups</span>
        </p>
      </div>
      <div class="count-stuff">
        <img src="https://cdn-icons-png.flaticon.com/512/2790/2790961.png"></img>
        <p>
          363
          <br />
          <span>Series Days</span>
        </p>
      </div> */}
    </div>
  );
};

export default CountStuff;
