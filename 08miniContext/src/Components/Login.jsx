import React, { useContext, useState } from 'react'
import UserContext from '../conetext/UserContext'

export default function Login() {

    const [username,setUsername]  = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    function handleSubmit(e){
       e.preventDefault()
       setUser({username,password})
    }
  return (
    
    <div>
      <h1>User Login</h1>
      <input type="text"  placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
      {" "}
      <input type="text"  placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}
