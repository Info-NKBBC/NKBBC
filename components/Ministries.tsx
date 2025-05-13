'use client';

export default function Ministries() {
  const items = [
    { title: '主日崇拜', desc: '每週日崇拜，與神相遇，共享敬拜。' },
    { title: '兒青事工', desc: '關懷兒童與青少年，裝備生命成長。' },
    { title: '社區關懷', desc: '實踐愛心，關懷弱勢與鄰舍。' },
    { title: '小組團契', desc: '家人式小組，彼此扶持靈命成長。' },
  ];
  return (
    <section id="事工介紹" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">事工介紹</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(m => (
            <div key={m.title} className="p-6 bg-white rounded-2xl shadow hover:bg-primary/10 transition">
              <h3 className="text-2xl font-semibold mb-2 text-primary">{m.title}</h3>
              <p className="text-gray-600">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 