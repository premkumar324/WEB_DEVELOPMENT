import React, { useContext, useState } from "react";
import UserContext from '../context/UserContext'
function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return(
        <div>
            <h2>login</h2>
            <input type="text" 
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            placeholder="username"
            />
            {" "}
            <input type="text" 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder="Password"
            />
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600" onClick={handleSubmit}>Submit</button>

        </div>
    )
}
export default Login