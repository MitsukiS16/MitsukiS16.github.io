import React from "react";

import "./Portfolio.css";

const Portfolio = () => {
  const counts = [
    { date: "2021", title: "project 1", link: "link1", tags: "ola2" },
    { date: "2021", title: "project 2", link: "link1", tags: "ola2" },
    { date: "2022", title: "project 3", link: "link1", tags: "ola2" },
    { date: "2022", title: "project 4", link: "link1", tags: "ola2" },
    { date: "2023", title: "project 5", link: "link1", tags: "ola2" },
  ];

  return (
    <section class="about portfolio">
      <h2>Portfolio</h2>
      <div class="main-portfolio">
        {counts.map((item) => (
          <div class="project">
            <h5>
              <span>{item.date}</span>
              {item.title}
            </h5>
          </div>
        ))}

        {/* <div class="project">
          <p>project 2</p>
        </div>
        <div class="project">
          <p>project 3</p>
        </div>
        <div class="project">
          <p>project 4</p>
        </div>
        <div class="project">
          <p>project 5</p>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
