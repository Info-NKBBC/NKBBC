import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import AboutSubNav from '@/components/AboutSubNav'
import Head from 'next/head'

export default function Beliefs() {
  return (
    <>
      <Head>
        <title>信仰宣言 | 南科福氣教會</title>
        <meta name="description" content="了解南科福氣教會的核心信仰與聖經教義" />
      </Head>

      <NavBar />
      <AboutSubNav />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">我們的信仰</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="mb-10">
            <p className="text-lg text-gray-700 mb-8 text-center">
              南科福氣教會相信聖經是神所默示的話語，是我們信仰與生活的最高權威。以下是我們所持守的基本信仰：
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">三位一體的神</h2>
              <p className="text-gray-700 leading-relaxed">
                我們相信獨一真神，永遠存在於三個位格：父、子、聖靈。三位一體的神同等同質，卻又各有獨特的位格和工作。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">耶穌基督</h2>
              <p className="text-gray-700 leading-relaxed">
                我們相信耶穌基督是神的獨生子，由童貞女馬利亞所生。祂過著無罪的生活，藉著祂在十字架上的死亡和復活，為世人的罪提供了完全的救贖。我們相信祂肉身復活，升天，並將再來審判世界。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">聖靈</h2>
              <p className="text-gray-700 leading-relaxed">
                我們相信聖靈是使人重生、內住在信徒裡面的神。聖靈幫助信徒成聖，賜下屬靈恩賜，並引導我們認識真理，過敬虔的生活。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">聖經</h2>
              <p className="text-gray-700 leading-relaxed">
                我們相信聖經（舊約和新約）是神所默示的，是信仰和生活的最高權威。聖經在原始手稿中完全無誤，為我們提供了認識神和祂旨意的充分啟示。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">得救</h2>
              <p className="text-gray-700 leading-relaxed">
                我們相信救恩是神恩典的禮物，人只能藉著信靠耶穌基督和祂的救贖工作而得著。救恩不是靠著人的善行或功德，乃是神白白的恩典。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">教會</h2>
              <p className="text-gray-700 leading-relaxed">
                我們相信教會是基督的身體，由所有真正信徒組成。地方教會是信徒的團契，為了敬拜、門訓、團契和傳福音而聚集。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">基督的再來</h2>
              <p className="text-gray-700 leading-relaxed">
                我們相信耶穌基督將親自再來，建立祂的國度。我們期待死人復活，信徒與基督永遠同在的福分，以及不信者將面對的審判。
              </p>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-gray-700 leading-relaxed italic">
              "因為世人都犯了罪，虧缺了神的榮耀。如今卻蒙神的恩典，因基督耶穌的救贖，就白白地稱義。" - 羅馬書 3:23-24
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
} 