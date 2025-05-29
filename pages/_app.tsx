import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function MyApp({ Component, pageProps, router }: AppProps & { router: any }) {
  // 檢查是否為首頁
  const isHomePage = router.pathname === '/';
  
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <SeoHead />
      <NavBar />
      <main className={`flex-grow ${!isHomePage ? 'relative bg-gray-100' : ''}`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}