<template>
  <div>
    <PageHeading>メンバーリスト（編集可能）</PageHeading>
    <ListTableAdvance class="my-4 lg:w-11/12 mx-auto" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import ListTableAdvance from '@/components/list-table-advance.vue'

export default defineComponent({
  components: {
    PageHeading,
    ListTableAdvance,
  },
})
</script>
<style></style>
