import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import QuantityCounter from './QuantityCounter'
import ContactForm from './ContactForm'

function App() {
  
  return (
    <>
    <QuantityCounter ProductName={"כוסות זכוכית"} ProductDescriptionShort={"סט שישה כוסות זכוכית עמידות"} ProductDescriptionLong={"עמידות לשימוש יומיומי, ניתן לשטיפה במדיח כלים"} ProductPrice={25.62} />
    <ContactForm></ContactForm>
    </>
  )
}

export default App
