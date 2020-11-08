<template>
  <div class="list-table shadow-md sm:rounded overflow-y-auto">
    <table class="w-full text-md bg-white">
      <thead>
        <tr class="border-b bg-blue-900 text-white">
          <th class="text-left p-3 px-5">氏名</th>
          <th class="text-left p-3 px-5">Email</th>
          <th class="text-left p-3 px-5">担当</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="text-gray-900">
        <tr
          v-for="(user, index) in userList"
          :key="index"
          class="border-b bg-gray-100 hover:bg-orange-100 cursor-pointer"
          @click="userLink(user.id)"
        >
          <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
            {{ user.name }}
          </td>
          <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
            {{ user.email }}
          </td>
          <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
            <template v-if="user.role === 'admin'">リーダー</template>
            <template v-else>メンバー</template>
          </td>
          <td class="py-3 px-5">
            <div class="flex justify-end items-center">
              <a
                :href="userLinkPath(user.id)"
                class="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline flex items-center"
              >
                <span
                  class="rounded-full w-5 h-5 bg-white p-0 border-px border-white inline-flex items-center justify-center text-blue-500 mr-2"
                >
                  <svg
                    fill="currentColor"
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                    />
                  </svg>
                </span>
                Profile
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'nuxt-composition-api'
import userlistJson from '@/mock/userlist.json'
import firebase from '@/plugins/firebase.ts'
type User = {
  id: string
  name: string
  email: string
  role: string
  iconUrl: string
  comment: string
  profile: {
    belongs: string
    nickname: string
    birthplace: string
    birthday: string
    bloodType: string
    sign: string
    hobby: string
  }
}
export default defineComponent({
  name: 'ListTable',
  setup(_) {
    const userList = reactive<User[]>([])
    firebase
      .firestore()
      .collection('users')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // eslint-disable-next-line no-console
          console.log(doc.id, ' => ', doc.data())
          userList.push({
            id: doc.id,
            name: doc.data().name,
            // TODO: ユーザー登録時にusers.uidへname, email, roleを登録するように修正
            email: doc.data().email,
            role: doc.data().role,
            iconUrl: doc.data().iconUrl,
            comment: doc.data().comment,
            profile: doc.data().profile,
          })
        })
      })
    const currentUserId = ref('')
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        currentUserId.value = user.uid
      } else {
        // No user is signed in.
      }
    })
    const userLinkPath = (userId: string): string => {
      return userId === currentUserId.value ? '/profile' : '/users/' + userId
    }
    const userLink = (userId: string): void => {
      window.location.href = userLinkPath(userId)
    }
    return {
      userList,
      userLinkPath,
      userLink,
    }
  },
})
</script>
<style>
tbody tr:nth-child(odd) {
  @apply bg-white;
}
input[type='text'],
select {
  outline-color: #a0aec0;
}
</style>
