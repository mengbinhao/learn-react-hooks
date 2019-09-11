import React, { useReducer } from 'react'

function UseReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch(action) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default:
        return state
    }
  },0)

  return (
    <div>
      <div>count is : { count } </div>
      <div>
        <button onClick={() => {dispatch('add')}}>add</button>
        <button onClick={() => {dispatch('sub')}}>sub</button>
      </div>
    </div>
  )
}
export default UseReducerDemo