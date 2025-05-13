'use client';
export default function VisionMission() {
  return (
    <section id="異象與使命" className="container mx-auto py-20 px-6 text-dark">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="p-6 bg-light rounded-2xl shadow">
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center">教會異象</h3>
          <p className="text-lg leading-relaxed">
            成為人人都能經歷神同在與恩典的屬靈家園，在福音大能中建立基督的身體。
          </p>
        </div>
        <div className="p-6 bg-light rounded-2xl shadow">
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center">教會使命</h3>
          <p className="text-lg leading-relaxed">
            透過小組牧養與裝備，建立健康的教會；透過關懷與宣教，擴展神的國度。
          </p>
        </div>
      </div>
    </section>
  );
} 