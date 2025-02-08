import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Certified Kubernetes Administrator (CKA)',
      category: {
        id: 1, //see categories.js
        date: {
          en: 'September 2024',
          ja_JP: '2024 年 9 月',
        },
        title: {
          en: 'Certificate',
          ja_JP: '資格',
        },
      },
      content: {
        en: 'Published by Cloud Native Computing Foundation (CNCF)',
        ja_JP: 'Cloud Native Computing Foundation (CNCF) より発行',
      },
      desc: {
          en: 'Show Certificate',
          ja_JP: '証明書を見る',
        },
      image: '/images/cka.png',
      url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/cacfef8a-c899-4f85-840a-483261d92288-shogo-shimahara-8cf08bbd-ca45-45bc-92a5-854f863e124c-certificate.pdf',
    },
    {
      id: 2,
      title: 'Certified Kubernetes Application Developer (CKAD)',
      category: {
        id: 1, //see categories.js
        date: {
          en: 'September 2024',
          ja_JP: '2024 年 9 月',
        },
        title: {
          en: 'Certificate',
          ja_JP: '資格',
        },
      },
      content: {
        en: 'Published by Cloud Native Computing Foundation (CNCF)',
        ja_JP: 'Cloud Native Computing Foundation (CNCF) より発行',
      },
      desc: {
          en: 'Show Certificate',
          ja_JP: '証明書を見る',
        },
      image: '/images/ckad.png',
      url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/cacfef8a-c899-4f85-840a-483261d92288-shogo-shimahara-e3b1bd8c-30bd-4252-a6d9-9fe4cd1e9d3f-certificate.pdf',
    },
    {
      id: 3,
      title: 'Certified Kubernetes Security Specialist (CKS)',
      category: {
        id: 1, //see categories.js
        date: {
          en: 'January 2025',
          ja_JP: '2025 年 1 月',
        },
        title: {
          en: 'Certificate',
          ja_JP: '資格',
        },
      },
      content: {
        en: 'Published by Cloud Native Computing Foundation (CNCF)',
        ja_JP: 'Cloud Native Computing Foundation (CNCF) より発行',
      },
      desc: {
          en: 'Show Certificate',
          ja_JP: '証明書を見る',
        },
      image: '/images/cks.png',
      url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/cacfef8a-c899-4f85-840a-483261d92288-shogo-shimahara-cc920ef5-6736-4601-87ea-922144c3af4c-certificate.pdf',
    },
    {
      id: 4,
      title: 'Microsoft Azure Administrator Associate (AZ-104)',
      category: {
        id: 1, //see categories.js
        date: {
          en: 'June 2023',
          ja_JP: '2023 年 6 月',
        },
        title: {
          en: 'Certificate',
          ja_JP: '資格',
        },
      },
      content: {
        en: 'Published by Microsoft',
        ja_JP: 'マイクロソフトより発行',
      },
      image: '/images/az104.png',
      url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/cacfef8a-c899-4f85-840a-483261d92288-shogo-shimahara-e3b1bd8c-30bd-4252-a6d9-9fe4cd1e9d3f-certificate.pdf',
    },
    {
      id: 5,
      title: 'College Club HP',
      category: {
        id: 3, //see categories.js
        date: {
          en: 'June 2023',
          ja_JP: '2023 年 6 月',
        },
        title: {
          en: 'Web Design',
          ja_JP: 'ウェブデザイン'
        },
      },
      content: {
        en: 'Managed and Designed Homepage of the club I belonged when I was in college.',
        ja_JP: '大学時代に所属していたサークルにてウェブサイトの一部デザインおよび管理を実施しておりました。\n',
      },
      desc: {
        en: 'Show Page',
        ja_JP: 'ページを見る',
      },
      image: '/images/koeken.png',
      url: 'https://www.keiokoeken.com/',
    },
    {
      id: 6,
      title: 'Kubestronaut',
      category: {
        id: 1, //see categories.js
        date: {
          en: 'January 2025',
          ja_JP: '2025 年 1 月',
        },
        title: {
          en: 'Certificate',
          ja_JP: '資格',
        },
      },
      content: {
        en: 'Published by Cloud Native Computing Foundation (CNCF)',
        ja_JP: 'Cloud Native Computing Foundation (CNCF) より発行',
      },
      desc: {
          en: '',
          ja_JP: '',
        },
      image: '/images/kubestronaut.png',
      url: '',
    },
  ]
})
