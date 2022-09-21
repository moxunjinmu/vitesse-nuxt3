<template>
  <div id="blog-app">
    <BlogHeader />
    <main class="py-20 px-10 text-center">
      <slot />
      <!-- <Footer absolute bottom-0 mt-10 mb-10 m-auto /> -->
      <div class="mt-5 mx-auto text-center opacity-25 text-sm">
        [Default Layout]
      </div>
    </main>
  </div>
</template>
