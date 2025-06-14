import { useEffect } from "react";
import {React,useState} from "react";

const Navbar = () => {
  const[color,setcolor]=useState("bg-blue-500")
  const[guy,setguy]=useState("chipkoo guy")
  const change=()=>{
    if (color=="bg-blue-500") {
        setcolor(prev=>"bg-green-500")
    }
    else{
        setcolor(prev=>"bg-blue-500")
    }
    
  }
  useEffect(() => {
    setguy(prev=>prev+"y")
  }, []);
  


  return <>
  <div className=" bg-red-600">Navbar
  <button onClick={change} className={`${color}`}>Fuck me!!!</button>
  </div>
  <div>{guy}</div>
    
  </>;
};

export default Navbar;
