// pages/member/group-report/index.tsx
'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

// **注意：這裡以「命名匯入(client)」的方式取出 Sanity client**
import { client as sanityClient } from '@/lib/sanity.client';

interface MemberReport {
  memberId: string;    // 真正的 member document _id
  memberName: string;  // 為了畫面呈現用的「組員姓名」
  identity: string;
  devotion: boolean;
  cellGroup: boolean;
  sundayService: boolean;
  prayerMeeting: boolean;
  happinessGroup: boolean;
  okios: string;
  discipleship: boolean;
  note: string;
}

// 身份選項（可依需求調整）
const identityOptions = [
  { value: 'leader', label: '組長' },
  { value: 'parent', label: '家長' },
  { value: 'staff', label: '合心同工' },
  { value: 'member', label: '組員' },
];

// 複選框組件
const CheckboxField = ({ label, checked, onChange }) => (
  <label className="flex items-center space-x-2">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 text-blue-600 rounded border-gray-300"
    />
    <span className="text-sm text-gray-700">{label}</span>
  </label>
);

// 表格行組件
const TableRow = ({ r, onReportChange }) => (
  <tr className="border-t">
    <td className="py-2 px-3">{r.memberName}</td>
    <td className="py-2 px-3">
      <select
        className="w-full p-1 border rounded text-sm"
        value={r.identity}
        onChange={(e) => onReportChange(r.memberId, 'identity', e.target.value)}
      >
        {identityOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </td>
    <td className="py-2 px-3 text-center">
      <input
        type="checkbox"
        checked={r.devotion}
        onChange={(e) => onReportChange(r.memberId, 'devotion', e.target.checked)}
        className="h-4 w-4 text-blue-600 rounded border-gray-300"
      />
    </td>
    <td className="py-2 px-3 text-center">
      <input
        type="checkbox"
        checked={r.cellGroup}
        onChange={(e) => onReportChange(r.memberId, 'cellGroup', e.target.checked)}
        className="h-4 w-4 text-blue-600 rounded border-gray-300"
      />
    </td>
    <td className="py-2 px-3 text-center">
      <input
        type="checkbox"
        checked={r.sundayService}
        onChange={(e) => onReportChange(r.memberId, 'sundayService', e.target.checked)}
        className="h-4 w-4 text-blue-600 rounded border-gray-300"
      />
    </td>
    <td className="py-2 px-3 text-center">
      <input
        type="checkbox"
        checked={r.prayerMeeting}
        onChange={(e) => onReportChange(r.memberId, 'prayerMeeting', e.target.checked)}
        className="h-4 w-4 text-blue-600 rounded border-gray-300"
      />
    </td>
    <td className="py-2 px-3 text-center">
      <input
        type="checkbox"
        checked={r.happinessGroup}
        onChange={(e) => onReportChange(r.memberId, 'happinessGroup', e.target.checked)}
        className="h-4 w-4 text-blue-600 rounded border-gray-300"
      />
    </td>
    <td className="py-2 px-3 text-center">
      <select
        className="p-1 border rounded text-sm"
        value={r.okios}
        onChange={(e) => onReportChange(r.memberId, 'okios', e.target.value)}
      >
        <option value="">-</option>
        <option value="p">代禱</option>
        <option value="l">LINE</option>
        <option value="v">探訪</option>
        <option value="m">幸福講座</option>
        <option value="f">聚餐</option>
        <option value="t">旅遊</option>
      </select>
    </td>
    <td className="py-2 px-3 text-center">
      <input
        type="checkbox"
        checked={r.discipleship}
        onChange={(e) => onReportChange(r.memberId, 'discipleship', e.target.checked)}
        className="h-4 w-4 text-blue-600 rounded border-gray-300"
      />
    </td>
    <td className="py-2 px-3">
      <input
        type="text"
        className="w-full p-1 border rounded text-sm"
        placeholder="備註"
        value={r.note}
        onChange={(e) => onReportChange(r.memberId, 'note', e.target.value)}
      />
    </td>
  </tr>
);

export default function GroupReport() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // 從 Sanity 抓出所有的小組 (group)
  const [groupList, setGroupList] = useState<{ _id: string; name: string }[]>([]);
  const [groupId, setGroupId] = useState<string>(''); // 存放選中的小組 _id

  // 當前報表所輸入的日期
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);

  // 「組員回報」資料：裡面每筆都帶 memberId、memberName、identity、各項 checkbox 等
  const [reports, setReports] = useState<MemberReport[]>([]);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  // 如果未登入，導回 /member
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/member');
    }
  }, [status, router]);

  // 第一次載入時，向 Sanity 抓所有 _type == "group" 的文件
  useEffect(() => {
    async function fetchGroups() {
      try {
        const data: { _id: string; name: string }[] = await sanityClient.fetch(
          `*[_type == "group"]{ _id, name }`
        );
        setGroupList(data);
        if (data.length > 0) {
          setGroupId(data[0]._id);
        }
      } catch (err) {
        console.error('取得小組列表時錯誤：', err);
        setErrorMessage('無法取得小組列表，請稍後再試');
      }
    }
    fetchGroups();
  }, []);

  // 當「groupId」改變時，動態向 Sanity 查詢此小組底下的所有成員 (member)
  // 並用查到的結果去初始化 reports
  useEffect(() => {
    async function fetchMembersForGroup() {
      if (!groupId) {
        setReports([]);
        return;
      }
      try {
        // 查詢所有 member document，且其 groups 欄位 reference 到目前的 groupId
        const memberDocs: { _id: string; name: string }[] = await sanityClient.fetch(
          `*[_type == "member" && $groupId in groups[]._ref] { _id, name }`,
          { groupId }
        );

        // 用查到的 memberDocs 去組成 reports 的初始狀態
        const initial: MemberReport[] = memberDocs.map((m) => ({
          memberId: m._id,
          memberName: m.name,
          identity: 'member',  // 預設都是「組員」
          devotion: false,
          cellGroup: false,
          sundayService: false,
          prayerMeeting: false,
          happinessGroup: false,
          okios: '',
          discipleship: false,
          note: '',
        }));

        setReports(initial);
      } catch (err) {
        console.error('取得組員列表時錯誤：', err);
        setErrorMessage('無法取得該小組的組員，請稍後再試');
        setReports([]);
      }
    }

    fetchMembersForGroup();
  }, [groupId]);

  // 處理「組員回報」每一列欄位變更
  const handleReportChange = (
    memberId: string,
    field:
      | 'identity'
      | 'devotion'
      | 'cellGroup'
      | 'sundayService'
      | 'prayerMeeting'
      | 'happinessGroup'
      | 'okios'
      | 'discipleship'
      | 'note',
    value: any
  ) => {
    setReports((prev) =>
      prev.map((r) =>
        r.memberId === memberId
          ? {
              ...r,
              [field]: value,
            }
          : r
      )
    );
  };

  // 提交表單
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!groupId) {
      setErrorMessage('請先選擇小組');
      return;
    }
    if (reports.length === 0) {
      setErrorMessage('此小組沒有可回報的組員');
      return;
    }

    setIsSubmitting(true);
    try {
      // 直接用 reports 裡的 memberId 作為 payload
      const payloadReports = reports.map((r) => ({
        member: r.memberId,
        identity: r.identity,
        devotion: r.devotion,
        cellGroup: r.cellGroup,
        sundayService: r.sundayService,
        prayerMeeting: r.prayerMeeting,
        happinessGroup: r.happinessGroup,
        okios: r.okios,
        discipleship: r.discipleship,
        note: r.note,
      }));

      const payload = {
        date,
        groupId,
        reports: payloadReports,
      };
      console.log('前端送出的 payload:', payload);

      const response = await fetch('/api/group-report/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.message || '提交失敗');
      } else {
        setSuccessMessage('回報已成功提交！');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('提交異常，請稍後再試');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status !== 'authenticated') {
    return <div className="p-4 text-center">載入中...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <h1 className="text-2xl font-bold mb-6">小組長回報系統</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* 回報日期 */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">日期</label>
              <input
                type="date"
                className="w-full p-2 border rounded"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            {/* 選擇小組（Sanity 動態拉回來的列表） */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">選擇小組</label>
              <select
                className="w-full p-2 border rounded"
                value={groupId}
                onChange={(e) => setGroupId(e.target.value)}
                required
              >
                <option value="">請選擇小組</option>
                {groupList.map((g) => (
                  <option key={g._id} value={g._id}>
                    {g.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 組員回報 */}
            {groupId && (
              <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">組員回報</h2>
              
              {/* 桌面版表格 - 在 md 以上顯示 */}
              <div className="hidden md:block">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border-collapse">
                    <thead>
                      <tr>
                        <th className="py-2 px-3 border">組員</th>
                        <th className="py-2 px-3 border">身份</th>
                        <th className="py-2 px-3 border">靈修</th>
                        <th className="py-2 px-3 border">細胞小組</th>
                        <th className="py-2 px-3 border">主日聚會</th>
                        <th className="py-2 px-3 border">禱告會</th>
                        <th className="py-2 px-3 border">幸福小組</th>
                        <th className="py-2 px-3 border">OIKOS</th>
                        <th className="py-2 px-3 border">門訓系統</th>
                        <th className="py-2 px-3 border">備註</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reports.map((r) => (
                        <TableRow key={r.memberId} r={r} onReportChange={handleReportChange} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 手機版卡片 - 在 md 以下顯示 */}
              <div className="md:hidden space-y-4">
                {reports.map((r) => (
                  <div key={r.memberId} className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-3 pb-2 border-b">
                      <h3 className="font-medium">{r.memberName}</h3>
                      <select
                        className="text-sm p-1 border rounded"
                        value={r.identity}
                        onChange={(e) =>
                          handleReportChange(r.memberId, 'identity', e.target.value)
                        }
                      >
                        {identityOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <CheckboxField 
                        label="靈修" 
                        checked={r.devotion}
                        onChange={(e) => handleReportChange(r.memberId, 'devotion', e.target.checked)}
                      />
                      <CheckboxField 
                        label="細胞小組" 
                        checked={r.cellGroup}
                        onChange={(e) => handleReportChange(r.memberId, 'cellGroup', e.target.checked)}
                      />
                      <CheckboxField 
                        label="主日聚會" 
                        checked={r.sundayService}
                        onChange={(e) => handleReportChange(r.memberId, 'sundayService', e.target.checked)}
                      />
                      <CheckboxField 
                        label="禱告會" 
                        checked={r.prayerMeeting}
                        onChange={(e) => handleReportChange(r.memberId, 'prayerMeeting', e.target.checked)}
                      />
                      <CheckboxField 
                        label="幸福小組" 
                        checked={r.happinessGroup}
                        onChange={(e) => handleReportChange(r.memberId, 'happinessGroup', e.target.checked)}
                      />
                      <CheckboxField 
                        label="門訓系統" 
                        checked={r.discipleship}
                        onChange={(e) => handleReportChange(r.memberId, 'discipleship', e.target.checked)}
                      />
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">OIKOS</label>
                        <select
                          className="w-full p-1 border rounded text-sm"
                          value={r.okios}
                          onChange={(e) =>
                            handleReportChange(r.memberId, 'okios', e.target.value)
                          }
                        >
                          <option value="">-</option>
                          <option value="p">代禱</option>
                          <option value="l">LINE</option>
                          <option value="v">探訪</option>
                          <option value="m">幸福講座</option>
                          <option value="f">聚餐</option>
                          <option value="t">旅遊</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">備註</label>
                        <input
                          type="text"
                          className="w-full p-1 border rounded text-sm"
                          placeholder="輸入備註"
                          value={r.note}
                          onChange={(e) =>
                            handleReportChange(r.memberId, 'note', e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            )}

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting || !groupId}
                className={`px-6 py-2 rounded text-white ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? '提交中…' : '提交回報'}
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}
