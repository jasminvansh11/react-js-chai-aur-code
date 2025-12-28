import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  
  const addValue = () => {
    counter = counter + 1
    setCounter(counter)


  }


  const removeValue = () => {
    setCounter(prev => Math.max(0, prev - 1));
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value {counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
