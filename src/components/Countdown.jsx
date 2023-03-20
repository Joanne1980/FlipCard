import React from "react";
import { useEffect, useState } from "react";
import getCurrentDate from "../utils/Date";
import Date from "../utils/Date";

/*
To use this, call this component in a parent component
<Countdown timer={timer} setTimer={setTimer} /> 
*/

export default function Countdown({ timer, setTimer }) {
  const [highScore, setHighScore] = useState([]);

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

    //console.log("minutes:" + minutes)

    //console.log("seconds:" + seconds)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem(getCurrentDate(), JSON.stringify(highScore));
  }, [highScore]);

  if (seconds === 5) {
    console.log("if timer check");
    setHighScore();
  }

  // to do: Need to format this better
  return (
    <>
      <div>
        Minutes: {minutes}
        <br />
        Seconds: {seconds}
      </div>
      {getCurrentDate()}
    </>
  );
}
