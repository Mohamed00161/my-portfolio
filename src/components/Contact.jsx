import { useState } from 'react'
import { Mail, Github, Linkedin, Send, Check, AlertCircle, Sparkles, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Custom TikTok Icon matching Lucide's stroke weight
const TikTok = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID' // ← Replace with your Formspree endpoint

const CONTACT_LINKS = [
  { icon: Mail,     label: 'Email', value: 'mohamedosmanAdhi@gmail.com', href: 'mailto:mohamedosmanadhi@gmail.com' },
  { icon: Github,   label: 'GitHub', value: 'Mohamed00161', href: 'https://github.com/Mohamed00161' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Mohamed Osman', href: 'https://www.linkedin.com/in/mohamed-osman-824280269/' },
  { icon: TikTok,   label: 'TikTok', value: '@codewithmoha', href: 'https://www.tiktok.com/@codewithmoha' },
]

const EMPTY = { firstName: '', lastName: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { 
        setStatus('success')
        setForm(EMPTY)
        setTimeout(() => setStatus('idle'), 5000)
      } else { 
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch { 
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputClasses = "w-full bg-white border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl px-5 py-3.5 text-sm outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10 transition-all duration-200 font-medium"

  return (
    <section id="contact" className="py-24 px-6 bg-white relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1E3A8A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1E3A8A]/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#1E3A8A]/5 px-4 py-2 rounded-full text-[#1E3A8A] mb-6"
          >
            <Sparkles size={14} />
            <span className="text-xs font-bold tracking-wider uppercase">Get in Touch</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4"
          >
            Let's work<span className="text-[#1E3A8A]"> together</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto md:mx-0"
          >
            Have a project in mind? I'd love to hear about it. My inbox is always open for interesting collaborations.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E3A8A] mb-6 flex items-center gap-2">
                <span className="w-6 h-px bg-[#1E3A8A]/30"></span>
                Connect
              </h3>
              <div className="grid gap-4">
                {CONTACT_LINKS.map(({ icon: Icon, label, value, href }, index) => (
                  <motion.a 
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-[#1E3A8A]/20 hover:shadow-lg hover:shadow-[#1E3A8A]/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-white text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-300">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">{label}</p>
                        <p className="text-sm font-semibold text-slate-900">{value}</p>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-[#1E3A8A] group-hover:translate-x-0.5 transition-all" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Response Time Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/90 p-6 text-white shadow-xl"
            >
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.15em] opacity-80 mb-2">Response Time</p>
                <p className="text-xl font-semibold">⚡ 24 hours or less</p>
                <p className="text-sm opacity-80 mt-2">I prioritize clear communication and quick responses.</p>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            </motion.div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xl shadow-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 ml-1">First name *</label>
                  <input 
                    name="firstName" 
                    value={form.firstName} 
                    onChange={handleChange} 
                    className={inputClasses} 
                    placeholder="mohamed" 
                    required 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 ml-1">Last name *</label>
                  <input 
                    name="lastName" 
                    value={form.lastName} 
                    onChange={handleChange} 
                    className={inputClasses} 
                    placeholder="osman" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 ml-1">Email address *</label>
                <input 
                  name="email" 
                  type="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  className={inputClasses} 
                  placeholder="mohamedosmanadhi@example.com" 
                  required 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 ml-1">Subject *</label>
                <input 
                  name="subject" 
                  value={form.subject} 
                  onChange={handleChange} 
                  className={inputClasses} 
                  placeholder="Project collaboration" 
                  required 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 ml-1">Message *</label>
                <textarea 
                  name="message" 
                  value={form.message} 
                  onChange={handleChange} 
                  rows={4} 
                  className={`${inputClasses} resize-none`} 
                  placeholder="Tell me about your project..." 
                  required 
                />
              </div>

              <motion.button 
                whileHover={{ scale: status === 'idle' ? 1.01 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.99 : 1 }}
                type="submit" 
                disabled={status === 'sending'} 
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300
                  ${status === 'success' ? 'bg-emerald-600 text-white' : 
                    status === 'error' ? 'bg-red-600 text-white' : 
                    status === 'sending' ? 'bg-slate-300 text-slate-600 cursor-not-allowed' : 
                    'bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90 hover:shadow-lg hover:shadow-[#1E3A8A]/20'}`}
              >
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Check size={18} strokeWidth={2.5} /> Message Sent!
                    </motion.span>
                  )}
                  {status === 'error' && (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <AlertCircle size={18} strokeWidth={2.5} /> Failed — Try Again
                    </motion.span>
                  )}
                  {status === 'sending' && (
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </motion.span>
                  )}
                  {status === 'idle' && (
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Send Message <Send size={16} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
             </form>

             {/* Form note */}
             <p className="text-xs text-slate-400 text-center mt-4">
               I'll never share your information. Your privacy matters.
             </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}