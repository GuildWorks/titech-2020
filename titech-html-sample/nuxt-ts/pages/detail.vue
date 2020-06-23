<template>
  <div class="container mx-auto">
    <PageHeading>メンバープロフィール</PageHeading>
    <div class="lg:w-11/12 mx-auto flex flex-wrap">
      <div class="p-4 lg:px-8 lg:w-1/2 w-full">
        <ProfileNameIcon />
        <hr class="my-4 sm:my-8">
        <p class="leading-relaxed">
          こんにちは。仁和
          泰也といいます。友人からはにわりんと呼ばれているので、にわりんと呼んでください。住まいは新宿で、大学4回生です。趣味は、写真を撮ることが好きなので、休日は山に登り、風景や草花をカメラに収めています。また、自粛生活が続いたとき、料理くらいできないとと思い、夏から料理教室に通っています。得意料理はカレーライスです。
        </p>
      </div>
      <ProfileTable class="mt-8 lg:w-1/2 w-full" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import ProfileNameIcon from '@/components/profile-name-icon.vue'
import ProfileTable from '@/components/profile-table.vue'
export default defineComponent({
  components: {
    PageHeading,
    ProfileTable,
    ProfileNameIcon,
  },
})
</script>
<style></style>
