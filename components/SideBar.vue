<template lang="pug">
.container
  #side-bar
    ul.career-list
      nuxt-link.title(tag="h2" to="/about") Career
      nuxt-link.work(
        tag="li"
        v-for="(work, index) in careerList"
        :key="index"
        :to="{ path: '/about/description', query: { work: index } }"
      )
        h4 {{ work.year }}
        h6 {{ work.film }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('about', ['careerList'])
  }
}
</script>

<style lang="scss" scoped>
.container {
  #side-bar {
    width: 180px;
    padding: 40px 0;
    background-color: $c-green;
    .career-list {
      @include center-flex(center, flex-end);
      flex-direction: column;
      .title {
        padding: 0 20px 0 0;
        color: lighten($c-yellow, 10);
        cursor: pointer;
      }
      .work {
        width: 100%;
        margin: 10px 20px 10px 10px;
        padding: 0 0 5px 0;
        border-bottom: 1.5px solid rgba(white, 0.3);
        cursor: pointer;
        &:hover {
          background-color: rgba(white, 0.3);
        }
        h4 {
          text-align: right;
          font-weight: bold;
          color: white;
        }
        h6 {
          text-align: right;
          color: rgba(white, 0.6);
        }
      }
    }
  }
}
</style>
