import { defineField, defineType } from 'sanity';

interface RegistrationFields {
  name: string;
  title: string;
  type: string;
  readOnly?: boolean;
  initialValue?: string | (() => string);
  [key: string]: any;
}

export default defineType({
  name: 'registration',
  title: '報名記錄',
  type: 'document',
  fields: [
    defineField({
      name: 'event',
      title: '活動',
      type: 'reference',
      to: [{ type: 'event' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: '姓名',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: '電子郵件',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: '電話號碼',
      type: 'string',
    }),
    defineField({
      name: 'note',
      title: '備註',
      type: 'text',
    }),
    {
      name: 'registeredAt',
      title: '報名時間',
      type: 'datetime',
      readOnly: true,
      initialValue: (new Date()).toISOString(),
    } as RegistrationFields,
  ],
  preview: {
    select: {
      title: 'name',
      eventTitle: 'event.title',
      date: 'registeredAt'
    },
    prepare: (selection = { title: '', eventTitle: '', date: '' }) => {
      const { title, eventTitle, date } = selection;
      return {
        title: `${title} - ${eventTitle}`,
        subtitle: new Date(date).toLocaleString('zh-TW', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };
    }
  }
});
