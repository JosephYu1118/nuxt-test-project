<template lang="pug">
.container
  h1.title nuxt-test
  h2.subtitle My spectacular Nuxt.js project
  .links-box
    a(href="https://nuxtjs.org/" target="_blank") Documentation
    a(href="https://github.com/nuxt/nuxt.js" target="_blank") GitHub
    nuxt-link(to="/about") Enter
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  text-align: center;
  @include center-flex;
  flex-direction: column;
  .title {
    font-size: 100px;
    font-weight: 300;
    color: lighten($c-blue, 10);
    span {
      margin: 0 40px;
      font-size: 70px;
    }
  }
  .subtitle {
    font-size: 42px;
    font-weight: 300;
  }
  .links-box {
    margin: 20px 0 0 0;
    a {
      margin: 0 10px;
      padding: 10px 20px;
      border: 1px solid $c-blue;
      border-radius: 10px;
      color: $c-blue;
    }
  }
}
</style>
