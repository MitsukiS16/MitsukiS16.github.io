import Header from "./components/Header/Header";
import Aboutme from "./components/Aboutme/Aboutme";
import CountStuff from "./components/CountStuff/CountStuff";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Aboutme />
      <CountStuff />
      <section className="common-section orange"></section>
      <Footer />
    </div>
  );
}

export default App;
