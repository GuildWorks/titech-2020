<template>
  <div class="container mx-auto">
    <PageHeading>メンバープロフィール</PageHeading>
    <div class="lg:w-11/12 mx-auto flex flex-wrap">
      <div class="p-4 lg:px-8 lg:w-1/2 w-full">
        <ProfileNameIcon
          :icon-url="userData().iconUrl"
          :user-name="userData().name"
          :email="userData().email"
        />
        <hr class="my-4 sm:my-8">
        <p class="leading-relaxed">{{ userData().comment }}</p>
      </div>
      <ProfileTable
        class="mt-8 lg:w-1/2 w-full"
        :profile="userData().profile"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, SetupContext } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import ProfileNameIcon from '@/components/profile-name-icon.vue'
import ProfileTable from '@/components/profile-table.vue'
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
  components: {
    PageHeading,
    ProfileTable,
    ProfileNameIcon,
  },
  setup(_, { root }: SetupContext) {
    const userList = reactive<UserList[]>(userlistJson.userlistData)
    const userData = (): UserList => {
      if (
        userList.filter((user) => user.id === root.$route.params.id).length > 0
      )
        return userList.filter((user) => user.id === root.$route.params.id)[0]
      else
        return {
          id: '',
          name: '',
          email: '',
          role: '',
          iconUrl: '',
          profile: [
            {
              title: '',
              detail: '',
            },
          ],
        }
    }
    return {
      userData,
    }
  }
})
</script>
<style></style>
