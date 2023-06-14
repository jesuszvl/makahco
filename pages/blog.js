import ReactGA from "react-ga4";
import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";

const NEXT_PUBLIC_ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

ReactGA.initialize(NEXT_PUBLIC_ANALYTICS_ID);
ReactGA.send({ hitType: "pageview", page: "/blog" });

export default function Blog() {
  return (
    <div className="container">
      <Head>
        <title>Makahco | Blog</title>
        <meta name="description" content="Creative Studio"></meta>
      </Head>
      <Navbar />
      <div className="content">✍🏽</div>
      <Footer />
    </div>
  );
}
