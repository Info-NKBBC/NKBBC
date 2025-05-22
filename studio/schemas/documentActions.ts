import { DocumentActionComponent } from 'sanity'

// 定義單例文檔類型（不需要刪除按鈕的文檔類型）
const SINGLETON_TYPES: string[] = ['siteSettings'] // 添加您的單例文檔類型

// 定義允許的操作
const ALLOWED_ACTIONS = [
  'publish',
  'discardChanges',
  'delete',
  'unpublish',
  'duplicate',
  'restore',
]

// 自定義文檔操作組件
const CustomDocumentActions: DocumentActionComponent = (props) => {
  // 如果是單例文檔，過濾掉刪除操作
  if (SINGLETON_TYPES.includes(props.type)) {
    return props.actions.filter(
      (action) => action.name !== 'delete' && action.name !== 'duplicate'
    )
  }

  // 對於其他文檔，返回所有允許的操作
  return props.actions.filter((action) => ALLOWED_ACTIONS.includes(action.name))
}

export default CustomDocumentActions
