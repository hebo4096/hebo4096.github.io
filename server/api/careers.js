import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      company: {
        en: 'Microsoft Japan',
        ja_JP: '日本マイクロソフト株式会社'
      },
      location: {
        en: 'Japan',
        ja_JP: '日本'
      },
      workSpan: {
        start: '2023.4',
        end: ''
      },
      title: {
        en: 'Technical Support Engineer',
        ja_JP: 'テクニカル サポート エンジニア'
      },
      employmentType: {
        en: 'FTE',
        ja_JP: '正社員'
      },
      desc: {
        en: 'Working as Support Engineer for Azure / Entra ID. <br/><br/>Supporting Azure customer with usage and platform issues for Azure Services:<br/>&#x2022; Provide Network troubleshooting in TCP/HTTP level issues.<br />&#x2022; Provide troubleshooting for Azure Platform issues.<br/><br/> &#x2022; Container Service<br/>Azure Kubernetes Service (AKS) / Azure Red Hat OpenShift (ARO) / Azure Container Registry (ACR) / Azure Container Instances (ACI)<br/><br/> &#x2022; Authz / Authn Service<br/>Entra ID / Azure AD B2C<br/><br/> &#x2022; Other Service<br/>Azure Key Vault',
        ja_JP: 'Azure / Entra ID をはじめとする製品のサポートエンジニアとして。Azureサービスの利用の支援やプラットフォームの問題を解析し、お客様をサポートしています: <br/>&#x2022; TCP/HTTPレベルのネットワークトラブルシューティング&#x2022; <br/>&#x2022; Azureプラットフォームの問題に対するトラブルシューティング<br/><br/>&#x2022; コンテナー系製品<br/>Azure Kubernetes Service (AKS)/ Azure Red Hat OpenShift (ARO) / Azure Container Registry (ACR) / Azure Container Instances (ACI) <br/><br/>&#x2022; 認証・認可系製品<br/>Entra ID / Azure AD B2C<br/><br/>&#x2022; その他製品<br/>Azure Key Vault',
      },
    },
    {
      id: 2,
      company: {
        en: 'AgriEarth Inc.',
        ja_JP: '株式会社 AgriEarth'
      },
      location: {
        en: 'Japan',
        ja_JP: '日本'
      },
      workSpan: {
        start: '2022.2',
        end: '2022.11'
      },
      title: {
        en: 'Web Development Engineer',
        ja_JP: 'ウェブ開発エンジニア'
      },
      employmentType: {
        en: 'Freelance',
        ja_JP: '業務委託'
      },
      desc: {
        en: 'Developed frontend in Nuxt.js, and Backend in Django REST Framework.',
        ja_JP: '求人サイトの機能開発 (API開発 / API に対応するフロントエンド開発) を担当。<br/><br/>&#x2022; フロントエンド: Nuxt.js<br/>&#x2022; バックエンド: Django REST Framework',
      }
    },
    {
      id: 3,
      company: {
        en: 'WESEEK',
        ja_JP: '株式会社 WESEEK'
      },
      location: {
        en: 'Japan',
        ja_JP: '日本'
      },
      workSpan: {
        start: '2021.4',
        end: '2023.1'
      },
      title: {
        en: 'Web Development Engineer',
        ja_JP: 'ウェブ開発エンジニア'
      },
      employmentType: {
        en: 'Internship',
        ja_JP: 'インターン'
      },
      desc: {
        en: 'Developed web application for support of Internet Exchange Service.<br/><br/>**Experienced skills**<br/>Frontend: Angular (Typescript)<br/>Backend: Ruby on Rails<br/>Infrastructure:<br/>Kubernetes(GKE)/Helm/Istio/OPA/ArgoCD',
        ja_JP: 'インターネット エクスチェンジ (IX) サービスを提供する企業向けの Web アプリケーションの機能開発を担当。<br/><br/>**経験スキル**<br/>&#x2022; フロントエンド: Angular (Typescript)<br/>&#x2022; バックエンド: Ruby on Rails<br/>&#x2022; インフラ: Kubernetes(GKE) / Helm / Istio / OPA / ArgoCD',
      },
    },
    {
      id: 4,
      company: {
        en: 'Pentio',
        ja_JP: 'ペンティオ株式会社'
      },
      location: {
        en: 'Japan',
        ja_JP: '日本'
      },
      workSpan: {
        start: '2019.11',
        end: '2021.3'
      },
      title: {
        en: 'Cloud Engineer',
        ja_JP: 'クラウド エンジニア'
      },
      employmentType: {
        en: 'Internship',
        ja_JP: 'インターン'
      },
      desc: {
        en: 'I was primarily responsible for technical verification and documentation of IDaaS products. Responsible for the technical area of authentication (SAML Authentication / SCIM, etc.). Took part in web page designing of the corporate website using Vue.js',
        ja_JP: 'IDaaS 製品の技術検証やドキュメント作成を主に担当してました。認証 ( SAML 認証 / SCIM 等) の技術領域を主に担当。その他にも Vue.js を使用したコーポレートサイトの作成にも従事しました。',
      },
    },

  ]
})
