import Head from 'next/head';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Path() {
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
        <title>實行之路 | 南科福氣教會</title>
        <meta name="description" content="了解南科福氣教會的實行之路，我們如何實踐信仰並服務社區。" />
      </Head>
      
      <NavBar />
      
      <main className="flex-grow">
        {/* 主標題區塊 */}
        <section className="relative pt-32 pb-12 md:pt-48 md:py-28 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
                實行之路
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                探索我們如何將信仰落實在日常生活中
              </p>
            </motion.div>
          </div>
        </section>

        {/* 實行之路內容區塊 */}
        <section className="py-10 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              {/* 卡片1 */}
              <motion.div 
                variants={fadeInUp}
                className="relative group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl md:hover:-translate-y-2 mb-10 md:mb-16"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative p-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">01</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-gray-800">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                      信仰實踐
                    </span>
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 text-center">
                      我們相信信仰不僅是理念，更需要在日常生活中實踐。
                    </p>
                    <ul className="space-y-3 max-w-lg mx-auto">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>每日靈修與禱告生活</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>定期參加主日崇拜與小組聚會</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>活出聖經教導的價值觀</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* 卡片2 */}
              <motion.div 
                variants={fadeInUp}
                className="relative group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl md:hover:-translate-y-2 mb-10 md:mb-16"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative p-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">02</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-gray-800">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                      社區關懷
                    </span>
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 text-center">
                      我們致力於服務社區，實踐基督的愛。
                    </p>
                    <ul className="space-y-3 max-w-lg mx-auto">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-purple-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>弱勢家庭關懷與物資援助</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-purple-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>長者探訪與關懷事工</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-purple-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>社區清潔與環境保護活動</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* 卡片3 */}
              <motion.div 
                variants={fadeInUp}
                className="relative group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl md:hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative p-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">03</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-gray-800">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500">
                      門徒訓練
                    </span>
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 text-center">
                      我們致力於培養門徒，裝備信徒活出信仰。
                    </p>
                    <ul className="space-y-3 max-w-lg mx-auto">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-teal-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>聖經研讀與神學課程</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-teal-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>領袖訓練與事奉裝備</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-teal-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>屬靈恩賜發掘與運用</span>
                      </li>
                    </ul>
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
                與我們一同實踐信仰
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                歡迎您加入我們，一起在信仰中成長，活出基督的愛
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <button className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-full hover:shadow-lg transform transition-all hover:scale-105 text-sm md:text-base">
                  了解更多
                </button>
                <button className="px-6 py-2 md:px-8 md:py-3 bg-white text-gray-700 font-medium rounded-full border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all text-sm md:text-base">
                  加入我們
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}