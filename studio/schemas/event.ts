import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: '活動',
  type: 'document',
  fields: [
    defineField({ 
      name: 'title', 
      title: '標題', 
      type: 'string', 
      validation: Rule => Rule.required(),
    }),
    defineField({ 
      name: 'category', 
      title: '類別', 
      type: 'string',
      options: {
        list: [
          { title: '課程', value: 'course' },
          { title: '特會', value: 'meeting' },
          { title: '活動', value: 'event' },
          { title: '節慶', value: 'festival' },
          { title: '其他', value: 'other' },
        ],
        layout: 'radio'
      },
      initialValue: 'event',
    }),
    defineField({ 
      name: 'content', 
      title: '備註', 
      type: 'array', 
      of: [{ type: 'block' }],
    }),
    defineField({ 
      name: 'description', 
      title: '描述', 
      type: 'text',
    }),
    defineField({ 
      name: 'date', 
      title: '開始日期', 
      type: 'datetime',
    }),
    defineField({ 
      name: 'endDate', 
      title: '結束日期', 
      type: 'datetime',
    }),
    defineField({ 
      name: 'image', 
      title: '圖片', 
      type: 'image', 
      options: { hotspot: true },
    }),
    defineField({ 
      name: 'isFeatured', 
      title: '首頁精選', 
      type: 'boolean',
    }),
    defineField({ 
      name: 'location', 
      title: '地點', 
      type: 'string',
    }),
    // 你還可以加更多欄位，例如報名人數、報名截止等
  ]
})