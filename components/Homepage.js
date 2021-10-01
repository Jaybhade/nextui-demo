import React from "react";
import { Grid, ExampleBlock, Text, Container } from "@nextui-org/react";
import Subscribe from "./subscribe";

const Homepage = () => {
  return (
    <Container>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} md={9} style={{ background: "#F5F5F5" }}>
          <Container
            style={{
              height: "400px",
              borderRadius: "10px",
              background: "#DDC173",
              backgroundImage: `url("./image0.png")`,
            }}
          ></Container>
        </Grid>
        <Grid xs={0} md={3} style={{ background: "#F5F5F5" }}>
          <Subscribe />
        </Grid>
        <Grid xs={6} md={3} style={{ background: "#F5F5F5" }}>
          <Container
            style={{
              height: "200px",
              borderRadius: "10px",
              background: "#DDC173",
              backgroundImage: `url("./image9.png")`,
            }}
          ></Container>
        </Grid>
        <Grid xs={6} md={3} style={{ background: "#F5F5F5" }}>
          <Container
            style={{
              height: "200px",
              borderRadius: "10px",
              background: "#DDC173",
              backgroundImage: `url("./image8.png")`,
            }}
          ></Container>
        </Grid>
        <Grid xs={6} md={3} style={{ background: "#F5F5F5" }}>
          <Container
            style={{
              height: "200px",
              borderRadius: "10px",
              background: "#DDC173",
              backgroundImage: `url("./image15.png")`,
            }}
          ></Container>
        </Grid>
        <Grid xs={6} md={3} style={{ background: "#F5F5F5" }}>
          <Container
            style={{
              height: "200px",
              borderRadius: "10px",
              background: "#DDC173",
              backgroundImage: `url("./image10.png")`,
            }}
          ></Container>
        </Grid>
        <Grid xs={13} md={6} style={{ background: "#F5F5F5" }}>
          <Container
            style={{
              height: "200px",
              borderRadius: "10px",
              background: "#DDC173",
              backgroundImage: `url("./image11.png")`,
            }}
          ></Container>
        </Grid>
        <Grid xs={12} md={6} style={{ background: "#F5F5F5" }}>
          <Container
            style={{
              height: "200px",
              borderRadius: "10px",
              background: "#DDC173",
              backgroundImage: `url("./image12.png")`,
            }}
          ></Container>
        </Grid>
        <Grid xs={12} md={0} style={{ background: "#F5F5F5" }}>
          <Subscribe />
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Homepage;
