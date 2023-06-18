import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PageContainer = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Ape-pealing To The Creative You!"
        ></meta>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageContainer;
