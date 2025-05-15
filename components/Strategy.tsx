'use client';
import { motion } from 'framer-motion';

export default function Strategy() {
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

  const strategies = [
    {
      id: 1,
      title: "以共同追求材料成全聖徒",
      content: [
        "『聖經與生命』的學習與成長，",
        "透過統一的材料幫助信徒在真理上紮根。"
      ],
      verse: "\"為要成全聖徒，各盡其職，建立基督的身體\"",
      verseRef: "以弗所書 4:12",
      gradient: "from-pink-500 to-orange-400",
      border: "border-pink-400"
    },
    {
      id: 2,
      title: "以祭司團成全成全聖徒",
      content: [
        "培育信徒成為『稱職祭司』，",
        "能夠服事神並牧養他人。"
      ],
      verse: "\"你們是被揀選的族類，是有君尊的祭司\"",
      verseRef: "彼得前書 2:9",
      gradient: "from-blue-500 to-teal-400",
      border: "border-blue-400"
    },
    {
      id: 3,
      title: "以幸福小組為平台",
      content: [
        "透過小組環境『宣揚福音』，",
        "讓更多人認識基督並加入教會。"
      ],
      verse: "\"我不以福音為恥，這福音本是神的大能\"",
      verseRef: "羅馬書 1:16",
      gradient: "from-green-500 to-emerald-400",
      border: "border-green-400"
    },
    {
      id: 4,
      title: "以幸福門訓系統成全聖徒",
      content: [
        "系統性培訓讓每位信徒能夠『各盡其職』，",
        "發揮恩賜服事教會。"
      ],
      verse: "\"按著各體的功用彼此相助，便叫身體漸漸增長\"",
      verseRef: "以弗所書 4:16",
      gradient: "from-purple-500 to-indigo-400",
      border: "border-purple-400"
    }
  ];

  return (
    <section id="策略" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {strategies.map((strategy) => (
            <motion.div 
              key={strategy.id}
              variants={fadeInUp}
              className={`relative group rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl md:hover:-translate-y-2 bg-gradient-to-br ${strategy.gradient} bg-opacity-10`}
            >
              <div className={`absolute inset-0 bg-white opacity-90 group-hover:opacity-80 transition-opacity`}></div>
              <div className="relative p-8">
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r ${strategy.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <span className="text-3xl font-bold text-white">0{strategy.id}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
                  <span className={`bg-clip-text text-transparent bg-gradient-to-r ${strategy.gradient}`}>
                    {strategy.title}
                  </span>
                </h2>
                
                <div className="p-4 md:p-6">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
                    {Array.isArray(strategy.content) ? (
                      <>
                        {strategy.content[0]}
                        <br className="hidden md:block" />
                        {strategy.content[1]}
                      </>
                    ) : (
                      strategy.content
                    )}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 md:pt-6 border-t border-gray-100">
                  <p className="text-sm md:text-base text-center text-gray-600 italic">
                    {strategy.verse}
                    <span className="block text-sm mt-2 text-gray-500">{strategy.verseRef}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}