<!--
 * @Author: wuwenjia
 * @Date: 2022-09-19 13:50:22
 * @FilePath: \vitesse-nuxt3\app.vue
 * @Description:
 * Copyright (c) 2022 by wuwenjia wuwenjia@aegis-data.cn, All Rights Reserved.
-->
<script setup>
useHead({
  title: 'Vitesse Nuxt 3',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
  bodyAttrs: {
    class: 'font-sans text-gray-700 dark:text-gray-200',
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
