// 刪除過期活動的腳本
import { createClient } from '@sanity/client'

// 配置 Sanity 客戶端
const client = createClient({
  projectId: 'von9yh08',
  dataset: 'production',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false
})

// 刪除過期活動的函數
async function deletePastEvents() {
  try {
    // 查詢所有已過期的活動
    const today = new Date().toISOString().split('T')[0]
    const query = `*[_type == "event" && date < "${today}"]{_id}`
    
    const pastEvents = await client.fetch(query)
    
    if (pastEvents.length === 0) {
      console.log('沒有找到過期活動')
      return
    }
    
    console.log(`找到 ${pastEvents.length} 個過期活動，正在刪除...`)
    
    // 批量刪除
    const transaction = client.transaction()
    pastEvents.forEach(event => {
      transaction.delete(event._id)
    })
    
    const result = await transaction.commit()
    console.log(`成功刪除 ${result.results.length} 個過期活動`)
    
  } catch (error) {
    console.error('刪除過期活動時出錯:', error.message)
  }
}

// 執行函數
deletePastEvents()
