<script setup>
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '../composables/locale'
const { locale } = useI18n({ useScope: 'global' })

const cookieLocale = useLocaleStore()

onMounted(() => {
  useLocaleStore()
})

function changeLang() {
  if (locale.value === 'en') {
    cookieLocale.setLocale('ja')
    locale.value = 'ja'
  }
  else {
    cookieLocale.setLocale('en')
    locale.value = 'en'
  }
}
</script>

<template>
  <div class="cursor-pointer transition-all fade lang-switcher" @click="changeLang()">
    <img :src="`/flags/${locale}.png`" class="h-6 m-1"><span>switch language</span>
  </div>
</template>

<style scoped>
    .p-dropdown {
        border: none!important;
    }
</style>
