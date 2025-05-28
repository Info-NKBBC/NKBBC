import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>隱私權政策 - 南科福氣教會</title>
        <meta name="description" content="南科福氣教會隱私權政策，說明我們如何保護和處理您的個人資料" />
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
                隱私權政策
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-pink-500 to-orange-400 mx-auto rounded-full"></div>
              <p className="mt-4 text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                南科福氣教會個人資料保護政策
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
                南科福氣教會（以下簡稱「本教會」）非常重視您的個人資料保護。本政策說明本教會如何蒐集、處理及保護您的個人資料。請您詳閱下列內容。
              </p>

              <h2 className="text-2xl font-semibold text-rose-600 mt-8 mb-4">一、個人資料蒐集目的與範圍</h2>
              <p className="mb-6">
                本教會於活動報名、線上奉獻、聯絡表單等功能時，可能蒐集您的姓名、聯絡電話、電子郵件、性別、出生年月日、IP 位址等資料，作為教會聯繫、會員管理、活動推廣及統計分析等特定目的之用。
              </p>

              <h2 className="text-2xl font-semibold text-rose-600 mt-8 mb-4">二、個人資料利用</h2>
              <p className="mb-6">
                所蒐集之個人資料僅限於本教會及所屬事工部門，於上述目的範圍內使用。除法令或政府機關要求外，不會將您的個人資料提供給第三方，亦不會用於未經授權之其他用途。
              </p>

              <h2 className="text-2xl font-semibold text-rose-600 mt-8 mb-4">三、資料保護措施</h2>
              <p className="mb-6">
                本教會採用資訊安全措施保護您的個人資料，包括但不限於：資料存取權限限制、加密傳輸、定期備份等，以避免資料外洩、竄改或遺失。
              </p>

              <h2 className="text-2xl font-semibold text-rose-600 mt-8 mb-4">四、資料查詢與刪除</h2>
              <p className="mb-6">
                您可隨時向本教會提出查詢、閱覽、補充、更正或刪除您的個人資料，請透過「聯絡我們」頁面或致信 <a href="mailto:Info.NKBBC@gmail.com" className="text-rose-600 hover:underline">Info.NKBBC@gmail.com</a> 聯繫我們。
              </p>

              <h2 className="text-2xl font-semibold text-rose-600 mt-8 mb-4">五、隱私權政策修訂</h2>
              <p className="mb-6">
                本教會將不定期檢討並修訂本政策，更新內容將公告於本網站，恕不另行個別通知。
              </p>

              <p className="mt-10 text-center text-gray-500">
                最後更新日期：2025年5月28日
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
    </div>
  );
}
