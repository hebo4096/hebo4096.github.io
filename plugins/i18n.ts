import { createI18n } from 'vue-i18n'
import { useLocaleStore } from '../composables/locale'

const messages = {
  en: {
    pageTitles: {
      about: "About",
      career: "Careers",
      skill: "Skills",
      pubblog: "Pubs/Blogs",
      github: "GitHub",
    }
  },
  ja: {
    pageTitles: {
      about: "概要",
      career: "経歴",
      skill: "スキル",
      pubblog: "出版/ブログ",
      github: "GitHub",
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    inheritLocale: false,
    globalInjection: true,
    localeDir: 'locales',
    fallbackLocale: useLocaleStore().getLocale || 'id',
    locale: useLocaleStore().getLocale || 'id',
    messages,
  })

  nuxtApp.vueApp.use(i18n)
})
