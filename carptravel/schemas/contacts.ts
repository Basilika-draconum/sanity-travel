import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contacts',
  title: 'Contacts',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phones',
      title: 'Phones',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Phone',
              name: 'phone',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Label',
              name: 'label',
              type: 'string',
              },
               {
              title: 'Href',
              name: 'href',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
})
