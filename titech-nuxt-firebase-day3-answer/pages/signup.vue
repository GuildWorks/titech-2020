<template>
  <div>
    <PageHeading>ユーザー登録</PageHeading>
    <div class="signup">
      <input v-model="state.email" type="text" required="true" placeholder="email" />
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
        登録する
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import firebase from '@/plugins/firebase.ts'

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
      firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
      .then(() => (location.href = '/profile/edit'))
      .catch(function(error) {
        // Handle Errors here.
        alert('ユーザー登録が失敗しました。errorCode: ' + error.code + ', errorMessage:' + error.message)
      });
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
.signup {
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
