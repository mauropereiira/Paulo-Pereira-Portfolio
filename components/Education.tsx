import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, CERTIFICATES } from '../constants';
import Timeline from './Timeline';
import { Award } from 'lucide-react';

const Education: React.FC = () => {
  const timelineItems = EDUCATION.map(edu => ({
    title: edu.degree,
    subtitle: edu.institution,
    date: edu.grade ? `Grade: ${edu.grade}` : 'Completed',
    description: edu.details || ''
  }));

  return (
    <section className="py-24 bg-slate-850" id="education">
      <div className="container mx-auto px-6">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <span className="text-gold-500 font-serif italic text-lg">Academic Background</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-2 mb-6">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
             <Timeline items={timelineItems} />
          </div>

          <div className="lg:col-span-1">
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-slate-900 p-8 rounded-2xl border border-slate-700 sticky top-24"
             >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gold-500/10 rounded-lg text-gold-500">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Certificates</h3>
                </div>
                
                <div className="space-y-4">
                  {CERTIFICATES.map((cert, index) => (
                    <div key={index} className="p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-gold-500/50 transition-colors">
                      <p className="text-slate-200 font-medium leading-relaxed">{cert}</p>
                    </div>
                  ))}
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;