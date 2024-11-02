import './App.css'
import './index.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"

function App() {
  return (
    <div className="app min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
