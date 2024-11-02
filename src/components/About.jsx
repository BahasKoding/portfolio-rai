import { FaHtml5, FaReact, FaCss3Alt, FaNodeJs, FaGitAlt, FaLaravel } from "react-icons/fa"
import { SiJavascript, SiTailwindcss, SiMysql, SiPostgresql, SiPhp } from "react-icons/si"
import { FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa"
import { motion } from "framer-motion"

const About = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" />, level: "Advanced" },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" />, level: "Advanced" },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: "Intermediate" },
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" />, level: "Intermediate" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: "Advanced" },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, level: "Intermediate" },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, level: "Intermediate" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, level: "Intermediate" },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, level: "Intermediate" },
    { name: "PHP", icon: <SiPhp className="text-[#777BB4]" />, level: "Intermediate" },
    { name: "Laravel", icon: <FaLaravel className="text-[#FF2D20]" />, level: "Intermediate" }
  ]

  const socials = [
    { 
      name: "LinkedIn", 
      icon: <FaLinkedin className="text-[#0A66C2] text-3xl" />, 
      link: "https://www.linkedin.com/in/rai-rakhmat-syarifudin-supardi-b04818236/",
      username: "Rai Rakhmat"
    },
    { 
      name: "Instagram", 
      icon: <FaInstagram className="text-[#E4405F] text-3xl" />, 
      link: "https://instagram.com/bahaskoding",
      username: "@bahaskoding"
    },
    { 
      name: "Discord", 
      icon: <FaDiscord className="text-[#5865F2] text-3xl" />, 
      link: "#",
      username: "@bahaskoding"
    }
  ]

   // Container animation
    const container = {
        hidden: { opacity: 0 },
        show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
        }
    }

  // Item fade in animation
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  // Card floating animation
  const floatingAnimation = {
    initial: {
      y: 0,
      scale: 1,
      rotate: 0,
      boxShadow: "0 0 0 rgba(20,184,166, 0)"
    },
    animate: {
      y: [-10, 0, -10],
      rotate: [-1, 1, -1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.05,
      rotate: 0,
      y: -5,
      boxShadow: "0 10px 20px rgba(20,184,166, 0.2)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      rotate: 0,
      boxShadow: "0 5px 10px rgba(20,184,166, 0.1)"
    }
  }

  // Icon animation
  const iconAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  // Text animation
  const textAnimation = {
    initial: { opacity: 0.7 },
    hover: {
      opacity: 1,
      x: 3,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="pt-24 md:pt-36 pb-16 md:pb-32 bg-slate-800">
      <div className="container">
        <div className="flex flex-wrap">
          {/* Skills Section */}
          <div className="w-full px-4">
            <motion.div 
              className="max-w-xl mx-auto text-center mb-8 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="font-semibold text-base md:text-lg text-primary mb-2">Skills</h4>
              <h2 className="font-bold text-white text-2xl md:text-3xl mb-4 sm:text-4xl lg:text-5xl">Tech Stack</h2>
              <p className="font-medium text-sm md:text-base text-slate-400">
                Teknologi yang saya gunakan untuk membangun aplikasi web yang modern dan handal.
              </p>
            </motion.div>
          </div>

          <div className="w-full px-4 mb-16">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  animate="animate"
                  whileHover="hover"
                  variants={floatingAnimation}
                  className="group bg-dark/40 backdrop-blur-sm p-4 rounded-xl border border-slate-700 hover:border-primary transition-all duration-300 ease-in-out"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-3xl">{skill.icon}</div>
                    <div className="text-center">
                      <h3 className="font-semibold text-white text-base mb-1">{skill.name}</h3>
                      <p className="text-sm text-slate-400 group-hover:text-primary transition-colors duration-300">
                        {skill.level}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Social Media Section */}
          <div className="w-full px-4">
            <motion.div 
              className="max-w-xl mx-auto text-center mb-8 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="font-semibold text-base md:text-lg text-primary mb-2">Social Media</h4>
              <h2 className="font-bold text-white text-2xl md:text-3xl mb-4 sm:text-4xl lg:text-5xl">Let's Connect!</h2>
              <p className="font-medium text-sm md:text-base text-slate-400">
                Mari terhubung dan berkolaborasi bersama.
              </p>
            </motion.div>
          </div>

          <div className="w-full px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={item}
                  animate="animate"
                  whileHover="hover"
                  variants={floatingAnimation}
                  className="group bg-dark/40 backdrop-blur-sm p-4 rounded-xl border border-slate-700 hover:border-primary transition-all duration-300 ease-in-out flex items-center gap-4"
                >
                  <div className="text-3xl">{social.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white text-base mb-0.5">{social.name}</h3>
                    <p className="text-sm text-slate-400 group-hover:text-primary transition-colors duration-300">
                      {social.username}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About