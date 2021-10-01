import { Button, Checkbox, Container, Input, Text } from "@nextui-org/react";
import React from "react";

const Subscribe = () => {
  return (
    <Container
      style={{
        height: "400px",
        borderRadius: "10px",
        background: "#FFFFFF",
        backgroundImage: `url("./image.png")`,
        padding: "10px",
      }}
      direction="row"
      justify="space-evenly"
      align="center"
    >
      <Container style={{ marginTop: "40px", marginBottom: "30px" }}>
        <Text h4 b color="white">
          {" "}
          Subscribe to our Mailing List{" "}
        </Text>
      </Container>
      <Container style={{ marginTop: "10px", marginBottom: "30px" }}>
        <Input
          labelPlaceholder="First Name"
          status="default"
          width="80%"
          color="white"
        />
      </Container>
      <Container style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Input
          labelPlaceholder="E-Mail Address"
          status="default"
          width="80%  "
          color="white"
        />
      </Container>
      <Container>
        <Checkbox checked={false} size="mini">
          <Text color="white">
            Agree to our <a>Privacy Policy</a>
          </Text>
        </Checkbox>
      </Container>
      <Container>
        <Button shadow color="secondary" auto>
          Subscribe
        </Button>
      </Container>
    </Container>
  );
};

export default Subscribe;
