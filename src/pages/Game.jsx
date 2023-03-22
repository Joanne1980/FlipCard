import React, { useState } from "react";
import Grid from "../components/Grid";
import Header from "../components/Header.jsx";
//import Theme from "../components/Theme";
import Instructions from "../components/Instructions";

export default function Game() {
  const [theme, setTheme] = useState("");
  const [turnCounter, setTurnCounter] = useState(0);
  const [showHighScores, setShowHighScores] = React.useState(false);
  const [startTime, setStartTime] = useState("");
  const [highScore, setHighScore] = useState("");

  function playGame(chosenTheme) {
    setTheme(chosenTheme);
  }

  return (
    <>
      <Header showHighScores={showHighScores} setShowHighScores={setShowHighScores} startTime={startTime} highScore={highScore} />
      {/* <Theme theme={theme} setTheme={setTheme} playGame={playGame} /> */}
      <Instructions theme={theme} setTheme={setTheme} playGame={playGame} />
      <Grid
        turnCounter={turnCounter}
        setTurnCounter={setTurnCounter}
        theme={theme}
        setShowHighScores={setShowHighScores}
        startTime={startTime}
        setStartTime={setStartTime}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </>
  );
}
