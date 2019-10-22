<template lang="pug">
.container(v-if="isLoading")
  svg(viewBox="-10 -10 220 220")
    circle.base(cx="100" cy="100" r="100")
    circle.progress(cx="100" cy="100" r="100")
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('common', {
      loadingState: 'isLoading'
    }),
    isLoading: {
      get () {
        return this.loadingState
      },
      set (value) {
        this.updateLoadingState(value)
      }
    }
  },
  methods: {
    ...mapMutations('common', {
      updateLoadingState: 'UPDATE_LOADING_STATE'
    }),
    start () {
      if (this.isLoading) return
      this.isLoading = true
    },
    finish () {
      if (!this.isLoading) return
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  @include size(100%);
  background-color: rgba($c-white, 0.9);
  position: fixed;
  z-index: 1000;
  @include center-flex;
  svg {
    @include size(50px);
    transform: rotate(-90deg);
    circle {
      stroke-width: 20;
      fill: transparent;
      stroke: $c-red;
      &.base {
        stroke-dasharray: 314 * 2;
        opacity: 0.2;
      }
      &.progress {
        stroke-dashoffset: 0;
        stroke-dasharray: 314;
        animation: progressing 1.5s linear infinite;
      }
    }
  }
}
</style>
