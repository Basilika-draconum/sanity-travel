import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
     defineField({
      name: 'description1',
      title: 'Description1',
      type: 'string',
    }),
    defineField({
      name: 'description2',
      title: 'Description2',
      type: 'string',
    }),
    defineField({
      name: 'description3',
      title: 'Description3',
      type: 'string',
    }),
    defineField({
      name: 'slogan',
      title: 'Slogan',
      type: 'string',
    }),
  ],

})
