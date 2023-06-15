import "../src/styles/globals.scss";

import { outfit } from "../fonts";

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={outfit.className}>
      <Component {...pageProps} />
    </main>
  );
}
