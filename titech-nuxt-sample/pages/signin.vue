<template>
  <div>
    <PageHeading>ログイン</PageHeading>
    <div class="signin">
      <input
        v-model="email"
        type="text"
        required="true"
        placeholder="email"
      />
      <input
        v-model="password"
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
import { defineComponent, ref } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import firebase from '@/plugins/firebase.ts'

export default defineComponent({
  components: {
    PageHeading,
  },
  setup(props) {
    const email = ref('')
    const password = ref('')
    function submit() {
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() =>
          firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value)
        )
        .then(() => (location.href = '/users'))
        .catch(function (error) {
          const errorCode = error.code
          const errorMessage = error.message
          // eslint-disable-next-line no-console
          console.log(errorCode, errorMessage)
          alert('ログイン失敗')
        })
    }
    return {
      props,
      email,
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
  border-color: #c4c4c4;
  border-radius: 6px;
  width: 20%;
}
</style>
