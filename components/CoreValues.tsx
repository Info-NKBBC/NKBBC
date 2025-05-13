'use client';
export default function CoreValues() {
  return (
    <>
      {/* 核心價值一 */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-teal-600 transition-transform hover:scale-105">
        <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
          <span className="text-2xl font-bold text-white">1</span>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">教會是神愛的大家庭</h3>
        <div className="space-y-3">
          <p className="text-gray-600 text-center">你可以在這裡找到安全感、歸屬感、價值感</p>
          <p className="text-gray-600 text-center">你可以在這裡被接納、被愛、被珍惜</p>
          <p className="text-gray-600 text-center">全心愛神、彼此相愛、彼此相顧</p>
          <div className="mt-6 border-t border-dashed border-gray-200 pt-4">
            <p className="text-sm text-teal-600 text-center italic">
              "你們要彼此相愛，像我愛你們一樣" - 約翰福音 15:12
            </p>
          </div>
        </div>
      </div>
      
      {/* 核心價值二 - 佔據第二個網格位置 */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-teal-600 transition-transform hover:scale-105">
        <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
          <span className="text-2xl font-bold text-white">2</span>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">是醫治我們身心靈的醫院</h3>
        <div className="space-y-3">
          <p className="text-gray-600 text-center px-2 py-1 bg-pink-200 rounded">一對一服事</p>
          <p className="text-gray-600 text-center px-2 py-1 bg-yellow-200 rounded">家人的愛、接納、肯定、扶持</p>
          <p className="text-gray-600 text-center px-2 py-1 bg-blue-200 rounded">內在生活的操練帶來全人得醫治</p>
          <div className="mt-6 border-t border-dashed border-gray-200 pt-4">
            <p className="text-sm text-teal-600 text-center italic">
              "醫治傷心的人，纏裹他們的傷處" - 詩篇 147:3
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 