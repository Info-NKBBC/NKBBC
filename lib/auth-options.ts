// lib/auth-options.ts

import type { NextAuthOptions, SessionStrategy, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { createClient } from 'next-sanity';

// 創建 Sanity 客戶端
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2023-05-03',
});

interface SanityUser extends User {
  id: string;
  email: string;
  name: string;
  isApproved: boolean;
  isAdmin: boolean;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: '電子郵件', type: 'email' },
        password: { label: '密碼', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log('缺少電子郵件或密碼');
          return null;
        }

        // 從 Sanity 查詢使用者
        const user = await sanityClient.fetch(
          `*[_type == "userRegistration" && email == $email][0]`,
          { email: credentials.email }
        );

        if (!user) {
          // 回傳 null 代表 NextAuth 將使用預設錯誤碼 “CredentialsSignin”
          return null;
        }

        // 檢查帳號是否已通過管理員審核
        if (user.isApproved === false) {
          // 使用自訂錯誤碼 “AccountNotApproved”，前端可根據此碼顯示中文提示
          throw new Error('AccountNotApproved');
        }

        // 驗證密碼
        const isValid = await compare(credentials.password, user.password);
        if (!isValid) {
          // 回傳 null 代表 “CredentialsSignin”
          return null;
        }

        // 認證成功，回傳用戶資訊（不含密碼）
        return {
          id: user._id,
          email: user.email,
          name: user.name || user.email.split('@')[0],
          isApproved: user.isApproved !== false,
          isAdmin: user.isAdmin === true,
        } as SanityUser;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt' as SessionStrategy,
    maxAge: 30 * 24 * 60 * 60, // 30 天
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 天
  },
  debug: process.env.NODE_ENV === 'development',
  logger: {
    error(code: string, metadata: any) {
      console.error('Auth Error:', code, metadata);
    },
    warn(code: string) {
      console.warn('Auth Warning:', code);
    },
    debug(code: string, metadata: any) {
      console.log('Auth Debug:', code, metadata);
    },
  },
  pages: {
    // 所有錯誤 (包含 'AccountNotApproved' 或 'CredentialsSignin') 都跳轉回 /member
    signIn: '/member',
    error: '/member',
    signOut: '/member',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as SanityUser).id;
        token.isApproved = (user as SanityUser).isApproved;
        token.isAdmin = (user as SanityUser).isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        (session.user as SanityUser).isApproved = token.isApproved as boolean;
        (session.user as SanityUser).isAdmin = token.isAdmin as boolean;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // 清除 baseUrl 結尾的斜線
      const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

      // 如果有指定外部或特殊跳轉，保留之
      if (url && url !== '/' && url !== '/member') {
        return url.startsWith('http') ? url : `${cleanBaseUrl}${url}`;
      }

      // 預設導向 /member/meal
      return `${cleanBaseUrl}/member/meal`;
    },
  },
};
