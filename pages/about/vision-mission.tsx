import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function VisionMission() {
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

  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Head>
        <title>異象與使命 | 南科福氣教會</title>
        <meta name="description" content="了解南科福氣教會的異象與使命，我們如何服務社區並傳播福音。" />
      </Head>
      
      <NavBar />
      
      <main className="flex-grow">
        {/* 主標題區塊 */}
        <section className="relative pt-32 pb-12 md:pt-48 md:py-28 bg-gradient-to-r from-pink-100 via-yellow-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
                異象與使命
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-pink-500 to-orange-400 mx-auto rounded-full"></div>
              <p className="mt-4 text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                認識南科福氣教會的核心價值與使命宣言
              </p>
            </motion.div>
          </div>
        </section>

        {/* 異象與使命內容區塊 */}
        <section className="py-10 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto"
            >
              {/* 異象卡片 */}
              <motion.div 
                variants={fadeInUp}
                className="relative group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl md:hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-400 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative p-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">01</span>
                  </div>
                  <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
                      我們的異象
                    </span>
                  </h2>
                  <h3 className="text-lg md:text-xl font-semibold text-center mb-4 md:mb-6 text-gray-700">基督與教會</h3>
                  
                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    <div className="p-3 md:p-4 bg-gray-50 rounded-lg border-l-4 border-pink-400">
                      <p className="text-gray-700">
                        <span className="font-bold text-pink-600">『基督』</span> － 基督是一切，<br className="md:hidden" />又在一切之內
                        <div className="text-center">
                          <span className="text-sm text-gray-500 mt-1">(Christ is all & in all)</span>
                        </div>
                      </p>
                    </div>
                    
                    <div className="p-3 md:p-4 bg-gray-50 rounded-lg border-l-4 border-orange-400">
                      <p className="text-gray-700">
                        <span className="font-bold text-orange-600">『教會』</span> － 是基督的身體，是充滿神並彰顯神榮耀的器皿
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 md:pt-6 border-t border-gray-100">
                    <p className="text-sm md:text-base text-center text-gray-600 italic">
                      "祂是教會的頭，教會是祂的身體，是那充滿萬有者所充滿的"
                      <span className="block text-sm mt-2 text-gray-500">以弗所書 1:23</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 使命卡片 */}
              <motion.div 
                variants={fadeInUp}
                className="relative group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl md:hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative p-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">02</span>
                  </div>
                  <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                      我們的使命
                    </span>
                  </h2>
                  <h3 className="text-lg md:text-xl font-semibold text-center mb-4 md:mb-6 text-gray-700">道成肉身的見證</h3>
                  
                  <div className="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl mb-4 md:mb-6">
                    <p className="text-center text-gray-700 text-base md:text-lg leading-relaxed">
                      無論個人、家庭、職場與教會，<br />
                      盼望都成為耶穌基督『道成肉身』的見證人
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 md:pt-6 border-t border-gray-100">
                    <p className="text-sm md:text-base text-center text-gray-600 italic">
                      "但聖靈降臨在你們身上，你們就必得著能力，並要在耶路撒冷、猶太全地，和撒馬利亞，直到地極，作我的見證。"
                      <span className="block text-sm mt-2 text-gray-500">使徒行傳 1:8</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 呼召區塊 */}
        <section className="py-10 md:py-16 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                與我們一同見證神的榮耀
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                歡迎您加入我們，一同在基督裡成長，成為神國度的見證人
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <button className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-full hover:shadow-lg transform transition-all hover:scale-105 text-sm md:text-base">
                  認識更多
                </button>
                <button className="px-6 py-2 md:px-8 md:py-3 bg-white text-gray-700 font-medium rounded-full border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all text-sm md:text-base">
                  聚會時間
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}