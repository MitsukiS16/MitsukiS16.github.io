import React from "react";

import "./Aboutme.css";

const Aboutme = () => {
  return (
    <section class="about-me">
      <h2>About me</h2>
      <div class="main-about-me">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/1924px-Person_icon_BLACK-01.svg.png"
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

export default Aboutme;
