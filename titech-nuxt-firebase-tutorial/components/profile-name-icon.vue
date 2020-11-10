<template>
  <div class="flex items-start">
    <div
      class="relative shadow-lg h-20 w-20 sm:h-24 sm:w-24 border-white rounded-full overflow-hidden border-4 mr-4"
    >
      <img
        v-if="props.iconUrl"
        class="object-cover w-full h-full"
        :src="props.iconUrl"
      />
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
      <div v-if="props.email" class="flex mb-4">
        <span class="flex">
          <a :href="'mailto:' + props.email" class="ml-2 flex">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
            <p class="ml-2">{{ props.email }}</p>
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
  },
})
</script>
