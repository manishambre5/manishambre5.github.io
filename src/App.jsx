import './App.css'
import Projects from './components/Projects'
import Landing from './components/Landing'
import Skills from './components/Skills'
import Nav from './components/Nav'

function App() {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Nav />
      <main className='h-auto flex flex-col gap-20 overflow-y-scroll snap-mandatory snap-y'>
        <Landing />
        <Skills />
        <Projects />
      </main>
    </div>
  )
}

export default App
