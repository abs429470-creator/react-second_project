import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
const handleButtonAlert=()=>{
  alert("b\"h 2")
}
const handleWriteTextForConsole=(e)=>{
  console.log(e.target.value)
}
  return (
    <>
        <button
          type="button"
          className="counter"
          onClick={() =>alert("b\"h")}
        >
          1
        </button>
        <button
          type="button"
          className="counter"
          onClick={handleButtonAlert}
        >
          2
        </button>
    <input type="text" name="textForConsole" id="textForConsole" onChange={handleWriteTextForConsole}/>
    </>
  )
}

export default App
