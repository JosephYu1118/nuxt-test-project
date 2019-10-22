<template lang="pug">
.container
  side-bar
  transition(name="page" mode="out-in")
    nuxt-child
</template>

<script>
import SideBar from '~/components/SideBar'

export default {
  layout: 'custom',
  components: {
    'side-bar': SideBar
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
</style>
