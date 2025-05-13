'use client';
export default function CoreValueFour() {
  return (
    <>
      {/* 核心價值四 */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-teal-600 transition-transform hover:scale-105">
        <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
          <span className="text-2xl font-bold text-white">4</span>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">訓練我們成為上帝的同工</h3>
        <div className="space-y-3">
          <p className="text-gray-600 text-center">成為基督的精兵，作得勝者、一同建造基督的身體</p>
          <div className="mt-6 border-t border-dashed border-gray-200 pt-4">
            <p className="text-sm text-teal-600 text-center italic">
              "為要成全聖徒，各盡其職，建立基督的身體。" - 以弗所書 4:12
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 