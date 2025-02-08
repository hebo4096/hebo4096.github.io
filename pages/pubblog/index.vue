<script setup>
import { useI18n } from 'vue-i18n'
import axios from "axios"

useHead({
  title: 'Pub/Blog',
});

const { locale } = useI18n({ useScope: 'global' })
const { data: zenn } = await useFetch('/api/zenn');
const { data: pubblogs } = await useFetch('/api/pubblog');

const articles = null;

function parseDate(dateTime) {

  const isoDateTime = new Date(dateTime);
  const year = isoDateTime.getFullYear();
  const month = isoDateTime.getMonth();
  const day = isoDateTime.getDate();
  return `${year} 年 ${month} 月 ${day} 日`;
}

</script>

<template>
  <article class="pubblog active" data-page="pubblog">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.pubblog') }}
      </h2>
    </header>
    <section class="pubblog-posts">
      <ul class="pubblog-posts-list">

        <!-- articles related to Zenn -->
        <li v-for="article in zenn.articles" :key="article.id" class="pubblog-post-item">
          <a :href="`https://zenn.dev${article?.path}`">
            <figure class="pubblog-banner-box">
              <img src="/images/zenn.png" alt="zenn" loading="lazy">
            </figure>
            <div class="pubblog-content">
              <div class="pubblog-meta">
                <p class="pubblog-category">{{ article?.post_type }}</p>
                <span class="dot" />
                <time>{{ parseDate(article?.published_at) }}</time>
              </div>
              <h3 class="h3 pubblog-item-title">{{ article?.title }}</h3>
                <p v-html="locale === 'en' ? pubblogs[0].description?.en : pubblogs[0].description?.ja_JP" class="pubblog-text"></p>
            </div>
          </a>
        </li>
        <li class="pubblog-post-item">
          <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/tee.23880">
            <figure class="pubblog-banner-box">
              <img src="/images/wiley.png" alt="Wiley Online Library" loading="lazy">
            </figure>
            <div class="pubblog-content">
              <div class="pubblog-meta">
                <p class="pubblog-category">Docs</p>
                <span class="dot" />
                <time>2023 年 7 月 25 日</time>
              </div>
              <h3 class="h3 pubblog-item-title">Access Control Management System for Edge Computing Environment Using Tag-Based Matching and Cache Injection</h3>
              <p v-html="locale === 'en' ? pubblogs[1].description?.en : pubblogs[1].description?.ja_JP" class="pubblog-text"></p>
            </div>
          </a>
        </li>
        <li class="pubblog-post-item">
          <a href="https://ieeexplore.ieee.org/document/9589430">
            <figure class="pubblog-banner-box">
              <img src="/images/ieeeexplore.png" alt="Wiley Online Library" loading="lazy">
            </figure>
            <div class="pubblog-content">
              <div class="pubblog-meta">
                <p class="pubblog-category">Docs</p>
                <span class="dot" />
                <time>2023 年 7 月 25 日</time>
              </div>
              <h3 class="h3 pubblog-item-title">Dataflow Management Platform for Smart Communities using an Edge Computing Environment</h3>
              <p v-html="locale === 'en' ? pubblogs[2].description?.en : pubblogs[2].description?.ja_JP" class="pubblog-text"></p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

