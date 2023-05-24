import React from "react";

import "./Portfolio.css";

const Portfolio = () => {
  const counts = [
    {
      date: "2021",
      title: "Web scraping - Yugioh",
      link: "https://github.com/MitsukiS16",
      tags: ["python"],
    },
    {
      date: "2022",
      title: "Website clube judo 82",
      link: "https://github.com/MitsukiS16",
      tags: ["javaScript", "css", "html"],
    },
    {
      date: "2022",
      title: "Game borberman",
      link: "https://github.com/MitsukiS16",
      tags: ["java", "gradle"],
    },
    {
      date: "2022",
      title: "App S.U.P - Calculator",
      link: "https://github.com/MitsukiS16",
      tags: ["flutter", "dart", "html", "ruby"],
    },
    {
      date: "2023",
      title: "game questionnarie",
      link: "https://github.com/MitsukiS16",
      tags: ["c#", "ShaderLab"],
    },
    {
      date: "2023",
      title: "Website ticket system",
      link: "https://github.com/MitsukiS16",
      tags: ["php", "css", "javaScript"],
    },
  ];
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="about portfolio">
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
    </section>
  );
};

export default Portfolio;
