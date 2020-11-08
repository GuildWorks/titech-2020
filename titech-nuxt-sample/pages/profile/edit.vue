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
          :icon-url="userData.iconUrl"
          :user-name="userData.name"
          :email="userData.email"
          @changeName="changeName"
          @onFileChange="onFileChange"
        />
        <hr class="my-4 sm:my-8">
        <p class="leading-relaxed whitespace-pre-wrap">
          <textarea
            v-model="userData.comment"
            class="profile-edit-textarea"
          ></textarea>
        </p>
      </div>
      <ProfileTableEdit
        class="mt-8 lg:w-1/2 w-full"
        :profile="userData.profile"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, SetupContext, onBeforeMount } from 'nuxt-composition-api'
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
    ProfileTableEdit,
    ProfileNameIconEdit,
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
            userData.id = user.uid
            userData.name = doc.data().name
            userData.email = user.email
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
    const changeName = (name) => {
      userData.name = name
    }
    const onFileChange = (file: File): void => {
      // ストレージのルートへの参照を取得
      const storageRef = firebase.storage().ref()
      // プロフィール画像アップロード先への参照を取得
      const fileRef = storageRef.child('images/profile/' + userData.id + '/' + file.name)
      // プロフィール画像をストレージにアップロード
      fileRef.put(file).then(function(snapshot) {
        // ユーザーデータのURLを更新する
        snapshot.ref.getDownloadURL().then((url) => {
          userData.iconUrl = url
        })
      })
    }
    const updateProfile = (): void => {
      const data = {
        name: userData.name,
        role: userData.role,
        iconUrl: userData.iconUrl,
        comment: userData.comment,
        profile: userData.profile,
      }
      // プロフィールデータをデータベースにセット
      firebase
        .firestore()
        .collection('users')
        .doc(userData.id)
        .set(data)
        .then(() => {
          // プロフィール画面に戻る
          window.location.href = '/profile'
        })
    }
    return {
      userData,
      onFileChange,
      updateProfile,
      changeName,
    }
  },
})
</script>
<style></style>
