import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { BookOpen, Star, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" id="projects">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-gold-500 font-serif italic text-lg">Selected Works</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-2">Portfolio Showcase</h2>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="max-w-md text-slate-400 text-sm md:text-right"
          >
             High-impact translation and editorial projects spanning literature, tourism, and cultural criticism.
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] perspective-1000"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 rounded-2xl transition-opacity duration-500`} />
              
              <div className="relative h-full bg-slate-900/40 backdrop-blur-sm border border-slate-800 group-hover:border-gold-500/50 rounded-2xl p-6 flex flex-col justify-between transition-colors duration-300">
                <div>
                   <div className="flex justify-between items-start mb-4">
                     <span className="px-3 py-1 bg-slate-950/50 rounded-full text-xs text-gold-500 font-medium border border-gold-500/20">
                       {project.year}
                     </span>
                     <ArrowUpRight className="text-slate-500 group-hover:text-gold-500 transition-colors" size={20} />
                   </div>
                   
                   <div className="mb-4">
                     <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight group-hover:text-gold-500 transition-colors">
                       {project.title}
                     </h3>
                     <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{project.role}</p>
                   </div>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                    {project.description}
                  </p>
                  
                  <div className="pt-4 border-t border-slate-700/50 flex items-center gap-2 text-xs text-slate-500">
                    {project.type === 'Book Translation' && <BookOpen size={14} />}
                    {project.type === 'Editorial' && <Star size={14} />}
                    <span>{project.type}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;