<template>
  <div class="flex items-start">
    <div
      class="relative shadow-lg h-20 w-20 sm:h-24 sm:w-24 border-white rounded-full overflow-hidden border-4 mr-4"
    >
      <img class="object-cover w-full h-full" :src="props.iconUrl" />
    </div>
    <div>
      <h3 class="text-sm title-font text-gray-500 tracking-widest">
        NAME
      </h3>
      <h2
        class="text-blue-900 text-2xl sm:text-3xl title-font font-medium mb-1"
      >
        {{ props.userName }}
      </h2>
      <div class="flex mb-4">
        <span class="flex">
          <a href="#" class="text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              ></path>
            </svg>
          </a>
          <a href="#" class="ml-2 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a :href="'mailto:' + props.email" class="ml-2 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
          </a>
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
    userName: { type: String },
    email: { type: String },
  },
  setup(props) {
    return {
      props,
    }
  }
})
</script>
