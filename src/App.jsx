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

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* background gradient blobs */}
      <div className="pointer-events-none fixed inset-0 [mask-image:radial-gradient(50%_50%_at_50%_50%,_black,_transparent)]">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(closest-side,rgba(34,211,238,0.15),transparent)]"/>
        <div className="absolute top-1/3 left-10 w-[700px] h-[700px] bg-[radial-gradient(closest-side,rgba(168,85,247,0.12),transparent)]"/>
        <div className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-[radial-gradient(closest-side,rgba(59,130,246,0.12),transparent)]"/>
      </div>

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
