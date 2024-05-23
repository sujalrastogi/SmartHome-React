import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Feature from './components/Feature'
import Mode from './components/Mode'
import About from './components/About'
import Digital from './components/Digital'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <div className="outerbg">

    <Navbar/>
    <Hero/>
    <Hero2/>
    <Feature/>
    <Mode/>
    </div>
    <div className="outerbg2">
      <About/>
      <Digital/>
    </div>
    <Footer/>
      
    </>
  )
}

export default App
