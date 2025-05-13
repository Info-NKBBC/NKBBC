import NavBar from '@/components/NavBar'
import SmallGroup from '@/components/SmallGroup'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function NewsSmallGroupPage() {
  return (
    <>
      <Head>
        <title>我們的小組 | 南科福氣教會</title>
        <meta name="description" content="了解南科福氣教會的小組服事與小組生活" />
      </Head>
      <NavBar />
      <main>
        <div className="pt-24">
          <section className="container mx-auto py-16 px-6 text-dark">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
              <span className="relative pb-2 inline-block">
                我們的小組
                <svg className="absolute -bottom-1 w-full" xmlns="http://www.w3.org/2000/svg" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                  <path d="M0,6 C30,2 70,2 100,6 L100,0 L0,0 Z" fill="#0d9488" />
                </svg>
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-center text-lg mb-12">
                小組是信仰生活的核心，在這裡我們彼此連結、成長與服事。
              </p>
            </div>
          </section>
        </div>
        <SmallGroup />
      </main>
      <Footer />
    </>
  )
} 