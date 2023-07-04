import React from "react";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <h2>About me</h2>
      <div className="main-about-me">
        <img src="sissi.png" alt="Clarisse Carvalho" />
        <div className="about-text">
          <h5>
            Developer <span>& Designer</span>
          </h5>
          <p>
            I am a <strong>passionate</strong> person with a strong interest in
            software development. I have experience with a
            <strong> variety</strong> of programming languages and technologies,
            including Java, C/C++, and C#. I'm always looking for ways to
            <strong> improve</strong> my skills and knowledge.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
