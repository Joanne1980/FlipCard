import React from 'react'

//To do
//create on-click with information button to prompt instructions to appear on screen 
//add image/ diagram to show alongside instructions ? 
//instructions page will pop up as a smaller page than the game page 
//center and alter size 

export default function Instructions() {
  return (
    <div>
      <div class="p-10 outline-dashed rounded-md h-auto w-fit">
        <div class="font-mono flex flex-col space-y-2">
          <div>How to Play</div>
          <div>Choose a theme for your playing cards.</div>
          <div>You will be shown a quick peek of your playing cards on the board. Try to remember where the pairs are!</div>
          <div>Begin to match the pairs by clicking on two cards at a time. The cards will flip over to reveal the card image.</div>
          <div>Correctly paired cards will remain flipped over, incorrect pairs will reset.</div>
          <div>Players who finish matching their pairs in the quickest time will make it to the leaderboard!</div>
        </div>
      </div>
    </div>
  )
}
