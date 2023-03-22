import "./App.css";
import Game from "./pages/Game";
import { useState } from "react";
//import Countdown from "./components/Countdown";

function App() {
  //const [theme, setTheme] = useState("cats");
  //const [timer, setTimer] = useState(0);
  //const [cards, setCards] = useState("");
  //const [correctNumberOfPairs, setCorrectNumberOfPairs] = useState(0);
  //const [showInstructions, setShowInstructions] = useState(true);

  return (
    <div>
      <Game />
      {/* <Countdown timer={timer} setTimer={setTimer} /> */}
    </div>
  );
}

export default App;
