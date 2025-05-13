'use client';

import NavBar from './NavBar';
import Footer from './Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow mt-32 container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
} 