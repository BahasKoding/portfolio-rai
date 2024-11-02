import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <section id="contact" className="pt-36 pb-32 bg-slate-800">
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
                            Contact
                        </h4>
                        <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
                            Get In Touch
                        </h2>
                        <p className="font-medium text-base text-slate-400">
                            Hubungi saya untuk kolaborasi atau diskusi project.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    className="w-full lg:w-2/3 mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="w-full px-4">
                        <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-600/50">
                            <form>
                                <div className="w-full mb-8">
                                    <label htmlFor="name" className="text-base font-semibold text-primary">
                                        Name
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        className="w-full bg-slate-800/50 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mt-2"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="w-full mb-8">
                                    <label htmlFor="email" className="text-base font-semibold text-primary">
                                        Email
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        className="w-full bg-slate-800/50 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mt-2"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div className="w-full mb-8">
                                    <label htmlFor="message" className="text-base font-semibold text-primary">
                                        Message
                                    </label>
                                    <textarea 
                                        id="message"
                                        className="w-full bg-slate-800/50 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mt-2 h-32"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>
                                <div className="w-full">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:opacity-80 hover:shadow-lg transition-all duration-300"
                                        type="submit"
                                    >
                                        Send Message
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact