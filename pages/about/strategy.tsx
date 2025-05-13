import NavBar from '@/components/NavBar'
import AboutSubNav from '@/components/AboutSubNav'
import Strategy from '@/components/Strategy'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function StrategyPage() {
  return (
    <>
      <Head>
        <title>教會策略 | 南科福氣教會</title>
        <meta name="description" content="了解南科福氣教會的策略方針和發展計劃" />
      </Head>
      <NavBar />
      
      <main className="pt-24">
        <section className="container mx-auto px-6 text-dark mt-32">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
            <span className="relative pb-2 inline-block">
              教會策略
              <svg className="absolute -bottom-1 w-full" xmlns="http://www.w3.org/2000/svg" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                <path d="M0,6 C30,2 70,2 100,6 L100,0 L0,0 Z" fill="#0d9488" />
              </svg>
            </span>
          </h1>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            我們透過禮拜真理、小組牧養和福音外展這三大策略來建立教會，使每位信徒靈命成長並擴展神的國度。
          </p>
        </section>
        <Strategy />
      </main>
      <Footer />
    </>
  )
} 