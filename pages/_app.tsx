import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import type { AppProps } from 'next/app';
import SeoHead from '@/components/SeoHead';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SeoHead />
      <Component {...pageProps} />
    </>
  );
}