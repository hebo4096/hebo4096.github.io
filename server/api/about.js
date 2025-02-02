import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      description: {
        en: 'Engineer who has interest on Cloud Native Technologies and Application Development.<br/>Currently working as Cloud Support Engineer, mainly troubleshooting Managed Container Service.',
        ja_JP: 'クラウドネイティブ技術、Web アプリケーション開発に興味のあるエンジニアです。<br/>現在はクラウドサポートエンジニアとして、コンテナー系のマネージドサービスのトラブルシューティングをメインとした業務に従事してます。'
      },
    },
  ]
})
