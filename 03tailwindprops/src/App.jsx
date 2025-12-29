import { useState } from 'react'
import './App.css'
import Card from "./components/Card"

function App() {

 let age = 21;
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Css</h1>
    <Card  username="Chai Aur Code" btnText="Click Me"/>
    <div className='mb-4'></div>
    <Card  username="Jasmin" btnText="Visit Me!"></Card>

    </>
  )
}

export default App
