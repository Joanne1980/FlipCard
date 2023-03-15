import React, { useState, useEffect } from "react";
import Box from "./Box";
import axios from "axios";

//Unsplash API access key
//CY-iFrJXI04rurx8QvIQCDecckeftZv1kL501Z-hrUw

//Unsplash API Secret key
//U9QL51xlhb71F5eVTpwuwCJ8tXGOfwQhKq7TWT3HAE8

export default function Grid() {
  const image = "cats";
  const clientId = "CY-iFrJXI04rurx8QvIQCDecckeftZv1kL501Z-hrUw";
  const imageSrc = "";

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=" +
    image +
    "&client_id=" +
    clientId;
  axios.get(url).then((response) => {
    console.log(response);
    imageSrc = response.data.results[0].urls.full;
  });

  const gridSize = 16;

  function gridLayout(size) {
    const boxes = [];
    for (let i = 0; i < size; i++) {
      boxes.push(<Box img={imageSrc} key={[i]} />);
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
