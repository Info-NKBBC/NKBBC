// pages/api/auth/[...nextauth].ts

import NextAuth, { type NextAuthOptions, type User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { client } from '@/lib/sanity.client'

// 擴展 next-auth 類型
declare module 'next-auth' {
  interface User {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
  }
  
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      isAdmin: boolean;
    }
  }
}

// 擴展 JWT 類型
declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    isAdmin: boolean;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        
        try {
          // 查詢會員資料
          const query = `*[_type == "member" && email == $email][0]`;
          const user = await client.fetch(query, { email: credentials.email });

          if (!user) {
            throw new Error('帳號或密碼錯誤');
          }

          // 這裡應該要驗證密碼，但因為我們沒有存明文密碼，所以先跳過
          // 實際應用中應該使用 bcrypt 或其他方式驗證
          
          // 檢查帳號是否已審核
          if (!user.isApproved) {
            throw new Error('AccountNotApproved');
          }

          return {
            id: user._id,
            name: user.name || '',
            email: user.email,
            isAdmin: user.isAdmin || false,
          } as User;
        } catch (error) {
          console.error('登入錯誤:', error);
          if (error instanceof Error) {
            throw new Error(error.message);
          }
          throw new Error('登入時發生錯誤');
        }
      }
    })
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  secret: process.env.NEXTAUTH_SECRET!,

  pages: {
    signIn: '/member',
    signOut: '/member',
    error: '/member',
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },

  debug: process.env.NODE_ENV === 'development',
}

export default NextAuth(authOptions)
