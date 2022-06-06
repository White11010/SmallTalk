export const userStore = {
  namespaced: true,
  state: () => ({
    login: ""
  }),
  mutations: {
    setLogin(state, data) {
      state.login = data;
    }
  },
  getters: {
    getLogin(state) {
      return state.login;
    }
  }
}