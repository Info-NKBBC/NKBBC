'use client';
export default function CoreValueThree() {
  return (
    <>
      {/* 核心價值三 - 佔據第三個網格位置 */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-teal-600 transition-transform hover:scale-105">
        <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
          <span className="text-2xl font-bold text-white">3</span>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">教會是裝備我們的學校</h3>
        <div className="space-y-3">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 border border-gray-200 shadow-sm">
                <span className="font-semibold text-gray-700">1</span>
              </div>
              <p className="text-gray-600">真理造就課程</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 border border-gray-200 shadow-sm">
                <span className="font-semibold text-gray-700">2</span>
              </div>
              <p className="text-gray-600">內在生活課程</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 border border-gray-200 shadow-sm">
                <span className="font-semibold text-gray-700">3</span>
              </div>
              <p className="text-gray-600">幸福門徒訓練系統</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 border border-gray-200 shadow-sm">
                <span className="font-semibold text-gray-700">4</span>
              </div>
              <p className="text-gray-600">親密之旅課程</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 border border-gray-200 shadow-sm">
                <span className="font-semibold text-gray-700">5</span>
              </div>
              <p className="text-gray-600">父母成長班課程</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 border border-gray-200 shadow-sm">
                <span className="font-semibold text-gray-700">6</span>
              </div>
              <p className="text-gray-600">財務管理課程</p>
            </div>
          </div>
          
          <div className="mt-6 border-t border-dashed border-gray-200 pt-4">
            <p className="text-sm text-teal-600 text-center italic">
              "以學習的心得著智慧" - 箴言 18:15
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 