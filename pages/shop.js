import ReactGA from "react-ga4";
import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";

const NEXT_PUBLIC_ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

ReactGA.initialize(NEXT_PUBLIC_ANALYTICS_ID);
ReactGA.send({ hitType: "pageview", page: "/shop" });

export default function Shop() {
  return (
    <div className="container">
      <Head>
        <title>Makahco | Shop</title>
        <meta name="description" content="Creative Studio"></meta>
      </Head>
      <Navbar />
      <div className="content">🛒</div>
      <Footer />
    </div>
  );
}
