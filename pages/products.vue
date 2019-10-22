<template lang="pug">
.container
  .info-box
    h3 {{ message }}
    h3 {{ nytimesArchives.headline.main }}
  #products-list
    .product(v-for="(product, index) in productsList" :key="index")
      h3.title 商品: {{ product.title }}
      p.price NT$ {{ product.price }}
      .buttons-box
        button
          i.fas.fa-cart-plus
          | 加入購物車
        button
          i.fas.fa-money-bill-wave
          | 立即購買
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'custom',
  loading: false,
  data: () => ({
    message: 'This is asyncData message'
  }),
  computed: {
    ...mapState('products', ['productsList', 'nytimesArchives'])
  },
  asyncData () {
    // 回傳值將會覆蓋掉 data
    return { message: 'New York Times Archives' }
  },
  async fetch (context) {
    try {
      await context.store.dispatch('products/getNytimesArchives')
    } catch (error) {
      context.app.$errorHandler(error)
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
  @include center-flex(flex-start);
  flex-direction: column;
  .info-box {
    margin: 100px 0;
    padding: 0 50px;
    h3 {
      font-size: 30px;
    }
  }
  #products-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .product {
      margin: 0 10px;
      padding: 30px 20px 20px 20px;
      background-color: lighten($c-green, 35);
      .price {
        margin: 10px 0;
        font-weight: bold;
        color: $c-red;
      }
      .buttons-box {
        button {
          margin: 5px;
          padding: 5px 10px;
          border-radius: 10px;
          background-color: white;
          color: $c-blue;
          cursor: pointer;
          i {
            margin: 0 5px 0 0;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
