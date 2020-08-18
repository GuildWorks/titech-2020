<template>
  <div class="relative flex items-start">
    <div
      class="relative shadow-lg h-20 w-20 sm:h-24 sm:w-24 border-white rounded-full overflow-hidden border-4 mr-4 flex justify-center items-center"
    >
      <img ref="icon" v-show="props.hasIconUrl" class="object-cover w-full h-full" :src="props.iconUrl" />
      <div ref="upload" v-show="!props.hasIconUrl" class="block text-sm">ここに画像を<br />アップロード</div>
    </div>
    <div class="absolute flex bottom-0">
      <button
        class="w-24 text-center text-xs bg-blue-500 hover:bg-blue-700 text-white 1 px-2 mt-1 rounded focus:outline-none focus:shadow-outline"
        @click="clearIcon"
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
        <input class="profile-edit-input" :value="props.userName" />
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
          <input class="profile-edit-input" :value="props.email" />
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
export default defineComponent({
  props: {
    iconUrl: { type: String },
    hasIconUrl: {type: Boolean},
    userName: { type: String },
    email: { type: String },
  },
  setup(props) {
    return {
      props,
    }
  },
  methods: {
    hasIconUrl(): void {
      this.$props.hasIconUrl = this.$props.iconUrl !== null && this.$props.iconUrl !== '';
    },
    clearIcon(): void {
      this.$props.hasIconUrl = false;
    }
  }
})

</script>
