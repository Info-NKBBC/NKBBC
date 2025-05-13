'use client';
export default function Events() {
  const events = [
    { date: '2025/04/27', title: '主日崇拜' },
    { date: '2025/05/03', title: '兒青團契' },
    { date: '2025/05/10', title: '社區午餐關懷' },
  ];
  return (
    <section id="最新消息" className="container mx-auto px-6 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">最新消息</h2>
      <ul className="space-y-6 max-w-2xl mx-auto">
        {events.map(e => (
          <li key={e.title} className="flex justify-between p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <span className="font-medium text-lg">{e.title}</span>
            <time className="text-gray-500">{e.date}</time>
          </li>
        ))}
      </ul>
    </section>
  );
} 