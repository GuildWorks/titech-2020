import firebase from '@/plugins/firebase.ts'
export const skipAuthPaths = ['/signin', '/signup']

export default function ({ redirect, route }) {
  firebase.auth().onAuthStateChanged(function (user1) {
    // eslint-disable-next-line no-console
    if (user1) {
      // User is signed in.
    } else if (!skipAuthPaths.includes(route.path)) {
      // No user is signed in.
      redirect('/signin')
    }
  })
}
