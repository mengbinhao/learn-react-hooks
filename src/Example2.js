import React, { useState } from 'react'

function Example2() {
  const [name, setName] = useState('jack')
  const [age, setAge] = useState(33)

  return (
    <div>
      <div>my { name }</div>
      <div>my { age }</div>
    </div>
  )
}
export default Example2