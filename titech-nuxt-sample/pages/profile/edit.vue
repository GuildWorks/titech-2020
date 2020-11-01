/* eslint-disable no-unused-vars */
<template>
  <div class="container mx-auto">
    <PageHeading>
      プロフィール編集
      <button
        class="w-20 text-center text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 mt-2 rounded focus:outline-none focus:shadow-outline"
        @click="updateProfile"
      >
        登録
      </button>
    </PageHeading>
    <div class="lg:w-11/12 mx-auto flex flex-wrap">
      <div class="p-4 lg:px-8 lg:w-1/2 w-full">
        <ProfileNameIconEdit
          :icon-url="userData().iconUrl"
          :user-name="userData().name"
          :email="userData().email"
          @onFileChange="onFileChange"
        />
        <hr class="my-4 sm:my-8">
        <p class="leading-relaxed">
          <textarea class="profile-edit-textarea">{{ userData().comment }}</textarea>
        </p>
      </div>
      <ProfileTableEdit
        class="mt-8 lg:w-1/2 w-full"
        :profile="userData().profile"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, SetupContext } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import ProfileNameIconEdit from '@/components/profile-name-icon-edit.vue'
import ProfileTableEdit from '@/components/profile-table-edit.vue'
import userlistJson from '@/mock/userlist.json'
import firebase from '@/plugins/firebase.ts'

type User = {
  id: string
  name: string
  email: string
  role: string
  iconUrl: string
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
    ProfileTableEdit,
    ProfileNameIconEdit,
  },
  setup(_, { root }: SetupContext) {
    const userList = reactive<User[]>(userlistJson.userlistData)
    const userData = (): User => {
      if (userList.filter((user) => user.id === '0001').length > 0) {
        return userList.filter((user) => user.id === '0001')[0]
      }
      return {
        id: '',
        name: '',
        email: '',
        role: '',
        iconUrl: '',
        profile: {
          belongs: '',
          nickname: '',
          birthplace: '',
          birthday: '',
          bloodType: '',
          sign: '',
          hobby: '',
        },
      }
    }
    let iconFile = reactive({})
    const onFileChange = (file: File): void => {
      iconFile = file
      // eslint-disable-next-line no-console
      console.log(iconFile)
      if (!file) return
      // TODO 画像アップロード
      // eslint-disable-next-line no-console
      console.log('unnecessary return')
    }
    const updateProfile = (): void => {
      // TODO Firebase とつないでユーザ情報更新処理
      const userId = firebase.auth().currentUser.uid
      const db = firebase.firestore()
      const data = {
        name: '今橋　陵3',
        role: 'admin',
        iconUrl: 'https://images.app.goo.gl/zfHpfXryhRVG62BS8',
        comment: 'こんにちは。いまはしです。よろしくお願いします。',
        profile: {
          belongs: 'ギルドワークス',
          nickname: 'いまはし',
          birthplace: '山口県',
          birthday: '1992年7月24日',
          bloodType: 'O型',
          sign: '獅子座',
          hobby: '猫と遊ぶ・料理',
        },
      }
      // プロフィールデータをデータベースにセット
      db.collection('users').doc(userId).set(data)
    }
    return {
      userData,
      iconFile,
      onFileChange,
      updateProfile,
    }
  },
})
</script>
<style></style>
