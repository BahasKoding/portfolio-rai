import { FaLinkedin, FaInstagram, FaDiscord, FaHeart, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
    const quickLinks = [
        { name: 'Beranda', href: '#home' },
        { name: 'Tentang', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Kontak', href: '#contact' },
    ]

    const socialLinks = [
        { 
            name: 'LinkedIn', 
            href: 'https://www.linkedin.com/in/rai-rakhmat-syarifudin-supardi-b04818236/',
            icon: <FaLinkedin className="text-[#0A66C2] w-5 h-5" />,
            username: '@rairakhmat'
        },
        { 
            name: 'Instagram', 
            href: 'https://instagram.com/bahaskoding',
            icon: <FaInstagram className="text-[#E4405F] w-5 h-5" />,
            username: '@bahaskoding'
        },
        { 
            name: 'Discord', 
            href: '#',
            icon: <FaDiscord className="text-[#5865F2] w-5 h-5" />,
            username: '@bahaskoding'
        },
    ]

    const layanan = [
        'Pengembangan Website',
        'Desain UI/UX',
        'Pengembangan Mobile',
        'Integrasi API',
        'Desain Database',
        'Konsultasi Teknis'
    ]

    const handleClick = (e, href) => {
        e.preventDefault()
        const element = document.getElementById(href.slice(1))
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="bg-dark pt-24 pb-12">
            <div className="container">
                <div className="flex flex-wrap">
                    {/* Brand & Description */}
                    <div className="w-full px-4 mb-12 lg:w-1/4 md:w-1/2">
                        <h2 className="font-bold text-4xl text-white mb-5">Rai</h2>
                        <p className="text-base text-slate-300 mb-5">
                            Mewujudkan visi digital Anda melalui pengembangan web modern dan solusi kreatif.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-800 hover:opacity-80 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full px-4 mb-12 lg:w-1/4 md:w-1/2">
                        <h3 className="font-semibold text-xl text-white mb-5">Menu</h3>
                        <ul className="text-slate-300">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href}
                                        onClick={(e) => handleClick(e, link.href)}
                                        className="inline-block text-base hover:text-primary mb-3"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Layanan */}
                    <div className="w-full px-4 mb-12 lg:w-1/4 md:w-1/2">
                        <h3 className="font-semibold text-xl text-white mb-5">Layanan</h3>
                        <ul className="text-slate-300">
                            {layanan.map((item, index) => (
                                <li key={index} className="mb-3">
                                    <span className="text-base hover:text-primary cursor-default">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div className="w-full px-4 mb-12 lg:w-1/4 md:w-1/2">
                        <h3 className="font-semibold text-xl text-white mb-5">Kontak</h3>
                        <ul className="text-slate-300">
                            <li className="flex items-start mb-3">
                                <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1" />
                                <span className="text-base">
                                    Bogor, Indonesia
                                </span>
                            </li>
                            <li className="flex items-center mb-3">
                                <FaPhone className="w-5 h-5 mr-3" />
                                <span className="text-base">
                                    +62 821 1234 5678
                                </span>
                            </li>
                            <li className="flex items-center mb-3">
                                <FaEnvelope className="w-5 h-5 mr-3" />
                                <span className="text-base">
                                    businessrkhmt@gmail.com
                                </span>
                            </li>
                            <li className="flex items-center mb-3">
                                <FaClock className="w-5 h-5 mr-3" />
                                <span className="text-base">
                                    Senin - Jumat: 09:00 - 17:00
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="w-full pt-10 border-t border-slate-700">
                    <div className="flex flex-wrap items-center justify-center md:justify-between">
                        <p className="text-center md:text-left text-sm text-slate-500 mb-4 md:mb-0">
                            © {new Date().getFullYear()} Rai. Hak Cipta Dilindungi.
                        </p>
                        <p className="text-center text-sm text-slate-500">
                            Dibuat dengan <FaHeart className="inline-block text-red-500 mx-1" /> menggunakan React & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer