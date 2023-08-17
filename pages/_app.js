import "../src/styles/globals.scss";

import { Analytics } from "@vercel/analytics/react";

import { outfit } from "../fonts";

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={outfit.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
