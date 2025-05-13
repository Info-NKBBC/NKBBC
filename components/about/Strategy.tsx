'use client'

export default function Strategy() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">教會策略</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-primary">我們的三大策略</h2>
        <p className="mb-6">
          南科福氣教會以下列三大策略，作為教會各項事工發展的指導方針：
        </p>
        
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
            <h3 className="text-xl font-bold mb-3">1. 建立小組牧養體系</h3>
            <p>
              我們相信小組是最有效的牧養單位，能夠幫助信徒建立真實的關係、
              彼此服事、成長和問責。我們致力於建立健康的小組體系，
              讓每一位教會成員都能在小組中被牧養和成長。
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
            <h3 className="text-xl font-bold mb-3">2. 裝備信徒領袖</h3>
            <p>
              我們重視門徒訓練和領袖培育，提供系統性的裝備課程，
              幫助信徒了解聖經真理、發展事奉恩賜，並成為能夠牧養他人的領袖。
              我們相信，每一位信徒都有潛力成為神國度的工人。
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
            <h3 className="text-xl font-bold mb-3">3. 拓展社區影響力</h3>
            <p>
              我們積極參與社區服務，關心社區需要，並尋求與社區建立良好的關係。
              透過各種服務項目和福音工作，我們希望能夠將神的愛和福音帶給更多的人，
              使教會成為社區的祝福。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 