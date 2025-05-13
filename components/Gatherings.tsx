'use client';
export default function Gatherings() {
  return (
    <section id="成全聚會" className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto text-dark">
        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl shadow-lg bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="px-6 py-4 text-left font-semibold">聚會</th>
                <th className="px-6 py-4 text-left font-semibold">時間</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">琴與爐敬拜、教會禱告會</td>
                <td className="px-6 py-4">週日上午 09:00–09:50</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">主日聚會、兒童主日學</td>
                <td className="px-6 py-4">週日上午 10:00–12:00</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">兒童品格班</td>
                <td className="px-6 py-4">週三晚上 19:00–20:30</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">幸福門徒訓練 (4學期×12週)</td>
                <td className="px-6 py-4">每年 1月、7月</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">幸福小組 (8週)</td>
                <td className="px-6 py-4">每年 4月、10月</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
} 