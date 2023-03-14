import React from 'react';
import Box from './Box';

const inputArray = [
  'A',
  'B',
  'C',

]

// if (!box) {
//   return box = input
// } 

// const testArray = {
//   [
// "R", "E", "A", "C", "T"

// ]
// }

export default function Row() {
  return (
    <div className='flex flex-row'>
      <Box 
        value="D" />
      <Box 
        value="C" />
      <Box />
      <Box />
      <Box />
    </div>
  )
}
