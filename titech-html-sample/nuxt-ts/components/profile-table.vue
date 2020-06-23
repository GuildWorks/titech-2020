<template>
  <div class="profile-table p-4 bg-gray-100">
    <div class="shadow-md rounded overflow-y-auto">
      <table class="w-full text-md bg-white">
        <tbody>
          <tr
            v-for="(profile, index) in userProfile"
            :key="index"
            class="border-b bg-gray-100"
          >
            <th class="p-4 whitespace-no-wrap text-left">
              {{profile.title}}
            </th>
            <td class="p-4">
              {{profile.detail}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'nuxt-composition-api'
import userlistJson from '@/mock/userlist.json'
type UserProfile = {
  title: string
  detail: string
}
export default defineComponent({
  name: 'ProfileTable',
  setup(_) {
    const userProfile = reactive<UserProfile[]>(userlistJson.userprofileData)
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
