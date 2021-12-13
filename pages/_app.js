import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import useSWR, { SWRConfig } from "swr";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/layout.css";
import Head from "next/head";

const theme = {
  colors: {
    primary: "#355C7D",
  },
};
function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>Codevolution</title>
        <meta name="dscription" content="Free tutorials on web development" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />;
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
