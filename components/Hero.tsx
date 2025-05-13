'use client';

export default function Hero() {
  return (
    <section
      id="首頁"
      className="relative flex items-center justify-center aspect-[16/9] bg-cover bg-center text-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 pointer-events-none">
  {/* 主漸層：左上淡紫藍，右下淡粉白 */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-white to-pink-200 opacity-90" />
  {/* 柔光疊加：白色半透明 */}
  <div className="absolute inset-0 bg-white opacity-40 mix-blend-lighten" />
</div>
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">歡迎來到南科福氣教會</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">在這裡經歷信仰、盼望與愛的同在</p>
        <a
          href="#聯絡我們"
          className="inline-block px-8 py-4 bg-white text-primary font-medium rounded-full shadow-lg hover:shadow-2xl transition"
        >
          線上報名
        </a>
      </div>
    </section>
  );
} 