<template lang="pug">
nuxt-link.link-home(tag="img" :src="require('~/assets/images/obake.png')" to="/")
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.link-home {
  @include size(50px);
  position: absolute;
  top: 10px;
  left: 20px;
  z-index: 100;
  cursor: pointer;
}
</style>
