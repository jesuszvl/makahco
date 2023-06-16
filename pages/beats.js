import ReactGA from "react-ga4";
import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";

const NEXT_PUBLIC_ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

ReactGA.initialize(NEXT_PUBLIC_ANALYTICS_ID);
ReactGA.send({ hitType: "pageview", page: "/beats" });

export default function Beats() {
  return (
    <div className="container">
      <Head>
        <title>Makahco | Beats</title>
        <meta name="description" content="Creative Studio"></meta>
      </Head>
      <Navbar />
      <div className="content">
        <h3>Not ready yet... Listen to my fav jams in the meantime!</h3>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/2NzyWV9sT9rnKMncFHCkJG?utm_source=generator&theme=0"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
      <Footer />
    </div>
  );
}
