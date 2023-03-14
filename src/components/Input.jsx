import React from 'react'

export default function Input(props) {

// To do: Maybe change this keyboard to use states so we can track each key (i.e change the colour)

  // keyboard array, of 3 arrays (3 rows)
  const keyboardRows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["enter", "z", "x", "c", "v", "b", "n", "m", "delete"]
  ];

  // a function to handle the onClick event 
  const handleSelect = (e) =>{

    // Find out which key was pressed based on data attribute (data-key)
    const keyPressed = e.target.getAttribute("data-key");
    props.setKeypress(keyPressed);
    console.log(keyPressed);
  }

  return (
    <div>

      {/* Array map, loop through each array(row) in keyboardRows array*/}
      {keyboardRows.map((row, index) => (
        // tail wind flex layout & justify center

        <div className="flex justify-center" key={index}>
          {/* Array map, loop through each key in the row */}
          {row.map((key, index) => {
            
            // return a div with each key, using data-key attribute to record which key this is
            return <div className="m-1 bg-gray-500 p-5" data-key={key} key={index} onClick={handleSelect}>{key}</div>
          })
          }
        </div>
      ))
      }
    </div>
  )
}

// Have use effect in both grid and row