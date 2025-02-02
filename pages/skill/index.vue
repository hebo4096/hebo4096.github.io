<script setup>
import { useI18n } from 'vue-i18n'
import Flicking from '@egjs/vue3-flicking'
import '@egjs/vue3-flicking/dist/flicking.css'
import { Icon } from '@iconify/vue';

useHead({
  title: 'Skill',
})

const { locale } = useI18n({ useScope: 'global' })
const { data: skills } = await useFetch('/api/skills')
const { data: categories } = await useFetch('/api/categories')

const skillList = [...skills.value]
const activeCategory = ref(0)
const filterMenu = ref(false)
const activeCategoryName = ref('')

function changeFilter(id) {
  activeCategory.value = id
  if (id !== 0)
    activeCategoryName.value = categories.value.find(item => item.id === id).title

  filterMenu.value = !filterMenu.value
}

const activeItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showItem(id) {
  activeItem.value = skills.value.find(item => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeItem() {
  activeItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}
</script>

<template>
  <article class="skill active" data-page="skill">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.skill') }}
      </h2>
    </header>

    <section class="skills">
      <ul class="filter-list">
        <li class="filter-item">
          <button :class="{ active: activeCategory === 0 }" @click="changeFilter(0)">
            All
          </button>
        </li>

        <li v-for="category in categories" :key="category.id" class="filter-item" @click="changeFilter(category.id)">
          <button :class="{ active: activeCategory === category.id }">
            {{ locale === 'en' ? category.title?.en : category.title?.ja_JP }}
          </button>
        </li>
      </ul>

      <div class="filter-select-box">
        <button :class="{ active: filterMenu }" class="filter-select" @click="filterMenu = !filterMenu">
          <div class="select-value">
            {{ activeCategory !== 0 ? (locale === 'en' ? activeCategoryName?.en : activeCategoryName?.ja_JP) : 'Select Category' }}
          </div>

          <div class="select-icon">
            <ion-icon name="chevron-down" />
          </div>
        </button>

        <ul class="select-list">
          <li class="select-item">
            <button @click="changeFilter(0)">
              All
            </button>
          </li>

          <li v-for="category in categories" :key="category.id" class="select-item">
            <button @click="changeFilter(category.id)">
              {{ locale === 'en' ? category.title?.en : category.title?.ja_JP }}
            </button>
          </li>
        </ul>
      </div>

      <ul class="skill-list">
        <li v-for="skill in skillList" :key="skill.id" :class="{ active: activeCategory === skill.category.id || activeCategory === 0 }" class="skill-item">
          <a class="cursor-pointer" @click="showItem(skill.id)">

            <figure class="skill-img">
              <div class="skill-item-icon-box">
                <ion-icon name="eye-outline" />
              </div>

              <img :src="skill.image" :alt="skill.title" loading="lazy">
            </figure>

            <h3 class="skill-title">{{ skill.title }}</h3>

            <p class="skill-category">{{ locale === 'en' ? skill.category.title?.en : skill.category.title?.ja_JP }}</p>

          </a>
        </li>
      </ul>

      <div class="modal-container" :class="{ active: activeModal }">
        <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }" />

        <section class="testimonials-modal block">
          <button class="modal-close-btn" @click="closeItem">
            <ion-icon name="close-outline" />
          </button>

          <div>
            <figure>
              <img :src="activeItem.image" class="rounded-lg" :alt="activeItem.title">
            </figure>
          </div>

          <div class="modal-content space-y-3 mt-4">
            <h4 class="h3 modal-title">
              {{ activeItem.title }}
            </h4>

            <small class="flex items-center justify-start gap-2 text-gray-500">
              <Icon icon="foundation:calendar" /><span>{{ locale === 'en' ? activeItem.category?.date?.en : activeItem.category?.date?.ja_JP }}</span> | <Icon icon="dashicons:category" /><span>{{ locale === 'en' ? activeItem.category?.title?.en : activeItem.category?.title?.ja_JP }}</span> | <Icon icon="ri:search-eye-line" /><a :href="activeItem.url" target="_blank">{{ locale === 'en' ? activeItem.desc?.en : activeItem.desc?.ja_JP }}</a>
            </small>

            <p class="text-justify" v-html="locale === 'en' ? activeItem.content?.en : activeItem.content?.ja_JP" />
          </div>
        </section>
      </div>
    </section>
  </article>
</template>
