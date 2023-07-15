import "../src/styles/globals.scss";

import { outfit } from "../fonts";
import { initializeAnalytics } from "../src/utils/analytics";

initializeAnalytics();

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={outfit.className}>
      <Component {...pageProps} />
    </main>
  );
}
