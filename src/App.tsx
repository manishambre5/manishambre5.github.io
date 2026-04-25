import './App.css'
import { Hero } from './components/Hero'
import { MainContent } from './components/MainContent'
import { Nav } from './components/Nav'

function App() {

  return (
    <div className='flex flex-col gap-4 xl:mx-48 lg:mx-16'>
      <Nav />
      <Hero />
      <MainContent />
    </div>
  )
}

export default App
