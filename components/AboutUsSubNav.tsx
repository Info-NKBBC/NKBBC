import Link from 'next/link';
import { useState } from 'react';

export default function AboutUsSubNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      {/* 漢堡按鈕：行動版顯示 */}
      <div className="md:hidden p-4">
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
      {/* 子選單 */}
      <nav className={`${open ? 'block' : 'hidden'} md:flex md:justify-center bg-white`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4">
          <li><Link href="/about-us/vision-mission">異象與使命</Link></li>
          <li><Link href="/about-us/path">實行之路</Link></li>
          <li><Link href="/about-us/strategy">教會策略</Link></li>
          <li><Link href="/about-us/values">教會核心價值</Link></li>
          <li><Link href="/about-us/groups">我們的小組</Link></li>
          <li><Link href="/about-us/meetings">教會的各種成全聚會</Link></li>
        </ul>
      </nav>
    </div>
  );
} 