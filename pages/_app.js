import "../styles/globals.css";
import { Container, CssBaseline, Text } from "@nextui-org/react";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
      <Container
        fluid
        justify="center"
        align="center"
        style={{ margin: "20px" }}
      >
        <Text b h6 color="grey">
          Copyright © 2021 Jayesh Bhade. All rights reserved.
        </Text>
      </Container>
    </>
  );
}

export default MyApp;
