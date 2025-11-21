import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Trading from './components/Trading'
import Hobbies from './components/Hobbies'
import Favorites from './components/Favorites'
import Learning from './components/Learning'
import Blog from './components/Blog'
import Timeline from './components/Timeline'
import Values from './components/Values'
import Contact from './components/Contact'
import BackgroundFX from './components/BackgroundFX'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <BackgroundFX />

      <Navbar />
      <Hero />
      <main>
        <Skills />
        <Projects />
        <Trading />
        <Hobbies />
        <Favorites />
        <Learning />
        <Blog />
        <Timeline />
        <Values />
        <Contact />
      </main>

      <footer className="py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Tushar Wasake — Built with love.
      </footer>
    </div>
  )
}

export default App
