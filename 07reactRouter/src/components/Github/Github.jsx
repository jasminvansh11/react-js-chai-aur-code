import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

    function Github() {

    const data = useLoaderData()
     
    
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/jasminvansh11')
    //     .then(response => response.json())
    //     .then(data => setData(data) )
    // })

    
  return (
    <div className='bg-slate-700 h-50 text-center justify-center text-white text-4xl'>
        <p>Follower : {data.followers}</p>
       
        <div className='flex justify-center' >
       <img src={data.avatar_url} alt="" width={300} />
       </div>
    </div>
  )
}



export default Github



export const gitInfoLoader = async () => { 
 const response = await fetch("https://api.github.com/users/jasminvansh11")
    return response.json()
 }


