import React, { useState } from 'react'

function BasicDemo() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>clicked { count } times</div>
      <div><button onClick={() => {setCount(count + 1)}}>click</button></div>
    </div>
  )
}
export default BasicDemo