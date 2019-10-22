<template lang="pug">
.container
  p {{ careerList[$route.query.work].description }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'custom',
  computed: {
    ...mapState('about', ['careerList'])
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 50px;
}
</style>
