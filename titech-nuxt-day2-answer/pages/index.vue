<template>
  <div
    class="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12"
  >
    <div
      class="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left"
    >
      <h1
        class="uppercase text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2"
      >
        List &amp; Detail
      </h1>
      <p class="text-gray-600 leading-relaxed mb-6">
        <a href="/list" class="text-blue-900">メンバーリスト</a>
        と
        <a href="/user/0001" class="text-blue-900">プロフィール</a>
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
