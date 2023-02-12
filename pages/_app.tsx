import { useState, useEffect, lazy } from "react";
import "../styles/main.scss";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(true);

  useEffect( () => {
    setTimeout( () => {
      setLoaded(false);
    }, 1000)
  }, [])

  return loaded ? (
      <Loader />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
