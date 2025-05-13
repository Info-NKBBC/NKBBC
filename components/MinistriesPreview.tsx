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
    location: '南科育成中心 B101 國際會議廳',
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
    <section className="py-8 md:py-12 w-full flex justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <div className="w-[90%] md:w-[80%]">
        {/* 手機版：橫向滑動輪播 */}
        <div className="md:hidden w-full pb-8">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={16}
            pagination={{ clickable: true }}
            mousewheel={true}
            modules={[Pagination, Mousewheel]}
            className="w-full pb-10"
          >
            {cards.map((card) => (
              <SwiperSlide key={`mobile-${card.title}`} className="h-auto">
                <Card card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* 桌面版：網格佈局 */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {cards.map((card) => (
            <Card key={`desktop-${card.title}`} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 抽離卡片組件
function Card({ card }: { card: CardType }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <img 
        src={card.img} 
        alt={card.title}
        className="w-full h-40 md:h-48 object-cover"
      />
      <div className="p-4 md:p-6 flex-grow">
        <h3 className="text-lg md:text-xl font-bold mb-2">{card.title}</h3>
        {card.time && (
          <p className="text-gray-700 text-sm md:text-base mb-1">{card.time}</p>
        )}
        <p className="text-gray-600 text-sm md:text-base">
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