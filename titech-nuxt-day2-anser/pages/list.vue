<template>
  <div>
    <PageHeading>メンバーリスト</PageHeading>
    <ListTable class="my-4 lg:w-11/12 mx-auto" />
    <ListTableHtml class="my-4 lg:w-11/12 mx-auto" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import ListTable from '@/components/list-table.vue'

export default defineComponent({
  components: {
    PageHeading,
    ListTable,
  },
})
</script>
<style></style>
