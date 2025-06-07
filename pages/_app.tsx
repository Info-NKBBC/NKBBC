import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

function Auth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: false
  });

  const isLoginPage = router.pathname === '/member' || router.pathname.includes('/member/login');
  const isProtectedRoute = router.pathname.startsWith('/member/');
  
  // 處理認證狀態變更
  useEffect(() => {
    // 如果會話仍在加載中，不進行任何操作
    if (status === 'loading') return;

    // 如果已登入
    if (status === 'authenticated') {
      // 如果正在訪問登入頁面，重定向到愛宴系統
      if (isLoginPage) {
        console.log('Already authenticated, redirecting to /member/meal');
        window.location.href = '/member/meal';
        return;
      }
      // 檢查用戶是否已通過審核（如果訪問的是受保護的路由）
      if (isProtectedRoute && !session?.user?.isApproved) {
        console.log('User not approved, redirecting to login page');
        window.location.href = '/member?error=您的帳號尚未通過管理員審核';
        return;
      }
      return;
    }

    // 如果未登入且訪問受保護的路由，重定向到登入頁面
    if (status === 'unauthenticated' && isProtectedRoute) {
      console.log('Not authenticated, redirecting to login page');
      const callbackUrl = encodeURIComponent(router.asPath);
      window.location.href = `/member?callbackUrl=${callbackUrl}`;
      return;
    }
  }, [status, router.pathname, router.asPath, isLoginPage, isProtectedRoute, session]);

  // 如果正在檢查認證，顯示載入中
  if (status === 'loading' || (isProtectedRoute && status !== 'authenticated')) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return <>{children}</>;
}

export default function MyApp({ Component, pageProps: { session, ...pageProps }, router }: AppProps & { router: any }) {
  // 檢查是否為首頁
  const isHomePage = router.pathname === '/';
  const isAuthPage = router.pathname.startsWith('/member');
  
  return (
    <SessionProvider 
      session={session} 
      refetchOnWindowFocus={false}
      refetchInterval={60 * 60} // 每小時重新獲取會話
      refetchWhenOffline={false}
    >
      <div className="flex flex-col min-h-screen">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
        </Head>
        <SeoHead />
        <NavBar />
        <main className={`flex-grow ${!isHomePage ? 'relative bg-gray-100' : ''}`}>
          {isAuthPage ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </main>
        <Footer />
      </div>
    </SessionProvider>
  );
}