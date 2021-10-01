import "../styles/globals.css";
import { CssBaseline } from "@nextui-org/react";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
