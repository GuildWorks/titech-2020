interface State {
  signedIn: boolean
}

export const state = () => ({
    signedIn: false
})

export const mutations = {
  signedIn(state: State, signedIn: boolean) {
    state.signedIn = signedIn
  }
}
