---
marp: true
theme: gaia
size: 16:9
header: '　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Copyright Ryo Imahashi'

page_number: true
paginate: true
---

**Programming Boot Camp #3**

# 第3回： ユーザー登録、ユーザー認証、データベース連携(Firebase編)

**東京工業大学 2020/11/14**
　
　
　
　
　
　　　　　　　　　　　　　　　　　　　　　　　　**Ryo Imahashi**

---
<!-- TODO: Delete -->
# 骨子
- これまでやったことの確認
  - 第1回： HTML、CSS、Javascript
  - 第2回： Vue(Nuxt)
  - 作ったもののデモ
    - 「表示しているデータは実際に登録したものではなくダミーデータで、更新ができなかったよね」というところの認識合わせをする
      - titech-nuxt-day2-anser配下でnpm install, npm run dev 
- 今回やることの確認
  - アプリケーションのバックエンド処理を使えるようにして、ユーザー登録、ユーザー認証、データベース連携(、ファイルアップロード)といった機能を開発する
    - 第1回、第2回で作ったのはフロントエンド(アプリケーション)。ブラウザ側で動くもの。
    - バックエンド(アプリケーション)は、インターネットの先で動いて、必要なデータを返してくれるもの。サーバーサイド(アプリケーション)ともいう。
    - フロントエンド-バックエンドという対比や、クライアントサイド、サーバーサイドという対比で語られる。
      https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89
  - このブートキャンプでは、バックエンドは開発せず、代わりにFirebaseというサービスを利用する
- ゴールの確認(デモ)
  - 開発したアプリの動作を見てもらう
    - ユーザー登録
    - プロフィール編集
    - あなたのプロフィール
    - メンバーリスト(実際に登録したデータ)
    - メンバープロフィール(実際に登録したデータ)
    - ログアウト
    - ログイン
- 追加した画面の確認
  - git pull
  - cd 

- Firebaseってなに？
  - Firebase は Google が提供しているモバイルおよび Web アプリケーションのバックエンドサービスです。クラウドサービスの形態では BaaS(Backend as a service) に位置付けされます。 Firebase を使うことで、開発者はアプリケーションの開発に専念でき、バックエンドで動くサービスを作成する必要も管理する必要もありません。
    - 参考: 「◯aaS」11種まとめ
    https://career.levtech.jp/guide/knowhow/article/389/
  - サーバーやデプロイが不要で簡単にバックエンド処理を利用できるようになる
  - 無料枠がある
  - デモ: https://console.firebase.google.com/project/fir-demo-project/overview?hl=ja
- Firebaseを使う準備をしよう
  - Googleアカウントを用意しよう
    - https://console.firebase.google.com/?hl=ja&pli=1
    - 持っている人はそれを使っても良いよ
  - Firebaseプロジェクトを作ろう
- ユーザー登録をしよう
  - そもそも認証ってなんのために必要？
    - ユーザーごとのコンテンツを他の人が勝手に変えられないように、本人であることを確かめるため(去年の沼田さんの資料を参考に解説)
  - Firebase Authenticationを使う
    - 認証機能を提供してくれる。自分たちで作ると大変なので、とてもありがたい。
      - Firebase Authenticationは、クライアント側のコードのみでユーザーを認証できるサービスである。ソーシャルログインプロバイダであるFacebook、GitHub、Twitter、Googleをはじめ、Google Play Games、Apple、Yahoo、Microsoftなどのサービスプロバイダをサポートしている。また、ユーザー管理システムを搭載しており、開発者はFirebaseに保存されている電子メールとパスワードによるユーザー認証を有効にすることができる
    - Eメール認証、Googleアカウント認証以外にも Facebook 、 GitHub 、 Twitter などのサードパーティの認証情報を使用して認証を行うことができる。
  - 今回は、Eメール認証を使う
  - コードを説明して実装してもらう
- ユーザー認証(ログイン)をしよう
  - これも、Firebase Authenticationを使う
  - コードを説明して実装してもらう
- データベース連携をしよう
  - Cloud Firestoreを使う
    - データベースとそこへのアクセスを提供してくれる
    - データベースとは
      - TODO:データベースの説明
    - そこへのアクセスとは
      - TODO:CRUDの説明
  - コードを説明して実装してもらう
- おまけ：写真をアップロードしよう
  - Cloud Storage for Firebaseを使う
    - 写真や動画などバイナリーデータを保存してくれるサービス。
  - コードを説明して実装してもらう
- もっと勉強したい人は、アプリを自由にカスタマイズしてみよう
  - どんな機能があったら良さそう？
    - プロフィール項目にプラグラミング経験を追加するとか
    - 他の人のプロフィール欄にコメントをつけられるようにするとか
    - チャット機能をつけるとか
- 細かく説明しきれないところをざっくり
  - ログイン前後のメニュー項目の変化
    - middlewareで制御している
- その他、紹介したいこと
  - Gmailのエイリアス機能(+でアドレスを増やせるやつ)
  - 作ったアプリをインターネット上に公開したい時の参考記事
---
<!-- TODO: Delete -->
# 参考にしたものをまとめておく
https://www.topgate.co.jp/firebase01-what-is-firebase

https://www.slideshare.net/KenjiroKubota/firebase-129555773

https://ja.wikipedia.org/wiki/Firebase
Firebase Authenticationは、クライアント側のコードのみでユーザーを認証できるサービスである。ソーシャルログインプロバイダであるFacebook、GitHub、Twitter、Googleをはじめ、Google Play Games、Apple、Yahoo、Microsoftなどのサービスプロバイダをサポートしている。また、ユーザー管理システムを搭載しており、開発者はFirebaseに保存されている電子メールとパスワードによるユーザー認証を有効にすることができる

--- 
# 目次
- これまでやったことの確認
- 今回やることの確認
- Firebaseってなに？
- Firebaseを使う準備をしよう
- ユーザー登録をしよう
- ユーザー認証をしよう
- データベース連携をしよう
- 参考


--- 
13行までなら収まるらしい
2
3
4
5
6
7
8
9
10
11
12
13

--- 
- リストだと11行までらしい
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 