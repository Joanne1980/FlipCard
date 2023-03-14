import React from 'react';
import Box from './Box';

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
