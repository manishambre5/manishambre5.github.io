import { useState } from 'react'
import './App.css'
import Projects from './components/Projects'
import Landing from './components/Landing'
import Skills from './components/Skills'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <div className='grid auto-rows-auto h-screen overflow-hidden'>
      <Nav />
      <main className='row-start-2 grid auto-rows-auto overflow-y-scroll snap-mandatory snap-y'>
        <Landing />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}

export default App
