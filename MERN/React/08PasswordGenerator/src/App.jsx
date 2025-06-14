import { useRef, useState ,useCallback,useEffect} from 'react'


function App() {
const [length,setLength]=useState(8)
const [numberAllowed,setNumberAllowed]=useState(false)
const [charAllowed,setCharAllowed]=useState(false)
const[password,setPassword]=useState("")

const passwordRef=useRef(null)

const passwordGenerator=useCallback(() => {
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgijklmnopqrstuvwxyz"
  if(numberAllowed) str+="0123456789"
  if(charAllowed) str+="!@#$%^&*()"

  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str[char]
  }
  setPassword(pass)

}, [length,numberAllowed,charAllowed,setPassword]);

const copyPasswordToClipboard=()=>{
  passwordRef.current.select();
  window.navigator.clipboard.writeText(password)
}


  useEffect(() => {
    passwordGenerator();
  }, [length,numberAllowed,charAllowed,setPassword
  ]);
  

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
     <input type="text" value={password} placeholder='Password' readOnly  ref={passwordRef}/> 
     <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range" className='cursor-pointer' min={8} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}} />
      <label >length: {length}</label>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" value={numberAllowed} onChange={()=>{setNumberAllowed(prev=>!prev)        }} />
        <label >numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input type="checkbox" value={charAllowed} onChange={()=>{setcharrAllowed(prev=>!prev)        }} />
      <label >chars</label>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
