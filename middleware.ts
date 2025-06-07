import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  
  // 保護 /member 開頭的路由，但排除 /member 本身
  if (pathname.startsWith('/member/')) {
    const token = await getToken({ req });
    
    // 如果沒有 token，重定向到登入頁面
    if (!token) {
      const loginUrl = new URL('/member', req.nextUrl.origin);
      // 只保留路徑部分，避免完整 URL 過長
      const callbackPath = pathname === '/member/signin' ? '/member' : pathname;
      loginUrl.searchParams.set('callbackUrl', callbackPath);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/member/:path*'],
};
