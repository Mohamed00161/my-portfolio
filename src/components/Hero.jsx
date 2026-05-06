import { ArrowDown, Github, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { duration: 0.7, delay: 0.3, ease: 'easeOut' }
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden bg-white">
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(#1E3A8A 1px, transparent 1px), linear-gradient(90deg, #1E3A8A 1px, transparent 1px)', 
          backgroundSize: '48px 48px' 
        }} 
      />

      {/* Soft Navy Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#1E3A8A]/5 to-[#1E3A8A]/10 blur-[120px]"
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability Badge - refined */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1E3A8A]/20 bg-[#1E3A8A]/5 text-[#1E3A8A] text-[12px] font-black tracking-[0.15em] uppercase mb-8 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for opportunities
            </motion.div>

            {/* Main Heading - More dynamic and bold */}
            <motion.h1 
              variants={itemVariants}
              className="text-[clamp(3rem,12vw,5.5rem)] font-black leading-[1.05] tracking-tighter mb-6"
            >
              <span className="block text-slate-900">Building the</span>
              <span className="block relative mt-2">
                <span className="bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A] to-[#1E3A8A]/70 bg-clip-text text-transparent animate-gradient-x">
                  Modern Web
                </span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                  className="absolute bottom-1 left-0 h-3 bg-gradient-to-r from-[#1E3A8A]/20 to-transparent -z-10 rounded-full"
                />
              </span>
            </motion.h1>

            {/* Description - Improved readability */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              I'm <span className="text-slate-900 font-black border-b-2 border-[#1E3A8A] pb-1">Mohamed Osman</span>, a Full-Stack Developer & Network Technician. I engineer high-performance interfaces backed by rock-solid infrastructure.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-5 items-center justify-center lg:justify-start"
            >
              <motion.a 
                href="#projects" 
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A]/90 text-white font-black text-sm uppercase tracking-wider hover:from-[#1E3A8A]/90 hover:to-[#1E3A8A] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#1E3A8A]/30 no-underline"
              >
                View Projects 
                <ArrowDown size={16} className="transition-transform duration-200 group-hover:translate-y-1" />
              </motion.a>
              
              <motion.a 
                href="https://github.com/Mohamed00161" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-slate-200 bg-white text-slate-700 font-black text-sm uppercase tracking-wider hover:border-[#1E3A8A] hover:text-[#1E3A8A] hover:bg-[#1E3A8A]/5 transition-all duration-300 no-underline shadow-sm"
              >
                <Github size={16} /> GitHub
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full max-w-[340px] md:max-w-[380px]">
              
              {/* Navy offset frame */}
              <div className="absolute top-5 -right-5 w-full h-full border-2 border-[#1E3A8A]/30 rounded-2xl -z-10" />

              {/* Main image card */}
              <div className="relative z-10 rounded-2xl overflow-hidden bg-white p-2 shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-50">
                  <img
                    src="/images/profile.png"
                    alt="Mohamed Osman – Full-Stack Developer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/600x800/e2e8f0/1e3a8a?text=MO'
                    }}
                  />
                  
                  {/* Active status badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-md border border-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981] animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-wider">Open to work</span>
                  </motion.div>

                  {/* Bottom info bar – solid navy gradient */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#1E3A8A] to-[#1E3A8A]/95">
                    <div className="text-white font-bold text-lg tracking-tight">Mohamed Osman</div>
                    <div className="text-blue-200 text-[9px] font-bold uppercase tracking-[0.2em] mt-0.5">
                      MERN | Network Eng
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating experience card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-4 -right-4 z-20 bg-white border-2 border-[#1E3A8A] rounded-xl px-4 py-2 shadow-xl"
              >
                <div className="text-[#1E3A8A] font-black text-2xl leading-none">5+</div>
                <div className="text-slate-700 text-[8px] uppercase font-black tracking-widest mt-0.5 text-center">
                  Years<br />excellence
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator - refined */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-[11px] font-black tracking-[0.3em] uppercase"
      >
        <span>Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-[#1E3A8A]/60 to-transparent"
        />
      </motion.div>

      {/* Add animation for gradient if needed (Tailwind requires custom class, but here we define keyframes inline) */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  )
}