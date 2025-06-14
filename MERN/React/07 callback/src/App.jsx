import { useState,useCallback } from 'react'
import Nope from './components/Nope'

function App() {
  const [count, setCount] = useState(0)

 

  const add=useCallback(() => {
    setCount(count+1)
  }, []);
  
  return (
   <>
   <div className="text-8xl bg-red-500">premkumar</div>
    <Nope fn={add}/>
   <button  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700" onClick={add}>Clicke me!</button>
   <div className="">Count: {count}</div>

   </>
     )
}

export default App
