<template>
  <div
    class="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12"
  >
    <div
      class="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left"
    >
      <h1
        class="text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2"
      >
        Programming Boot Camp #2
      </h1>
      <h2
        class="text-4xl text-blue-500 text-secondary tracking-widest mb-6"
      >
        Vue.js/Nuxt.js
      </h2>
      <p class="text-gray-600 leading-relaxed mb-6">
        <a href="https://vuejs.org/index.html" class="text-blue-900">Vue.js</a>
        と
        <a href="https://ja.nuxtjs.org/" class="text-blue-900">Nuxt.js</a>
      </p>
    </div>
    <div class="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
      <SvgImage />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
import SvgImage from '@/components/svg-image.vue'
export default defineComponent({
  components: {
    SvgImage,
  },
})
</script>
<style></style>
