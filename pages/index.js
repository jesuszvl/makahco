import ReactGA from "react-ga4";

import About from "../src/components/About/About";
import Footer from "../src/components/Footer/Footer";
import Office from "../src/components/Gallery/Office";
import Hero from "../src/components/Hero/Hero";
import Header from "../src/components/Header/Header";
import People from "../src/components/Gallery/People";

const NEXT_PUBLIC_ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

ReactGA.initialize(NEXT_PUBLIC_ANALYTICS_ID);
ReactGA.send({ hitType: "pageview", page: "/" });

export default function Home() {
  return (
    <div className="home-content">
      <Header showMenu />
      <Hero />
      <About />
      <Office />
      <People />
      <Footer />
    </div>
  );
}
