import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Globe, Loader2 } from 'lucide-react';
import { translateText } from '../services/gemini';

const TranslationDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('French');
  const [isLoading, setIsLoading] = useState(false);

  const handleTranslate = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    const result = await translateText(input, language);
    setOutput(result);
    setIsLoading(false);
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" id="demo">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full text-gold-500 text-sm font-semibold mb-4 border border-slate-700">
            <Sparkles size={16} />
            <span>Powered by Gemini 2.5</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Live Interpretation Demo
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Experience the intersection of my linguistic expertise and modern AI technology. 
            Enter text below to simulate an instant interpretation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">
          
          {/* Input Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700 flex flex-col shadow-xl"
          >
             <label className="text-sm font-semibold text-slate-400 mb-4 block">Input (Any Language)</label>
             <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something here to translate... e.g., 'Hello, I need a medical interpreter.'"
                className="w-full h-40 bg-slate-900/50 rounded-xl border border-slate-700 p-4 text-white placeholder-slate-600 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none resize-none transition-all"
             />
             <div className="mt-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                   <span className="text-slate-500 text-sm">Target:</span>
                   <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-slate-900 text-white text-sm py-1 px-3 rounded border border-slate-700 focus:border-gold-500 outline-none"
                   >
                     <option value="French">French</option>
                     <option value="Portuguese">Portuguese</option>
                     <option value="Spanish">Spanish</option>
                     <option value="English">English</option>
                   </select>
                </div>
                <button 
                  onClick={handleTranslate}
                  disabled={isLoading || !input.trim()}
                  className="bg-gold-500 hover:bg-gold-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 font-bold py-2 px-6 rounded-lg transition-colors flex items-center gap-2"
                >
                  {isLoading ? <Loader2 className="animate-spin" size={18} /> : 'Translate'}
                  {!isLoading && <ArrowRight size={18} />}
                </button>
             </div>
          </motion.div>

          {/* Output Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-850 rounded-2xl p-6 border border-slate-700 flex flex-col shadow-xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Globe size={100} className="text-white" />
             </div>
             <label className="text-sm font-semibold text-slate-400 mb-4 block">Interpreter Output</label>
             <div className="flex-grow bg-slate-900/30 rounded-xl border border-slate-700/50 p-4 relative">
                {output ? (
                  <p className="text-lg text-slate-200 leading-relaxed font-serif animate-in fade-in duration-500">
                    "{output}"
                  </p>
                ) : (
                  <div className="h-full flex items-center justify-center text-slate-600 text-sm italic">
                    Translation will appear here...
                  </div>
                )}
             </div>
             <div className="mt-4 text-xs text-slate-500 text-right">
                Simulating professional context & tone
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TranslationDemo;