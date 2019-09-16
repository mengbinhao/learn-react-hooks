import React, { useContext } from 'react'
import { ColorContext } from './Color'

export default function Show() {
  const { color } = useContext(ColorContext)
  return (
    <div style={{color}}>font color is {color}</div>
  )
}