import { initializeAnalytics } from "../src/utils/analytics";
import { Outfit } from "next/font/google";
import "../src/styles/globals.scss";

const outfit = Outfit({
  subsets: ["latin"],
});

initializeAnalytics();

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={outfit.className}>
      <Component {...pageProps} />
    </main>
  );
}
