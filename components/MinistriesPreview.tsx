'use client';

import Link from 'next/link';
import { Clock, MapPin } from 'lucide-react';

type CardType = {
  title: string;
  img: string;
  time?: string;
  location: string;
  href?: string;
};

const cards: CardType[] = [
  {
    title: '主日聚會',
    time: '每週日 10:00~12:00',
    location: '南科育成中心 國際會議廳',
    img: '/images/worship.jpg'
  },
  {
    title: '兒童主日學',
    time: '每週日 10:00~12:00',
    location: '南科育成中心 B104',
    img: '/images/youth.jpg'
  },
  {
    title: '兒童品格班',
    time: '每週三 19:00~20:30',
    location: '善化區小新營56-65號',
    img: '/images/community.jpg'
  },
  {
    title: '小組團契',
    location: '點擊查看詳情',
    img: '/images/smallgroup.jpg',
    href: '/about/groups'
  }
];

export default function MinistriesPreview() {
  return (
    <section className="relative pt-12 pb-16 md:pb-24 w-full flex justify-center bg-gradient-to-r from-pink-100 via-yellow-50 to-blue-50">
      {/* 淡淡圓形柔光背景 */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-200 opacity-25 rounded-full blur-2xl z-0 pointer-events-none" />
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-400 opacity-10"
          style={{
            background: 'linear-gradient(135deg, rgba(255,138,138,0.1) 0%, rgba(186,104,200,0.1) 50%, rgba(100,181,246,0.1) 100%)',
          }}
        />
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.3) 0%, transparent 30%)',
            mixBlendMode: 'overlay',
          }}
        />
      </div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
        .font-title {
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 700;
          letter-spacing: -0.025em;
        }
      `}</style>
      <div className="relative z-10 w-[95%] md:w-[80%]">
        {/* 標題區塊 */}
        <div className="text-center mb-4 md:mb-16">
          <h2 className="relative inline-block text-2xl md:text-5xl lg:text-6xl font-title mb-4 md:mb-6">
            <div className="relative z-10 space-y-0.5 md:space-y-2">
              <div
                className="text-base md:text-3xl lg:text-4xl font-semibold tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                style={{
                  background: 'linear-gradient(90deg,#f472b6 20%, #fde68a 55%, #60a5fa 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                WELCOME
              </div>
              <div
                className="text-2xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                style={{
                  background: 'linear-gradient(90deg,#f472b6 15%, #fde68a 50%, #60a5fa 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                HOME
              </div>
            </div>
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
          </h2>
        </div>
        {/* 手機版：垂直滾動單列佈局 */}
        <div className="md:hidden w-full px-4">
          <div className="space-y-4">
            {cards.map((card) => (
              <div key={`mobile-${card.title}`} className="h-36">
                <Card card={card} />
              </div>
            ))}
          </div>
        </div>
        {/* 桌面版：網格佈局 */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {cards.map((card) => (
            <div
              key={`desktop-${card.title}`}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-[0_10px_32px_4px_rgba(244,114,182,0.12)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col"
              style={{
                boxShadow: '0 4px 24px 0 rgba(100,181,246,0.10),0 1.5px 7px 0 rgba(245,214,205,0.08)'
              }}
            >
              <div className="w-full h-40">
                <img 
                  src={card.img} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6 flex-grow">
                <h3 className="text-lg font-bold mb-2 text-pink-700">{card.title}</h3>
                {card.time && (
                  <p className="text-gray-700 text-sm mb-1 flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-pink-400" />
                    {card.time}
                  </p>
                )}
                <p className="text-gray-600 text-sm flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-blue-400" />
                  {card.href ? (
                    <Link href={card.href} className="hover:underline text-blue-700">
                      {card.location}
                    </Link>
                  ) : (
                    card.location
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 抽離卡片組件
function Card({ card, isWide = false }: { card: CardType; isWide?: boolean }) {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-[0_10px_32px_4px_rgba(244,114,182,0.12)] hover:-translate-y-2 transition-all duration-300 h-full flex">
      <div className="w-1/3 flex-shrink-0">
        <img 
          src={card.img} 
          alt={card.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 flex-grow flex flex-col justify-center">
        <h3 className="font-bold text-pink-700 text-base">{card.title}</h3>
        <div className="space-y-1 mt-1">
          {card.time && (
            <div className="flex items-center text-gray-600 text-xs">
              <Clock className="w-3 h-3 mr-1 text-pink-400 flex-shrink-0" />
              <span>{card.time}</span>
            </div>
          )}
          <div className="flex items-start text-gray-600 text-xs">
            <MapPin className="w-3 h-3 mr-1 text-blue-400 mt-0.5 flex-shrink-0" />
            <span>
              {card.href ? (
                <Link href={card.href} className="hover:underline text-blue-700">
                  {card.location}
                </Link>
              ) : (
                card.location
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}