import React from 'react'
import Buttons from './Buttons'
import Show from './Show'
import { Color } from './Color'

export default function App() {
  return (
    <div>
      <Color>
        <Buttons />
        <Show />
      </Color>
    </div>
  )
}