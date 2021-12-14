import Footer from "../components/layout/Footer";
import styles from "../styles/About.module.scss";
import Head from "next/head";

export default function About() {
  return <div className="content">About</div>;
}

About.getLayout = function PageLayout(page) {
  return (
    <>
      <Head>
        <title>About Codevolution</title>
        <meta name="dscription" content="Free tutorials on web development" />
      </Head>
      {page}
      <Footer />
    </>
  );
};
