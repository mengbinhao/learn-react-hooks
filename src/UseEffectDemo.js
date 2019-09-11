import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Index = () => {
  // useEffect(() => {
  //   console.log(`hi, you come in`)
  //   return () => {
  //     console.log(`hi, you come out`)
  //   }
  // }, [])
  return <div>Index</div>
}
const About = () => {
  return <div>About</div>
}

function UseEffectDemo() {
  const [count, setState] = useState(0)
  useEffect(() => {
    console.log(`hi, you come in`)
    return () => {
      console.log(`hi, you come out`)
    }
  }, [count])
  return (
    <div>
      <div>clicked { count } times</div>
      <button onClick={() => {setState(count + 1)}}>click</button>

      <Router>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/about/">About</Link></li>
        </ul>
        <Route path="/" exact component={Index} ></Route>
        <Route path="/about/" component={About} ></Route>

      </Router>
    </div>
  )
}
export default UseEffectDemo