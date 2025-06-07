// pages/member/index.tsx

'use client';

import { useState, useEffect } from 'react';
import { signIn, signOut } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/member/meal';

  useEffect(() => {
    const authError = searchParams.get('error');
    const fromLogin = searchParams.get('fromLogin');
    
    if (authError === 'CredentialsSignin') {
      setError('電子郵件或密碼錯誤，或尚未註冊');
    } else if (authError === 'AccountNotApproved') {
      setError('您的帳號尚未通過管理員審核，請稍後再試');
    } else if (fromLogin) {
      // 如果是從登入頁面重定向回來，但沒有錯誤，則不需要清除 session
      return;
    } else {
      // 清除舊的 session cookie，但保留錯誤訊息
      signOut({ redirect: false });
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    if (!email || !password) {
      setError('請輸入電子郵件和密碼');
      return;
    }
    
    setError('');
    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl: '/member/group-report?fromLogin=1',
      });

      if (result?.error) {
        if (result.error === 'AccountNotApproved') {
          setError('您的帳號尚未通過管理員審核，請稍後再試');
        } else if (result.error === 'CredentialsSignin') {
          setError('電子郵件或密碼錯誤，或尚未註冊');
        } else {
          setError('登入過程中發生錯誤，請稍後再試');
        }
        setIsLoading(false);
      } else if (result?.url) {
        // 登入成功，手動導向
        window.location.href = result.url;
      }
    } catch (err) {
      console.error('登入過程中發生錯誤：', err);
      setError('登入過程中發生錯誤，請稍後再試');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            會員登入
          </h2>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">{error}</h3>
              </div>
            </div>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />

          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                電子郵件
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="電子郵件"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                密碼
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="密碼"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                disabled={isLoading}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                記住我
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                忘記密碼？
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  登入中...
                </>
              ) : (
                '登入'
              )}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              還沒有帳號？{' '}
              <Link href="/auth/register" className="font-medium text-blue-600 hover:text-blue-500">
                立即註冊
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
