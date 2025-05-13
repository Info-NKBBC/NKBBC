'use client';
export default function CoreValueTwo() {
  return (
    <>
      {/* 核心價值二 */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-teal-600 transition-transform hover:scale-105">
        <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
          <span className="text-2xl font-bold text-white">2</span>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">是醫治我們身心靈的醫院</h3>
        <div className="space-y-3">
          <p className="bg-pink-200 text-gray-600 text-center py-2 px-3 rounded-md">一對一服事</p>
          <p className="bg-yellow-200 text-gray-600 text-center py-2 px-3 rounded-md">家人的愛、接納、肯定、扶持</p>
          <p className="bg-blue-200 text-gray-600 text-center py-2 px-3 rounded-md">內在生活的操練帶來全人得醫治</p>
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