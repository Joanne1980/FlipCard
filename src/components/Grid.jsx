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
          isMatched: "false",
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
    cardsContentCopy[i].isFlipped = !cardsContentCopy[i].isFlipped;
    setCardsContent(cardsContentCopy);
  }

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
              <ReactBoxFlip isFlipped={card.isFlipped}>
                <div className="object-cover">
                  <img
                    className="object-cover w-32 h-32"
                    src={card.image}
                    alt=""
                  />
                </div>

                <div className="object-cover w-32 h-32 bg-black"></div>
              </ReactBoxFlip>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
