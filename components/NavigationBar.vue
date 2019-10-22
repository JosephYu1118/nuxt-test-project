<template lang="pug">
.container
  ul#navigation-bar
    nuxt-link.navigation-item(
      tag="li"
      v-for="(link, index) in linksList"
      :key="index"
      :to="link.to"
    )
      | {{ link.name }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('common', ['linksList'])
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 70px;
  background-color: $c-blue;
  #navigation-bar {
    @include size(100%);
    @include center-flex;
    .navigation-item {
      margin: 0 10px;
      padding: 5px 20px;
      border-radius: 5px;
      background-color: white;
      cursor: pointer;
    }
  }
}
</style>
