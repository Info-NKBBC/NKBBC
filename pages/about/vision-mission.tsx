import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import AboutSubNav from '@/components/AboutSubNav'
import Head from 'next/head'

export default function VisionMission() {
  return (
    <>
      <Head>
        <title>異象與使命 | 南科福氣教會</title>
        <meta name="description" content="了解南科福氣教會的異象與使命，我們如何服務社區並傳播福音。" />
      </Head>
      <NavBar />
      
      <main className="pt-24">
        <section className="mb-12 mt-32">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 pt-8">
            <span className="relative pb-2 inline-block">
              異象與使命
              <svg className="absolute -bottom-1 w-full" xmlns="http://www.w3.org/2000/svg" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                <path d="M0,6 C30,2 70,2 100,6 L100,0 L0,0 Z" fill="#0d9488" />
              </svg>
            </span>
          </h1>
        </section>
        
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-teal-700">我們的異象與使命</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">我們的異象</h3>
              <h4 className="text-xl font-medium mb-4 text-center text-teal-700">基督與教會</h4>
              <div className="space-y-3">
                <p className="text-gray-600 text-center">
                  <span className="font-semibold text-teal-800">『基督』</span> － 基督是一切，又在之內 (Christ is all & in all)
                </p>
                <p className="text-gray-600 text-center">
                  <span className="font-semibold text-teal-800">『教會』</span> － 是基督的身體，是充滿神並彰顯神榮耀的器皿
                </p>
              </div>
              <div className="mt-6 border-t border-dashed border-gray-200 pt-4">
                <p className="text-sm text-teal-600 text-center italic">
                  "祂是教會的頭，教會是祂的身體，是那充滿萬有者所充滿的"
                </p>
              </div>
            </div>
            
            <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">我們的使命</h3>
              <h4 className="text-xl font-medium mb-4 text-center text-teal-700">道成肉身的見證</h4>
              <div className="space-y-3">
                <p className="text-gray-600 text-center">
                  無論個人、家庭、職場與教會，盼望都成為耶穌基督『道成肉身』的見證人
                </p>
              </div>
              <div className="mt-6 border-t border-dashed border-gray-200 pt-4">
                <p className="text-sm text-teal-600 text-center italic">
                  "你們就是這些事的見證人" - 路加福音 24:48
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
} 