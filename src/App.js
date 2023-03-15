import "./App.css";
import Starter from "./pages/Starter";
import Game from "./pages/Game";
import End from "./pages/End";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState('cats');
  const [timer, setTimer] = useState('');
  const [cards, setCards] = useState('');
  const [correctNumberOfPairs, setCorrectNumberOfPairs] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    <div>
      <Starter />
      <Game />
      <End />
    </div>
  );
}

export default App;
