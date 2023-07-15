import Head from "next/head";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const PageContainer = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content={description}></meta>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageContainer;
