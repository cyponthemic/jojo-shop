export default {
  state: () => ({
    complete: false,
  }),
  mutations: {
    complete(state) {
      state.complete = true
    },
  },
}
