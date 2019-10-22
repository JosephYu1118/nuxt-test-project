<template lang="pug">
.container
  the-logo
  navigation-bar
  nuxt
</template>

<script>
import TheLogo from '~/components/TheLogo'
import NavigationBar from '~/components/NavigationBar'

export default {
  components: {
    'the-logo': TheLogo,
    'navigation-bar': NavigationBar
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
