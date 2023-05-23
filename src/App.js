import Header from "./components/Header/Header";
import Aboutme from "./components/Aboutme/Aboutme";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Aboutme />
      <section className="common-section yellow"></section>
      <section className="common-section orange"></section>
      <Footer />
    </div>
  );
}

export default App;
