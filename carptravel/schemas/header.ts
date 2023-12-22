import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'title1',
      title: 'Title1',
      type: 'string',
    }),
        defineField({
      name: 'title2',
      title: 'Title2',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
     defineField({
      name: 'button',
      title: 'Button',
      type: 'string',
     }),
     defineField({
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{ type: 'navigation' }],
    }),
  ],
})
