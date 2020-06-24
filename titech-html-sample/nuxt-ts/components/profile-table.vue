<template>
  <div class="profile-table p-4 bg-gray-100">
    <div class="shadow-md rounded overflow-y-auto">
      <table class="w-full text-md bg-white">
        <tbody>
          <tr
            v-for="(profile, index) in userProfile()"
            :key="index"
            class="border-b bg-gray-100"
          >
            <th class="p-4 whitespace-no-wrap text-left">
              {{ profile.title }}
            </th>
            <td class="p-4">
              {{ profile.detail }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, SetupContext } from 'nuxt-composition-api'
import userlistJson from '@/mock/userlist.json'
type UserList = {
  id: string
  name: string
  email: string
  role: string
  iconUrl: string
  profile: {
    title: string
    detail: string
  }[]
}
export default defineComponent({
  name: 'ProfileTable',
  setup(_, { root }: SetupContext) {
    const userList = reactive<UserList[]>(userlistJson.userlistData)
    const userProfile = (): any => {
      return userList.filter((user) => user.id === root.$route.params.id)[0]
        .profile
    }
    return {
      userProfile,
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
