import "../styles/globals.css";
import useSWR, { SWRConfig } from "swr";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
