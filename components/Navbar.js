import { Container, Grid, Row, Text, Switch, Tooltip } from "@nextui-org/react";
import React, { useContext } from "react";
import { ThemeContext } from "../state/ThemeContext";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) theme.dispatch({ type: "LIGHTMODE" });
    else theme.dispatch({ type: "DARKMODE" });
  };

  return (
    <div style={{ background: `${darkMode ? "black" : "white"}` }}>
      <Container fluid direction="row">
        <Row justify="center" align="center">
          <Text style={{ margin: "10px" }} color={darkMode ? "white" : "black"}>
            Home
          </Text>
          <Text style={{ margin: "10px" }} color={darkMode ? "white" : "black"}>
            Categories
          </Text>
          <Text style={{ margin: "10px" }} color={darkMode ? "white" : "black"}>
            Random
          </Text>
          <Tooltip text={"Toggle Dark Mode"} position="bottom" color="primary">
            <Switch checked={false} onChange={() => onClick()} size="small" />
          </Tooltip>
        </Row>
        {/* <Grid.Container
        gap={2}
        justify="center"
        align="center"
        alignContent="center"
      >
        <Grid>
          <Text>Home</Text>
        </Grid>
        <Grid>
          <Text>Categories</Text>
        </Grid>
        <Grid>
          <Text>Random</Text>
        </Grid>
      </Grid.Container> */}
      </Container>
    </div>
  );
};

export default Navbar;
