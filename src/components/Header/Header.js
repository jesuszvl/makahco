import Head from "next/head";
import Link from "next/link";
import MenuIcon from "../../icons/MenuIcon";
import styles from "./Header.module.scss";

export default function Header({ showMenu }) {
  return (
    <>
      <Head>
        <title>MAKAHCO</title>
        <meta name="description" content="frontbudget" />
        <link
          href="https://fonts.cdnfonts.com/css/instagram-sans-condensed"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/outfit"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/monesque"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/makahco.png" />
      </Head>

      <div className={styles.container}>
        {showMenu && (
          <div className={styles.menu}>
            <MenuIcon />
          </div>
        )}

        <div className={styles.header}>
          <Link href="/">
            <h1 className={styles.title}>MAKAHCO</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
