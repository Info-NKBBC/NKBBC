'use client'

export default function SmallGroup() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">我們的小組</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">小組事工</h2>
        <p className="mb-6">
          在南科福氣教會，小組是我們牧養體系的核心。我們相信，透過小組，信徒可以建立更深的關係，
          得到更貼心的關懷和牧養，並有機會在服事中成長。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-primary">小組的宗旨</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>提供一個安全、溫暖的環境，讓每位成員都能敞開心分享</li>
              <li>透過查經和禱告，幫助成員更深認識神</li>
              <li>建立彼此關懷、互相扶持的關係網絡</li>
              <li>發掘和培育成員的恩賜，裝備他們成為服事者</li>
              <li>提供傳福音的平台，擴展神的國度</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-primary">小組的活動</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>經文查考：一起研讀聖經，應用在生活中</li>
              <li>分享代禱：分享生活點滴，彼此代禱</li>
              <li>敬拜讚美：透過音樂敬拜神</li>
              <li>團契活動：郊遊、聚餐等增進情誼的活動</li>
              <li>社區服務：一起參與社區服務，實踐信仰</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-primary text-center">我們的小組類型</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="font-bold text-xl mb-2">成人小組</h3>
            <p className="text-sm">適合各年齡層成年人參加，專注於聖經學習和生活應用</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="font-bold text-xl mb-2">家庭小組</h3>
            <p className="text-sm">為有孩子的家庭設計，關注家庭生活和基督化家庭建立</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="font-bold text-xl mb-2">青年小組</h3>
            <p className="text-sm">為青年和大專學生設計，關注信仰建立和生涯規劃</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="font-bold text-xl mb-2">婦女小組</h3>
            <p className="text-sm">專為婦女朋友設計，關注女性在家庭和職場的角色</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="font-bold text-xl mb-2">長者小組</h3>
            <p className="text-sm">為年長者提供關懷和交流的平台，享受溫馨的團契生活</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="font-bold text-xl mb-2">特殊興趣小組</h3>
            <p className="text-sm">圍繞特定興趣如音樂、運動、閱讀等形成的小組</p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-gray-50 rounded text-center">
          <p className="font-bold mb-2">想要加入小組？</p>
          <p>請在主日崇拜後向招待人員詢問，或聯繫教會辦公室。我們很樂意幫助您找到適合的小組！</p>
        </div>
      </div>
    </section>
  )
} 