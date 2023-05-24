import React from "react";

import "./BarCount.css";

const BarCount = () => {
  const counts = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/6528/6528597.png",
      count: 496890,
      title: "Code Lines",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/109/109613.png",
      count: 3625,
      title: "Work Hour",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3127/3127336.png",
      count: 512,
      title: "Coffee Cups",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2790/2790961.png",
      count: 363,
      title: "Series Days",
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
    </div>
  );
};

export default BarCount;
