import React, { useEffect } from "react";
import ReactGA from "react-ga";

import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("4604497801", {
      debug: true,
    });
    ReactGA.pageview("/");
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
