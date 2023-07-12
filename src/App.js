import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import BarCount from "./components/CountStuff/BarCount";
import MyLife from "./components/MyLife/MyLife";
import Footer from "./components/Footer/Footer";
import { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="about about-me">
        <AboutMe />
      </section>
      <section className="about portfolio">
        <Portfolio />
      </section>

      <BarCount />
      <section className="about my-life">
        <MyLife />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
