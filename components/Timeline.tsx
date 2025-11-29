import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, MapPin, Building } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  description: string | string[];
  isLast: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, date, location, description, isLast, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex gap-4 md:gap-8 relative">
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className={`w-4 h-4 rounded-full border-2 border-gold-500 z-10 ${isExpanded ? 'bg-gold-500' : 'bg-slate-900'}`} 
        />
        {!isLast && (
          <div className="w-0.5 h-full bg-slate-800 absolute top-4 bottom-0 left-[7px] md:left-[7px]" />
        )}
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex-1 mb-8"
      >
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`bg-slate-800/50 hover:bg-slate-800 rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
            isExpanded ? 'border-gold-500 shadow-lg shadow-gold-500/10' : 'border-slate-700'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <div className="flex items-center gap-2 text-gold-500 font-medium">
                <Building size={14} />
                <span>{subtitle}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-1 min-w-fit">
               <div className="flex items-center gap-2 text-slate-400 text-sm bg-slate-900/50 px-3 py-1 rounded-full">
                  <Calendar size={12} />
                  <span>{date}</span>
               </div>
               {location && (
                 <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <MapPin size={10} />
                    <span>{location}</span>
                 </div>
               )}
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-4 border-t border-slate-700/50">
                  {Array.isArray(description) ? (
                    <ul className="space-y-2">
                      {description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                          <span className="mt-1.5 min-w-[4px] h-[4px] bg-gold-500 rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="mt-4 flex justify-center">
            <ChevronDown 
              size={16} 
              className={`text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface TimelineProps {
  items: Array<{
    title: string;
    subtitle: string;
    date: string;
    location?: string;
    description: string | string[];
  }>;
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="max-w-4xl mx-auto pl-2">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isLast={index === items.length - 1}
          index={index}
        />
      ))}
    </div>
  );
};

export default Timeline;