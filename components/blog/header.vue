<!--
 * @Author: wuwenjia
 * @Date: 2022-09-19 15:05:01
 * @FilePath: \vitesse-nuxt3\components\blog\header.vue
 * @Description:
 * Copyright (c) 2022 by wuwenjia wuwenjia@aegis-data.cn, All Rights Reserved.
-->
<script setup lang="ts">
</script>

<template>
  <header class="z-40">
    <a href="/" class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none" />
    <nav>
      <div class="spacer" />
      <div class="right">
        <a href="/Blog" title="Blog">
          <span class="lt-md:hidden">Blog</span>
          <div i-ri-article-line="" md:hidden="" data-v-b26c3cbf="" />
        </a>
        <a i-carbon-logo-github href="https://github.com/moxunjinmu" target="_blank" />
        <DarkToggle />
      </div>
    </nav>
  </header>
</template>

<style scoped>
nav{
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
  color: inherit;
}
.right{
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
  align-items: center;
}
</style>
