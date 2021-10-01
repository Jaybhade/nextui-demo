import React, { useContext } from "react";
import { ThemeContext } from "../state/ThemeContext";

const Wrapper = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{ background: `${darkMode ? "black" : "white"}` }}>
      {props.children}
    </div>
  );
};

export default Wrapper;
