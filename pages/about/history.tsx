import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import AboutSubNav from '@/components/AboutSubNav'
import Head from 'next/head'
import Image from 'next/image'

export default function History() {
  return (
    <>
      <Head>
        <title>教會歷史 | 南科福氣教會</title>
        <meta name="description" content="了解南科福氣教會的成立歷程與發展" />
      </Head>

      <NavBar />
      <AboutSubNav />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">我們的歷史</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 relative h-64 md:h-96">
            <Image 
              src="/images/church-history.jpg" 
              alt="教會歷史照片" 
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">創立初期 (2010-2012)</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center mx-auto max-w-3xl">
                南科福氣教會始於2010年，由王傳道夫婦與五個家庭一同在南科園區的小型辦公室開始聚會。我們最初的異象是服務南科園區的專業人士和家庭，提供靈性的指引和社區支持。儘管起初資源有限，但我們憑著信心和熱忱，很快吸引了更多尋求信仰的人們。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">成長與擴展 (2013-2017)</h2>
              <p className="text-gray-700 leading-relaxed">
                2013年，隨著會眾人數的增加，我們遷移至現址。這段期間，教會建立了小組結構，開始多項事工，包括兒童主日學、青少年團契、婦女團契和敬拜團隊。2015年，我們按立了第一位長老，同年組織了首次海外短宣。到2017年底，教會人數已超過一百人，並開始積極參與社區服務和福音事工。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">成熟與使命 (2018-2022)</h2>
              <p className="text-gray-700 leading-relaxed">
                2018至2022年是教會事工成熟的階段。我們擴大了服務範圍，建立了系統性的門徒訓練計畫，並培養了多位教會領袖。教會開始支持本地和國際宣教事工，與其他教會和機構建立夥伴關係。2020年疫情期間，我們迅速轉向線上聚會，維持了會眾的連結和靈命成長。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">展望未來 (2023-現在)</h2>
              <p className="text-gray-700 leading-relaxed">
                2023年起，教會進入新的階段。我們重新確立了使命和異象，專注於建立健康的門徒和服務社區。我們計劃擴大實體場地，增加服務時段，並在週間提供更多事工和活動。我們也致力於培養下一代的領袖，建立可持續發展的教會結構，以確保教會能長期服務社區，並傳遞福音信息。
              </p>
            </section>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">里程碑</h2>
              <ul className="space-y-4 list-disc pl-5">
                <li className="text-gray-700"><span className="font-semibold">2010</span> - 教會成立，開始第一次主日崇拜</li>
                <li className="text-gray-700"><span className="font-semibold">2013</span> - 搬遷至現址</li>
                <li className="text-gray-700"><span className="font-semibold">2015</span> - 按立第一位長老，組織首次海外短宣</li>
                <li className="text-gray-700"><span className="font-semibold">2017</span> - 會眾人數突破一百人</li>
                <li className="text-gray-700"><span className="font-semibold">2020</span> - 開始線上聚會服務</li>
                <li className="text-gray-700"><span className="font-semibold">2022</span> - 慶祝教會成立十二週年</li>
                <li className="text-gray-700"><span className="font-semibold">2023</span> - 啟動教會發展五年計畫</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
} 