<!--
 * @Author: wuwenjia
 * @Date: 2022-09-19 17:28:29
 * @FilePath: \vitesse-nuxt3\components\quotes.vue
 * @Description:
 * Copyright (c) 2022 by wuwenjia wuwenjia@aegis-data.cn, All Rights Reserved.
-->
<script setup lang="ts">
const { data } = await useFetch('/api/dailySentence')

const time = useTimeAgo(computed(() => data.value))
</script>

<template>
  <div text-gray:80>
    <span font-500 text-gray>{{ data.pageview }}</span>
    page views since
    <span text-gray>{{ time }}</span>
  </div>
</template>

