// studio/components/RegistrationBulkDeleteTool.tsx
import React, { useState, useEffect } from 'react'
import { useClient } from 'sanity'
import { Button, Card, Stack, Text } from '@sanity/ui'

export default function RegistrationBulkDeleteTool() {
  const client = useClient()
  const [loading, setLoading] = useState(false)
  const [registrations, setRegistrations] = useState<any[]>([])
  const [selected, setSelected] = useState<string[]>([])

  const loadRegistrations = async () => {
    setLoading(true)
    const data = await client.fetch('*[_type == "registration"]{_id, name, email}')
    setRegistrations(data)
    setLoading(false)
  }

  useEffect(() => { loadRegistrations() }, [])

  const toggleSelect = (id: string) => {
    setSelected(selected.includes(id) ? selected.filter(x => x !== id) : [...selected, id])
  }

  const bulkDelete = async () => {
    if (!selected.length) return
    if (!window.confirm(`確定刪除 ${selected.length} 筆報名記錄？`)) return
    setLoading(true)
    for (const id of selected) {
      await client.delete(id)
    }
    alert('批量刪除完成')
    setSelected([])
    loadRegistrations()
    setLoading(false)
  }

  return (
    <Card padding={4}>
      <Stack space={4}>
        <Text size={2} weight="bold">批量刪除報名記錄</Text>
        <Button
          text="重新整理"
          onClick={loadRegistrations}
          loading={loading}
          tone="primary"
        />
        <Card>
          {registrations.map(r => (
            <label key={r._id} style={{ display: 'block', margin: '8px 0' }}>
              <input
                type="checkbox"
                checked={selected.includes(r._id)}
                onChange={() => toggleSelect(r._id)}
                disabled={loading}
              /> {r.name}（{r.email}）
            </label>
          ))}
        </Card>
        <Button
          text={`批量刪除 (${selected.length})`}
          tone="critical"
          loading={loading}
          disabled={!selected.length || loading}
          onClick={bulkDelete}
        />
      </Stack>
    </Card>
  )
}
