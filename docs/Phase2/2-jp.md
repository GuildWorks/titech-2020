---
marp: true
theme: gaia
size: 16:9
header: 'Copyright Junichiro Ueno'

page_number: true
paginate: true
---

# 第2回： JavaScriptで動きのある画面をつくろう(Vue.js編)

---

### :jack_o_lantern: 前回までのふりかえり :jack_o_lantern:

:white_check_mark: HTML、CSS、JavaScriptの基礎を終え、
次は本格的にWebアプリケーションの開発を体験していきます。

前回参加しておらず、今回からの参加の方はまずはGithubから最新のコードを落としてきてください。

[https://github.com/GuildWorks/titech-2020](https://github.com/GuildWorks/titech-2020)

**参考**
[前回資料(環境構築)](https://github.com/GuildWorks/titech-2020/blob/master/docs/Phase1/1-1.md)

---

:white_check_mark: 前回、HTML、CSS、JavaScriptを利用して、
メンバー一覧、メンバー詳細が~~できあがりました。~~**できあがりませんでした。。。**

今回はHTML、CSSの詳細な説明は省きますが、
1つ1つコードを書きながら必要なものは説明しますが、
不明点があれば質問してください。

:dart: **誰も質問しないとこっちから振る可能性もあります**:dart:

---

#### :jack_o_lantern: メンバー一覧 :jack_o_lantern:
![w:1100px](images/2-1-1.png)

---

#### :jack_o_lantern: メンバー詳細 :jack_o_lantern:
![w:1000px](images/2-1-2.png)

---

### :jack_o_lantern: 最新のデータを取得しよう :jack_o_lantern:

:white_check_mark: 保存先の titech-2020 フォルダに移動して
`git bash` or `Terminal`で以下のコマンドを打ってみましょう。

```
git pull
```

:white_check_mark: 最新のデータが取得できました。
`docs/Phase2`の下にこのドキュメントが入っていたら成功です。

---

### :jack_o_lantern: Vue.jsとは :jack_o_lantern:

![w:500px](images/vue.png)
![w:1000px](images/2-1-vue.png)
:jp:： [https://jp.vuejs.org/](https://jp.vuejs.org/index.html)
:us:： [https://vuejs.org/](https://jp.vuejs.org/index.html)

---

### :jack_o_lantern: 開発環境の実行 :jack_o_lantern:

:white_check_mark: 前回、環境構築で既に`npm run dev`できるようにまでします。
今回はこのコマンドを常に実行しておきます。

:white_check_mark: `titech-2020/titech-nuxt-tutorial`フォルダに移動して
`git bash` or `Terminal`で以下のコマンドを打ってみましょう。

```
npm run dev
```

---

#### :jack_o_lantern: トップページ :jack_o_lantern:
![w:1000px](images/2-1-4.png)

---

### :jack_o_lantern: 確認 :jack_o_lantern:

実行できたら中身を確認していきましょう。

:white_check_mark: **ソースコードの確認**

Visual Studio Codeで以下のファイルを開いてみよう。
`titech-2020/titech-nuxt-tutorial/pages/index.vue`

---

```
<template>
  <div
    class="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12"
  >
    <div
      class="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left"
    >
      <h1
        class="text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2"
      >
        Programming Boot Camp #2
      </h1>
      <h2
        class="text-4xl text-blue-500 text-secondary tracking-widest mb-6"
      >
        Vue.js/Nuxt.js
      </h2>
      <p class="text-gray-600 leading-relaxed mb-6">
        <a href="https://vuejs.org/index.html" class="text-blue-900">Vue.js</a>
        と
        <a href="https://ja.nuxtjs.org/" class="text-blue-900">Nuxt.js</a>
      </p>
    </div>
    <div class="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
      <SvgImage />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
import SvgImage from '@/components/svg-image.vue'
export default defineComponent({
  components: {
    SvgImage,
  },
})
</script>
<style></style>
```

---

### :jack_o_lantern: 説明 :jack_o_lantern:

:white_check_mark: `Vue`では3つのエリアに分かれてコードを書くことができます。

- 1つのファイルに書くことができて、わかりやすい:question::question::question:

:white_check_mark: `.vue`ファイルの中身は前回学んだものを集めたものです。

- なんとなく理解できそうな気がしませんか:question::question::question:

:white_check_mark: それぞれのエリアを見ていきましょう。

---

### :jack_o_lantern: template :jack_o_lantern:

```
<template>
  ...
</template>
```

:white_check_mark: 前回学んだ`HTML`を書くエリアです。

`<template>` から `</template>` の中に`HTML`を記述できます。

:white_check_mark: `Vue`では`HTML`だけではなく`コード`も書くことができます。

:white_check_mark: 記述の方法も

---


```
<template>
  <div>
    ...
  </div>
</template>
```

:warning: `<template>`の中の1番外側のタグは1つでないといけません。

```
<template>
  <div>...</div>
  <div>...</div>
</template>
```

:x: これだとエラーになります:cry:


---

### :jack_o_lantern: script :jack_o_lantern:

```
<script lang="ts">
  ...
</script>
```

:white_check_mark: 前回学んだJavaScriptを書くエリアです。

`lang="ts"`

:bulb: 実はこれは["TypeScript"](https://www.typescriptlang.org/)という言語を指定しています。
　 "JavaScript"の代わりとなる主流のプログラミング言語です。

**簡単に言うと、「型定義ができるJavaScript」です。**

---

```
<script  lang="ts">
import { defineComponent } from 'nuxt-composition-api'
import SvgImage from '@/components/svg-image.vue'
export default defineComponent({
  components: {
    SvgImage,
  },
})
</script>
```

```import { defineComponent } from 'nuxt-composition-api'```

:beginner: これは呪文です。
まずは`defineComponent`を利用できるものと覚えましょう。

---

```import SvgImage from '@/components/svg-image.vue'```

:beginner: 同じく`svg-image.vue`を利用するための宣言になります。

上記の指定では`svg(Scalable Vector Graphics)`が入っているファイルを利用できるようになります。

:bulb: コンポーネントはパーツを流用するとき等に使います。

---

```
export default defineComponent({
  components: {
    SvgImage,
  },
})
```

`components`の中で利用したいものを指定することで
`<template>`の中で利用できます。

**利用例**
```
<div class="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
  <SvgImage />
</div>
```

---

以下の部分が読み込まれて表示されています。

![w:700px](images/2-1-5.png)

---

### :jack_o_lantern: style :jack_o_lantern:
```
<style>
  ...
</style>
```

:white_check_mark: 前回学んだCSSを書くエリアです。

前回学んだ [Tailwind](https://tailwindcss.com/) が便利なのであまり使わないかも。。。

ここはこの後の演習の流れで見ていくようにします。

---

### :jack_o_lantern: 演習 :jack_o_lantern:

:white_check_mark: なんとなく概要は理解できたかもしれませんが、まだ良くわからないと思います。

:muscle: 具体的に手を動かしてみましょう。

---

:white_check_mark: `titech-nuxt-tutorial/pages/list.vue`を開きましょう

```
<template>

</template>
<script lang="ts">

</script>
<style>

</style>
```

:innocent: まだ中身は何もありません。

:pencil2: コードを追加していきましょう。

---

:white_check_mark: その前にもう一度、完成イメージを見ておきましょう。

![w:1100px](images/2-1-1.png)

---

```
<template>
  <div>
    <h1 class="text-2xl sm:text-3xl text-blue-900 p-4 mb-4 md:mb-8 border-b">メンバーリスト</h1>
  </div>
</template>
```

:white_check_mark: `<template>`から`</template>`中に上記を追加してみましょう。

:white_check_mark: `npm run dev`が動いていると保存したコードが自動的に反映しているはずです。

:bulb: ブラウザで [http://localhost:3000/list](http://localhost:3000/list) を表示してみましょう。

:white_check_mark: 次は一気に増えます。。。
　 とりあえずコピペしましょう。


---

```
<template>
  <div>
    <h1 class="text-2xl sm:text-3xl text-blue-900 p-4 mb-4 md:mb-8 border-b">メンバーリスト</h1>
    <div class="list-table shadow-md sm:rounded overflow-y-auto">
      <table class="w-full text-md bg-white">
        <thead>
          <tr class="border-b bg-blue-900 text-white">
            <th class="text-left p-3 px-5">氏名</th>
            <th class="text-left p-3 px-5">Email</th>
            <th class="text-left p-3 px-5">担当</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="text-gray-900">
          <tr
            class="border-b bg-gray-100"
          >
            <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
              仁和 泰也
            </td>
            <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
              niwa@example.com
            </td>
            <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
              メンバー
            </td>
            <td class="py-3 px-5">
              <div class="flex justify-end items-center">
                <a
                  :href="'/user/0001'"
                  class="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline flex items-center"
                >
                  <span
                    class="rounded-full w-5 h-5 bg-white p-0 border-px border-white inline-flex items-center justify-center text-blue-500 mr-2"
                  >
                    <svg
                      fill="currentColor"
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                      />
                    </svg>
                  </span>
                  Profile
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
```

---

![w:1100px](images/2-1-6.png)

:bulb: こんな画面になったでしょうか。

:white_check_mark: メンバーリストに1名表示されましたね。

:beginner: ここから本格的にプログラミングぽくなっていきますが、
その前に簡単に基礎編です。

---

### :jack_o_lantern: プログラミング基礎 :jack_o_lantern:

:warning: 型や変数についての詳細は #3 にて。

**型とは**

**プリミティブ型**
`string`は文字列
`number`は数値
`boolean`は真偽値

**参考資料**
[TypeScriptの型入門](https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a)

---

### :jack_o_lantern: 変数 :jack_o_lantern:

```
const label: string = "MemberList" // OK
const label: string = 3            // NG

const num: number = 3              // OK
const num: number = "3"            // NG

const bool: boolean = true         // OK
const bool: boolean = "false"      // NG
```

:white_check_mark: 型が正しくないものはエラーになる。

---

```
const label: string = "MemberList"
label = "Change" // NG

let label2: string = "MemberList"
label2 = "Change" // OK
```

:white_check_mark: 不変なものは`const`で、可変なものは`let`を使いましょう。

---

### :jack_o_lantern: 配列 :jack_o_lantern:

```
const name: string[] = ["上野", "今橋", "京極"]
name.push("金"))                              // 配列の最後に`4`を追加する

console.log(name)                            // ["上野", "今橋", "京極", "金"]
console.log(name[1])                         // "今橋"
```

複数のデータを持つ場合は配列を利用しましょう。

:jack_o_lantern:配列の先頭は`0`から始まるので注意

**補足**
`shift()`は先頭を削除、`pop()`は末尾を削除

---

一旦、基礎編は以上です:dash:

:white_check_mark: 不明な点はありますか:question::question::question:

:muscle: では再び手を動かしていきましょう。

---

### :jack_o_lantern: ダミーデータの用意 :jack_o_lantern:

:white_check_mark: `titech-nuxt-template/mock/userlist.json`ファイルを開きます。

```
{
  "userlistData": [
    {
      "id": "0001",
      "name": "仁和 泰也",
      ...
    },
  ]
}
```

これは`json`というファイルでダミーデータを定義しています。

---

### :jack_o_lantern: ダミーデータの取込 :jack_o_lantern:

:white_check_mark: `titech-nuxt-tutorial/pages/list.vue`に追記していきます。

:white_check_mark: まずはコピペしましょう。
そして中身を見ていきましょう。

---

```
<script lang="ts">
import { defineComponent, reactive } from 'nuxt-composition-api'
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
  setup(_) {
    const userList = reactive<UserList[]>(userlistJson.userlistData)
    return {
      userList,
    }
  },
})
</script>
```

---

```
import userlistJson from '@/mock/userlist.json'
```

:white_check_mark: 前述のダミーデータを`userlistJson`という名前で定義しています。

:memo: `import`はそのファイルを利用するための宣言と言いました。
利用する時には名前をつける必要があります。
今回は`userlistJson`という名前にしています。

---

```
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
```

:white_check_mark: これは型エイリアスというものですが、
型を定義しておくことができる便利なものです。

:bulb: 型が異なるとエラーになるのでミスに気がつけます。

---

```
export default defineComponent({
  setup(_) {
    const userList = reactive<UserList[]>(userlistJson.userlistData)
    return {
      userList,
    }
  },
})
```

:interrobang: また見慣れないものが増えています。

`setup(_)`はこのページが呼び出された時に実行されるものです。
`<template>`の中で利用したいものは`return`で返しています。

---

```
const userList = reactive<UserList[]>(userlistJson.userlistData)
```

:white_check_mark: `titech-nuxt-tutorial/mock/userlist.json`のファイルの中から
`userlistJson.userlistData`でダミーデータを取得しています。

---

```
{
  "userlistData": [
    ...
  ]
}
```

:white_check_mark: `import`で指定した名前で、ファイル内の`userlistData`を取得します。

:white_check_mark: 取得する際に型エイリアスで定義した`UserList`の配列を指定することでデータにエラーが発生しないようにしています。

:white_check_mark: 取得したダミーデータを`<template>`で使えるように`return`に指定しておきます。

---

:white_check_mark: ダミーデータを取れたのでメンバー一覧に表示させましょう。

```
<tr
  v-for="(user, index) in userList"
  :key="index"
  class="border-b bg-gray-100"
>
```

:white_check_mark: 17行目の`tr`に上記を追加します。

:bulb: ブラウザで表示すると`仁和`さんがいっぱい表示されてますね。。。
それでも一旦は成功です。

---

### :jack_o_lantern: for文 :jack_o_lantern:

```
v-for="(user, index) in userList" :key="index"
```

:white_check_mark: `Vue.js`では`template`の中でループを実行することができます。

:white_check_mark: `userList`これは`<script>`の中で`return`に指定したものです。
ダミーデータの配列が入っています。

:white_check_mark: ここでは配列の中から1データずつ取得したいので、`for`を利用します。

---

:white_check_mark: `(user, index)`これで配列の1つを`user`に格納されます。

:white_check_mark: `index`はインデックス(カウンタ)が格納されます。

---

:question: ループしても`仁和`さんしか出ないのは
　 取得したデータを利用していないからです。

```
<td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
  仁和 泰也
</td>
```

名前が固定値で指定されているので、何度ループしても同じ名前しかでませんね:sweat:

---

:white_check_mark: データを利用できるように変更しましょう。

```
<td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
  {{ user.name }}
</td>
```

これだけです。
:white_check_mark: `<template>`の中では`{{  }}`で囲って上げることで変数を利用できます。

:white_check_mark: `user`変数にデータが1つずつ入っているので、`user.name`で名前を取得できます。

:bulb: ブラウザで表示すると、名前だけダミーデータに変わってますね。

---

:white_check_mark: 他のデータも変更してみましょう。

```
<td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
  {{ user.email }}
</td>
<td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
  <template v-if="user.role === 'admin'">リーダー</template>
  <template v-else>メンバー</template>
</td>
```

:white_check_mark: `Email`と`担当`も変更されましたね。

:interrobang: よく見るとまた見知らぬ`v-if`と`v-else`がありますね。

:white_check_mark: これも`Vue`で利用できるものです。

---

### :jack_o_lantern: if文 :jack_o_lantern:

```
<template v-if="user.role === 'admin'">リーダー</template>
<template v-else>メンバー</template>
```

:white_check_mark: `v-if`の条件が`true`なら実行されます。
:white_check_mark: 条件が`false`なら`else`が実行されます。

:eyes: ダミーデータは、`仁和`さんだけ`admin`で他の人は`member`ですね。

したがって、`user.role`の中身が`admin`かをチェックしているので`仁和`さんだけがリーダーになります。
(`===`は同じ値なら`true`、異なるなら`false`になります)

---

:bulb: Profileボタンをクリックしたときには、
その人の詳細ページに遷移したいですよね。

:white_check_mark: そこも変更しておきましょう。
(まだ詳細ページはありませんが)

```
:href="'/user/' + user.id"
```

:man_with_gua_pi_mao: `仁和`さんなら
http://localhost:3000/user/0001
:man_with_turban: `川面`さんなら
http://localhost:3000/user/0002

---

:white_check_mark: 一覧の最後に見た目の調整もしましょう。

```
<style>
tbody tr:nth-child(odd) {
  @apply bg-white;
}
</style>
```

:white_check_mark: `style`の中にCSSを追加しました。
行が`odd`(奇数)の時に行の色を白に指定しています。

---

### :jack_o_lantern: 一覧の完成 :jack_o_lantern:

![w:1100px](images/2-1-7.png)

---

### :jack_o_lantern: おまけ :jack_o_lantern:

:bulb: せっかくなので、もうひと工夫してみましょう。

:question: 詳細ページに遷移する時にボタンをクリックしないといけないのはちょっと使い勝手が良くないですよね。

:white_check_mark: 行のどこをクリックしても遷移できるように変更しましょう。

:white_check_mark: また、カーソルが行の上にあるときによりわかりやすくもしてみましょう。

---

```
  setup(_) {
    const userList = reactive<UserList[]>(userlistJson.userlistData)
    const userLink = (userId: string): void => {
      window.location.href = '/user/' + userId
    }
    return {
      userList,
      userLink
    }
  },
```

:white_check_mark: `setup`の中を変更してみましょう。

---

```
<tr
  v-for="(user, index) in userList"
  :key="index"
  class="border-b bg-gray-100"
  @click="userLink(user.id)"
>
```

:white_check_mark: `v-for`がある`tr`タグの中にも一行追加してみます。

---

:bulb: おまけと言いつつ、新しいことを学びます。

```
const userLink = (userId: string): void => {
  window.location.href = '/user/' + userId
}
```

```
@click="userLink(user.id)"
```

:white_check_mark: `@click`でクリックされた時に実行される関数を追加しています。
:white_check_mark: `userLink(user.id)`では指定行の`user.id`をセットして`userLink`関数が呼ばれます。
:white_check_mark: `userLink`関数はボタンをクリックしたときと同じように`userId`をセットしてURLをつくっています。

---

### :jack_o_lantern: 関数 :jack_o_lantern:

```
const userLink = (userId: string): void => {
  window.location.href = '/user/' + userId
}
```

:stuck_out_tongue: 正確にはアロー関数と言います。(`->`とか`=>`がアローぽいので)

`(userId: string)`の部分が引数のリストです。
`: void`の部分は返り値の型を定義します。
`{ }`の中が実行したい内容です。

:white_check_mark: `userId`が`"0001"`だとしたら、`/user/0001`へ遷移します。

---

:white_check_mark: もう一つ、カーソルが行の上にあるときによりわかりやすくするも追加しましょう。

```
<tr
  v-for="(user, index) in userList"
  :key="index"
  class="border-b bg-gray-100 hover:bg-orange-100 cursor-pointer"
  @click="userLink(user.id)"
>
```

```
hover:bg-orange-100 cursor-pointer
```
:white_check_mark: この2つを追加してみましょう。

---

ちょっとした改善で結構使い勝手が変わりますね:thumbsup:

いろいろ考えて、良いものを生み出していくのが楽しいのです:heart:

:white_check_mark: これで一覧は終わりです、次は詳細に進みましょう:sparkles:

---



---