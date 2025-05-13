'use client';
export default function VisionMission() {
  return (
    <section id="異象與使命" className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all hover:shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-teal-700 mb-4 text-center">教會異象</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              成為人人都能經歷神同在與恩典的屬靈家園，在福音大能中建立基督的身體。
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all hover:shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-teal-700 mb-4 text-center">教會使命</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              透過小組牧養與裝備，建立健康的教會；透過關懷與宣教，擴展神的國度。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 