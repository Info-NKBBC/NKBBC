import React from 'react';

export default function DailyDevotion() {
  return (
    <section className="relative bg-yellow-600 bg-opacity-80 py-16 px-8 md:px-16 -mt-12 rounded-none shadow-none overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">每日靈靈</h2>
        <div className="text-yellow-200 mb-2">2025/05/06 | 主題經文：哥林多前書 3:3-4</div>
        <div className="text-2xl font-bold text-yellow-100 mb-4">異教與信仰</div>
        <p className="text-white mb-4">弟兄們，「屬肉」的，今令禁止。<br/>「待受教」教導完全不同的邏輯、教訓。</p>
        <button className="mt-4 px-6 py-2 rounded bg-gray-900 text-yellow-300 font-semibold hover:bg-yellow-800 transition">查看更多</button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
}
