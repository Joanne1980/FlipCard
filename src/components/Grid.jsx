import React, { useState, useEffect } from "react";
import ReactBoxFlip from "react-box-flip";
import Countdown from "./Countdown";
import axios from "axios";

//X-RapidAPI-Key':
//'6ad8abfd77mshf2eeda7dbb2a73ep178573jsne1cbeaa1df4e',

//Unsplash API access key
//CY-iFrJXI04rurx8QvIQCDecckeftZv1kL501Z-hrUw

//Unsplash API Secret key
//U9QL51xlhb71F5eVTpwuwCJ8tXGOfwQhKq7TWT3HAE8

export default function Grid({ theme, turnCounter, setTurnCounter,setShowHighScores, startTime, setStartTime,highScore, setHighScore }) {
  const image = theme;
  const clientId = "CY-iFrJXI04rurx8QvIQCDecckeftZv1kL501Z-hrUw";

  const [cardsContent, setCardsContent] = useState([]);

  // Keeping track of which two cards the user has picked
  const [cardsPicked, setCardsPicked] = useState([]);

  const [gameLoaded, setGameLoaded] = useState(false);

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=" +
    image +
    "&client_id=" +
    clientId +
    "&orientation=squarish";

  useEffect(() => {
    let cards = [];

    if (image) {
      axios.get(url).then((response) => {
        for (let i = 0; i < 10; i++) {
          const card = {
            pair: i,
            image: response.data.results[i].urls.small,
            isMatched: false,
            isFlipped: false,
          };
          cards.push(card);
          cards.push({ ...card });
        }
        cards = cards.sort(() => Math.random() - 0.5);
        setCardsContent(cards);
        setGameLoaded(true);
      });
    }
  }, [theme]);

  useEffect(() => {
    if (gameLoaded) {
      console.log("Game loaded");
      setTimeout(() => {
        console.log("timeout");

        const cardsContentCopy = [...cardsContent];
        //console.log(cardsContentCopy)
        cardsContentCopy.forEach((element, i) => {
          cardsContentCopy[i].isFlipped = true;
        });

        //console.log(cardsContentCopy)
        setCardsContent(cardsContentCopy);
      }, 2000);
    }
    const date = new Date();
    setStartTime(date);
  }, [gameLoaded]);

  function handleClick(i) {
    const cardsContentCopy = [...cardsContent];


    if (cardsPicked.length !== 2){

      // We only want to flip the card over if it's not matched
      if (!cardsContentCopy[i].isMatched) {
        console.log("Is not matched!");

        // Flip the card
        cardsContentCopy[i].isFlipped = !cardsContentCopy[i].isFlipped;
        setCardsContent(cardsContentCopy);

        let updateFlipped = cardsPicked;
        updateFlipped.push(i);
        setCardsPicked(updateFlipped);

        // If the player has selected two cards, then check the pairs.
        // Delay added so flip back is not instant
        if (cardsPicked.length === 2) {
          setTimeout(() => {
            checkCards();
          }, 1000);
        }
      } //
    }
  }

  // Logic to check if cards are matched.
  const checkCards = () => {
    console.log("cards checked");
    //console.log(cardsPicked)

    // Assign variables to both cards for clearer code
    const card1 = cardsPicked[0];
    const card1Pair = cardsContent[card1].pair;

    const card2 = cardsPicked[1];
    const card2Pair = cardsContent[card2].pair;

    console.log("card 1 pair: " + card1Pair);
    console.log("card 2 pair: " + card2Pair);
    //

    const cardsContentCopy = [...cardsContent];

    // If the cards are matched, mark them both as matched
    if (card1Pair === card2Pair) {
      console.log("Pairs are matched");

      // Set cards isMatched to true
      cardsContentCopy[card1].isMatched = true;
      cardsContentCopy[card2].isMatched = true;
      // Update cards content
      setCardsContent(cardsContentCopy);
      // Increase the game count
      setTurnCounter(turnCounter + 1);
      // isFlipped: false
      // isMatched: "false"
    } else {
      //If cards are not matched, flip them back over.
      console.log("Pairs are not matched, retry!");
      // Flip cards over
      cardsContentCopy[card1].isFlipped = true;
      cardsContentCopy[card2].isFlipped = true;

      // Update cards content
      setCardsContent(cardsContentCopy);
    }

    // console.log(cardsContent)

    // Reset the cards picked to empty
    setCardsPicked([]);
  };

  return (
    <>
      <div className="flex flex-col items-center bg-alt-800 h-[calc(100vh-70px)] p-5">
        <div
          className={
            theme
              ? "bg-secondary-600 flex rounded-lg w-full sm:w-4/5 lg:w-1/2 justify-center text-center pt-4 pb-1 mb-5 mt-5"
              : "bg-secondary-600 flex rounded-lg w-full sm:w-4/5 lg:w-1/2 justify-center text-center  mb-5 mt-5"
          }
        >
          <h1 className="text-alt-100 uppercase text-6xl ">{theme}</h1>
        </div>

        <Countdown
          turnCounter={turnCounter}
          setShowHighScores={setShowHighScores}
          startTime={startTime}
          highScore={highScore}
          setHighScore={setHighScore}
          theme={theme}
        />
        {/* <div className="gap-y-[25vw] gap-x-[5%] w-full grid gap-y-32 gap-x-2 md:gap-y-40 md:gap-x-2 grid-rows-5 grid-cols-4 md:grid-rows-4 md:grid-cols-5"> */}

        <div className="grid w-full sm:w-4/5 lg:w-1/2 xl:w-92 gap-y-[23vw] gap-x-[1vw] sm:gap-y-[19vw] sm:gap-x-[1vw] md:gap-y-[15.2vw] md:gap-x-[1vw] lg:gap-y-[10vw] lg:gap-x-[1vw] grid-rows-5 grid-cols-4 md:grid-rows-4 md:grid-cols-5">
          {cardsContent.map((card, i) => (
            <div
              key={i}
              data-cardid={i}
              data-cardpair={card.pair}
              className=""
              onClick={(e) => handleClick(i)}
            >
              <ReactBoxFlip isFlipped={card.isFlipped}>
                <div
                  className={
                    card.isMatched
                      ? "border-green-500 object-cover border-2"
                      : "border-red-600 object-cover border-2"
                  }
                >
                  <img
                    className="object-cover aspect-square"
                    src={card.image}
                    alt=""
                  />
                </div>

                <div className="object-cover ">
                  <img src="card2.png" className="aspect-square" />
                </div>
              </ReactBoxFlip>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between">
          <ul>
            <li>
              <i></i>
              <span>GitHub</span>
            </li>
            <li>By Sarah, Gurdeep, Sophie & Seamus</li>
          </ul>
        </div>
      </div>
    </>
  );
}
