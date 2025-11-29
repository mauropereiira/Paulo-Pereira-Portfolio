import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS, LANGUAGES } from '../constants';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  // Radar Chart Calculations
  const numSkills = SKILLS.length;
  const radius = 120;
  const center = 150;
  
  const getCoordinates = (index: number, value: number) => {
    const angle = (Math.PI * 2 * index) / numSkills - Math.PI / 2;
    const r = (value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  const polyPoints = SKILLS.map((skill, i) => {
    const { x, y } = getCoordinates(i, skill.level);
    return `${x},${y}`;
  }).join(' ');


  return (
    <section className="py-24 bg-slate-900 relative" id="skills">
      <div className="container mx-auto px-6">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <span className="text-gold-500 font-serif italic text-lg">Core Competencies</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-2 mb-6">Skills & Proficiency</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Interactive Radar Chart */}
          <div className="relative flex justify-center">
            <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               className="relative"
            >
              <svg width="300" height="300" viewBox="0 0 300 300" className="overflow-visible">
                {/* Background Grid */}
                {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
                  <polygon
                    key={i}
                    points={SKILLS.map((_, idx) => {
                      const { x, y } = getCoordinates(idx, 100 * scale);
                      return `${x},${y}`;
                    }).join(' ')}
                    fill="none"
                    stroke="#334155"
                    strokeWidth="1"
                    className="opacity-50"
                  />
                ))}

                {/* Axes */}
                {SKILLS.map((_, i) => {
                  const { x, y } = getCoordinates(i, 100);
                  return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="#334155" strokeWidth="1" />;
                })}

                {/* Data Polygon */}
                <motion.polygon
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 0.8, pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  points={polyPoints}
                  fill="rgba(212, 175, 55, 0.2)"
                  stroke="#d4af37"
                  strokeWidth="2"
                />

                {/* Interactive Points */}
                {SKILLS.map((skill, i) => {
                  const { x, y } = getCoordinates(i, skill.level);
                  return (
                    <g key={i} onMouseEnter={() => setHoveredSkill(i)} onMouseLeave={() => setHoveredSkill(null)}>
                      <circle cx={x} cy={y} r="6" fill="#0f172a" stroke="#d4af37" strokeWidth="2" className="cursor-pointer hover:scale-150 transition-transform" />
                      {/* Label */}
                      <text 
                        x={x} 
                        y={y - 15} 
                        textAnchor="middle" 
                        fill="white" 
                        className={`text-[10px] uppercase font-bold tracking-wider transition-opacity duration-300 ${hoveredSkill === i ? 'opacity-100' : 'opacity-0 md:opacity-60'}`}
                      >
                        {skill.level}%
                      </text>
                    </g>
                  );
                })}
              </svg>
              
              {/* Skill Labels aligned around center */}
              {SKILLS.map((skill, i) => {
                 const { x, y } = getCoordinates(i, 125);
                 return (
                   <div 
                     key={i} 
                     className="absolute w-24 text-xs font-medium text-slate-400 text-center pointer-events-none"
                     style={{ 
                       left: x - 48, 
                       top: y - 10,
                       textAlign: 'center'
                     }}
                   >
                     {skill.name}
                   </div>
                 )
              })}
            </motion.div>
          </div>

          {/* Languages Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-8">Languages</h3>
            <div className="space-y-6">
              {LANGUAGES.map((lang, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-gold-500/50 transition-all group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-white">{lang.name}</span>
                    <span className="text-gold-500 font-medium text-sm px-2 py-1 bg-gold-500/10 rounded">{lang.level}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                      className={`h-full rounded-full ${
                        idx === 0 ? 'bg-gradient-to-r from-green-500 to-green-600 w-[100%]' :
                        idx < 3 ? 'bg-gradient-to-r from-gold-500 to-gold-600 w-[95%]' :
                        'bg-gradient-to-r from-blue-500 to-blue-600 w-[80%]'
                      }`}
                      style={{ width: idx === 0 ? '100%' : idx < 3 ? '95%' : '85%' }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-slate-500 h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {lang.name === 'Portuguese' ? 'Native proficiency with academic mastery.' :
                     lang.name === 'English' ? 'Full professional proficiency (C2), Cambridge certified.' :
                     lang.name === 'French' ? 'Full professional proficiency (C2), Alliance Française certified.' :
                     'Advanced professional proficiency.'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;