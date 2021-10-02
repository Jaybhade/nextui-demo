import React, { useContext } from "react";
import "../styles/globals.css";
import { Container, CssBaseline, Text } from "@nextui-org/react";
import { ThemeProvider, ThemeContext } from "../state/ThemeContext";
import Wrapper from "../components/Wrapper";

import Navbar from "../components/Navbar";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <Wrapper>
          <Navbar />
          <Component {...pageProps} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              color: "grey",
            }}
          >
            Copyright © 2021 Jayesh Bhade.
          </div>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
