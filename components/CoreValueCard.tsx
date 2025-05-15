'use client';
import { motion } from 'framer-motion';

interface CoreValueCardProps {
  id: number;
  title: string;
  content: string[];
  verse: string;
  verseRef: string;
  gradient: string;
  border: string;
}

export default function CoreValueCard({ id, title, content, verse, verseRef, gradient, border }: CoreValueCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`relative group rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl md:hover:-translate-y-2 bg-gradient-to-br ${gradient} bg-opacity-10`}
    >
      <div className={`absolute inset-0 bg-white opacity-90 group-hover:opacity-80 transition-opacity`}></div>
      <div className="relative p-8">
        <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
          <span className="text-3xl font-bold text-white">0{id}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
          <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
            {title}
          </span>
        </h2>
        
        <div className="p-4 md:p-6">
          <div className="space-y-3">
            {content.map((item, index) => (
              <p key={index} className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
                {item}
              </p>
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-4 md:pt-6 border-t border-gray-100">
          <p className="text-sm md:text-base text-center text-gray-600 italic">
            {verse}
            <span className="block text-sm mt-2 text-gray-500">{verseRef}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
