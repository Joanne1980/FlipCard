import React, { useState } from 'react'
import Input from '../components/Input'
import Grid from '../components/Grid';

export default function Game() {

  const [keypress, setKeypress] = useState('');

  return (
    <div>
      Game
      <Input keypress={keypress} setKeypress={setKeypress} />
      <div className='w-full h-screen flex justify-center items-center'>
        <Grid />
      </div>
    </div>
  )
}
