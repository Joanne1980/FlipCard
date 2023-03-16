import React from "react";
//Show three buttons showing different theme options; 
//To do:
//Add a gap between the LOGO row and the buttons row;
//Add </Difficulty> to the Starter page;

const cats=0;
const dogs=0;
const cars=0;
export default function Difficulty() {
  return <div>
    <div class="flex flex-row justify-center"> LOGO </div>
    <div class="flex flex-row justify-center gap-x-8 gap-y-8">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={cats}>Cats</button> 
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={dogs}>Dogs</button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={cars}>Cars</button>
  </div>;
  </div>; 
};
