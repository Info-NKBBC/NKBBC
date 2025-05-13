import NavBar from '@/components/NavBar';
import AboutSubNav from '@/components/AboutSubNav';
import Gatherings from '@/components/Gatherings';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function GatheringsPage() {
  return (
    <>
      <Head>
        <title>教會的各種成全聚會 | 南科福氣教會</title>
        <meta name="description" content="了解南科福氣教會各種成全聚會的時間與內容" />
      </Head>
      <NavBar />
      
      <main className="pt-24">
        <section className="container mx-auto px-6 text-dark mt-32">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
            <span className="relative pb-2 inline-block">
              教會的各種成全聚會
              <svg className="absolute -bottom-1 w-full" xmlns="http://www.w3.org/2000/svg" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                <path d="M0,6 C30,2 70,2 100,6 L100,0 L0,0 Z" fill="#0d9488" />
              </svg>
            </span>
          </h1>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-center text-lg text-gray-600">
              教會提供各種聚會以滿足不同年齡層和需求的會眾，幫助大家在信仰上一同成長。
            </p>
          </div>
        </section>
        <Gatherings />
      </main>
      <Footer />
    </>
  );
} 