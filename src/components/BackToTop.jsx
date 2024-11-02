import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaArrowUp className="w-5 h-5" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}

export default BackToTop