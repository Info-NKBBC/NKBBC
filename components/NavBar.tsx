'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const aboutLinks = [
    { name: '異象與使命', href: '/about/vision-mission' },
    { name: '實行之路', href: '/about/implementation' },
    { name: '教會策略', href: '/about/strategy' },
    { name: '教會核心價值', href: '/about/core-values' },
    { name: '教會的各種成全聚會', href: '/about/gatherings' },
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
    <nav className={`fixed w-full z-50 bg-gray-750 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto flex items-center justify-between lg:py-5 lg:px-12 py-3 px-3">
        <div className="flex items-center gap-4 w-full">
          <Link href="/">
            <div className="h-12 lg:h-16 lg:max-lg:h-12 cursor-pointer border-none !border-none bg-transparent !bg-transparent shadow-none !shadow-none outline-none !outline-none">
              <img 
                src="/images/logo-horizontal.png" 
                alt="南科福氣教會"
                className="h-full w-auto border-none !border-none bg-transparent !bg-transparent shadow-none !shadow-none outline-none !outline-none"
              />
            </div>
          </Link>
          <div className="flex-1" />
          <button
  className="lg:hidden ml-auto flex items-center justify-center text-white focus:outline-none"
  aria-label="開啟主選單"
  onClick={() => setOpen(true)}
>
  <Menu size={28}/>
</button>
        </div>
        <div className="hidden lg:flex items-center">
          <ul className="flex flex-row items-center gap-12 text-white whitespace-nowrap">
            {links.map(l => {
              if (l.isAbout) {
                return (
                  <li key={l.name} className="relative group inline-block">
                    <button
                      className="flex items-center gap-1 text-white hover:text-pink-500 transition cursor-pointer focus:outline-none text-base lg:text-lg"
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
                    <ul className={`absolute left-0 mt-2 w-48 bg-gray-750 rounded shadow-lg z-50 border border-gray-600 transition-all duration-200 ${aboutOpen ? 'block' : 'hidden'}`}>
                      {aboutLinks.map(sub => (
                        <li key={sub.name}>
                          <a href={sub.href} className="block px-4 py-2 text-white hover:bg-pink-200 hover:text-white transition-all duration-300">
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
                      <span className="text-white text-base lg:text-lg hover:text-pink-500 transition cursor-pointer">{l.name}</span>
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
      {open && (
        <div className="fixed inset-0 z-[99] bg-black/80 flex flex-col lg:hidden">
          {/* 手機版 Banner */}
          <div className="flex items-center justify-between w-full px-6 py-4 bg-gray-750">
            <Link href="/">
              <div className="h-12 cursor-pointer">
                <img src="/images/logo-horizontal.png" alt="南科福氣教會" className="h-full w-auto" />
              </div>
            </Link>
            <button className="text-white" onClick={()=>setOpen(false)}>
              <X size={32}/>
            </button>
          </div>
          {/* 手機版選單內容 */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <ul className="space-y-8 text-white text-2xl font-bold">
              {links.map(l =>
                l.isAbout ? (
                  <li key={l.name} className="inline-block">
                    <button
                      className="flex items-center gap-2 hover:text-pink-400"
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
                    {aboutOpen && (
                      <ul className="mt-2 space-y-2 bg-gray-750 rounded shadow-lg border border-gray-600 p-2">
                        {aboutLinks.map(sub => (
                          <li key={sub.name}>
                            <a href={sub.href} className="block px-4 py-2 text-white hover:bg-pink-200 hover:text-white transition-all duration-300 relative overflow-hidden group">
                              <span className="relative z-10">{sub.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={l.name} className="inline-block">
                    <a href={l.href} rel="noopener noreferrer" className="hover:text-pink-400">{l.name}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}