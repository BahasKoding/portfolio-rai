import RaiImage from '../assets/img/rai.jpg'
import BgSvg from '../assets/svg/bg.svg'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Web Developer',
        'Mahasiswa IT',
        'Konten Kreator'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section id="home" className="py-28 md:py-40 bg-dark relative">
      <motion.div 
        className="absolute w-full h-full top-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <img src={BgSvg} alt="background" className="w-full h-full object-cover" />
      </motion.div>
      
      <div className="container relative">
        <div className="flex flex-wrap-reverse">
            {/* Text Content */}
            <motion.div 
              className="w-full self-center px-4 lg:w-1/2 mt-10 lg:mt-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
                <h1 className="text-base mb-2 font-semibold text-white md:text-xl text-center lg:text-left">
                    Halo 👋, perkenalkan saya
                    <motion.span 
                      className="block font-bold text-4xl mt-1 lg:text-5xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                        <span className="text-white">Rai Rakhmat</span> <br />
                        <span className="text-slate-300">Seorang</span> <span className="text-primary" ref={el}></span>
                    </motion.span>
                </h1>

                <motion.p 
                  className="font-medium text-slate-400 mb-10 leading-relaxed text-center lg:text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Selamat datang di <span className="text-slate-200 font-semibold">portfolio saya!</span> Saya adalah seorang <span className="text-primary font-semibold">developer</span> yang 
                  berfokus pada pembuatan website yang <span className="text-slate-200 font-semibold">modern</span> dan 
                  <span className="text-slate-200 font-semibold"> responsif</span>. Dengan kombinasi antara <span className="text-primary font-semibold">kreativitas</span> dan 
                  <span className="text-primary font-semibold"> kode</span>, saya siap membantu mewujudkan <span className="text-slate-200 font-semibold">ide Anda</span> menjadi <span className="text-primary font-semibold">realitas digital</span> yang menarik.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                    <a
                        href="#contact"
                        className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:bg-primary/90 transition-all duration-300 ease-in-out inline-block text-center"
                    >
                        Hubungi Saya
                    </a>
                    <a
                        href="#portfolio"
                        className="text-base font-semibold text-primary border border-primary py-3 px-8 rounded-full hover:bg-primary/10 transition-all duration-300 ease-in-out inline-block text-center"
                    >
                        Lihat Portfolio
                    </a>
                </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div 
              className="w-full self-center px-4 lg:w-1/2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut"
              }}
            >
              <div className="relative lg:right-0">
                <motion.img
                  src={RaiImage}
                  alt="Rai"
                  className="relative max-w-full mx-auto rounded-full w-64 h-64 object-cover border-4 border-primary transform-gpu transition duration-300 ease-in-out hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "tween" }}
                />
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero