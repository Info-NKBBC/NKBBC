'use client';
import { Calendar, User, Pencil, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function DonatePage() {
  return (
    <>
      <NavBar />
      <main>
        <div className="container mx-auto pb-24">
          <div className="pt-[9rem]">
            {/* 母親節特別活動區塊 */}
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="p-8 flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <Calendar className="w-8 h-8 text-pink-500" />
                      <h2 className="text-2xl font-semibold text-pink-600">母親節特別活動</h2>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-600">日期：2025年5月11日（星期日）</p>
                      <p className="text-gray-600">時間：下午2:00 - 5:00</p>
                      <p className="text-gray-600">地點：南科福氣教會</p>
                      <p className="text-gray-600">內容：親子手作、感恩茶會、祝福祈禱</p>
                    </div>
                    <Link 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSemPSvyzDRonctgULsfA1lGw-XdyS-NSwQMr5xCsvQQ9PMMSw/viewform" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors mt-6"
                    >
                      <Pencil className="w-4 h-4" />
                      報名參加
                    </Link>
                  </div>
                  <div className="hidden md:block w-full md:w-1/2 lg:w-2/5 relative">
                    <div className="relative w-full h-48 md:h-56 lg:h-64">
                      <Image 
                        src="/images/events/mothers-day.JPG" 
                        alt="母親節特別活動" 
                        fill
                        className="object-cover rounded-r-lg"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 幸福門訓區塊 */}
          <div className="pt-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="p-8 flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <User className="w-8 h-8 text-blue-500" />
                    <h2 className="text-2xl font-semibold text-blue-600">幸福門訓</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600">日期：每週六上午9:30 - 11:30</p>
                    <p className="text-gray-600">地點：南科福氣教會</p>
                    <p className="text-gray-600">內容：聖經分享、生命成長、信仰交流</p>
                    <p className="text-gray-600">對象：對信仰有興趣的弟兄姊妹</p>
                  </div>
                  <Link 
                    href="/donate/happiness-training"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mt-6"
                  >
                    <Pencil className="w-4 h-4" />
                    報名參加
                  </Link>
                </div>
                <div className="hidden md:block w-full md:w-1/2 lg:w-2/5 relative">
                  <div className="relative w-full h-48 md:h-56 lg:h-64">
                    <Image 
                      src="/images/events/happiness-training.jpg" 
                      alt="幸福門訓" 
                      fill
                      className="object-cover rounded-r-lg"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
