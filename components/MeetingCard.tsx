'use client';
import { motion } from 'framer-motion';

interface MeetingCardProps {
  id: number;
  title: string;
  description: string;
  time: string;
  location: string;
  target: string;
  gradient: string;
}

export default function MeetingCard({ id, title, description, time, location, target, gradient }: MeetingCardProps) {
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
        <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
          <span className="text-3xl font-bold text-white">0{id}</span>
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
            {title}
          </span>
        </h2>
        
        <div className="space-y-4">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {description}
          </p>
          
          <div className="mt-4 space-y-2">
            <p className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {time}
            </p>
            <p className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </p>
            <p className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              對象：{target}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
