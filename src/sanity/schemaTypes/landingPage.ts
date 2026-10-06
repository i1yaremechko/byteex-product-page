import {defineArrayMember, defineField, defineType} from 'sanity'

const image = (name: string, title: string) =>
  defineField({
    name, title, type: 'image', options: {hotspot: true},
    fields: [
      defineField({name: 'alt', title: 'Alternative text', type: 'string', validation: (rule) => rule.required()}),
      defineField({name: 'focus', title: 'CSS object position', type: 'string'}),
    ],
  })

const photo = (name = 'src', title = 'Photo') => image(name, title)

const cta = () => defineField({
  name: 'cta', title: 'Call to action', type: 'object', fields: [
    defineField({name: 'label', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'href', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'reviews', type: 'object', fields: [
      defineField({name: 'rating', type: 'number', validation: (rule) => rule.required().min(1).max(5)}),
      defineField({name: 'label', type: 'string', validation: (rule) => rule.required()}),
    ]}),
  ],
})

const textArray = () => defineField({name: 'paragraphs', type: 'array', of: [defineArrayMember({type: 'string'})]})

export const landingPage = defineType({
  name: 'landingPage', title: 'Landing page', type: 'document', fields: [
    defineField({name: 'announcements', title: 'Announcements', type: 'object', fields: [defineField({name: 'messages', type: 'array', of: [defineArrayMember({type: 'string'})]})]}),
    defineField({name: 'hero', title: 'Hero', type: 'object', fields: [
      defineField({name: 'title', type: 'string'}),
      defineField({name: 'gallery', type: 'object', fields: [photo('left', 'Left photo'), photo('center', 'Centre photo'), photo('right', 'Right photo')]}),
      defineField({name: 'benefits', type: 'array', of: [defineArrayMember({type: 'object', fields: [defineField({name: 'id', type: 'string'}), defineField({name: 'text', type: 'string'})]})]}), cta(),
      defineField({name: 'review', type: 'object', fields: [defineField({name: 'name', type: 'string'}), photo('avatar', 'Avatar'), defineField({name: 'rating', type: 'number'}), defineField({name: 'label', type: 'string'}), defineField({name: 'text', type: 'text'})]}),
      defineField({name: 'desktopReview', type: 'object', fields: [defineField({name: 'name', type: 'string'}), photo('avatar', 'Avatar'), defineField({name: 'rating', type: 'number'}), defineField({name: 'label', type: 'string'}), defineField({name: 'text', type: 'text'})]}),
    ]}),
    defineField({name: 'press', title: 'Press', type: 'object', fields: [defineField({name: 'label', type: 'string'}), defineField({name: 'logos', type: 'array', of: [defineArrayMember({type: 'object', fields: [defineField({name: 'name', type: 'string'}), photo(), defineField({name: 'width', type: 'number'}), defineField({name: 'desktopWidth', type: 'number'}), defineField({name: 'opacity', type: 'number'}), defineField({name: 'desktopOnly', type: 'boolean'})]})]})]}),
    defineField({name: 'benefits', title: 'Product benefits', type: 'object', fields: [defineField({name: 'title', type: 'string'}), defineField({name: 'slides', type: 'array', of: [defineArrayMember({type: 'object', fields: [defineField({name: 'id', type: 'string'}), photo(), defineField({name: 'name', type: 'string'})]})]}), defineField({name: 'initialSlide', type: 'number'}), defineField({name: 'benefits', type: 'array', of: [defineArrayMember({type: 'object', fields: [defineField({name: 'id', type: 'string'}), defineField({name: 'iconWidth', type: 'number'}), defineField({name: 'title', type: 'string'}), defineField({name: 'text', type: 'text'})]})]}), cta()]}),
    defineField({name: 'founder', title: 'Founder story', type: 'object', fields: [defineField({name: 'title', type: 'string'}), defineField({name: 'photos', type: 'object', fields: [photo('topLeft', 'Top-left photo'), photo('center', 'Centre photo'), photo('bottomRight', 'Bottom-right photo')]}), textArray(), cta()]}),
    defineField({name: 'howItWorks', title: 'How it works', type: 'object', fields: [defineField({name: 'title', type: 'string'}), defineField({name: 'steps', type: 'array', of: [defineArrayMember({type: 'object', fields: [defineField({name: 'id', type: 'string'}), defineField({name: 'iconWidth', type: 'number'}), defineField({name: 'title', type: 'string'}), defineField({name: 'text', type: 'text'}), defineField({name: 'mobileText', type: 'text'}), defineField({name: 'highlighted', type: 'boolean'})]})]}), cta()]}),
    defineField({name: 'fans', title: 'Fans', type: 'object', fields: [defineField({name: 'title', type: 'string'}), defineField({name: 'intro', type: 'text'}), defineField({name: 'photos', type: 'array', of: [defineArrayMember({type: 'object', fields: [defineField({name: 'id', type: 'string'}), photo(), defineField({name: 'desktopOrder', type: 'number'})]})]}), defineField({name: 'reviews', type: 'array', of: [defineArrayMember({type: 'object', fields: [defineField({name: 'id', type: 'string'}), defineField({name: 'name', type: 'string'}), defineField({name: 'rating', type: 'number'}), defineField({name: 'text', type: 'text'}), defineField({name: 'desktopOrder', type: 'number'})]})]}), cta()]}),
    defineField({name: 'faq', title: 'FAQ', type: 'object', fields: [defineField({name: 'title', type: 'string'}), defineField({name: 'items', type: 'array', of: [defineArrayMember({type: 'object', fields: [defineField({name: 'id', type: 'string'}), defineField({name: 'question', type: 'string'}), defineField({name: 'answer', type: 'text'}), defineField({name: 'mobileAnswer', type: 'text'})]})]}), defineField({name: 'photos', type: 'object', fields: [photo('top', 'Top photo'), photo('center', 'Centre photo'), photo('bottom', 'Bottom photo')]}), cta()]}),
    defineField({name: 'impact', title: 'Green impact', type: 'object', fields: [defineField({name: 'title', type: 'string'}), defineField({name: 'stats', type: 'array', of: [defineArrayMember({type: 'object', fields: [defineField({name: 'id', type: 'string'}), defineField({name: 'value', type: 'string'}), defineField({name: 'label', type: 'string'}), defineField({name: 'desktopOnly', type: 'boolean'})]})]})]}),
    defineField({name: 'collection', title: 'Collection', type: 'object', fields: [defineField({name: 'title', type: 'string'}), defineField({name: 'text', type: 'text'}), defineField({name: 'mobileText', type: 'text'}), defineField({name: 'photos', type: 'object', fields: [photo('left', 'Left photo'), photo('center', 'Centre photo'), photo('right', 'Right photo')]}), defineField({name: 'paymentsAlt', type: 'string'}), defineField({name: 'badges', type: 'array', of: [defineArrayMember({type: 'object', fields: [defineField({name: 'id', type: 'string'}), defineField({name: 'text', type: 'string'})]})]}), cta()]}),
  ],
})
