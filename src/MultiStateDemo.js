import React, { useState } from 'react'

function MultiStateDemo() {
  // eslint-disable-next-line
  const [name, setName] = useState('jack')
  // eslint-disable-next-line
  const [age, setAge] = useState(33)

  return (
    <div>
      <div>my { name }</div>
      <div>my { age }</div>
    </div>
  )
}
export default MultiStateDemo