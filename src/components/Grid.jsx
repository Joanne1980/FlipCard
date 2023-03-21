import React, { useState, useEffect } from "react";
import ReactBoxFlip from "react-box-flip";
import Countdown from "./Countdown";
import axios from "axios";

//DeepL Translation API access key
//550684ab-ec02-1be9-afdc-c29fa7cde635:fx

//Unsplash API access key
//CY-iFrJXI04rurx8QvIQCDecckeftZv1kL501Z-hrUw

//Unsplash API Secret key
//U9QL51xlhb71F5eVTpwuwCJ8tXGOfwQhKq7TWT3HAE8

export default function Grid({ theme }) {
  const image = theme;
  const clientId = "CY-iFrJXI04rurx8QvIQCDecckeftZv1kL501Z-hrUw";

  const [timer, setTimer] = useState(0);

  const [cardsContent, setCardsContent] = useState([]);

  // Keeping track of which two cards the user has picked
  const [cardsPicked, setCardsPicked] = useState([]);

  const [turnCounter, setTurnCounter] = useState(0);

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
  }, [gameLoaded]);

  function handleClick(i) {
    const cardsContentCopy = [...cardsContent];

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

  useEffect(() => {
    console.log("Game count is: " + turnCounter);
  }, [turnCounter]);

  return (
    <>
      <div className="flex flex-col items-center bg-alt-800 min-h-screen p-5">
        <h1 className="text-alt-100 font-black uppercase text-4xl">{theme}</h1>
        {/* <Countdown timer={timer} setTimer={setTimer} /> */}
        <div className="lg:w-1/2 w-full grid m-2 gap-x-2 gap-y-36 grid-rows-4 grid-cols-5">
          {cardsContent.map((card, i) => (
            <div
              key={i}
              data-cardid={i}
              data-cardpair={card.pair}
              className="m-3"
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
      </div>
    </>
  );
}
