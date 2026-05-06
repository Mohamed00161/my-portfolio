import { useState, useEffect } from 'react'
import { Mail, Menu, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Track scroll position and active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Determine active section
      const sections = NAV_LINKS.map(link => link.href.substring(1))
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // initial check
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-lg shadow-slate-200/30' 
          : 'bg-transparent'
      }`}
    >
      {/* Subtle glow effect on scroll */}
      {scrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
      )}
      
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo with enhanced styling */}
        <motion.a 
          href="#home" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative text-2xl font-bold tracking-tighter text-slate-900 no-underline group"
        >
          <span className="relative">
            MO
            <span className="text-[#1E3A8A]">.</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A]/50 group-hover:w-full transition-all duration-500" />
          </span>
        </motion.a>

        {/* Desktop Navigation with active link indicator */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }, index) => {
            const section = href.substring(1)
            const isActive = activeSection === section
            
            return (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <a 
                  href={href} 
                  className={`relative text-[13px] font-bold uppercase tracking-wider transition-colors duration-300 no-underline ${
                    isActive 
                      ? 'text-[#1E3A8A]' 
                      : 'text-slate-500 hover:text-[#1E3A8A]'
                  }`}
                >
                  {label}
                  {/* Active indicator */}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#1E3A8A] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Hover underline (only when not active) */}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1E3A8A]/60 group-hover:w-full transition-all duration-300 ease-out rounded-full" />
                  )}
                </a>
              </motion.li>
            )
          })}
        </ul>

        {/* Hire Me Button (Desktop) - refined with subtle gradient */}
        <motion.a 
          href="#contact" 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A]/90 text-white hover:from-[#1E3A8A]/90 hover:to-[#1E3A8A] transition-all duration-300 no-underline shadow-md hover:shadow-lg hover:shadow-[#1E3A8A]/25"
        >
          <Mail size={14} /> Hire Me
        </motion.a>

        {/* Mobile Menu Button - refined animation */}
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 hover:text-[#1E3A8A] hover:border-[#1E3A8A]/30 transition-all duration-300 focus:outline-none shadow-sm" 
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu Dropdown - enhanced with glassmorphism */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.1, 1] }}
            className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-2">
              {NAV_LINKS.map(({ label, href }, index) => {
                const section = href.substring(1)
                const isActive = activeSection === section
                
                return (
                  <motion.a 
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    href={href} 
                    onClick={handleLinkClick} 
                    className={`relative text-lg font-bold no-underline py-3 px-4 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-[#1E3A8A]/5 text-[#1E3A8A] border-l-4 border-[#1E3A8A]'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#1E3A8A]'
                    }`}
                  >
                    {label}
                  </motion.a>
                )
              })}
              
              <motion.a 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                href="#contact" 
                onClick={handleLinkClick} 
                className="flex items-center justify-center gap-2 w-full py-3.5 mt-4 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A]/90 text-white font-bold text-sm uppercase tracking-wider hover:shadow-md transition-all shadow-sm"
              >
                <Mail size={16} /> Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}