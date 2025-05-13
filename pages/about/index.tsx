import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Head from 'next/head'


export default function About() {
  return (
    <>
      <Head>
        <title>關於我們 | 南科福氣教會</title>
        <meta name="description" content="了解南科福氣教會的歷史與使命" />
      </Head>
      <NavBar />
      <div style={{ height: '80px' }} />
      <main className="container mx-auto px-4 py-12 mt-0">
        <section id="about-top" className="mb-12 pt-32">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
            <span className="relative pb-2 inline-block">
              關於我們
              <svg className="absolute -bottom-1 w-full" xmlns="http://www.w3.org/2000/svg" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                <path d="M0,6 C30,2 70,2 100,6 L100,0 L0,0 Z" fill="#0d9488" />
              </svg>
            </span>
          </h1>
          <div className="max-w-4xl mx-auto mt-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* 照片區塊 */}
            <div className="flex-shrink-0 flex justify-center w-full md:w-1/2">
              <img src="/images/about.jpg" alt="教會照片" className="rounded-xl shadow-lg max-h-[350px] object-cover mx-auto" />
            </div>
            {/* 介紹文字區塊 */}
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
              <p className="text-xl leading-relaxed text-gray-700 mb-4">
                南科福氣教會成立於 2010 年，致力於分享福音、牧養群體、關懷社區，成為人人都能經歷神同在與恩典的屬靈家園。
              </p>
            </div>
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-teal-800 to-teal-700 rounded-lg p-10 shadow-xl text-center">
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl font-bold text-white">
                我們在 <span className="text-yellow-300">基督的愛</span> 中成長
              </p>
              <p className="text-2xl md:text-3xl font-bold text-white">
                天天追求並經歷 <span className="text-yellow-300">基督的豐富</span>
              </p>
              <p className="text-2xl md:text-3xl font-bold text-white">
                成為 <span className="text-yellow-300">耶穌基督</span>『<span className="text-yellow-300">道成肉身</span>』的見證人
              </p>

              <p className="text-2xl md:text-3xl font-bold text-white">
                以 <span className="text-yellow-300">建造榮耀的教會</span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 