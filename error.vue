<script setup>
useHead({
  title: '404',
})

const router = useRouter()
</script>
<template>
  <NuxtLayout>
    <header>
      <h2 class="h2 article-title">
        Page Not Found
      </h2>
    </header>

    <div class="grid grid-cols-1 text-center mb-20 md:mb-0">
      <div class="text-[5rem] text-[#f39c12] font-bold">
        404
      </div>

      <div class="text-xl text-[#fafafa]">
        <span>The Page you are looking for doesn't exist or an other error occured. 😞</span>
      </div>
    </div>
  </NuxtLayout>
</template>
