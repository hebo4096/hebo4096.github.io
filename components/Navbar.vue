<script setup>

</script>

<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link">
          {{ $t('pageTitles.about') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/career" class="navbar-link">
          {{ $t('pageTitles.career') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/skill" class="navbar-link">
          {{ $t('pageTitles.skill') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/pubblog" class="navbar-link">
          {{ $t('pageTitles.pubblog') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/github" class="navbar-link">
          {{ $t('pageTitles.github') }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: var(--vegas-gold);
}
</style>
