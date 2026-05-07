import { useState } from 'react'
import { Github, ExternalLink, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * PROJECT DATA – Update with your actual image paths and links
 */
const PROJECTS = [
  {
    id: '1',
    image: '/images/complaint.png',
    title: 'Complaints System',
    description: 'A full-stack civic complaints management platform that lets citizens report issues and enables admins to dispatch field teams, track resolutions in real time, and generate department-level analytics reports.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    featured: true,
    github: 'https://github.com/Mohamed00161/complaints-system',
    demo: 'https://complaints-system.vercel.app',
  },
  {
    id: '2',
    image: '/images/gsa.png',
    title: 'GSA Mini Market',
    description: 'An online farmers market platform where local vendors list fresh produce. Customers browse categories and order directly from local farmers with a clean interface.',
    tags: ['React', 'Tailwind', 'Node.js'],
    featured: true,
    github: 'https://github.com/Mohamed00161/gsa-mini-market',
    demo: 'https://gsa-market.vercel.app',
  },
  {
    id: '3',
    image: '/images/book.png',
    title: 'Book Store',
    description: 'An online bookstore featuring search by title or author, category filtering, cart management, and secure user authentication.',
    tags: ['React', 'Node.js', 'Express', 'JWT'],
    featured: true,
    github: 'https://github.com/Mohamed00161/bookstore',
    demo: 'https://bookstore-lime-iota.vercel.app',
  },
  {
    id: '4',
    image: '/images/travel.png',
    title: 'Travel Agency',
    description: 'A travel management company crafting personalized experiences, including flight bookings and curated tour packages.',
    tags: ['React', 'Claude API', 'Node.js', 'Gemini'],
    featured: false,
    github: 'https://github.com/Mohamed00161/travel-agency',
    demo: 'https://cocoa-travel-agency.vercel.app',
  },
  {
    id: '5',
    image: '/images/wildlife.png',
    title: 'Wildlife Adventure',
    description: 'Ethical safari experiences focused on the preservation of endangered species, contributing to Kenya’s biodiversity.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    featured: false,
    github: 'https://github.com/Mohamed00161/wildlife-adventure',
    demo: 'https://wildlife-w7so.vercel.app',
  },
  {
    id: '6',
    image: '/images/physical.png',
    title: 'Next Level Physique',
    description: 'A modern fitness solution focused on user experience and data-driven progress. I engineered this project to handle real-world gym scenarios, including membership tiering and workout scheduling.',
    tags: ['React', 'WebRTC', 'Node.js', 'Redis'],
    featured: false,
    github: 'https://github.com/Mohamed00161/NextLevel-Physique',
    demo: 'https://next-level-physique.vercel.app/',
  },
]

/**
 * ANIMATION VARIANTS
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.1, 1] } 
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
}

/**
 * PROJECT CARD COMPONENT
 */
function ProjectCard({ project }) {
  const { image, title, description, tags, github, demo, featured } = project

  return (
    <motion.article 
      variants={cardVariants}
      layout
      className={`group flex flex-col rounded-2xl border overflow-hidden bg-white transition-all duration-500
      ${featured 
        ? 'border-[#1E3A8A]/20 shadow-xl shadow-[#1E3A8A]/5 hover:shadow-2xl hover:shadow-[#1E3A8A]/10' 
        : 'border-slate-100 shadow-md hover:shadow-xl hover:shadow-slate-200/50'
      }`}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { e.target.src = 'https://placehold.co/600x400/e2e8f0/1e3a8a?text=Project+Preview' }}
        />
        
        {/* Hover overlay with navy background */}
        <div className="absolute inset-0 bg-[#1E3A8A]/90 opacity-0 group-hover:opacity-100 transition-all duration-400 backdrop-blur-sm flex items-center justify-center gap-4">
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-white text-[#1E3A8A] rounded-full hover:scale-110 transition-transform shadow-lg"
            aria-label="Live demo"
          >
            <ExternalLink size={20} />
          </a>
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-white/20 text-white rounded-full backdrop-blur-md hover:scale-110 transition-transform border border-white/30"
            aria-label="GitHub repository"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 capitalize">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-2 font-medium">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.filter(tag => tag.trim() !== "").map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#1E3A8A]/5 text-[#1E3A8A] border border-[#1E3A8A]/10 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

/**
 * MAIN PROJECTS SECTION
 */
export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const featuredOnly = PROJECTS.filter(p => p.featured === true)
  const displayedProjects = showAll ? PROJECTS : featuredOnly

  return (
    <section id="projects" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#1E3A8A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#1E3A8A]/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A]/5 border border-[#1E3A8A]/10 text-[#1E3A8A] text-[11px] font-bold tracking-wider uppercase mb-6"
            >
              <Sparkles size={12} />
              Portfolio Selection
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-tight"
            >
              Selected Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 max-w-xl"
            >
              A curated collection of my most impactful projects, from full-stack applications to collaborative platforms.
            </motion.p>
          </div>
          
          {/* Stats cards – matching about section style */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex gap-8 border-l border-slate-200 pl-8"
          >
            <div>
              <div className="text-3xl font-bold text-slate-900">{PROJECTS.length}</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E3A8A]">{featuredOnly.length}</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Featured</div>
            </div>
          </motion.div>
        </div>

        {/* Projects grid with animated transition */}
        <motion.div 
          key={showAll ? 'all' : 'featured'}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle button – navy primary style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1E3A8A] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[#1E3A8A]/90 hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-[#1E3A8A]/20 cursor-pointer active:scale-95"
          >
            {showAll ? (
              <><ChevronUp size={16} /> Show Featured Only</>
            ) : (
              <><ChevronDown size={16} /> View All {PROJECTS.length} Projects</>
            )}
          </button>
        </motion.div>

      </div>
    </section>
  )
}