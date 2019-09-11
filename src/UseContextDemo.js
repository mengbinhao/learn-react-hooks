import React, { useState, createContext, useContext } from 'react'

//like a component
const CountContext = createContext()

const Sub = () => {
  let count = useContext(CountContext)
  return <h4>sub component: {count}</h4>
}

function UseContextDemo() {
  const [ count, setCount ] = useState(0)

  return (
    <div>
      <div>parent data: { count }</div>
      <div><button onClick={() => {setCount(count + 1)}}>click</button></div>
      <CountContext.Provider value={count}>
        <Sub />
      </CountContext.Provider>
    </div>
  )
}
export default UseContextDemo