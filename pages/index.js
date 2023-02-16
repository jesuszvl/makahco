import ReactGA from "react-ga4";

import About from "../src/components/About/About";
import Footer from "../src/components/Footer/Footer";
import Gallery from "../src/components/Gallery/Gallery";
import Hero from "../src/components/Hero/Hero";
import Header from "../src/components/Header/Header";

ReactGA.initialize("G-4KN7RH6T6R");
ReactGA.send({ hitType: "pageview", page: "/" });

export default function Home() {
  return (
    <div className="home-content">
      <Header showMenu />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}
