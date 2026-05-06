import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  const { icon: Icon, title, description, tags, github, demo, featured } = project

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.1, 1], delay: index * 0.05 }
    },
    hover: { 
      y: -8,
      transition: { duration: 0.2, ease: 'easeOut' }
    }
  }

  return (
    <motion.article 
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: '-50px' }}
      className={`group relative flex flex-col rounded-2xl border p-6 transition-all duration-500 cursor-default 
      ${featured 
        ? 'border-[#1E3A8A]/20 bg-white shadow-xl shadow-[#1E3A8A]/5 hover:shadow-2xl hover:shadow-[#1E3A8A]/10' 
        : 'border-slate-100 bg-white shadow-md hover:shadow-xl hover:shadow-slate-200/50'
      }`}
    >
      {/* Icon – navy square with subtle animation */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="w-12 h-12 rounded-xl bg-[#1E3A8A] flex items-center justify-center text-white mb-5 shadow-lg shadow-[#1E3A8A]/20 transition-all duration-300"
      >
        <Icon size={20} strokeWidth={1.8} />
      </motion.div>

      {/* Title – black with navy on hover */}
      <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2 group-hover:text-[#1E3A8A] transition-colors duration-300">
        {title}
      </h3>

      {/* Description – professional slate */}
      <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1 font-medium">
        {description}
      </p>

      {/* Tech tags – subtle navy tint */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#1E3A8A]/5 border border-[#1E3A8A]/10 text-[#1E3A8A] uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action buttons – consistent with global button styles */}
      <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100">
        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#1E3A8A] px-3 py-2 rounded-lg border border-slate-200 hover:border-[#1E3A8A]/30 hover:bg-[#1E3A8A]/5 transition-all duration-300 no-underline"
        >
          <Github size={14} /> Code
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={demo} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-[#1E3A8A] text-white px-4 py-2 rounded-lg hover:bg-[#1E3A8A]/90 transition-all duration-300 no-underline shadow-sm hover:shadow-md"
        >
          <ExternalLink size={14} /> Live Demo
        </motion.a>
      </div>

      {/* Featured ribbon – refined navy accent */}
      {featured && (
        <div className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider text-[#1E3A8A] bg-white border border-[#1E3A8A]/15 rounded-full px-2.5 py-0.5 shadow-sm">
          Featured
        </div>
      )}
    </motion.article>
  )
}