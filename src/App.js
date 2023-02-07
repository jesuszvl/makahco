import ReactGA from "react-ga4";

import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";

ReactGA.initialize("G-4KN7RH6T6R");
ReactGA.send({ hitType: "pageview", page: "/" });

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
