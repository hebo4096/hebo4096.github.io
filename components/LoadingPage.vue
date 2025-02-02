<template>
  <div class="h-screen w-full flex items-center justify-center loader"></div>
</template>

<style scoped>
.loader {
  color: white;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 30px;
  animation: l1 1s linear infinite alternate;
}
.loader:before {
  content:"Loading..."
}
@keyframes l1 {to{opacity: 0}}
</style>
