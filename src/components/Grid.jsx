import Row from './Row';
import { useEffect, useState } from 'react';


export default function Grid({keypress}) {
  const [activeRow, setActiveRow] = useState(1);
  const [currentKeyCounter, setCurrentKeyCounter] = useState(0);

  useEffect(() => {
    if (keypress != "delete" && keypress != "enter" && !keypress) {
      if (currentKeyCounter % 5 == 0 && currentKeyCounter != 0) {
        setActiveRow(activeRow + 1)
      }
      setCurrentKeyCounter(currentKeyCounter + 1)
    }
  }, [keypress])
  const counter = [
    1, 2, 3, 4, 5, 6, 7, 8
  ]
    return (
    <div className='flex flex-col'>
      {counter.map((rowNumber) => {
        return <Row 
        pressedKey={keypress}
        key={rowNumber}
        isActive={activeRow == rowNumber}
        />
      })}
     
      

    </div>
  )
}
