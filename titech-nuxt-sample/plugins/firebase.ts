import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDlF-c50-102qK61aZjvSqeLBzJ2DVvW58",
    authDomain: "titech-nuxt-sample.firebaseapp.com",
    databaseURL: "https://titech-nuxt-sample.firebaseio.com",
    projectId: 'titech-nuxt-sample',
    storageBucket: "titech-nuxt-sample.appspot.com",
    messagingSenderId: "758369035584",
    appId: "1:758369035584:web:64e4433fe0cc5ebc7f06a5",
    measurementId: "G-JJGKL8J2TY"
  })
}

export default firebase
