import { motion } from 'framer-motion'
import { Code, Server, Shield, Zap, Rocket, GitBranch } from 'lucide-react'

const STATS = [
  { num: '1+',  label: 'Years of Experience' },
  { num: '12',  label: 'Projects Shipped' },
  { num: '8k', label: 'GitHub Stars' },
  { num: '99',  label: 'Lighthouse Score' },
]

const FEATURES = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Modular, maintainable, and well-documented codebases.',
  },
  {
    icon: Server,
    title: 'Scalable Backend',
    description: 'High-performance APIs and microservices architecture.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Robust authentication, data validation, and secure practices.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with 99+ Lighthouse scores.',
  },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const statVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'backOut' } },
  }

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-[#1E3A8A]/5 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        {/* Left Column – Text & Stats */}
        <motion.div 
          className="order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A]/5 border border-[#1E3A8A]/10 text-[#1E3A8A] text-[11px] font-bold tracking-wider uppercase mb-6">
              Professional Background
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.2]"
          >
            Engineering results<br />
            <span className="text-[#1E3A8A] relative inline-block">
              with precision.
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#1E3A8A]/10 rounded-full -z-10" />
            </span>
          </motion.h2>

          <motion.div 
            variants={itemVariants}
            className="space-y-5 text-slate-600 leading-relaxed text-base md:text-lg font-medium"
          >
            <p>
              I'm <span className="text-slate-900 font-bold border-b-2 border-[#1E3A8A] pb-0.5">Mohamed Osman</span>, a Full-Stack Developer and Network Technician.
            </p>
            <p>
              My work focuses on the intersection of clean, modern frontend architecture and robust backend infrastructure. I build systems that are not only visually striking but also technically sound, scalable, and secure.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 gap-6 mt-12"
          >
            {STATS.map(({ num, label }) => (
              <motion.div 
                key={label} 
                variants={statVariants}
                className="border-l-4 border-[#1E3A8A] pl-5 py-2 bg-gradient-to-r from-[#1E3A8A]/0 to-[#1E3A8A]/0 hover:to-[#1E3A8A]/5 transition-all duration-300 rounded-r-xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-slate-900 tabular-nums">
                  {num}
                </div>
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.15em] mt-1">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column – Useful Features Grid (replaces photo) */}
        <motion.div 
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={feature.title}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#1E3A8A]/30 hover:shadow-xl hover:shadow-[#1E3A8A]/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center text-[#1E3A8A] mb-4 group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-300">
                  <feature.icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Optional: Extra callout or tech stack highlight */}
          <div className="mt-8 p-5 rounded-2xl bg-[#1E3A8A]/5 border border-[#1E3A8A]/10">
            <div className="flex items-center gap-3 text-[#1E3A8A] mb-2">
              <Rocket size={18} />
              <span className="text-[11px] font-bold uppercase tracking-wider">Tech Stack Focus</span>
            </div>
            <p className="text-sm text-slate-600">
              React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Docker, AWS.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}