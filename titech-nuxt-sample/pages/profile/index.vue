<template>
  <div class="container mx-auto">
    <PageHeading>
      あなたのプロフィール
      <nuxt-link
        class="w-20 text-center text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 mt-2 rounded focus:outline-none focus:shadow-outline"
        to="/profile/edit"
      >
        編集
      </nuxt-link>
    </PageHeading>
    <div class="lg:w-11/12 mx-auto flex flex-wrap">
      <div class="p-4 lg:px-8 lg:w-1/2 w-full">
        <ProfileNameIcon
          :icon-url="userData.iconUrl"
          :user-name="userData.name"
          :email="userData.email"
        />
        <hr class="my-4 sm:my-8">
        <p class="leading-relaxed whitespace-pre-wrap">
          {{ userData.comment }}
        </p>
      </div>
      <ProfileTable class="mt-8 lg:w-1/2 w-full" :profile="userData.profile" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, SetupContext } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import ProfileNameIcon from '@/components/profile-name-icon.vue'
import ProfileTable from '@/components/profile-table.vue'
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
  components: {
    PageHeading,
    ProfileTable,
    ProfileNameIcon,
  },
  setup(_, { root }: SetupContext) {
    const userData = reactive<User>({
      id: '',
      name: '',
      email: '',
      role: '',
      iconUrl: '',
      comment: '',
      profile: {
        belongs: '',
        nickname: '',
        birthplace: '',
        birthday: '',
        bloodType: '',
        sign: '',
        hobby: '',
      },
    })
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        userData.id = user.uid
        userData.email = user.email
        getUserData(user)
      } else {
        // No user is signed in.
      }
    })
    const getUserData = (user) => {
      firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (!doc.exists) {
            // eslint-disable-next-line no-console
            console.log('No such document!')
          } else {
            userData.name = doc.data().name
            userData.role = doc.data().role
            userData.iconUrl = doc.data().iconUrl
            userData.profile = doc.data().profile
            userData.comment = doc.data().comment
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('Error getting document', err);
        })
    }
    return {
      userData,
    }
  }
})
</script>
<style></style>
