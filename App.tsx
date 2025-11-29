import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
    return () => {
      document.documentElement.classList.remove('scroll-smooth');
    };
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' }
  ];

  return (
    <main className="bg-slate-900 min-h-screen text-slate-200 selection:bg-gold-500 selection:text-slate-900">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
             whileHover={{ scale: 1.05 }}
             className="text-xl font-serif font-bold text-white tracking-wide cursor-pointer"
          >
            P<span className="text-gold-500 animate-pulse">.</span> Pereira
          </motion.div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative group py-1"
                whileHover={{ color: "#ffffff" }}
              >
                {link.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}

export default App;
