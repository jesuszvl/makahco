import Head from "next/head";

import styles from "./PageContainer.module.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PageContainer = ({ children, title }) => {
  return (
    <div className={styles["page-container"]}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Creative Studio"></meta>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageContainer;
