import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      description: {
        en: 'Articles on Zenn',
        ja_JP: 'Zenn の記事',
      },
    },
    {
      description: {
        en: 'Reviewed Journal paper published when I was in the masters\' degree.',
        ja_JP: '修士課程の時に投稿した査読つき学術論文誌',
      },
    },
    {
      description: {
        en: 'Reviewed Conference paper published when I was in the masters\' degree.',
        ja_JP: '修士課程の時に投稿した査読つきの国際会議論文',
      },
    },
  ]
})

