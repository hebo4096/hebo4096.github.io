import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Kubernetes',
      description: {
        en: 'I have experience troubleshooting issue of Managed Kubernetes Service on Public Cloud.',
        ja_JP: 'パブリッククラウドのマネージド Kubernetes サービス周りの技術検証 / トラブルシューティング / 機能検証の経験があります',
      },
      icon: 'devicon:kubernetes',
      image: null,
    },
    {
      id: 2,
      title: 'Docker',
      description: {
        en: 'Debugging Containerized Apps by analyzing Dockerfile',
        ja_JP: 'コンテナー アプリケーションのデバッグや、Dockerfile の中身を確認し、問題箇所のトラブルシューティング経験があります',
      },
      icon: 'devicon:docker',
      image: null,
    },
    {
      id: 3,
      title: 'Azure',
      description: {
        en: 'Have Experience on inspection and troubleshooting of Azure Container and Authn/Authz Services.',
        ja_JP: 'Azure におけるコンテナー・認証・認可技術の検証やトラブルシューティング経験があります',
      },
      icon: 'devicon:azure',
      image: null,
    },
    {
      id: 4,
      title: 'Linux',
      description: {
        en: 'OS level troubleshooting and writes shell script to prepare the test environments',
        ja_JP: 'OS レベルのトラブルシューティングや、検証環境作成にあたる自動化シェルスクリプトの作成経験があります',
      },
      icon: 'devicon:linux',
      image: null,
    },
    {
      id: 5,
      title: 'Development',
      description: {
        en: 'Have experience of Web Application based on Agile Development',
        ja_JP: 'アジャイルでの Web アプリケーション開発経験があります',
      },
      icon: 'devicon:github',
      image: null,
    },
    {
      id: 6,
      title: 'Frontend Development',
      description: {
        en: 'Have experience developing Frontend Application by Vue, Nuxt and Angular',
        ja_JP: 'Vue / Nuxt / Angular などのフロントエンド フレームワークを使用した開発経験があります',
      },
      icon: 'devicon:angular',
      image: null,
    },
    {
      id: 6,
      title: 'IaC',
      description: {
        en: 'Have IaC inspection experience with Hashicorp Terraform and Microsoft Bicep',
        ja_JP: 'Hashicorp の Terraform や、Microsoft の Bicep を用いた IaC 検証の経験があります',
      },
      icon: 'devicon:terraform',
      image: null,
    }
  ]
})
