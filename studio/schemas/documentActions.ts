import { DocumentActionComponent } from 'sanity'

// 定義單例文檔類型（不需要刪除按鈕的文檔類型）
const SINGLETON_TYPES: string[] = ['siteSettings'] // 添加您的單例文檔類型

// 自定義文檔操作組件
const CustomDocumentActions: DocumentActionComponent = (props) => {
  // 直接返回 null，使用默認行為
  return null
}

export default CustomDocumentActions
