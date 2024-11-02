import { motion } from 'framer-motion'
// Import gambar dengan benar
import ecommerce from '../assets/img/ecommerce.jpg'
import cms from '../assets/img/cms.jpg'
import lpHotels from '../assets/img/LP-hotels.png'

const Portfolio = () => {
    const projects = [
        {
          title: "E-Commerce Website",
          description: "Website e-commerce modern dengan fitur katalog produk, keranjang belanja, sistem pembayaran terintegrasi, dan dashboard admin untuk manajemen inventori.",
          image: ecommerce,
          tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        },
        {
          title: "Content Management System",
          description: "Sistem manajemen konten yang memudahkan pengelolaan artikel, media, dan pengguna dengan antarmuka yang intuitif dan fitur-fitur admin yang lengkap.",
          image: cms,
          tech: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
        },
        {
          title: "Landing Page Hotel",
          description: "Landing page untuk hotel dengan tampilan modern, fitur booking kamar, galeri foto, dan informasi fasilitas hotel yang ditampilkan secara menarik.",
          image: lpHotels,
          tech: ["React", "Tailwind CSS", "Framer Motion"],
        },
      ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="portfolio" className="pt-36 pb-32 bg-slate-900">
      <div className="container">
        <motion.div 
          className="w-full px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Latest Projects
            </h2>
            <p className="font-medium text-base text-slate-400">
              Beberapa project terbaru yang telah saya kerjakan menggunakan berbagai teknologi modern.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700/50"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative group overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 flex flex-col justify-between min-h-[200px]">
                <div>
                  <h3 className="font-semibold text-xl text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="font-medium text-base text-slate-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm font-medium text-primary border border-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio