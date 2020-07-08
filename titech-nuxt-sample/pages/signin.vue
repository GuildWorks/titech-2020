<template>
  <div>
    <PageHeading>ログイン</PageHeading>
    <div class="signin">
      <input
        v-model="username"
        type="text"
        required="true"
        placeholder="Username"
      />
      <input
        v-model="password"
        type="password"
        required="true"
        placeholder="Password"
      />
      <button
        class="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline flex items-center"
        @click="submit"
      >
        ログイン
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'

export default defineComponent({
  components: {
    PageHeading,
  },
  setup(props) {
    const username = ref('')
    const password = ref('')
    function submit() {
      // TODO
    }
    return {
      props,
      username,
      password,
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
  border-color: #C4C4C4;
  border-radius: 6px;
  width: 20%;
}
</style>
