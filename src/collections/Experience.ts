import type { CollectionConfig } from 'payload'

export const Experience: CollectionConfig = {
  slug: 'experience',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'company',
  },
  fields: [
    {
      name: 'sortOrder',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'position',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Senior Engineer',
          value: 'senior-engineer',
        },
        {
          label: 'Senior Frontend Engineer',
          value: 'senior-frontend-engineer',
        },
        {
          label: 'React Developer',
          value: 'react-developer',
        },
        {
          label: 'Frontend Developer',
          value: 'frontend-developer',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'companyUrl',
      type: 'text',
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'tags',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'JavaScript',
          value: 'javascript',
        },
        {
          label: 'TypeScript',
          value: 'typescript',
        },
        {
          label: 'Storybook',
          value: 'storybook',
        },
        {
          label: 'Next.js',
          value: 'nextjs',
        },
        {
          label: 'HTML & CSS',
          value: 'html-css',
        },
      ],
    },
    {
      name: 'dateFrom',
      label: 'Date From',
      type: 'date',
      required: true,
    },
    {
      name: 'currentlyWorking',
      label: 'I currently work here',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'dateTo',
      label: 'Date To',
      type: 'date',
      admin: {
        condition: (data) => !data.currentlyWorking,
      },
    },
  ],
}
