import NavBar from '@/components/NavBar';
import AboutSubNav from '@/components/AboutSubNav';
import CoreValues from '@/components/CoreValues';
import CoreValueTwo from '@/components/CoreValueTwo';
import CoreValueThree from '@/components/CoreValueThree';
import CoreValueFour from '@/components/CoreValueFour';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function CoreValuesPage() {
  return (
    <>
      <Head>
        <title>教會核心價值 | 南科福氣教會</title>
        <meta name="description" content="了解南科福氣教會的核心價值" />
      </Head>
      <NavBar />
      
      <main className="pt-24">
        <section className="container mx-auto px-6 text-dark mt-32">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
            <span className="relative pb-2 inline-block">
              教會核心價值
              <svg className="absolute -bottom-1 w-full" xmlns="http://www.w3.org/2000/svg" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                <path d="M0,6 C30,2 70,2 100,6 L100,0 L0,0 Z" fill="#0d9488" />
              </svg>
            </span>
          </h1>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            我們的核心價值是我們對教會和信仰的基本信念，決定了我們的使命及行動方向
          </p>
        </section>
        <div className="bg-gray-50 py-20 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* 包裝整個卡片組 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-teal-600">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-teal-800">教會是神愛的大家庭</h3>
                </div>
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
              
              {/* 核心價值二 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-teal-600">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-teal-800">是醫治我們身心靈的醫院</h3>
                </div>
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
              
              {/* 核心價值三 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-teal-600">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-teal-800">教會是裝備我們的學校</h3>
                </div>
                <div className="space-y-2">
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
                  
                  <div className="mt-6 border-t border-dashed border-gray-200 pt-4">
                    <p className="text-sm text-teal-600 text-center italic">
                      "以學習的心得著智慧" - 箴言 18:15
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 核心價值四 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-teal-600">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="text-3xl font-bold text-white">4</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-teal-800">訓練我們成為上帝的同工</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600 text-center">成為基督的精兵，作得勝者、一同建造基督的身體</p>
                  <div className="mt-6 border-t border-dashed border-gray-200 pt-4">
                    <p className="text-sm text-teal-600 text-center italic">
                      "為要成全聖徒，各盡其職，建立基督的身體。" - 以弗所書 4:12
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 