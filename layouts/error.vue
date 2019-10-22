<template lang="pug">
.container
  h1(v-if="error.statusCode === 404") Ohh No!!! {{ error.statusCode }}
  h1(v-else) Oops!! {{ error.statusCode || 500 }}
  p {{ error.message || `Error` }}
  nuxt-link(to="/" tag="button") Back To Home
</template>

<script>
export default {
  // you can set a custom layout for the error page
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  text-align: center;
  @include center-flex;
  flex-direction: column;
  button {
    margin: 10px 0 0 0;
    padding: 10px 20px;
    border: 1px solid $c-blue;
    border-radius: 10px;
    font-size: 15px;
    color: $c-blue;
    cursor: pointer;
  }
}
</style>
