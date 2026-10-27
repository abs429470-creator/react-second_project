import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import QuantityCounter from './QuantityCounter'
function App() {
  
  return (
    <>
    <QuantityCounter ProductName="Example Product" ProductPrice={19.99} />
    </>
  )
}

export default App
