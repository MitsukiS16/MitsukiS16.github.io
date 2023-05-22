import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <section className="common-section blue"></section>
      <section className="common-section yellow"></section>
      <section className="common-section orange"></section>
      <Footer />
    </div>
  );
}

export default App;
