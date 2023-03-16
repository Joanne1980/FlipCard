import "./App.css";
import Starter from "./pages/Starter";
import Game from "./pages/Game";
import End from "./pages/End";
import { useState } from "react";
import Countdown from './components/Countdown'


function App() {

  const [theme, setTheme] = useState('cats');
  const [timer, setTimer] = useState(0);
  const [cards, setCards] = useState('');
  const [correctNumberOfPairs, setCorrectNumberOfPairs] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    <div>
      <Starter />
      <Game />
      <End />
      <Countdown timer={timer} setTimer={setTimer} />
    </div>
  );
}

export default App;
