import "aos/dist/aos.css";
import "../styles/globals.scss";
import Head from "next/head";

import useWindowSize from "../hooks/useWindowDimensions";
import { useEffect } from "react";

import AOS from "aos";

function App({ Component, pageProps }) {
  const { height, width } = useWindowSize();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "smooth",
      once: true,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover"
        />

        <title>K-Noon</title>
        <meta name="title" content="K-Noon" />
        <meta
          name="description"
          content="K-Noon is still a private project for now. Wait for the Launch"
        />
        <meta
          name="keywords"
          content="K-Noon, Font Icon, Web Icon, Icons, Icon, SVG Icon, SVG, Font, K-Noon"
        />

        <meta property="og:site_name" content="Revolicon" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://k-noon.tn/" />
        <meta
          property="og:title"
          content="K-Noon, Font Icon, Web Icon, Icons, Icon, SVG Icon, SVG, Font, K-Noon"
        />
        <meta
          property="og:description"
          content="K-Noon, Font Icon, Web Icon, Icons, Icon, SVG Icon, SVG, Font, K-Noon"
        />
        <meta property="og:image" content="/thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://k-noon.tn" />
        <meta property="twitter:title" content="K-Noon" />
        <meta
          property="twitter:description"
          content="K-Noon is still a private project for now. Wait for the Launch"
        />
        <meta property="twitter:image" content="/thumbnail.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
