import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'career',
  title: 'Career',
  type: 'document',
  fields: [
     defineField({
      name: 'id',
      title: 'Id',
      type: 'number',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ]
})
