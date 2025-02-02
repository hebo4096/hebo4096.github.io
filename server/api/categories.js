import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Certificates',
        ja_JP: '資格',
      },
    },
    {
      id: 2,
      title: {
        en: 'App',
        ja_JP: 'アプリ',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Design',
        ja_JP: 'ウェブデザイン',
      },
    },
  ]
})
