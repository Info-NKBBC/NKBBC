import React, { useEffect, useState } from "react";
import { useClient } from "sanity";
import { Card, Stack, Heading, Text, Button } from "@sanity/ui";

function downloadCSV(rows: string[][], filename: string) {
  const csvContent = rows.map(r => r.map(x => `"${(x ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
  const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function EventRegistrationStatsTool() {
  const client = useClient();
  const [stats, setStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    client
      .fetch(
        `*[_type == "event"]{
          _id,
          title,
          "registrationCount": count(*[_type == "registration" && event._ref == ^._id]),
          "registrations": *[_type == "registration" && event._ref == ^._id]{name,email,phone,note}
        } | order(date desc)`
      )
      .then((data) => setStats(data))
      .finally(() => setLoading(false));
  }, []);

  const filteredStats = stats.filter(
    (e) =>
      e.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card padding={4}>
      <Stack space={4}>
        <Heading>活動報名統計</Heading>
        <input
          type="text"
          placeholder="搜尋活動名稱..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: 6,
            border: '1px solid #d0d7de',
            marginBottom: 8,
            width: 300
          }}
        />
        {loading ? (
          <Text>讀取中...</Text>
        ) : (
          filteredStats.length === 0 ? (
            <Text>找不到符合的活動</Text>
          ) : (
            filteredStats.map((e) => (
              <Card key={e._id} shadow={1} padding={3} style={{ background: "#f5f6fa", marginBottom: 16 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap"
                  }}
                >
                  {/* 標題和報名人數並排一行，標題左、報名人數靠左間隔（或右對齊） */}
                  <div style={{ display: "flex", alignItems: "center", minWidth: 200, flex: 1 }}>
                    <Text size={2} weight="bold">{e.title}</Text>
                    <span style={{ marginLeft: 24, fontWeight: 500, color: "#2d6cdf", fontSize: 18 }}>
                      報名人數：{e.registrationCount}
                    </span>
                  </div>
                  {/* 右側按鈕 */}
                  <div style={{ display: 'flex', gap: 8, marginLeft: 'auto' }}>
                    {e.registrationCount > 0 && (
                      <Button
                        text={expanded === e._id ? "收起名單" : "展開名單"}
                        onClick={() => setExpanded(expanded === e._id ? null : e._id)}
                        style={{ minWidth: 88 }}
                      />
                    )}
                    {e.registrationCount > 0 && (
                      <Button
                        text="下載 CSV"
                        style={{ minWidth: 88 }}
                        onClick={() => {
                          const rows = [
                            ['姓名', '電子郵件', '電話', '備註'],
                            ...e.registrations.map((r: any) => [r.name, r.email, r.phone, r.note])
                          ];
                          downloadCSV(rows, `${e.title}-報名名單.csv`);
                        }}
                      />
                    )}
                  </div>
                </div>
                {expanded === e._id && e.registrations && e.registrations.length > 0 && (
                  <Card tone="transparent" padding={3} style={{ marginTop: 10 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
                      <thead>
                        <tr style={{ background: '#e7eaf6' }}>
                          <th style={{ textAlign: 'left', padding: 6 }}>姓名</th>
                          <th style={{ textAlign: 'left', padding: 6 }}>電子郵件</th>
                          <th style={{ textAlign: 'left', padding: 6 }}>電話</th>
                          <th style={{ textAlign: 'left', padding: 6 }}>備註</th>
                        </tr>
                      </thead>
                      <tbody>
                        {e.registrations.map((r: any, idx: number) => (
                          <tr key={idx}>
                            <td style={{ padding: 6 }}>{r.name}</td>
                            <td style={{ padding: 6 }}>{r.email}</td>
                            <td style={{ padding: 6 }}>{r.phone}</td>
                            <td style={{ padding: 6 }}>{r.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Card>
                )}
              </Card>
            ))
          )
        )}
      </Stack>
    </Card>
  );
}
