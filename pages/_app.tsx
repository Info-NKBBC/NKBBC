import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
} 