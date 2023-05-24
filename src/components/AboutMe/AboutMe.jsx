import React from "react";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about about-me">
      <h2>About me</h2>
      <div className="main-about-me">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQHdTSzEHO5PWQ/profile-displayphoto-shrink_200_200/0/1684400804162?e=1690416000&v=beta&t=DxaMZSmhpvyPnYfVB0alk_3sgv16cIZrJ9NH5ew9ipQ"
          alt="Clarisse Carvalho"
        />
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
    </section>
  );
};

export default AboutMe;
