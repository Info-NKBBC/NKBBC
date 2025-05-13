'use client';
export function Strategy() {
  return (
    <section id="策略" className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">以共同追求材料成全聖徒</h3>
            <p className="text-gray-600 text-center">
              <span className="text-blue-600">聖經與生命</span>的學習與成長，透過統一的材料幫助信徒在真理上紮根。
            </p>
            <div className="mt-6 border-t border-dashed border-gray-200 pt-4">
              <p className="text-sm text-teal-600 text-center italic">
                "為要成全聖徒，各盡其職，建立基督的身體"
              </p>
            </div>
          </div>
          
          <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">以祭司團成全成全聖徒</h3>
            <p className="text-gray-600 text-center">
              培育信徒成為<span className="text-blue-600">稱職祭司</span>，能夠服事神並牧養他人。
            </p>
            <div className="mt-6 border-t border-dashed border-gray-200 pt-4">
              <p className="text-sm text-teal-600 text-center italic">
                "你們是被揀選的族類，是有君尊的祭司"
              </p>
            </div>
          </div>
          
          <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">以幸福小組為平台</h3>
            <p className="text-gray-600 text-center">
              透過小組環境<span className="text-blue-600">宣揚福音</span>，讓更多人認識基督並加入教會。
            </p>
            <div className="mt-6 border-t border-dashed border-gray-200 pt-4">
              <p className="text-sm text-teal-600 text-center italic">
                "我不以福音為恥，這福音本是神的大能"
              </p>
            </div>
          </div>
          
          <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">以幸福門訓系統成全聖徒</h3>
            <p className="text-gray-600 text-center">
              系統性培訓讓每位信徒能夠<span className="text-blue-600">各盡其職</span>，發揮恩賜服事教會。
            </p>
            <div className="mt-6 border-t border-dashed border-gray-200 pt-4">
              <p className="text-sm text-teal-600 text-center italic">
                "按著各體的功用彼此相助，便叫身體漸漸增長"
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

// 為了向後兼容，同時提供默認導出
export default Strategy; 