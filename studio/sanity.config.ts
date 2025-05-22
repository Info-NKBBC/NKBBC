import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import RegistrationBulkDeleteTool from './components/RegistrationBulkDeleteTool'
import EventRegistrationStatsTool from './components/EventRegistrationStatsTool' // <--- 新增這行

export default defineConfig({
  projectId: 'von9yh08',
  dataset: 'production',
  title: 'Church Site',
  apiVersion: '2024-01-01',
  basePath: '/studio',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('內容')
          .id('root-list')
          .items([
            S.listItem()
              .title('報名記錄')
              .id('registration-list')
              .child(
                S.documentTypeList('registration')
                  .title('報名記錄')
                  .id('registration-type-list')
              ),
            S.listItem()
              .title('活動')
              .id('event-list')
              .child(
                S.documentTypeList('event')
                  .title('活動')
                  .id('event-type-list')
              ),
            S.listItem()
              .title('批量刪除報名')
              .id('registration-bulk-delete-menu')
              .icon(() => '🗑️')
              .child(
                S.component()
                  .id('registration-bulk-delete')
                  .title('批量刪除報名記錄')
                  .component(RegistrationBulkDeleteTool)
              ),
            S.listItem()
              .title('活動報名統計')
              .id('event-registration-stats-menu')
              .icon(() => '📊')
              .child(
                S.component()
                  .id('event-registration-stats')
                  .title('活動報名統計')
                  .component(EventRegistrationStatsTool)
              ),
          ]),
    }),
    visionTool()
  ],
  schema: { types: schemaTypes },
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  debug: {
    enabled: true,
    logLevel: 'debug'
  }
})
