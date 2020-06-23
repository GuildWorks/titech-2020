<template>
  <div class="list-table-advance shadow-md sm:rounded overflow-y-auto">
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
          class="border-b bg-gray-100"
        >
          <td class="py-1 px-2 md:py-2 md:px-3">
            <input type="text" v-model="user.name" class="bg-transparent p-2" />
          </td>
          <td class="py-1 px-2 md:py-2 md:px-3">
            <input
              v-model="user.email"
              type="text"
              class="bg-transparent p-2 pr-8"
            />
          </td>
          <td class="py-1 px-2 md:py-2 md:px-3">
            <select value="user.role" class="bg-transparent leading-none p-2">
              <option value="user" class="inline-block">メンバー</option>
              <option value="admin" class="inline-blockx">リーダー</option>
            </select>
          </td>
          <td class="py-1 px-2 md:py-2 md:px-3">
            <div class="flex justify-end items-center">
              <button
                type="button"
                class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
              <button
                type="button"
                class="mr-3 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
              <a
                href="/detail"
                class="inline-flex flex-col items-center justify-center pt-1 hover:opacity-75"
              >
                <span
                  class="rounded-full w-6 h-6 bg-gray-600 p-0 border-0 inline-flex items-center justify-center text-white"
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
                <span class="text-xs text-gray-600 font-bold leading-none pt-1">Profile</span>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'nuxt-composition-api'
import userlistJson from '@/mock/userlist.json'
type UserList = {
  id: string
  name: string
  email: string
  role: string
}
export default defineComponent({
  name: 'ListTableAdvance',
  setup(_) {
    const userList = reactive<UserList[]>(userlistJson.userlistData)
    return {
      userList,
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
