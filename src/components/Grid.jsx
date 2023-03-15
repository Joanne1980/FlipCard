import React from "react";
import Box from "./Box";

const gridSize = 16;

function gridLayout(size) {
  const boxes = [];
  for (let i = 0; i < size; i++) {
    boxes.push(<Box />);
  }
  return boxes;
}

export default function Grid() {
  return (
    <>
      <div>Grid</div>
      <div className="w-full full grid  m-3 p-3 grid-rows-4 grid-cols-4">
        {gridLayout(gridSize)}
      </div>
    </>
  );
}
