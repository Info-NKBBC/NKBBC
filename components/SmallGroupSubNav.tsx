import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function SmallGroupSubNav() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // 確定當前路徑來高亮顯示活動鏈接
  const isActive = (path: string) => {
    return router.pathname === path ? 'text-teal-600 font-medium' : ''
  }

  // 使用 useEffect 關閉點擊外部區域時的行動選單
  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm sticky top-16 z-20">
      <div className="container mx-auto px-4">
        {/* 導航標題 - 僅在小屏幕顯示 */}
        <div className="md:hidden flex items-center justify-between py-3 pt-6">
          <h2 className="text-lg font-medium text-gray-800">我們的小組</h2>
          <button 
            onClick={() => setOpen(!open)} 
            aria-label="切換選單"
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2}
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} 
              />
            </svg>
          </button>
        </div>

        {/* 子導航選單 */}
        <nav className={`${open ? 'max-h-96' : 'max-h-0 md:max-h-full'} md:py-1 md:pt-5 pt-6 overflow-hidden transition-all duration-300 ease-in-out md:overflow-visible`}>
          <ul className="flex flex-col md:flex-row md:justify-center md:items-center space-y-2 md:space-y-0 md:space-x-6 py-4 md:py-5 pt-5 text-gray-700">
            <li className="md:hidden border-b pb-2 mb-2 border-gray-100">
              <Link href="/" className="hover:text-teal-600 transition-colors">
                返回首頁
              </Link>
            </li>
            <li className={`${isActive('/news')}`}>
              <Link href="/news" className="hover:text-teal-600 py-2 block md:inline-block transition-colors">
                小組介紹
              </Link>
            </li>
            <li className={`${isActive('/news/join')}`}>
              <Link href="/news/join" className="hover:text-teal-600 py-2 block md:inline-block transition-colors">
                如何加入小組
              </Link>
            </li>
            <li className={`${isActive('/news/testimony')}`}>
              <Link href="/news/testimony" className="hover:text-teal-600 py-2 block md:inline-block transition-colors">
                小組見證
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
} 