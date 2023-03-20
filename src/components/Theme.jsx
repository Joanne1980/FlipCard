import React, { useState, useEffect } from "react";

export default function Theme({ theme, setTheme }) {
  
  function playGame(e) {
    const chosenTheme = e.target.value
    setTheme(chosenTheme)
    const hideStarter = document.getElementById("hideStarter")
    hideStarter.setAttribute('class', 'hide')
  }
  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <div id="hideStarter">
      <div>Starter</div>
      <div className="flex flex-row justify-center"> LOGO </div>
      <div className="flex flex-row justify-center gap-x-8 gap-y-8">
        <button value="cats" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={playGame}>Cats</button>
        <button value="dogs" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={playGame}>Dogs</button>
        <button value="cars" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={playGame}>Cars</button>
      </div>;
    </div>
  )
};
