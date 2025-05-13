import AboutUsSubNav from '../../components/AboutUsSubNav';
import Layout from '../../components/Layout';

export default function AboutUs() {
  return (
    <Layout>
      <AboutUsSubNav />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">關於我們</h1>
        <p className="text-lg mb-4">
          南科福氣教會成立於2010年，我們致力於在社區中傳揚福音、建立信徒並服事社區。
        </p>
        <p className="text-lg mb-4">
          我們相信，每個人都是上帝寶貴的創造，擁有無限的潛能。我們希望透過小組聚會、成全訓練和各種服事，幫助每個人發掘自己的恩賜，活出豐盛的生命。
        </p>
        <p className="text-lg">
          請使用上方選單了解更多關於我們的異象、使命、策略和核心價值。
        </p>
        {/* 照片區塊 */}
        <div className="flex justify-center my-10">
          <img src="/images/about.jpg" alt="教會照片" className="rounded-xl shadow-lg max-h-[350px] object-cover" />
        </div>
      </main>
    </Layout>
  );
}