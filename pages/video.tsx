'use client';
import Link from 'next/link';
import { Youtube } from 'lucide-react';

export default function VideoPage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">影音平台</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center gap-4 mb-6">
          <Youtube className="w-8 h-8 text-red-500" />
          <h2 className="text-xl font-semibold">YouTube 頻道</h2>
        </div>
        <p className="text-gray-600 mb-4">南科福氣教會官方 YouTube 頻道，提供教會活動錄影、講道分享等精彩內容。</p>
        <a 
          href="https://www.youtube.com/@南科福氣教會/featured" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          訪問 YouTube 頻道
          <span className="text-white">→</span>
        </a>
      </div>
    </div>
  );
}
