import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
     defineField({
      name: 'id',
      title: 'Identificator',
      type: 'number',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'href',
      title: 'Href',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'number',
    }),
  ],

  preview: {
    select: {
      label: 'label',
      href: 'href',
      duration: 'duration',
    },
    prepare({ label, href, duration }) {
      return {
        title: label,
        subtitle: `Href: ${href}, Duration: ${duration}ms`,
      };
    },
  },
})
