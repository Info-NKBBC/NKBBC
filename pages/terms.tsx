import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>使用條款 - 南科福氣教會</title>
        <meta name="description" content="南科福氣教會網站使用條款，說明使用者應遵守的規範與注意事項" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex-grow">
        {/* 主標題區塊 - 與其他頁面保持一致 */}
        <section className="relative pt-32 pb-12 md:pt-48 md:py-28 bg-gradient-to-r from-pink-100 via-yellow-50 to-blue-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
                使用條款
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-pink-500 to-orange-400 mx-auto rounded-full"></div>
              <p className="mt-4 text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                南科福氣教會網站使用規範
              </p>
            </motion.div>
          </div>
        </section>

        {/* 內容區塊 */}
        <section className="py-10 md:py-16 bg-gradient-to-b from-rose-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
              <div className="prose max-w-none text-gray-700">
                <p className="mb-6">
                  歡迎您使用南科福氣教會網站（以下簡稱「本網站」）。請您詳閱下列條款，使用本網站即表示您同意遵守本條款。
                </p>

                <h2 className="text-2xl font-semibold text-rose-600 mt-8 mb-4">一、服務內容</h2>
                <p className="mb-6">
                  本網站提供教會資訊、活動報名、見證分享、聯絡窗口及相關資源等網路服務。
                </p>

                <h2 className="text-2xl font-semibold text-rose-600 mt-8 mb-4">二、使用者義務</h2>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li>使用本網站時，請遵守相關法令規定及社會公序良俗，不得利用本網站從事任何非法行為。</li>
                  <li>請如實填寫個人資料，不得冒用、偽造或盜用他人身分。</li>
                  <li>發表言論請保持尊重，嚴禁散播不實、誹謗、攻擊、色情或違法內容。</li>
                </ol>

                <h2 className="text-2xl font-semibold text-rose-600 mt-8 mb-4">三、智慧財產權</h2>
                <p className="mb-6">
                  本網站所刊載的所有內容（包含文字、圖片、影音等），均為本教會或原權利人所有，未經授權不得轉載、修改、散布或用於商業用途。
                </p>

                <h2 className="text-2xl font-semibold text-rose-600 mt-8 mb-4">四、免責聲明</h2>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li>本教會對於網站內容之正確性及即時性，雖力求無誤，但不負保證責任。</li>
                  <li>因系統維護、資料更新或不可抗力因素導致網站中斷、錯誤或資料遺失，本教會不負任何賠償責任。</li>
                  <li>本網站可能包含外部連結，外部網站內容不在本教會掌控範圍內。</li>
                </ol>

                <h2 className="text-2xl font-semibold text-rose-600 mt-8 mb-4">五、條款修訂</h2>
                <p className="mb-6">
                  本教會有權隨時修改本條款，修改後將公布於本網站，不另行個別通知。
                </p>

                <p className="mt-10 text-center text-gray-500">
                  最後更新日期：2025年5月28日
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
