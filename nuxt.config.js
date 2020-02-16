const config = require('./contentful.json')

module.exports = {
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID,
    CTF_ABOUT_TYPE_ID: config.CTF_ABOUT_TYPE_ID
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'writings',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Collection of thoughts on the web' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  generate: {
    routes: [
      '/git-commands-etc',
      '/how-to-learn-from-tutorial-videos'
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    '~/plugins/contentful',
    '~plugins/filters.js'
  ],
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      '~/assets/style/vars.scss',
    ]
  },
  css: [
    '~/assets/style/global.scss',
    '~/assets/style/grid.scss',
    '~/assets/style/panel.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

