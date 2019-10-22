export default {
  state: () => ({
    productsList: [
      {
        title: '柿子',
        price: 50
      }, {
        title: '葡萄柚',
        price: 150
      }, {
        title: '柚子',
        price: 250
      }
    ],
    nytimesArchives: {}
  }),
  getters: {
  },
  mutations: {
    UPDATE_NYTIMES_ARCHIVES (state, payload) {
      state.nytimesArchives = payload
    }
  },
  actions: {
    async getNytimesArchives ({ commit }) {
      // 也可以寫成 `${this.app.context.env.NY_TIMES_API}?api-key=${this.app.context.env.NY_TIMES_KEY}`
      const apiUrl = `${process.env.NY_TIMES_API}?api-key=${process.env.NY_TIMES_KEY}`
      const { data } = await this.$axios.get(apiUrl)
      commit('UPDATE_NYTIMES_ARCHIVES', data.response.docs[0])
    }
  }
}
