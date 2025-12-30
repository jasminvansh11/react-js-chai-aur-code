import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

     //UseRef hook
  const passwordRef = useRef(null)

  

  const passwordGenrater = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)


    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClickboard = useCallback(() => {

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password);
    document.querySelector("button").innerHTML = "copied"

  
  },[password])


  useEffect(() => {
    passwordGenrater()
  }, [length, numberAllowed, charAllowed, setPassword, passwordGenrater])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-4xl text-center text-white mb-5'>Password Genrater</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3 " placeholder="password" readOnly ref={passwordRef}/>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={copyPasswordToClickboard} >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e) => setLength(e.target.value)} />
            <label>Length:{length}</label>


            <div className="flex item-center gap-x-1">
              <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => { setnumberAllowed((prev) => !prev) }} />
              <label htmlFor="numberInput">Number</label>
            </div>

            <div className="flex item-center gap-x-1">
              <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => { setcharAllowed((prev) => !prev) }} />
              <label htmlFor="numberInput">Character</label>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default App
