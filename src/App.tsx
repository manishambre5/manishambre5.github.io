import './App.css'
import { Hero } from './components/Hero'
import { MainContent } from './components/MainContent'
import { Nav } from './components/Nav'

function App() {

  return (
    <div className='flex flex-col gap-4 mx-4 lg:mx-64 sm:mx-32'>
      <Nav />
      <Hero />
      <MainContent />
    </div>
  )
}

export default App
