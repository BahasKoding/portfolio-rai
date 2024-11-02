import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Tambahkan fungsi toggleMenu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full flex items-center z-10 transition-all duration-300 
        ${isScrolled ? 'bg-dark/80 backdrop-blur-sm border-b border-primary/50' : 'bg-transparent'}`}
    >
        <div className="container">
            <div className="flex items-center justify-between relative">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="px-4"
              >
                <a 
                  href="#home" 
                  onClick={(e) => handleClick(e, 'home')} 
                  className="font-bold text-2xl text-primary block py-6"
                >
                  Rai
                </a>
              </motion.div>

              <div className="flex items-center px-4">
                {/* Hamburger Button */}
                <button 
                onClick={toggleMenu} 
                className="block absolute right-4 lg:hidden"
                >
                <span className={`hamburger-line transition duration-300 ease-in-out origin-top-left ${
                    isMenuOpen ? 'rotate-45' : ''
                }`}></span>
                <span className={`hamburger-line transition duration-300 ease-in-out ${
                    isMenuOpen ? 'scale-0' : ''
                }`}></span>
                <span className={`hamburger-line transition duration-300 ease-in-out origin-bottom-left ${
                    isMenuOpen ? '-rotate-45' : ''
                }`}></span>
                </button>

                <motion.nav 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`absolute py-5 bg-dark shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${
                    isMenuOpen ? 'block' : 'hidden'
                  } lg:block`}
                >
                  <ul className="block lg:flex">
                    {['home', 'about', 'portfolio', 'contact'].map((item) => (
                      <li key={item} className="group">
                        <a 
                          href={`#${item}`}
                          onClick={(e) => handleClick(e, item)}
                          className="text-base text-white py-2 mx-8 flex group-hover:text-primary transition-colors duration-300"
                        >
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.nav>
              </div>
            </div>
        </div>
    </motion.header>
  )
}

export default Navbar