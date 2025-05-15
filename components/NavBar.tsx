'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function NavBar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const aboutLinks = [
    { name: '異象與使命', href: '/about/vision-mission' },
    { name: '實行之路', href: '/about/implementation' },
    { name: '教會策略', href: '/about/strategy' },
    { name: '教會核心價值', href: '/about/core-values' },
    { name: '各種成全聚會', href: '/about/gatherings' },
  ];

  const links = [
    { name: '首頁', href: '/' },
    { name: '關於我們', href: '/about', isAbout: true },
    { name: '影音平台', href: 'https://www.youtube.com/@南科福氣教會/featured' },
    { name: '活動報名', href: '/donate' },
    { name: '會友專區', href: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 bg-white ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto flex items-center justify-between h-16 md:h-28 px-4">
        <div className="flex items-center w-full justify-between">
          <Link href="/" className="flex items-center h-full">
            <div className="h-10 lg:h-16 cursor-pointer">
              <img 
                src="/images/logo-horizontal.png" 
                alt="南科福氣教會"
                className="h-full w-auto"
              />
            </div>
          </Link>
          <div className="lg:hidden">
            <button
              className="p-2 text-yellow-500 hover:text-yellow-600 transition-colors focus:outline-none"
              aria-label="開啟主選單"
              onClick={() => {
                setMobileMenuOpen(prev => !prev);
              }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex items-center">
          <ul className="flex flex-row items-center gap-12 text-white whitespace-nowrap">
            {links.map(l => {
              if (l.isAbout) {
                return (
                  <li key={l.name} className="relative group inline-block">
                    <button
                      className="flex items-center gap-1 text-gray-800 hover:text-pink-500 transition cursor-pointer focus:outline-none text-base lg:text-lg"
                      onClick={e => {
                        e.preventDefault();
                        setAboutOpen(o => !o);
                      }}
                    >
                      {l.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <ul className={`absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg z-50 border border-gray-200 transition-all duration-200 ${aboutOpen ? 'block' : 'hidden'}`}>
                      {aboutLinks.map(sub => (
                        <li key={sub.name}>
                          <a href={sub.href} className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all duration-200">
                            <span className="relative z-10">{sub.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li key={l.name} className="inline-block">
                    <a href={l.href} rel="noopener noreferrer">
                      <span className="text-gray-800 text-base lg:text-lg hover:text-pink-500 transition cursor-pointer">{l.name}</span>
                    </a>
                  </li>
                );
              }
            })}
          </ul>
          <a 
            href="/donate" 
            className="ml-12 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-pink-500/30 whitespace-nowrap"
          >
            線上奉獻
          </a>
        </div>
      </div>

      {/* 手機版全螢幕浮層選單 */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col lg:hidden">
          <div className="flex items-center justify-between w-full px-4 py-3 bg-white border-b border-yellow-500/20">
            <Link href="/" className="flex-shrink-0">
              <div className="h-10 cursor-pointer">
                <img src="/images/logo-horizontal.png" alt="南科福氣教會" className="h-full w-auto" />
              </div>
            </Link>
            <button 
              className="text-yellow-500 hover:text-yellow-600 p-2 -mr-2" 
              onClick={() => {
                setMobileMenuOpen(prev => !prev);
              }}
              aria-label="關閉選單"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 w-full px-4 py-4">
            <div className="space-y-3">
              {links.map((l, index) => (
                <div key={l.name}>
                  {l.name === '關於我們' ? (
                    <div className="space-y-1">
                      <button
                        className="block w-full px-3 py-3 text-xl font-semibold text-gray-800 hover:bg-yellow-500/10 rounded-xl transition-all duration-300 flex justify-between items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          setAboutOpen(prev => !prev);
                        }}
                      >
                        {l.name}
                        <ChevronDown size={24} className={`ml-2 transition-transform duration-300 ${aboutOpen ? 'rotate-180' : ''}`} 
                                      style={{ color: '#FFD700' }}
                        />
                      </button>
                      {aboutOpen && (
                        <div className="space-y-2 pl-5">
                          {aboutLinks.map(sub => (
                            <a 
                              key={sub.name}
                              href={sub.href} 
                              className="block w-full px-3 py-2 text-lg font-medium text-gray-700 hover:bg-yellow-500/5 rounded-xl transition-all duration-300"
                              onClick={() => {
                                setMobileMenuOpen(prev => !prev);
                                setAboutOpen(false);
                              }}
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a 
                      href={l.href} 
                      rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      className="block w-full px-3 py-3 text-xl font-semibold text-gray-800 hover:bg-yellow-500/10 rounded-xl transition-all duration-300"
                      onClick={() => {
                        setMobileMenuOpen(prev => !prev);
                      }}
                    >
                      {l.name}
                    </a>
                  )}
                </div>
              ))}
              <a 
                href="/donate" 
                className="block w-full px-4 py-3 text-center text-xl font-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
                onClick={() => {
                  setMobileMenuOpen(prev => !prev);
                }}
              >
                線上奉獻
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}