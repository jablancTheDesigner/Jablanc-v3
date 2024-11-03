import { useState, useEffect, lazy } from "react";
import "../styles/main.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
