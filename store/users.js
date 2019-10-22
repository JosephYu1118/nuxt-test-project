export default {
  state: () => ({
    usersInfo: [
      {
        id: 27,
        name: 'Joseph',
        fruit: 'avocado',
        isAuthenticated: false
      }, {
        id: 18,
        name: 'Windy',
        fruit: 'grapefruit',
        isAuthenticated: false
      }, {
        id: 23,
        name: 'Darren',
        fruit: 'persimmon',
        isAuthenticated: false
      }, {
        id: 24,
        name: 'Jessica',
        fruit: 'pomelo',
        isAuthenticated: false
      }
    ]
  }),
  getters: {
  },
  mutations: {
    UPDATE_AUTHENTICATION (state, payload) {
      state.usersInfo.find(info => info.id === payload.id).isAuthenticated = payload.value
    }
  },
  actions: {
  }
}
