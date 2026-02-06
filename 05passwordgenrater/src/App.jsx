import { useCallback, useEffect, useState, useRef } from "react"


export default function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  //ref hook

   const passwordRef = useRef(null)

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%^&*()_+"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenrator()
  }, [length, numberAllowed, charAllowed])

  return (
    <div className="w-full flex justify-center">
      <div className="border w-[500px] border-white rounded-xl  bg-slate-600 px-5 py-8 mt-5">

        <h1 className="text-white text-3xl text-center mb-2">Password Genrator</h1>
        <div className="flex gap-1 justify-center">
          <input type="text"
            placeholder="Password"
            className="px-8 py-2 w-[80%] text-orange-500 text-2xl outline-none rounded-sm "
            readOnly
            ref={passwordRef}
            value={password}
          />
          <button onClick={copyPasswordToClipBoard} className="bg-blue-500 rounded-sm px-5 hover:bg-cyan-300">Copy</button>
        </div>
        <div className="mt-5 flex gap-2  text-orange-500">
          <input className="w-[80%]" type="range" min={8} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
          <label>Length:{length}</label>

          <input type="checkbox"
            name="" id="numberAllowed"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)} />
          <label htmlFor="numberAllowed">Number</label>

          <input type="checkbox"
            id="charAllowed"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)} />
          <label htmlFor="charAllowed">Character</label>
        </div>
      </div>
    </div>
  )
}