<template>
  <div class="relative flex items-start">
    <div
      class="relative shadow-lg h-20 w-20 sm:h-24 sm:w-24 border-white rounded-full overflow-hidden border-4 mr-4 flex justify-center items-center"
    >
      <img v-show="uploadedImage" class="object-cover w-full h-full"
        :src="uploadedImage" 
        @dragover.prevent 
        @drop.prevent="onFileChange" />
      <div v-show="!uploadedImage" class="drag-area" 
        @dragover.prevent
        @drop.prevent="onFileChange">
        <span>{{ iconUploadAreaMessage }}</span>
      </div>
    </div>
    <div class="absolute flex bottom-0">
      <button
        class="w-24 text-center text-xs bg-blue-500 hover:bg-blue-700 text-white 1 px-2 mt-1 rounded"
        v-bind:class="{ 'focus:outline-none': !cleared, 'focus:shadow-outline': cleared }"
        @mousedown="clearIcon"
        @mouseup="clearShadow"
      >画像クリア
      </button>
    </div>
    <div>
      <h3 class="text-sm title-font text-gray-500 tracking-widest">
        NAME
      </h3>
      <h2
        class="text-blue-900 text-2xl sm:text-3xl title-font font-medium mb-1"
      >
        <!-- TODO: エラー解消 Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "userName" -->
        <input
          v-model="props.userName"
          class="profile-edit-input"
          @input="userNameEmitter()"
        />
      </h2>
      <div class="flex mb-4">
        <span class="flex">
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
          <p>{{ props.email }}</p>
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, ref, reactive } from 'nuxt-composition-api'
import defaultVue from '../../../insides/insides/layouts/default.vue';
export default defineComponent({
  props: {
    iconUrl: {
      type: String,
    },
    userName: { type: String },
    email: { type: String },
    iconUploadAreaMessage: {
      type: String,
      default: 'Your Image!',
    },
  },
  setup(props, context) {
    let uploadedImage = ref('')
    const cleared = ref(false)

    const userNameEmitter = () => {
      context.emit('changeName', props.userName)
    }

    onBeforeMount(() => {
      uploadedImage.value = props.iconUrl
    })

    const clearIcon = (): void => {
      uploadedImage.value = ''
      cleared.value = true
    }
    const clearShadow = (): void => {
      cleared.value = false
    }
    const onFileChange = (event: any) => {
      event.stopPropagation()
      const files = event.target.files || event.dataTransfer.files
      createImage(files[0])
      context.emit('onFileChange', files[0])
    }
    const createImage = (file: any) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e && e.target) {
          uploadedImage.value = e.target.result[0]
        }
      }
      reader.readAsDataURL(file)
    }
    return {
      props,
      uploadedImage,
      cleared,
      clearIcon,
      clearShadow,
      onFileChange,
      createImage,
      userNameEmitter,
    }
  },
})
</script>
