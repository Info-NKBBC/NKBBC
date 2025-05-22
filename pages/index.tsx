import NavBar from '@/components/NavBar';
import HeroCarousel from '@/components/HeroCarousel';
import { AboutPreview } from '@/components/AboutPreview';
import MinistriesPreview from '@/components/MinistriesPreview';
import Footer from '@/components/Footer';
import DailyDevotion from '@/components/DailyDevotion';
import SocialFloat from '@/components/SocialFloat';

export default function Home() {
  return (
    <>
      <div className="relative">
        <NavBar />
        
        <main className="relative bg-gray-100">
          <div className="pt-16 md:pt-28">
            <div className="bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500">
              <HeroCarousel />
            </div>
          </div>

          <MinistriesPreview />

          {/* 行事曆區塊 */}
          <section className="relative py-10 overflow-hidden w-full" style={{background: 'linear-gradient(120deg, #f7d6f7 0%, #ffe4b0 40%, #aee8fd 100%)'}}>
            <div className="w-[80%] mx-auto">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">教會行事曆</h2>
              </div>
              <div className="w-full overflow-x-auto rounded-lg shadow">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=shchurch5%40gmail.com&ctz=Asia%2FTaipei"
                  style={{ border: 0 }}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  title="教會行事曆"
                  className="w-full min-w-[320px] h-[80vw] md:h-[600px]"
                ></iframe>
              </div>
            </div>
          </section>

          {/* 生命見證區塊 */}
          <section className="relative py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  生命見證
                </h2>
                <div className="w-20 h-1.5 mx-auto bg-gradient-to-r from-pink-500 to-orange-400 rounded-full"></div>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                  聽聽弟兄姊妹們分享他們的生命故事
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 見證1 */}
                <div className="relative group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-400 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative p-6">
                    <div className="w-full">
                      <div className="youtube-container relative w-[80%] mx-auto">
                        <div className="aspect-video">
                          <iframe 
                            src="https://www.youtube.com/embed/KJ_XkJoTW0A" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="rounded-lg w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div className="w-[80%] mx-auto mt-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        生命見證1
                      </h3>
                      <p className="text-gray-600">
                        分享信仰旅程與神的帶領
                      </p>
                    </div>
                  </div>
                </div>

                {/* 見證2 */}
                <div className="relative group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative p-6">
                    <div className="w-full">
                      <div className="youtube-container relative w-[80%] mx-auto">
                        <div className="aspect-video">
                          <iframe 
                            src="https://www.youtube.com/embed/uMW2kAhZN9k" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="rounded-lg w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div className="w-[80%] mx-auto mt-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        生命見證2
                      </h3>
                      <p className="text-gray-600">
                        分享信仰成長與見證
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
} 