import React from "react";
import { useEffect, useState } from "react";
import getCurrentDate from "../utils/Date";
import Date from "../utils/Date";

/*
To use this, call this component in a parent component
<Countdown timer={timer} setTimer={setTimer} /> 
*/

export default function Countdown({ timer, setTimer, turnCounter, setShowHighScores }) {
  const [highScore, setHighScore] = useState("");

  // Format the seconds to display as minutes and seconds

  /* Dividing the timer by 60 gives us total minutes.
    it is then floored (rounded down)
    i.e. without floor, 130/60 = 2.16 (but we only want whole mintues as it looks better), 
    after flooring, the value is 2;
  */
  let minutes = Math.floor(timer / 60);

  /* Using the remainder operator on timer divided by 60,
      gives us the seconds between 0-60;
      i.e. 130 % 60 = 10
      i.e. 30 % 60 = 30 
  */
  let seconds = timer % 60;

  useEffect(() => {
    // setInterval to run every second.
    const interval = setInterval(() => {
      // Update the state of setTimer
      setTimer((timer) => timer + 1);

      //console.log(timer)
    }, 1000);

    //const counter = 10; // This will be when all cards are matched (from Grid.jsx)
    //
  }, []);

  useEffect(() => {

    if (turnCounter === 10) {
      setHighScore(timer);
    }
    
  }, [turnCounter]);
  
  useEffect(()=> {
    //console.log("highScore has been set!:" + highScore)


    //Initialise an empty array to store the scores as array elements
    // We are going to push an array of objects to our localStorage
    let scores = []

    let scoreToSubmit = {
      date: getCurrentDate(),
      score: highScore
    }

    if (highScore !== "") {
      console.log("High score has been set!"+highScore)
      // If the localStorage item 'scores' is not empty then we want to fetch the current scores and append to them
      if (localStorage.getItem('scores') !== null) {

        // fetch the current scores string and convert it into an array
        scores = JSON.parse(localStorage.getItem('scores'))

        // Push the new score record to the scores array
        scores.push(scoreToSubmit)

        // Save the updated scores to localStorage
        localStorage.setItem('scores', JSON.stringify(scores))

        // call the processHighScore function for re-sorting the high scores
        processHighScore()
      }
      // If the localStorage item 'scores' is empty then we want just need to append to it
      else {
        // Push the new score as an array element
        scores.push(scoreToSubmit)

        // store the scores array as a string in local storage item 'scores'
        localStorage.setItem('scores', JSON.stringify(scores))

        // call the processHighScore function for re-sorting the high scores
        processHighScore()
      }
      setShowHighScores(true);
    }    

  },[highScore])

  // A function to sort the high scores and re-save
const processHighScore = () => {


  // Create a scores array based on the data within 'scores' localStorage item
  let scores = JSON.parse(localStorage.getItem('scores'))
  //console.log(scores)

  // use the array.sort function but override it to change the order to High > Low
  scores.sort(function (value1, value2) {

      return value1.score - value2.score

  })

  //console.log(scores)
  // re-save the 'scores' localStorage item to the newly sorted array
  localStorage.setItem('scores', JSON.stringify(scores))

}

  // to do: Need to format this better
  return (
    <></>
  );
}
