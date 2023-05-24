import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import BarCount from "./components/BarCount/BarCount";
import MyLife from "./components/MyLife/MyLife";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Portfolio />
      <BarCount />
      <MyLife cooltext="ola">
        <p>i am a child</p>
      </MyLife>
      <Footer />
    </div>
  );
}

export default App;
