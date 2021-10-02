import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useContext, useReducer } from "react";
import { ThemeContext } from "../state/ThemeContext";
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
  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div
      className={{
        ...styles.container,
        background: `${darkMode ? "black" : "#F5F5F5"}`,
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tooltip text={"Hi! There"} position="top" color="primary">
            <Text
              h1
              b
              style={{ fontFamily: "Ephesis, cursive" }}
              color={darkMode ? "white" : "black"}
            >
              Bubble
            </Text>
          </Tooltip>
        </div>
      </div>
      <Homepage />
    </div>
  );
}
