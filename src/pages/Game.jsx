import React, { useState } from 'react'
import Input from '../components/Input'

export default function Game() {

  const [keypress,setKeypress] = useState('');

  return (
    <div>Game
      <Input keypress={keypress} setKeypress={setKeypress} />
    </div>
  )
}
