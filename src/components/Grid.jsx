import React, { useState, useEffect } from "react";
import ReactBoxFlip from "react-box-flip";

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

  const [cardsContent, setCardsContent] = useState([]);

  // Keeping track of which two cards the user has picked
  const [cardsPicked, setCardsPicked] = useState([]);

  const [turnCounter, setTurnCounter] = useState(0);

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=" +
    image +
    "&client_id=" +
    clientId +
    "&orientation=squarish";

  useEffect(() => {
    let cards = [];

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
    });
  }, [image]);



  function handleClick(i) {
    const cardsContentCopy = [...cardsContent];

    // We only want to flip the card over if it's not matched
    if (!cardsContentCopy[i].isMatched) {
      console.log("Is not matched!")
      
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
        }, 750);
      }
    }


  }

  // Logic to check if cards are matched.
  const checkCards = () => {

    console.log("cards checked")
    console.log(cardsPicked)

    // Assign variables to both cards for clearer code
    const card1 = cardsPicked[0];
    const card1Pair = cardsContent[card1].pair

    const card2 = cardsPicked[1];
    const card2Pair = cardsContent[card2].pair


    console.log("card 1 pair: " + card1Pair)
    console.log("card 2 pair: " + card2Pair)
    // 

    const cardsContentCopy = [...cardsContent];

    // If the cards are matched, mark them both as matched
    if (card1Pair === card2Pair) {

      console.log("Pairs are matched")

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
      cardsContentCopy[card1].isFlipped = false
      cardsContentCopy[card2].isFlipped = false;

      // Update cards content
      setCardsContent(cardsContentCopy);
    }

    console.log(cardsContent)

    // Reset the cards picked to empty 
    setCardsPicked([]);

  }

  useEffect(() =>{

    console.log("Game count is: "+ turnCounter)

  },[turnCounter])


  return (
    <>
      <div>Grid</div>
      <div className="flex justify-center">
        <div className="w-full full grid gap-32 p-0.5 grid-rows-4 grid-cols-4">
          {cardsContent.map((card, i) => (
            <div

              key={i}
              data-cardid={i}
              data-cardpair={card.pair}
              className="m-3  w-32 h-32"
              onClick={(e) => handleClick(i)}
            >

              <ReactBoxFlip isFlipped={!card.isFlipped}>

                <div className="object-cover">
                  <img
                    className="object-cover w-32 h-32"
                    src={card.image}
                    alt=""
                  />
                </div>

                <div className="object-cover">
                  <img src="card2.png" className=" w-32 h-32 "/>
                </div>
              </ReactBoxFlip>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
