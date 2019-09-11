import React, { useState } from 'react'

function Example() {
  const [count, setState] = useState(0)

  return (
    <div>
      <div>clicked { count } times</div>
      <button onClick={() => {setState(count + 1)}}>click</button>
    </div>
  )
}
export default Example