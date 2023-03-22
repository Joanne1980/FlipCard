import React from "react";
import { useEffect } from "react";

/*
To use this, call this component in a parent component
<Countdown timer={timer} setTimer={setTimer} /> 
*/

export default function Countdown({
  turnCounter,
  setShowHighScores,
  startTime,
  highScore,
  setHighScore,
  theme,
}) {
  // Format the seconds to display as minutes and seconds

  /* Dividing the timer by 60 gives us total minutes.
    it is then floored (rounded down)
    i.e. without floor, 130/60 = 2.16 (but we only want whole mintues as it looks better), 
    after flooring, the value is 2;
  */
  //let minutes = Math.floor(timer / 60);

  /* Using the remainder operator on timer divided by 60,
      gives us the seconds between 0-60;
      i.e. 130 % 60 = 10
      i.e. 30 % 60 = 30 
  */
  //let seconds = timer % 60;

  useEffect(() => {
    if (turnCounter === 10) {
      const now = new Date();
      const seconds = (now.getTime() - startTime.getTime()) / 1000;

      setHighScore(seconds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turnCounter]);

  useEffect(() => {
    //console.log("highScore has been set!:" + highScore)

    //Initialise an empty array to store the scores as array elements
    // We are going to push an array of objects to our localStorage
    let scores = [];

    let scoreToSubmit = {
      date: startTime.toLocaleString(),
      score: highScore,
      theme: theme,
    };

    if (highScore !== "") {
      console.log("High score has been set!" + highScore);
      // If the localStorage item 'scores' is not empty then we want to fetch the current scores and append to them
      if (localStorage.getItem("scores") !== null) {
        // fetch the current scores string and convert it into an array
        scores = JSON.parse(localStorage.getItem("scores"));

        // Push the new score record to the scores array
        scores.push(scoreToSubmit);

        // Save the updated scores to localStorage
        localStorage.setItem("scores", JSON.stringify(scores));

        // call the processHighScore function for re-sorting the high scores
        processHighScore();
      }
      // If the localStorage item 'scores' is empty then we want just need to append to it
      else {
        // Push the new score as an array element
        scores.push(scoreToSubmit);

        // store the scores array as a string in local storage item 'scores'
        localStorage.setItem("scores", JSON.stringify(scores));

        // call the processHighScore function for re-sorting the high scores
        processHighScore();
      }
      setShowHighScores(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highScore]);

  // A function to sort the high scores and re-save
  const processHighScore = () => {
    // Create a scores array based on the data within 'scores' localStorage item
    let scores = JSON.parse(localStorage.getItem("scores"));
    //console.log(scores)

    // use the array.sort function but override it to change the order to High > Low
    scores.sort(function (value1, value2) {
      return value1.score - value2.score;
    });

    //console.log(scores)
    // re-save the 'scores' localStorage item to the newly sorted array
    localStorage.setItem("scores", JSON.stringify(scores));
  };

  // to do: Need to format this better
  return <></>;
}
