'use client';
export default function Platform() {
  return (
    <section id="實作平台" className="container mx-auto py-20 px-6 text-dark">
      <h2 className="text-4xl font-bold text-center mb-8">系統性的成全與踏實的實作平台</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary">幸福小組 (每年 2 次)</h3>
          <p>宣揚福音</p>
          <h3 className="text-xl font-semibold text-primary">門訓課程 (每年 2 次)</h3>
          <ul className="list-disc list-inside">
            <li>裝備成為生養的門徒</li>
            <li>帶領幸福小組的福長</li>
            <li>帶領細胞小組的小組長</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary">被裝備成為小組長，得勝者的成全</h3>
          <p>完成神托付的使命</p>
        </div>
      </div>
    </section>
  );
} 