export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/accb3773cf.js' }
    ]
  },
  css: [
    '~/assets/styles/global.scss'
  ],
  loading: { color: '#fff' },
  plugins: [
  ],
  server: {
    port: 5000
  },
  vue: {
    config: {
      productionTip: false
    }
  },
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~/assets/styles/variables.scss'
    ]
  },
  build: {
    // 該擴展方法會被調用兩次，分別在服務端打包構建、與客戶端打包構建之時
    extend (config, { isClient }) {
      // 為客戶端打包進行擴展配置
      if (isClient) {
        config.devtool = 'eval-source-map'
      }
    }
  }
}
