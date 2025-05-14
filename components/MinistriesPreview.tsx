'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css/pagination';

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
    img: '/images/hero1.jpg'
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
    location: '台南市善化區小新營56號',
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
    <section className="relative pt-12 pb-16 md:pb-24 w-full flex justify-center">
      {/* 動態漸層背景 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* 柔和粉彩色漸層背景 */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(230, 204, 255, 0.7) 0%, transparent 40%), ' +
                      'radial-gradient(circle at 80% 70%, rgba(255, 204, 230, 0.6) 0%, transparent 45%), ' +
                      'radial-gradient(circle at 50% 50%, rgba(204, 230, 255, 0.5) 0%, transparent 60%)',
            backgroundBlendMode: 'overlay',
          }}
        />
        {/* 柔光效果 */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)',
            mixBlendMode: 'overlay',
          }}
        />
        {/* 角落暈染效果 */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 0% 0%, rgba(200, 180, 255, 0.2) 0%, transparent 30%), ' +
                      'radial-gradient(circle at 100% 0%, rgba(255, 180, 200, 0.15) 0%, transparent 25%), ' +
                      'radial-gradient(circle at 0% 100%, rgba(180, 210, 255, 0.15) 0%, transparent 25%), ' +
                      'radial-gradient(circle at 100% 100%, rgba(200, 220, 255, 0.2) 0%, transparent 30%)',
            pointerEvents: 'none',
          }}
        />
      </div>
      <style jsx global>{`
        /* 專業字體 */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
        
        .font-title {
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 700;
          letter-spacing: -0.025em;
        }
        
        /* 漸層動畫效果 */
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        /* 文字陰影效果 */
        .text-outline {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        
        /* 添加自定義顏色 */
        .bg-lavender-100 { background-color: #f5f0ff; }
        .bg-pink-50 { background-color: #fff0f5; }
        .bg-sky-100 { background-color: #f0f9ff; }


      `}</style>
      <div className="relative z-10 w-[95%] md:w-[80%]">
        {/* 標題區塊 */}
        <div className="text-center mb-4 md:mb-16">
          <h2 className="relative inline-block text-2xl md:text-5xl lg:text-6xl font-title text-white/95 mb-4 md:mb-6">
            <div className="relative z-10 space-y-0.5 md:space-y-2">
              <div className="text-base md:text-3xl lg:text-4xl font-semibold tracking-wider text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                WELCOME
              </div>
              <div className="text-2xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                HOME
              </div>
            </div>
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
          </h2>
        </div>
        {/* 手機版：橫向滑動輪播 */}
        <div className="md:hidden w-full">
          <Swiper
            slidesPerView={1.3}
            spaceBetween={10}
            mousewheel={true}
            modules={[Mousewheel]}
            className="w-full pb-6"
          >
            {cards.map((card) => (
              <SwiperSlide key={`mobile-${card.title}`} className="h-auto w-[90%] max-w-[320px]">
                <Card card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* 桌面版：網格佈局 */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {cards.map((card) => (
            <div key={`desktop-${card.title}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="w-full h-40">
                <img 
                  src={card.img} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6 flex-grow">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                {card.time && (
                  <p className="text-gray-700 text-sm mb-1">{card.time}</p>
                )}
                <p className="text-gray-600 text-sm">
                  {card.href ? (
                    <Link href={card.href} className="hover:underline">
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
function Card({ card }: { card: CardType }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-row">
      <div className="w-2/5 flex-shrink-0">
        <img 
          src={card.img} 
          alt={card.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 md:p-4 flex-grow flex flex-col justify-center">
        <h3 className="text-sm md:text-base font-bold mb-1">{card.title}</h3>
        {card.time && (
          <p className="text-gray-700 text-xs md:text-sm mb-1">{card.time}</p>
        )}
        <p className="text-gray-600 text-xs md:text-sm">
          {card.href ? (
            <Link href={card.href} className="hover:underline">
              {card.location}
            </Link>
          ) : (
            card.location
          )}
        </p>
      </div>
    </div>
  );
}