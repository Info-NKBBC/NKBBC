// studio/sanity.config.ts

import { defineConfig, defineType, defineField } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
// @ts-ignore
import { userSyncPlugin } from './plugins/userSyncPlugin/src/index.jsx'

// 載入你所有的自訂 schema
import groupReport from './schemas/groupReport'
import memberReport from './schemas/memberReport'
import group from './schemas/group'
import member from './schemas/member'
import userRegistration from './schemas/userRegistration'

// 如果你還要保留「小組回報統計」這個自訂元件，就把它載入；
// 如果不需要，可以把下面這行刪掉或註解
import GroupReportStatsTool from './components/GroupReportStatsTool'

// 把自訂 schema 放到 customSchemaTypes，並排除重複項
const customSchemaTypes = [
  group,
  member,
  groupReport,
  memberReport,
  userRegistration,
  ...schemaTypes.filter(
    (type: { name: string }) =>
      ![
        'group',
        'member',
        'groupReport',
        'memberReport',
        'userRegistration',
      ].includes(type.name)
  ),
]

// 如果想額外管理一個「用戶 (user)」document type，可以把下面一段打開；
// 需不需要就依照你專案自行決定，若不需要就直接把這整個 userType 區段刪掉或註解掉
const userType = defineType({
  name: 'user',
  title: '用戶',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '姓名',
      type: 'string',
      validation: (Rule) => Rule.required().error('姓名為必填欄位'),
    }),
    defineField({
      name: 'email',
      title: '電子郵件',
      type: 'string',
      validation: (Rule) => Rule.required().email().error('請輸入有效的電子郵件'),
    }),
    defineField({
      name: 'phone',
      title: '電話號碼',
      type: 'string',
      validation: (Rule) => Rule.required().error('電話號碼為必填欄位'),
    }),
    defineField({
      name: 'password',
      title: '密碼 (已加密)',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required().error('密碼為必填欄位'),
    }),
    defineField({
      name: 'isApproved',
      title: '已審核',
      type: 'boolean',
      description: '是否已通過管理員審核',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isAdmin',
      title: '管理員',
      type: 'boolean',
      description: '是否為管理員',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'createdAt',
      title: '註冊時間',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      email: 'email',
      approved: 'isApproved',
    },
    prepare(selection) {
      const { title, email, approved } = selection
      return {
        title: title || '未命名用戶',
        subtitle: `${email} ${approved ? '✓ 已審核' : '✗ 待審核'}`,
      }
    },
  },
})

export default defineConfig({
  name: 'default',
  title: 'Church Site',
  projectId: 'von9yh08',
  dataset: 'production',
  basePath: '/studio',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  preview: {
    secret: process.env.SANITY_PREVIEW_SECRET,
  },

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('內容')
          .id('root-list')
          .items([
            // ─── 用戶註冊 (userRegistration) ───
            S.listItem()
              .title('用戶註冊')
              .id('user-registration')
              .child(
                S.documentList()
                  .id('user-registration-list')
                  .title('用戶註冊')
                  .schemaType('userRegistration')
                  .apiVersion('2024-01-01')
                  .filter('_type == "userRegistration"')
                  .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
              ),

            S.divider(),

            // ─── 報名記錄 (registration) ───
            S.listItem()
              .title('報名記錄')
              .id('registration-list')
              .child(
                S.documentTypeList('registration')
                  .id('registration-type-list')
                  .title('報名記錄')
                  .schemaType('registration')
                  .apiVersion('2024-01-01')
                  .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
              ),

            S.divider(),

            // ─── 活動 (event) ───
            S.listItem()
              .title('活動')
              .id('event-list')
              .child(
                S.documentTypeList('event')
                  .id('event-type-list')
                  .title('活動')
                  .schemaType('event')
                  .apiVersion('2024-01-01')
                  .defaultOrdering([{ field: 'date', direction: 'desc' }])
              ),

            S.divider(),

            // ─── 成員 (member) ───
            S.listItem()
              .title('成員')
              .id('member-list')
              .child(
                S.documentTypeList('member')
                  .id('member-type-list')
                  .title('所有成員')
                  .schemaType('member')
                  .apiVersion('2024-01-01')
                  .defaultOrdering([{ field: 'name', direction: 'asc' }])
              ),

            S.divider(),

            // ─── 小組 (group) ───
            S.listItem()
              .title('所有小組')
              .id('group-list')
              .child(
                // 首先列出所有 group document
                S.documentTypeList('group')
                  .id('group-type-list')
                  .title('小組')
                  .schemaType('group')
                  .apiVersion('2024-01-01')
                  .defaultOrdering([{ field: 'name', direction: 'asc' }])
                  // 當點選某一組之後，就跑到下面這段 child()
                  .child((groupId: string) =>
                    S.list()
                      .id(`group-overview-${groupId}`)
                      .title(`小組：${groupId}`)
                      .items([
                        // 1. 編輯「這個小組 document 本身」
                        S.listItem()
                          .id(`group-edit-${groupId}`)
                          .title('編輯小組設定')
                          .schemaType('group')
                          .child(
                            S.document()
                              .documentId(groupId)
                              .schemaType('group')
                          ),

                        // 2. 列出「此小組底下的成員」
                        S.listItem()
                          .id(`group-members-${groupId}`)
                          .title('成員列表')
                          .child(
                            S.documentList()
                              .id(`group-members-list-${groupId}`)    // ❗ 必須加上 id
                              .title('成員列表')
                              .schemaType('member')
                              .apiVersion('2024-01-01')
                              // 篩選出 groups array 裡面包含這個 groupId 的成員
                              .filter('_type == "member" && $groupId in groups[]._ref')
                              .params({ groupId })
                              .defaultOrdering([{ field: 'name', direction: 'asc' }])
                          ),
                      ])
                  )
              ),

            S.divider(),

            // ─── 小組回報統計 (GroupReportStatsTool) ───
            // 如果你要保留這個自訂元件，就留在這裡；若不需要它，就把整段刪掉。
            S.listItem()
              .title('小組回報統計')
              .id('group-report-stats-menu')
              .icon(() => '📈')
              .child(
                S.component()
                  .id('group-report-stats')
                  .title('小組回報統計')
                  .component(GroupReportStatsTool)
              ),
          ]),
    }),
    visionTool(),
    userSyncPlugin(),
  ],

  schema: {
    // 如果有使用 userType，就把它放最前面；否則就直接用 customSchemaTypes
    types: [userType, ...customSchemaTypes],
    // 如果不想使用 Sanity 內建的 user template，可在這裡把它過濾掉
    templates: (prev: any[]) =>
      prev.filter((template: { id: string }) => template.id !== 'user'),
  },

  // 開發期 debug & log 設定
  debug: process.env.NODE_ENV !== 'production',
  logLevel: 'debug',
  staticDir: './public',
  server: {
    port: 3333,
    hostname: 'localhost',
  },
})
