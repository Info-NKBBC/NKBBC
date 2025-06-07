// components/NavBar.tsx

'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function NavBar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [memberOpen, setMemberOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

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

  const videoLinks = [
    { name: '教會簡介', href: '/video/church-intro' },
    { name: '幸福小組花絮', href: '/video/happy-group' },
  ];

  // 會友專區下拉選單的連結，加入「小組長回報單」
  const memberLinks = [
    { name: '愛宴系統', href: '/member?callbackUrl=/member/meal' },
    {
      name: '小組長回報單',
      href: '/member/group-report',
      current: pathname === '/member/group-report',
    },
  ];

  const links = [
    { name: '首頁', href: '/' },
    { name: '關於我們', href: '/about', isAbout: true },
    { name: '課程資訊', href: '/courses', isCourses: true },
    { name: '影音平台', href: 'https://www.youtube.com/@南科福氣教會/featured', isVideo: true },
    { name: '活動報名', href: '/event-registration' },
    { name: '會友專區', href: '/member', isMember: true },
    // 不再將「小組長回報單」放在頂層
  ];

  const coursesLinks = [
    { name: '如何教養青少年', href: '/courses/teen-parenting' },
    { name: '如何教養兒童', href: '/courses/child-parenting' },
    { name: '親密之旅', href: '/courses/intimacy-journey' },
    { name: '理財有道', href: '/courses/financial-wisdom' },
    { name: '兒童品格班', href: '/courses/children-character' },
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
                setMobileMenuOpen((prev) => !prev);
              }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* 適用於桌面的連結 */}
        <div className="hidden lg:flex items-center">
          <ul className="flex flex-row items-center gap-12 whitespace-nowrap">
            {links.map((l) => {
              // 如果是「關於我們」，顯示下拉
              if (l.isAbout) {
                return (
                  <li key={l.name} className="relative group inline-block">
                    <button
                      className="flex items-center gap-1 text-gray-800 hover:text-pink-500 transition cursor-pointer focus:outline-none text-base lg:text-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        setAboutOpen((o) => !o);
                      }}
                    >
                      {l.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    <ul
                      className={`absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg z-50 border border-gray-200 transition-all duration-200 ${
                        aboutOpen ? 'block' : 'hidden'
                      }`}
                    >
                      {aboutLinks.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="block px-4 py-2 text-gray-800 hover:bg-pink-500/10 transition"
                            onClick={() => setAboutOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              // 如果是「課程資訊」，顯示下拉
              else if (l.isCourses) {
                return (
                  <li key={l.name} className="relative group inline-block">
                    <button
                      className="flex items-center gap-1 text-gray-800 hover:text-pink-500 transition cursor-pointer focus:outline-none text-base lg:text-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        setCoursesOpen((o) => !o);
                      }}
                    >
                      {l.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    <ul
                      className={`absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg z-50 border border-gray-200 transition-all duration-200 ${
                        coursesOpen ? 'block' : 'hidden'
                      }`}
                    >
                      {coursesLinks.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="block px-4 py-2 text-gray-800 hover:bg-pink-500/10 transition"
                            onClick={() => setCoursesOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              // 如果是「影音平台」，顯示下拉
              else if (l.isVideo) {
                return (
                  <li key={l.name} className="relative group inline-block">
                    <button
                      className="flex items-center gap-1 text-gray-800 hover:text-pink-500 transition cursor-pointer focus:outline-none text-base lg:text-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        setVideoOpen((o) => !o);
                      }}
                    >
                      {l.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    <ul
                      className={`absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg z-50 border border-gray-200 transition-all duration-200 ${
                        videoOpen ? 'block' : 'hidden'
                      }`}
                    >
                      {videoLinks.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="block px-4 py-2 text-gray-800 hover:bg-pink-500/10 transition"
                            onClick={() => setVideoOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              // 如果是「會友專區」，顯示下拉並包含「小組長回報單」
              else if (l.isMember) {
                return (
                  <li key={l.name} className="relative group inline-block">
                    <button
                      className="flex items-center gap-1 text-gray-800 hover:text-pink-500 transition cursor-pointer focus:outline-none text-base lg:text-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        setMemberOpen((o) => !o);
                      }}
                    >
                      {l.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    <ul
                      className={`absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg z-50 border border-gray-200 transition-all duration-200 ${
                        memberOpen ? 'block' : 'hidden'
                      }`}
                    >
                      {memberLinks.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className={`block px-4 py-2 ${
                              link.current
                                ? 'text-pink-500 font-semibold'
                                : 'text-gray-800 hover:bg-pink-500/10'
                            } transition`}
                            onClick={() => setMemberOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              // 其他普通連結
              return (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-gray-800 hover:text-pink-500 transition text-base lg:text-lg"
                  >
                    {l.name}
                  </Link>
                </li>
              );
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
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="關閉選單"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 w-full px-4 py-4">
            <div className="space-y-3">
              {links.map((l) => (
                <div key={l.name}>
                  {l.name === '關於我們' ? (
                    <div className="space-y-1">
                      <button
                        className="block w-full px-3 py-3 text-xl font-semibold text-gray-800 hover:bg-yellow-500/10 rounded-xl transition-all duration-300 flex justify-between items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          setAboutOpen((prev) => !prev);
                        }}
                      >
                        {l.name}
                        <ChevronDown
                          size={24}
                          className={`ml-2 transition-transform duration-300 ${
                            aboutOpen ? 'rotate-180' : ''
                          }`}
                          style={{ color: '#FFD700' }}
                        />
                      </button>
                      {aboutOpen && (
                        <div className="space-y-2 pl-5">
                          {aboutLinks.map((sub) => (
                            <a
                              key={sub.name}
                              href={sub.href}
                              rel={sub.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              target={sub.href.startsWith('http') ? '_blank' : undefined}
                              className="block w-full px-3 py-2 text-lg font-medium text-gray-700 hover:bg-yellow-500/5 rounded-xl transition-all duration-300"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : l.name === '影音平台' ? (
                    <div className="space-y-1">
                      <button
                        className="block w-full px-3 py-3 text-xl font-semibold text-gray-800 hover:bg-yellow-500/10 rounded-xl transition-all duration-300 flex justify-between items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          setVideoOpen((prev) => !prev);
                        }}
                      >
                        {l.name}
                        <ChevronDown
                          size={24}
                          className={`ml-2 transition-transform duration-300 ${
                            videoOpen ? 'rotate-180' : ''
                          }`}
                          style={{ color: '#FFD700' }}
                        />
                      </button>
                      {videoOpen && (
                        <div className="space-y-2 pl-5">
                          {videoLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block w-full px-3 py-2 text-lg font-medium text-gray-700 hover:bg-yellow-500/5 rounded-xl transition-all duration-300"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : l.name === '會友專區' ? (
                    <div className="space-y-1">
                      <button
                        className="block w-full px-3 py-3 text-xl font-semibold text-gray-800 hover:bg-yellow-500/10 rounded-xl transition-all duration-300 flex justify-between items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          setMemberOpen((prev) => !prev);
                        }}
                      >
                        {l.name}
                        <ChevronDown
                          size={24}
                          className={`ml-2 transition-transform duration-300 ${
                            memberOpen ? 'rotate-180' : ''
                          }`}
                          style={{ color: '#FFD700' }}
                        />
                      </button>
                      {memberOpen && (
                        <div className="space-y-2 pl-5">
                          {memberLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`block w-full px-3 py-2 text-lg font-medium ${
                                sub.current ? 'text-pink-500 font-semibold' : 'text-gray-700 hover:bg-yellow-500/5'
                              } rounded-xl transition-all duration-300`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : l.name === '課程資訊' ? (
                    <div className="space-y-1">
                      <button
                        className="block w-full px-3 py-3 text-xl font-semibold text-gray-800 hover:bg-yellow-500/10 rounded-xl transition-all duration-300 flex justify-between items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          setCoursesOpen((prev) => !prev);
                        }}
                      >
                        {l.name}
                        <ChevronDown
                          size={24}
                          className={`ml-2 transition-transform duration-300 ${
                            coursesOpen ? 'rotate-180' : ''
                          }`}
                          style={{ color: '#FFD700' }}
                        />
                      </button>
                      {coursesOpen && (
                        <div className="space-y-2 pl-5">
                          {coursesLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block w-full px-3 py-2 text-lg font-medium text-gray-700 hover:bg-yellow-500/5 rounded-xl transition-all duration-300"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={l.href}
                      className="block w-full px-3 py-3 text-xl font-semibold text-gray-800 hover:bg-yellow-500/10 rounded-xl transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {l.name}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="/donate"
                className="block w-full px-4 py-3 text-center text-xl font-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
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
