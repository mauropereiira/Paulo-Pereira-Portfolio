import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import Timeline from './Timeline';

const Experience: React.FC = () => {
  const timelineItems = EXPERIENCE.map(job => ({
    title: job.role,
    subtitle: job.company,
    date: job.period,
    location: job.location,
    description: job.description
  }));

  return (
    <section className="py-24 bg-slate-900" id="experience">
      <div className="container mx-auto px-6">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <span className="text-gold-500 font-serif italic text-lg">Professional Journey</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-2 mb-6">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full" />
        </motion.div>

        <Timeline items={timelineItems} />
      </div>
    </section>
  );
};

export default Experience;