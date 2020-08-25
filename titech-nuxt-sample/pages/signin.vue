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
    const username = ref('')
    const password = ref('')
    function submit() {
      // Test
      const db = firebase.firestore()
      const dbUsers = db.collection('users')
      dbUsers
        .add({
          username: username.value,
          password: password.value,
        })
        .then((ref) => {
          // eslint-disable-next-line no-console
          console.log('Add ID: ', ref.id)
        })
    }
    // getのテスト
    const db = firebase.firestore()
    const docUsers = db.collection('users').doc('vKV5ojTyW9E5ti5m1Dei')
    docUsers.get().then(function (doc) {
      // eslint-disable-next-line no-console
      console.log('userName', doc.data().username)
    })
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
  border-color: #c4c4c4;
  border-radius: 6px;
  width: 20%;
}
</style>
