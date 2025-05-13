'use client';

export default function AboutSection() {
  return (
    <section id="關於我們" className="container mx-auto px-6 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">關於我們</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <p className="text-lg leading-relaxed">
            南科福氣教會成立於 2010 年，致力於在臺南科學園區及南部地區分享福音、牧養群體、關懷社區。
            我們的異象是「成為人人都能經歷神同在與恩典的屬靈家園」。
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img src="/images/about.jpg" alt="教會介紹" className="w-full rounded-2xl shadow-lg" />
        </div>
      </div>
    </section>
  );
} 