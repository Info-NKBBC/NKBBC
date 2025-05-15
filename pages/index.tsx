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
        </main>
        <Footer />
      </div>
    </>
  );
} 