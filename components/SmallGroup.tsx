'use client';
export default function SmallGroup() {
  return (
    <section id="我們的小組" className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-teal-700 mb-6">小組聚會</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-teal-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>每週聚會讀經、分享、禱告</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-teal-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>彼此關懷、互相代禱</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-teal-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>一起服事、外展與福音工作</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl leading-relaxed mb-6">
              小組是你屬靈的新家庭，
              在這裡有愛、接納、肯定、扶持，
            </p>
            <p className="text-2xl text-teal-700 font-semibold">生命被更新、重建和成全！</p>
            <div className="mt-8 p-6 bg-teal-50 border-l-4 border-teal-500 rounded">
              <p className="italic">
                "並且照著主所分給各人的，和神所召各人的，都要如此行。我吩咐各教會都是這樣。" 
                <span className="block mt-2 text-right">- 哥林多前書 7:17</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* 添加小組時間表格 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h3 className="text-2xl font-semibold text-white bg-teal-700 py-4 px-6 text-center mb-0">小組聚會時間表</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-3 px-4 text-left border-r border-blue-500">聚會名稱</th>
                  <th className="py-3 px-4 text-center border-r border-blue-500 w-24">星期</th>
                  <th className="py-3 px-4 text-center border-r border-blue-500 w-36">時間</th>
                  <th className="py-3 px-4 text-left">地點</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 border-r border-gray-200">尤君小組</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">五</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">19:30 ~ 21:30</td>
                  <td className="py-3 px-4">牧師家</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-r border-gray-200">朝暉小組</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">五</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">19:30 ~ 21:30</td>
                  <td className="py-3 px-4">朝暉家</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 border-r border-gray-200">榮杰小組</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">五</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">19:30 ~ 21:30</td>
                  <td className="py-3 px-4">榮杰家</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-r border-gray-200">秀蘭小組</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">六</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">8:00 ~ 9:45</td>
                  <td className="py-3 px-4">美善農場</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 border-r border-gray-200">俊男小組</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">六</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">14:30 ~ 16:30</td>
                  <td className="py-3 px-4">美善農場</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-r border-gray-200">青少年團契</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">日</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">16:00-18:30</td>
                  <td className="py-3 px-4">牧師家</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 border-r border-gray-200">黃晨小組</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">一</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">19:30~21:00</td>
                  <td className="py-3 px-4">牧師家(1、2樓)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-r border-gray-200">勝騰小組</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">一</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">20:00~22:00</td>
                  <td className="py-3 px-4">牧師家(1、2樓)</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 border-r border-gray-200">玉真小組</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">一</td>
                  <td className="py-3 px-4 text-center border-r border-gray-200">10:00 ~ 12:00</td>
                  <td className="py-3 px-4">慧如家</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-100 p-4 text-center text-gray-700">
            <p>歡迎聯繫教會辦公室了解更多小組資訊或加入小組</p>
          </div>
        </div>
      </div>
    </section>
  );
} 