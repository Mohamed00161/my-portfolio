import { Github, Twitter, Linkedin, Rss, ArrowUpRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const SOCIALS = [
  { icon: Github,   href: 'https://github.com/Mohamed00161',   label: 'GitHub' },
  { icon: Twitter,  href: 'https://twitter.com/codewithmoha',  label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/in/mohamed-osman-824280269/', label: 'LinkedIn' },
  { icon: Rss,      href: '/blog',                label: 'Blog' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 bg-white border-t border-slate-200 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Upper Footer: CTA & Status */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3"
            >
              Let's build something{' '}
              <span className="text-[#1E3A8A]">exceptional.</span>
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Available for new projects
              </span>
            </motion.div>
          </div>

          <motion.a 
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:mohamedosmanadhi@gmail.com" 
            className="group flex items-center gap-3 bg-[#1E3A8A] text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[#1E3A8A]/90 hover:shadow-lg hover:shadow-[#1E3A8A]/25 no-underline"
          >
            <span>Get in touch</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Lower Footer: Copyright & Socials */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 gap-6"
        >
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">
              © {currentYear} Mohamed Osman
            </p>
            <p className="text-slate-400 text-[10px] font-medium">
              Built with React, Tailwind & precision.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }, index) => (
              <motion.a 
                key={label} 
                href={href} 
                aria-label={label} 
                target="_blank" 
                rel="noopener noreferrer" 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ y: -4 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:text-[#1E3A8A] hover:border-[#1E3A8A]/30 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <Icon size={16} strokeWidth={1.8} />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  )
}