import React, { useEffect, useState } from 'react';
import Box from './Box';

export default function Row({isActive, pressedKey}) {
  const [activeColumn, setColumn] = useState(-1);
  const [letters, setLetters] = useState(['', '', '', '', ''])
  useEffect(() => {
    const lettersCopy = [...letters];
    lettersCopy[activeColumn] = pressedKey;
    if (isActive) {
  
    console.log(activeColumn)
    setLetters(lettersCopy)
    setColumn(activeColumn + 1)
    }
    
  }, [pressedKey])
  
  return (
    <div className='flex flex-row'>
      <Box 
        value={letters[0]} />
      <Box 
        value={letters[1]} />
     <Box 
        value={letters[2]} />
      <Box 
        value={letters[3]} />
      <Box 
        value={letters[4]} />
    </div>
  )
}
