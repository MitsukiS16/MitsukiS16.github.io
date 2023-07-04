import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import BarCount from "./components/CountStuff/BarCount";
import MyLife from "./components/MyLife/MyLife";
import Footer from "./components/Footer/Footer";
import { useEffect, useRef } from "react";

function App() {
  const refHome = useRef(null);
  const refAboutMe = useRef(null);
  const refPortfolio = useRef(null);
  const refMyLife = useRef(null);
  const refContacts = useRef(null);
  const ref1 = useRef(null);
  console.log(ref1);
  useEffect(() => {
    console.log(ref1.current.scrollTop);
  }, []);

  return (
    <div ref={ref1}>
      <header>
        <Header ref={refHome} />
      </header>
      <section className="about about-me">
        <AboutMe ref={refAboutMe} />
      </section>
      <section className="about portfolio">
        <Portfolio ref={refPortfolio} />
      </section>
      
      <BarCount />
      <section className="about my-life">
        <MyLife ref={refMyLife} />
      </section>
      <footer>
        <Footer ref={refContacts} />
      </footer>
    </div>
  );
}

export default App;
