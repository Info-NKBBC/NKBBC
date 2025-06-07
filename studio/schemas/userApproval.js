export default {
  name: 'userApproval',
  title: '用戶審核',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: '用戶',
      type: 'reference',
      to: [{type: 'user'}],
      description: '選擇要審核的用戶',
      validation: Rule => Rule.required()
    },
    {
      name: 'isApproved',
      title: '已審核',
      type: 'boolean',
      description: '勾選以批准此用戶',
      initialValue: false
    },
    {
      name: 'isAdmin',
      title: '管理員',
      type: 'boolean',
      description: '是否為管理員',
      initialValue: false
    },
    {
      name: 'notes',
      title: '備註',
      type: 'text',
      description: '審核備註或說明'
    },
    {
      name: 'reviewedAt',
      title: '審核時間',
      type: 'datetime',
      readOnly: true,
      initialValue: (new Date()).toISOString()
    },
    {
      name: 'reviewedBy',
      title: '審核人',
      type: 'string',
      readOnly: true,
      initialValue: 'admin' // 這裡可以設置為當前登入的管理員
    }
  ],
  preview: {
    select: {
      title: 'user.name',
      subtitle: 'user.email',
      approved: 'isApproved',
      admin: 'isAdmin'
    },
    prepare(selection) {
      const {title, subtitle, approved, admin} = selection
      return {
        title: title || '未命名用戶',
        subtitle: `${subtitle || '無郵箱'} | ${approved ? '✅ 已審核' : '❌ 未審核'} ${admin ? '| 👑 管理員' : ''}`
      }
    }
  }
}
