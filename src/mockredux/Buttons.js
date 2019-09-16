import React, { useContext } from 'react'
import { ColorContext, UPDATE_COLOR } from './Color'

export default function Buttons () {
  const { dispatch } = useContext(ColorContext)
  return (
    <div>
      <button onClick={() => dispatch({type:UPDATE_COLOR, color:'blue'})}>blue</button>
      <button onClick={() => dispatch({type:UPDATE_COLOR, color:'red'})}>yellow</button>
    </div>
  )
}