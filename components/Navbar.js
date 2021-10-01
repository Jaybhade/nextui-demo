import { Container, Grid, Row, Text, Switch, Tooltip } from "@nextui-org/react";
import React from "react";

const Navbar = () => {
  return (
    <Container fluid direction="row">
      <Row justify="center" align="center">
        <Text style={{ margin: "10px" }}>Home</Text>
        <Text style={{ margin: "10px" }}>Categories</Text>
        <Text style={{ margin: "10px" }}>Random</Text>
        <Tooltip text={"Toggle Dark Mode"} position="bottom" color="primary">
          <Switch checked={false} size="small" />
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
  );
};

export default Navbar;
