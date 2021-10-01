import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Container,
  Button,
  Input,
  Spacer,
  Text,
  Link,
  Tooltip,
} from "@nextui-org/react";

import Homepage from "../components/Homepage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Container fluid>
        <Container justify="center" align="center">
          <Tooltip text={"Hi! There"} position="top" color="primary">
            <Text h1 b style={{ fontFamily: "Ephesis, cursive" }}>
              Bubble
            </Text>
          </Tooltip>
        </Container>
      </Container>
      <Homepage />
    </div>
  );
}
