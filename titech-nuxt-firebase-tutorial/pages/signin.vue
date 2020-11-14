<template>
  <div>
    <PageHeading>ログイン</PageHeading>
    <div class="signin">
      <input
        v-model="state.email"
        type="text"
        required="true"
        placeholder="email"
      />
      <input
        v-model="state.password"
        type="password"
        required="true"
        placeholder="Password"
      />
      <button
        class="text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 mt-2 rounded focus:outline-none focus:shadow-outline flex items-center"
        @click="submit"
      >
        ログイン
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'

export default defineComponent({
  components: {
    PageHeading,
  },
  setup(props) {
    const state = reactive({
      email: '',
      password: ''
    })
    function submit() {
      // TODO
    }
    return {
      props,
      state,
      submit,
    }
  },
})
</script>
<style scoped>
.signin {
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
  border-width: 1px;
  border-color: #c4c4c4;
  border-radius: 6px;
  width: 20%;
}
</style>
