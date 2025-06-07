// schemas/groupReport.ts

export default {
  name: 'groupReport',
  title: '小組回報',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '標題',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: '回報日期',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'group',
      title: '小組',
      type: 'reference',
      to: [{ type: 'group' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'reports',
      title: '組員回報',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'member',
              title: '組員',
              type: 'reference',
              to: [{ type: 'member' }],
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'identity',
              title: '身份',
              type: 'string',
              options: {
                list: [
                  { title: '組長', value: 'leader' },
                  { title: '組員', value: 'member' },
                  { title: '家長', value: 'parent' },
                  { title: '合心同工', value: 'staff' },
                ],
              },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'devotion',
              title: '靈修',
              type: 'boolean',
            },
            {
              name: 'cellGroup',
              title: '細胞小組',
              type: 'boolean',
            },
            {
              name: 'sundayService',
              title: '主日聚會',
              type: 'boolean',
            },
            {
              name: 'prayerMeeting',
              title: '禱告會',
              type: 'boolean',
            },
            {
              name: 'happinessGroup',
              title: '幸福小組',
              type: 'boolean',
            },
            {
              name: 'okios',
              title: 'OKIOS 活動',
              type: 'string',
              options: {
                list: [
                  { title: '代禱', value: 'p' },
                  { title: 'LINE', value: 'l' },
                  { title: '探訪', value: 'v' },
                  { title: '幸福講座', value: 'm' },
                  { title: '聚餐', value: 'f' },
                  { title: '旅遊', value: 't' },
                ],
              },
            },
            {
              name: 'discipleship',
              title: '門訓系統',
              type: 'boolean',
            },
            {
              name: 'note',
              title: '備註',
              type: 'text',
              rows: 2,
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      group: 'group.name',
      date: 'date',
    },
    prepare(selection: any) {
      const { title, group, date } = selection;
      return {
        title: `${group} - ${title}`,
        subtitle: date ? new Date(date).toLocaleDateString() : '',
      };
    },
  },
};
