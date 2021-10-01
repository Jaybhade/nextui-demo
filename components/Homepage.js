import React, { useState, useContext } from "react";
import { Grid, ExampleBlock, Text, Container } from "@nextui-org/react";
import Subscribe from "./subscribe";
import { ThemeContext } from "../state/ThemeContext";

const Homepage = () => {
  const [style, setStyle] = useState({ display: "none" });
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Container>
      <Grid.Container gap={2} justify="center">
        <Grid
          xs={12}
          md={9}
          style={{ background: `${darkMode ? "black" : "#F5F5F5"}` }}
        >
          <Container
            className="bg-faded-image"
            style={{
              height: "400px",
              borderRadius: "10px",
              background: "#DDC173",
              position: "relative",
              backgroundImage: `url("./image0.png")`,
            }}
            onMouseEnter={(e) => {
              setStyle({ display: "block" });
            }}
            onMouseLeave={(e) => {
              setStyle({ display: "none" });
            }}
          >
            <a>
              <Container
                className="bg-faded-image"
                style={{
                  position: "absolute",
                  left: "0px",
                  bottom: "0px",
                  borderRadius: "10px",
                  paddingTop: "10px",
                }}
              >
                <Text color="white" h4>
                  2 bright lights in the sky tonight
                </Text>
                <Text
                  h6
                  style={{ ...style, color: "white", animationDelay: "2s" }}
                >
                  You have the right to work, but never to the fruit of work,
                  You should never engage in action for the sake of reward, nor
                  should you long for inaction.
                </Text>
              </Container>
            </a>
          </Container>
        </Grid>
        <Grid
          xs={0}
          md={3}
          style={{ background: `${darkMode ? "black" : "#F5F5F5"}` }}
        >
          <Subscribe />
        </Grid>
        <Grid
          xs={6}
          md={3}
          style={{ background: `${darkMode ? "black" : "#F5F5F5"}` }}
        >
          <Container
            className="bg-faded-image"
            style={{
              height: "200px",
              borderRadius: "10px",
              position: "relative",
              background: "#DDC173",
              backgroundImage: `url("./image9.png")`,
            }}
          >
            <Container
              className="bg-faded-image"
              style={{
                position: "absolute",
                left: "0px",
                bottom: "0px",
                borderRadius: "10px",
                paddingTop: "10px",
              }}
            >
              <Text color="white" h5>
                2 bright lights in the sky tonight
              </Text>
            </Container>
          </Container>
        </Grid>
        <Grid
          xs={6}
          md={3}
          style={{ background: `${darkMode ? "black" : "#F5F5F5"}` }}
        >
          <Container
            className="bg-faded-image"
            style={{
              height: "200px",
              borderRadius: "10px",
              background: "#DDC173",
              position: "relative",
              backgroundImage: `url("./image8.png")`,
            }}
          >
            <Container
              className="bg-faded-image"
              style={{
                position: "absolute",
                left: "0px",
                bottom: "0px",
                borderRadius: "10px",
                paddingTop: "10px",
              }}
            >
              <Text color="white" h5>
                2 bright lights in the sky tonight
              </Text>
            </Container>
          </Container>
        </Grid>
        <Grid
          xs={6}
          md={3}
          style={{ background: `${darkMode ? "black" : "#F5F5F5"}` }}
        >
          <Container
            className="bg-faded-image"
            style={{
              height: "200px",
              borderRadius: "10px",
              background: "#DDC173",
              position: "relative",
              backgroundImage: `url("./image15.png")`,
            }}
          >
            <Container
              className="bg-faded-image"
              style={{
                position: "absolute",
                left: "0px",
                bottom: "0px",
                borderRadius: "10px",
                paddingTop: "10px",
              }}
            >
              <Text color="white" h5 background="black">
                2 bright lights in the sky tonight
              </Text>
            </Container>
          </Container>
        </Grid>
        <Grid
          xs={6}
          md={3}
          style={{ background: `${darkMode ? "black" : "#F5F5F5"}` }}
        >
          <Container
            className="bg-faded-image"
            style={{
              height: "200px",
              borderRadius: "10px",
              background: "#DDC173",
              position: "relative",
              backgroundImage: `url("./image10.png")`,
            }}
          >
            <Container
              className="bg-faded-image"
              style={{
                position: "absolute",
                left: "0px",
                bottom: "0px",
                borderRadius: "10px",
                paddingTop: "10px",
              }}
            >
              <Text color="white" h5 background="black">
                2 bright lights in the sky tonight
              </Text>
            </Container>
          </Container>
        </Grid>
        <Grid
          xs={13}
          md={6}
          style={{ background: `${darkMode ? "black" : "#F5F5F5"}` }}
        >
          <Container
            className="bg-faded-image"
            style={{
              height: "200px",
              borderRadius: "10px",
              background: "#DDC173",
              position: "relative",
              backgroundImage: `url("./image11.png")`,
            }}
          >
            <Container
              className="bg-faded-image"
              style={{
                position: "absolute",
                left: "0px",
                bottom: "0px",
                borderRadius: "10px",
                paddingTop: "10px",
              }}
            >
              <Text color="white" h5 background="black">
                2 bright lights in the sky tonight
              </Text>
            </Container>
          </Container>
        </Grid>
        <Grid
          xs={12}
          md={6}
          style={{ background: `${darkMode ? "black" : "#F5F5F5"}` }}
        >
          <Container
            className="bg-faded-image"
            style={{
              height: "200px",
              borderRadius: "10px",
              background: "#DDC173",
              position: "relative",
              backgroundImage: `url("./image12.png")`,
            }}
          >
            <Container
              className="bg-faded-image"
              style={{
                position: "absolute",
                left: "0px",
                bottom: "0px",
                borderRadius: "10px",
                paddingTop: "10px",
              }}
            >
              <Text color="white" h5 background="black">
                2 bright lights in the sky tonight
              </Text>
            </Container>
          </Container>
        </Grid>
        <Grid
          xs={12}
          md={0}
          style={{ background: `${darkMode ? "black" : "#F5F5F5"}` }}
        >
          <Subscribe />
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Homepage;
