import React from "react";
import Box from "./Box";

// This will change depending on Difficulty
const gridSize = 16;

function gridLayout(size) {
  const boxes = [];
  for (let i = 0; i < size; i++) {
    boxes.push(<Box />);
  }
  return boxes;
}

//Unsplash API access key
//CY-iFrJXI04rurx8QvIQCDecckeftZv1kL501Z-hrUw

//Unsplash API Secret key
//U9QL51xlhb71F5eVTpwuwCJ8tXGOfwQhKq7TWT3HAE8

export default function Grid() {
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
