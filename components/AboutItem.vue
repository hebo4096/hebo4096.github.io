<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue';

const props = defineProps({
  about: Object,
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <li class="about-item">

    <div class="about-content-box">
      <p v-html="locale === 'en' ? about.description?.en : about.description?.ja_JP" class="about-item-text"></p>
    </div>
  </li>
</template>
