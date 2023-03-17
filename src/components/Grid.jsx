import React, { useState, useEffect } from "react";

import axios from "axios";

//Unsplash API access key
//CY-iFrJXI04rurx8QvIQCDecckeftZv1kL501Z-hrUw

//Unsplash API Secret key
//U9QL51xlhb71F5eVTpwuwCJ8tXGOfwQhKq7TWT3HAE8

export default function Grid({theme}) {
  const image = theme;
  const clientId = "CY-iFrJXI04rurx8QvIQCDecckeftZv1kL501Z-hrUw";

  let cards = [];
  const [html, setHtml] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      for (let i = 0; i < 10; i++) {
        const card = {
          pair: i,
          image: response.data.results[i].urls.small,
          isMatched: "false",
        };
        cards.push(card);
        cards.push(card);
      }
      let deck = [];
      cards.map((card, i) => {
        deck.push(
          <div
            key={i}
            data-cardid={i}
            data-cardpair={card.pair}
            className="m-3"
          >
            <img className="object-cover w-32 h-32" src={card.image} alt="" />
          </div>
        );
      });
      deck = deck.sort(() => Math.random() - 0.5);
      setHtml(deck);
      //console.log(cards);
    });
  }, [image]);

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=" +
    image +
    "&client_id=" +
    clientId + 
    "&orientation=squarish";

  return (
    <>
      <div>Grid</div>
      <div className="flex justify-center">
        <div className="w-full full grid m-0.5 p-0.5 grid-rows-4 grid-cols-4">
          {html}
        </div>
      </div>
    </>
  );
}
