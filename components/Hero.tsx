import React, { useRef } from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { PROFILE, PROFILE_IMAGE_URL } from '../constants';
import { Mail, MapPin, Languages, MessageSquare, BookOpen, Quote } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse movement effect for background blobs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };

  // Parallax spring config
  const springConfig = { damping: 25, stiffness: 150 };
  const moveX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig);
  const moveXInverse = useSpring(useTransform(mouseX, [0, 1], [20, -20]), springConfig);
  const moveYInverse = useSpring(useTransform(mouseY, [0, 1], [20, -20]), springConfig);

  // Floating icons configuration
  const floatingIcons = [
    { Icon: Languages, x: '10%', y: '20%', delay: 0 },
    { Icon: MessageSquare, x: '85%', y: '15%', delay: 1 },
    { Icon: BookOpen, x: '20%', y: '80%', delay: 2 },
    { Icon: Quote, x: '80%', y: '75%', delay: 3 },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20"
    >
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
         <motion.div 
            style={{ x: moveX, y: moveY }}
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/4 -left-1/4 w-2/3 h-2/3 bg-blue-900/20 rounded-full blur-3xl"
         />
         <motion.div 
            style={{ x: moveXInverse, y: moveYInverse }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-indigo-900/10 rounded-full blur-3xl"
         />
         
         {/* Floating Code/Language Particles */}
         {floatingIcons.map(({ Icon, x, y, delay }, index) => (
           <motion.div
             key={index}
             className="absolute text-slate-700/20"
             style={{ left: x, top: y }}
             animate={{ 
               y: [0, -20, 0],
               opacity: [0.2, 0.5, 0.2]
             }}
             transition={{ 
               duration: 4, 
               repeat: Infinity, 
               delay: delay,
               ease: "easeInOut"
             }}
           >
             <Icon size={48} />
           </motion.div>
         ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 mb-4 border border-gold-500/50 bg-gold-500/5 text-gold-500 rounded-full text-sm tracking-wide uppercase font-semibold backdrop-blur-sm"
          >
            Senior Interpreter & Translator
          </motion.div>
          
          <div className="overflow-hidden mb-6">
            <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-serif font-bold text-slate-100 leading-tight"
            >
              {PROFILE.name.split(' ')[0]} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
                {PROFILE.name.split(' ')[1]}
              </span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            Bridging communication gaps with <span className="text-gold-500 font-semibold">5,000+ hours</span> of professional interpretation. Fluent in Portuguese, English, and French.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="flex flex-col md:flex-row gap-4 justify-center md:justify-start text-slate-300 text-sm font-medium"
          >
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50"
             >
                <MapPin size={18} className="text-gold-500" />
                {PROFILE.contact.location}
             </motion.div>
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer group"
             >
                <Mail size={18} className="text-gold-500 group-hover:text-white transition-colors" />
                <a href={`mailto:${PROFILE.contact.email}`} className="group-hover:text-white transition-colors">
                  {PROFILE.contact.email}
                </a>
             </motion.div>
          </motion.div>
        </div>

        {/* Image Display */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center group order-1 md:order-2"
        >
          {/* Animated Decorative frame */}
          <motion.div 
            animate={{ rotate: [6, 3, 6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 border-2 border-slate-700/50 translate-x-4 translate-y-4 rounded-2xl z-0" 
          />
          
          <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800"
          >
             {/* Use static profile image provided by user */}
             <img 
               src={PROFILE_IMAGE_URL} 
               alt="Paulo Pereira" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
             
             {/* Shine Effect */}
             <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:animate-shine pointer-events-none transition-all duration-1000" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
