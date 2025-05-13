'use client';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export function AboutPreview() {
  return (
    <section className="relative bg-white py-8 px-4">
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/0"></div>
      <div className="relative container mx-auto grid gap-6 sm:grid-cols-2 items-center">
        <div className="rounded-xl overflow-hidden shadow">
          <img
            src="/images/about.jpg"
            alt="教堂內部示意圖"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-primary mr-2" />
            <h2 className="text-2xl font-bold">關於我們</h2>
          </div>
          <p className="text-gray-700 mb-6">
            南科福氣教會成立於 2010 年，致力於分享福音、牧養群體、關懷社區，
            成為人人都能經歷神同在與恩典的屬靈家園。
          </p>
        </div>
      </div>
    </section>
  );
}