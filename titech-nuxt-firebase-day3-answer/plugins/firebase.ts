import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAZk4BIcu84kIK72SEkHSnafuZTP-7TCS8",
    authDomain: "titech-2020-imahashi.firebaseapp.com",
    databaseURL: "https://titech-2020-imahashi.firebaseio.com",
    projectId: "titech-2020-imahashi",
    storageBucket: "titech-2020-imahashi.appspot.com",
    messagingSenderId: "454271650",
    appId: "1:454271650:web:2252a5355e5f24d6052dfb"
  })
}

export default firebase
