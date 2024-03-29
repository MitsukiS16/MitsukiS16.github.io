import React from "react";

import "./AboutMe.css";

const AboutMe = ({ aboutMeRef }) => {
  return (
    <div ref={aboutMeRef}>
      <h2>About me</h2>
      <div className="main-about-me">
        <img src="./Trollface.png" alt="Clarisse Carvalho" />
        <div className="about-text">
          <h5>
            Developer <span>& Designer</span>
          </h5>
          <p>
            I am a <span>passionate</span> software developer from Porto,
            Portugal. I have experience in various programming languages like
            Java, C/C++, and HTML/CSS. My goal is to constantly improve my
            skills and expand my knowledge in this field.
          </p>
          <br />
          <p>
            As a UI Designer and <span>FullStack</span> Developer, I find great
            joy in creating code that is not only <span>elegant</span> but also{" "}
            <span>efficient</span>. It brings me a sense of accomplishment and
            satisfaction when I can produce clean and well-designed solutions
            that not only look visually appealing but also provide{" "}
            <span>seamless</span> functionality.
          </p>
          <br />
          <p>
            When I'm not coding or designing, I enjoy practicing judo or
            painting.
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
