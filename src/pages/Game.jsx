import React, { useState } from "react";
import Grid from "../components/Grid";
import Header from "../components/Header.jsx";
import Theme from "../components/Theme";
import Instructions from "../components/Instructions";

export default function Game() {
  const [theme, setTheme] = useState("");
  const [turnCounter, setTurnCounter] = useState(0);
  const [showHighScores, setShowHighScores] = React.useState(false);

  function playGame(chosenTheme) {
    setTheme(chosenTheme);
  }

  return (
    <>
      <Header showHighScores={showHighScores} setShowHighScores={setShowHighScores}/>
      {/* <Theme theme={theme} setTheme={setTheme} playGame={playGame} /> */}
      <Instructions theme={theme} setTheme={setTheme} playGame={playGame} />
      <Grid
        turnCounter={turnCounter}
        setTurnCounter={setTurnCounter}
        theme={theme}
        setShowHighScores={setShowHighScores}
      />
    </>
  );
}
