<template>
  <div>
    <PageHeading>メンバーリスト</PageHeading>
    <ListTable class="my-4 lg:w-11/12 mx-auto" />
    <hr class="my-12" />
    <p class="my-4">HTML用（行でリンクしない）</p>
    <ListTableHtml class="my-4 lg:w-11/12 mx-auto" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import ListTable from '@/components/list-table.vue'
import ListTableHtml from '@/components/list-table-html.vue'

export default defineComponent({
  components: {
    PageHeading,
    ListTable,
    ListTableHtml,
  },
})
</script>
<style></style>
