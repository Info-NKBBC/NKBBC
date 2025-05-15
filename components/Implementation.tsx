'use client';
import { motion } from 'framer-motion';

export default function Implementation() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cards = [
    {
      id: 1,
      title: "以聖經為基礎",
      content: "聖經是我們信仰的唯一權威，一切的教導和實踐必須以聖經真理為根基。",
      verse: "\"聖經都是神所默示的，於教訓、督責、使人歸正、教導人學義都是有益的\"",
      verseRef: "提摩太後書 3:16",
      gradient: "from-blue-500 to-indigo-500",
      border: "border-blue-400"
    },
    {
      id: 2,
      title: "以基督和教會的見證為目標",
      content: "我們的終極目標是彰顯基督並建造教會，使基督的身體得以成長並彰顯神的榮耀。",
      verse: "\"為要成全聖徒，各盡其職，建立基督的身體\"",
      verseRef: "以弗所書 4:12",
      gradient: "from-purple-500 to-pink-500",
      border: "border-purple-400"
    },
    {
      id: 3,
      title: "以生命追求為實行之路",
      content: "透過生命的追求、事奉建造、傳揚福音和神人生活，建立並實踐基督徒生活的各個層面。",
      verse: "\"使你們行事為人對得起主，凡事蒙祂喜悅\"",
      verseRef: "歌羅西書 1:10",
      gradient: "from-teal-500 to-emerald-500",
      border: "border-teal-400"
    },
    {
      id: 4,
      title: "均衡長進的門徒培育",
      content: ["培養在聖經、生命、事奉、福音和神人生活各方面均衡成長的門徒，使每位信徒都能全面發展。"],
      verse: "\"我們要在真道上同歸於一，認識神的兒子，得以長大成人\"",
      verseRef: "以弗所書 4:13",
      gradient: "from-amber-500 to-orange-500",
      border: "border-amber-400"
    }
  ];

  return (
    <section id="實行之路" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {cards.map((card) => {
            // 處理內容，確保為陣列格式
            let contentToRender;
            if (Array.isArray(card.content)) {
              // 如果已經是陣列，直接使用
              contentToRender = card.content[0];
            } else {
              // 如果是字串，處理換行
              const contentParts = card.content.split('，').map((part: string) => part + '，');
              if (contentParts.length > 1) {
                contentParts[contentParts.length - 1] = contentParts[contentParts.length - 1].slice(0, -1);
              }
              contentToRender = contentParts.join('');
            }
            
            return (
              <motion.div 
                key={card.id}
                variants={fadeInUp}
                className={`relative group rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl md:hover:-translate-y-2 bg-gradient-to-br ${card.gradient} bg-opacity-10`}
              >
                <div className={`absolute inset-0 bg-white opacity-90 group-hover:opacity-80 transition-opacity`}></div>
                <div className="relative p-8">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r ${card.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <span className="text-3xl font-bold text-white">0{card.id}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
                    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${card.gradient}`}>
                      {card.title}
                    </span>
                  </h2>
                  
                  <div className="p-4 md:p-6">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
                      {contentToRender}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 md:pt-6 border-t border-gray-100">
                    <p className="text-sm md:text-base text-center text-gray-600 italic">
                      {card.verse}
                      <span className="block text-sm mt-2 text-gray-500">{card.verseRef}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}