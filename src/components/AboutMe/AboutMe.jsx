import React from "react";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section class="about-me">
      <h2>About me</h2>
      <div class="main-about-me">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQHdTSzEHO5PWQ/profile-displayphoto-shrink_200_200/0/1684400804162?e=1690416000&v=beta&t=DxaMZSmhpvyPnYfVB0alk_3sgv16cIZrJ9NH5ew9ipQ"
          alt="Clarisse Carvalho"
        />
        <div class="about-text">
          <h5>
            Developer <span>& Designer</span>
          </h5>
          <p>
            I am a passionate person with a strong interest in software
            development. I have experience with a variety of programming
            languages and technologies, including Java, C/C++, and C#. I'm
            always looking for ways to improve my skills and knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
