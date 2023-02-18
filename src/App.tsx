import './App.css'
import { Home } from './Components/Home'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'

function App() {
  return (
    <div className='container'>
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div> 
  )
}

export default App
