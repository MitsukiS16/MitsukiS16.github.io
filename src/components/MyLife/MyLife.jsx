import React from "react";

import "./MyLife.css";

const MyLife = (props) => {
  console.log(props.cooltext);
  return (
    <div>{props.children}</div>
    // <section class="about about-my-life">
    //   <h2>My Life</h2>
    //   <div class="main-about-my-life">
    //     <p>olaa</p>
    //   </div>
    // </section>
  );
};
export default MyLife;
