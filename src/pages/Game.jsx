import React, { useState } from "react";
import Grid from "../components/Grid";
import Header from "../components/Header.jsx";
import Theme from "../components/Theme";
import Instructions from "../components/Instructions";

export default function Game() {
  const [theme, setTheme] = useState("");

  return (
    <>
      <Header />
      <Theme theme={theme} setTheme={setTheme} />
      <Instructions />
      <Grid theme={theme} />
    </>
  );
}
