<script setup>
import { useI18n } from 'vue-i18n'

useHead({
  title: 'Career',
})

const { locale } = useI18n({ useScope: 'global' })
const { data: careers } = await useFetch('/api/careers')



</script>

<template>
  <article class="career active" data-page="career">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.career') }}
      </h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">
        <li v-for="career in careers" :key="career.id" class="timeline-item">
          <h4 class="h4 timeline-item-title">
            {{ locale === 'en' ? career.company?.en : career.company?.ja_JP }} - {{ locale === 'en' ? career.title?.en : career.title?.ja_JP }}
          </h4>
          <span>{{ career.workSpan?.start }} - {{ career.workSpan?.end }}</span>
          <p class="timeline-item-desc">
            {{ locale === 'en' ? career.location?.en : career.location?.ja_JP }} - {{ locale === 'en' ? career.employmentType?.en : career.employmentType?.ja_JP }}
          </p>
          <p class="timeline-text" v-html="locale === 'en' ? career.desc?.en : career.desc?.ja_JP ">
          </p>
        </li>
      </ol>
    </section>
  </article>
</template>
