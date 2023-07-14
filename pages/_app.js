import { initializeAnalytics } from "../src/utils/analytics";
import { outfit } from "../fonts";
import "../src/styles/globals.scss";

initializeAnalytics();

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={outfit.className}>
      <Component {...pageProps} />
    </main>
  );
}
