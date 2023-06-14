import ReactGA from "react-ga4";
import Head from "next/head";
import About from "../src/components/About/About";
import Footer from "../src/components/Footer/Footer";
import Office from "../src/components/Gallery/Office";
import Hero from "../src/components/Hero/Hero";
import Contact from "../src/components/Contact/Contact";
import Navbar from "../src/components/Navbar/Navbar";

const NEXT_PUBLIC_ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

ReactGA.initialize(NEXT_PUBLIC_ANALYTICS_ID);
ReactGA.send({ hitType: "pageview", page: "/" });

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Makahco | Home</title>
        <meta name="description" content="Creative Studio"></meta>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Office />
      <Contact />
      <Footer />
    </div>
  );
}
