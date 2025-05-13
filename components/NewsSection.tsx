'use client';
export default function NewsSection() {
  const news = [
    { date:'2025/04/20', title:'母親節特別崇拜' },
    { date:'2025/05/01', title:'小組團契週年慶' },
    { date:'2025/05/15', title:'教會敬拜培訓課程' },
    { date:'2025/06/01', title:'兒童主日學夏令營' },
  ];
  return (
    <section id="最新消息" className="bg-light py-8">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">最新消息</h2>
        <ul className="max-w-2xl mx-auto space-y-3">
          {news.map(n=>(
            <li key={n.title} className="flex justify-between p-3 bg-white rounded-xl shadow hover:bg-light transition">
              <span className="text-dark">{n.title}</span>
              <time className="text-gray-500">{n.date}</time>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
} 