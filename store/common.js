export default {
  state: () => ({
    linksList: [
      {
        name: '關於',
        to: '/about'
      }, {
        name: '產品',
        to: '/products'
      }, {
        name: '會員 A',
        to: '/users/24'
      }, {
        name: '會員 B',
        to: '/users/18'
      }, {
        name: '錯誤',
        to: '/users/30'
      }
    ],
    isLoading: false
  }),
  getters: {
  },
  mutations: {
    UPDATE_LOADING_STATE (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
  }
}
