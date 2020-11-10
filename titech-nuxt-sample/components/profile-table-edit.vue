<template>
  <div class="profile-table p-4 bg-gray-100">
    <div class="shadow-md rounded overflow-y-auto">
      <table class="w-full text-md bg-white">
        <tbody>
          <tr class="border-b bg-gray-100">
            <th class="p-4 whitespace-no-wrap text-left">
              所属・部署
            </th>
            <td class="p-4 w-full">
              <input v-model="profile.belongs" class="border w-full px-1" />
            </td>
          </tr>
          <tr class="border-b bg-gray-100">
            <th class="p-4 whitespace-no-wrap text-left">
              ニックネーム
            </th>
            <td class="p-4 w-full">
              <input v-model="profile.nickname" class="border w-full px-1" />
            </td>
          </tr>
          <tr class="border-b bg-gray-100">
            <th class="p-4 whitespace-no-wrap text-left">
              出身地
            </th>
            <td class="p-4 w-full">
              <input v-model="profile.birthplace" class="border w-full px-1" />
            </td>
          </tr>
          <tr class="border-b bg-gray-100">
            <th class="p-4 whitespace-no-wrap text-left">
              生年月日
            </th>
            <td class="p-4 w-full">
              <input v-model="profile.birthday" class="border w-full px-1" />
            </td>
          </tr>
          <tr class="border-b bg-gray-100">
            <th class="p-4 whitespace-no-wrap text-left">
              血液型
            </th>
            <td class="p-4 w-full">
              <input v-model="profile.bloodType" class="border w-full px-1" />
            </td>
          </tr>
          <tr class="border-b bg-gray-100">
            <th class="p-4 whitespace-no-wrap text-left">
              星座
            </th>
            <td class="p-4 w-full">
              <input v-model="profile.sign" class="border w-full px-1" />
            </td>
          </tr>
          <tr class="border-b bg-gray-100">
            <th class="p-4 whitespace-no-wrap text-left">
              趣味
            </th>
            <td class="p-4 w-full">
              <input v-model="profile.hobby" class="border w-full px-1" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, SetupContext } from 'nuxt-composition-api'
export default defineComponent({
  name: 'ProfileTable',
  props: {
    profile: {},
  },
  setup(props, { root }: SetupContext) {
    return {
      props,
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
