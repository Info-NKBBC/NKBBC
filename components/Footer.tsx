'use client';
export default function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            <div className="mb-4 md:mb-0">
              <img 
                src="/images/logo-horizontal.png" 
                alt="南科福氣教會"
                className="h-10 w-auto"
              />
            </div>
            <div className="text-center md:text-left border-l-0 md:border-l border-gray-600 pl-0 md:pl-6 py-1">
              <p className="text-gray-800 text-sm">聚會地址：南科育成中心 B101 國際會議廳</p>
              <p className="text-gray-800 text-sm mt-0.5">電話：0929327486， 06-5834626</p>
            </div>
          </div>
          <div className="text-center md:text-right mt-4 md:mt-0">
            <p className="text-gray-600 text-xs whitespace-nowrap">2025 南科福氣教會. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}