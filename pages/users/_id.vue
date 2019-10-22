<template lang="pug">
.container
  h1 I am {{ user.name }}
  p I love {{ user.fruit }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'custom',
  meta: {
    requiresAuth: true
  },
  validate ({ params, store }) {
    return store.state.users.usersInfo.some(user => user.id === Number(params.id))
  },
  computed: {
    ...mapState('users', ['usersInfo']),
    user () {
      return this.usersInfo.find(user => user.id === Number(this.$route.params.id))
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.finish()
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  text-align: center;
  @include center-flex;
  flex-direction: column;
}
</style>
