import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter=>counter+1)
      setCounter(counter=>counter+1)
      setCounter(counter=>counter+1)
      setCounter(counter=>counter+1)
      
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      console.log("Value removed", counter - 1)
    }
  }

  return (
    <>
      <p>Premkumar Lande</p>
      <p>Counter {counter}</p>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App