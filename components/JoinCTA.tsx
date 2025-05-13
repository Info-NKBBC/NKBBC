'use client';
export default function JoinCTA() {
  return (
    <section className="py-8 bg-primary/20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-primary">歡迎加入南科福氣大家庭</h2>
        </div>
        <a
          href="/contact"
          className="px-6 py-3 bg-primary text-white rounded-full shadow hover:bg-primary/90 transition"
        >
          立即加入
        </a>
      </div>
    </section>
  );
} 