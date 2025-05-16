'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const gatherings = [
  {
    id: 1,
    title: '琴與爐敬拜、教會禱告會',
    time: '週日上午 09:00–09:50',
    description: '透過詩歌敬拜與禱告，與神親近，為教會和個人需要代求。',
  },
  {
    id: 2,
    title: '主日聚會、兒童主日學',
    time: '週日上午 10:00–12:00',
    description: '主日崇拜信息與兒童聖經教導，適合全家一起參與。',
  },
  {
    id: 3,
    title: '兒童品格班',
    time: '週三晚上 19:00–20:30',
    description: '透過聖經故事和活動，培養孩子優良品格和屬靈生命。',
  },
  {
    id: 4,
    title: '幸福門徒訓練',
    time: '每年 1月、7月 (4學期×12週)',
    description: '系統性的門徒訓練課程，幫助信徒在真理上扎根成長。',
  },
  {
    id: 5,
    title: '幸福小組',
    time: '每年 4月、10月 (8週)',
    description: '小組形式的福音聚會，分享生命見證，領人歸主。',
  },
  {
    id: 6,
    title: '細胞小組',
    time: '點擊查看詳情',
    description: '點擊查看詳情',
    isLink: true
  }
];

export default function Gatherings() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // 初始檢查
    checkIfMobile();
    
    // 監聽視窗大小變化
    window.addEventListener('resize', checkIfMobile);
    
    // 清除監聽器
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleCellGroupClick = (e: React.MouseEvent, gathering: any) => {
    if (gathering.isLink) {
      e.preventDefault();
      router.push('/about/groups');
    }
  };

  // 手機版視圖
  const MobileView = () => (
    <div className="space-y-4 md:hidden">
      {gatherings.map((gathering, index) => {
        const isCellGroup = gathering.title === '細胞小組';
        const containerClass = `bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 ${isCellGroup ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''}`;
        
        return (
          <motion.div
            key={gathering.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={containerClass}
            onClick={(e) => isCellGroup && handleCellGroupClick(e, gathering)}
          >
            <div className="p-4">
              <div className="flex items-start">
                <div className={`flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r ${isCellGroup ? 'from-blue-400 to-teal-400' : 'from-rose-400 to-amber-400'} text-white font-bold`}>
                  {gathering.id}
                </div>
                <div className="ml-3 flex-1">
                  <h3 className="text-base font-medium text-gray-900">
                    {gathering.title}
                    {isCellGroup && (
                      <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        點擊查看
                      </span>
                    )}
                  </h3>
                  <div className={`mt-1 flex items-center text-sm ${isCellGroup ? 'text-blue-600' : 'text-rose-600'}`}>
                    <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {gathering.time}
                  </div>
                  <p className={`mt-2 text-sm ${isCellGroup ? 'text-blue-600' : 'text-gray-600'}`}>
                    {gathering.description}
                  </p>
                </div>
              </div>
            </div>
            <div className={`h-1 ${isCellGroup ? 'bg-gradient-to-r from-blue-200 to-teal-200' : 'bg-gradient-to-r from-rose-200 via-amber-200 to-cyan-200'}`}></div>
          </motion.div>
        );
      })}
    </div>
  );

  // 桌面版視圖
  const DesktopView = () => (
    <div className="hidden md:block">
      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-rose-50 via-amber-50 to-cyan-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                聚會名稱
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                時間
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                說明
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {gatherings.map((gathering, index) => {
              const isCellGroup = gathering.title === '細胞小組';
              const rowClass = `hover:bg-gray-50 ${isCellGroup ? 'cursor-pointer hover:bg-blue-50' : ''}`;
              
              return (
                <motion.tr
                  key={gathering.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={rowClass}
                  onClick={(e) => isCellGroup && handleCellGroupClick(e, gathering)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full ${isCellGroup ? 'bg-gradient-to-r from-blue-400 to-teal-400' : 'bg-gradient-to-r from-rose-400 to-amber-400'} text-white font-bold`}>
                        {gathering.id}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 flex items-center">
                          {gathering.title}
                          {isCellGroup && (
                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              點擊查看
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`flex items-center text-sm ${isCellGroup ? 'text-blue-600 font-medium' : 'text-rose-600'}`}>
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {gathering.time}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`text-sm ${isCellGroup ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                      {gathering.description}
                    </div>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
        >
          {/* 手機版視圖 */}
          <MobileView />
          
          {/* 桌面版視圖 */}
          <DesktopView />
          
          {/* 裝飾元素 */}
          <div className="h-1.5 bg-gradient-to-r from-rose-200 via-amber-200 to-cyan-200"></div>
        </motion.div>
      </div>
    </section>
  );
}