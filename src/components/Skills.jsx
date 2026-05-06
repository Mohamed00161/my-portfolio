import { motion } from 'framer-motion'
import { CheckCircle2, Cpu, Globe, Database, Terminal, Sparkles } from 'lucide-react'

const SKILL_CATEGORIES = [
  {
    label: 'Frontend Engineering',
    icon: Globe,
    description: 'Crafting immersive interfaces with focus on performance and accessibility.',
    skills: ['JavaScript (ES6+)', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    label: 'Backend Architecture',
    icon: Cpu,
    description: 'Architecting robust server-side logic and scalable microservices.',
    skills: ['Node.js', 'Express', 'REST APIs', 'Prisma', 'WebSockets'],
  },
  {
    label: 'Data & Infrastructure',
    icon: Database,
    description: 'Designing high-availability database schemas and cloud deployments.',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'Vercel', 'AWS S3'],
  },
  {
    label: 'Tooling & Quality',
    icon: Terminal,
    description: 'Optimizing development workflows and ensuring code integrity.',
    skills: ['Vite', 'Git', 'CI/CD Pipelines', 'Vitest', 'Figma'],
  },
]

const MARQUEE_ITEMS = [
  'JavaScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB',
  'Tailwind CSS', 'Vite', 'Framer Motion', 'AWS', 'Figma', 'Git', 'Vitest'
]

const springTransition = { type: 'spring', stiffness: 100, damping: 20 }

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Subtle navy grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#1E3A8A 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      {/* Soft background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-l from-[#1E3A8A]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A]/5 border border-[#1E3A8A]/10 text-[#1E3A8A] text-[11px] font-bold tracking-wider uppercase mb-6"
            >
              <Sparkles size={12} />
              Technical Proficiency
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
            >
              The Stack<span className="text-[#1E3A8A]">.</span>
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 font-medium max-w-xs border-l-2 border-slate-200 pl-6 hidden md:block"
          >
            A curated selection of technologies chosen for speed, scalability, and developer experience.
          </motion.p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, ...springTransition }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#1E3A8A]/30 hover:shadow-xl hover:shadow-[#1E3A8A]/5 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] flex items-center justify-center text-white mb-6 shadow-md shadow-[#1E3A8A]/20 group-hover:scale-105 transition-transform duration-300">
                <cat.icon size={22} strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {cat.label}
              </h3>
              
              <p className="text-sm text-slate-600 mb-6 font-medium leading-relaxed">
                {cat.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-[#1E3A8A]/5 border border-[#1E3A8A]/10 text-[#1E3A8A] uppercase tracking-wider"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee – Improved visibility */}
        <div className="mt-20 pt-10 border-t border-slate-200">
          <div className="relative overflow-hidden py-4">
            <div className="flex gap-12 w-max animate-marquee">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-[#1E3A8A] transition-colors cursor-default"
                >
                  <span>{item}</span>
                  <div className="w-1 h-1 bg-[#1E3A8A]/20 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}