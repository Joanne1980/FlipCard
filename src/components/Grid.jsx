import React, { useState, useEffect } from "react";
// import Box from "./Box";
import axios from "axios";

//Unsplash API access key
//CY-iFrJXI04rurx8QvIQCDecckeftZv1kL501Z-hrUw

//Unsplash API Secret key
//U9QL51xlhb71F5eVTpwuwCJ8tXGOfwQhKq7TWT3HAE8

export default function Grid() {
  const image = "cats";
  const clientId = "CY-iFrJXI04rurx8QvIQCDecckeftZv1kL501Z-hrUw";
  let imageSrc = "";

  let cards = [];

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response);
      // imageSrc = response.data.results[0].urls.full;
      console.log(imageSrc);
      for (let i = 0; i < 10; i++) {
        const card = {
          pair: i,
          image: response.data.results[i].urls.small,
          isMatched: "false",
        };
        cards.push(card);
        cards.push(card);
      }
      console.log(cards);
    });
  }, []);

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=" +
    image +
    "&client_id=" +
    clientId;

  const gridSize = 20;

  function gridLayout(size) {
    const boxes = [];
    for (let i = 0; i < size; i++) {
      boxes.push(
        <div className=" w-32 h-32 bg-teal-800 m-3">
          <img src={imageSrc} alt="" />
        </div>
      );
    }
    return boxes;
  }

  return (
    <>
      <div>Grid</div>
      <div className=" w-1/2 flex justify-center">
        <div className="w-full full grid m-3 p-3 grid-rows-4 grid-cols-4">
          {gridLayout(gridSize)}
        </div>
      </div>
    </>
  );
}
