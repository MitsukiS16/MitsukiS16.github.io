import React from "react";
import counts from "../../assets/db/portfolio.json";

import "./Portfolio.css";

const Portfolio = () => {
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <h2>Portfolio</h2>
      <div className="main-portfolio">
        {counts.map((item) => (
          <div
            className="specific-project"
            key={item.title}
            onClick={() => openLink(item.link)}
          >
            <div className="specific-project-main">
              <div className="specific-project-date">
                <p>{item.date}</p>
              </div>
              <div className="specific-project-title">
                <h5>{item.title}</h5>
              </div>
            </div>
            <div className="specific-project-tags">
              {item.tags.map((tag, index) => (
                <p className="tag" key={index}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
