import NavBar from '@/components/NavBar'
import AboutSubNav from '@/components/AboutSubNav'
import Implementation from '@/components/Implementation'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Image from 'next/image'

export default function ImplementationPage() {
  return (
    <>
      <Head>
        <title>實行之路 | 南科福氣教會</title>
        <meta name="description" content="了解南科福氣教會的實行之路與實踐方式" />
      </Head>
      <NavBar />
      <main className="pt-24 min-h-screen">
        <section className="container mx-auto px-6 text-dark mt-32">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
            <span className="relative pb-2 inline-block">
              實行之路
              <svg className="absolute -bottom-1 w-full" xmlns="http://www.w3.org/2000/svg" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                <path d="M0,6 C30,2 70,2 100,6 L100,0 L0,0 Z" fill="#0d9488" />
              </svg>
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto my-12">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img 
                src="/images/implementation-chart.jpg" 
                alt="實行之路圖表：基督和教會的見證為目標，聖經為基礎，生命、事奉、福音和神人生活為實行之路" 
                className="w-full h-auto" 
              />
            </div>
          </div>
        </section>
        <Implementation />
      </main>
      <Footer />
    </>
  )
} 