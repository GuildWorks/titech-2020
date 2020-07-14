<template>
  <div class="bg-white flex flex-col font-sans">
    <div class="container mx-auto">
      <header
        class="flex items-center justify-between relative pl-4 sm:pl-0 py-6"
      >
        <p class="leading-none">
          <a
            href="/"
            class="text-xl sm:text-2xl font-bold uppercase text-blue-900 hover:text-blue-800"
          >
            TOTAL Sample Project
          </a>
        </p>
        <nav class="hidden md:flex text-lg">
          <a
            href="/users"
            class="text-blue-900 hover:text-blue-600 py-3 px-6 text-sm font-bold"
          >
            メンバーリスト
          </a>
          <a
            href="/profile"
            class="text-blue-900 hover:text-blue-600 py-3 px-6 text-sm font-bold"
          >
            あなたのプロフィール
          </a>
          <a
            href="/signin"
            class="text-blue-900 hover:text-blue-600 py-3 px-6 text-sm font-bold"
          >
            ログイン
          </a>
          <a
            href="/signup"
            class="text-blue-900 hover:text-blue-600 py-3 px-6 text-sm font-bold"
          >
            ユーザー登録
          </a>
        </nav>
        <button
          class="flex md:hidden flex-col absolute top-0 right-0 py-6 px-4 focus:outline-none"
        >
          <span class="w-6 h-1 mb-1 bg-gray-500"></span>
          <span class="w-6 h-1 mb-1 bg-gray-500"></span>
          <span class="w-6 h-1 mb-1 bg-gray-500"></span>
        </button>
      </header>
      <main>
        <nuxt />
      </main>
      <footer class="p-4">
        <p class="text-gray-500 font-xs text-center">
          <span class="inline-block pt-2 border-t md:pt-8 md:border-none">
            provided by Guild Works Volunteers
          </span>
        </p>
      </footer>
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
body {
  @apply text-gray-700;
}
</style>
