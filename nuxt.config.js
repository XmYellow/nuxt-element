module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-element',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    vendor: ['element-ui'],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        //config.module.rules.push({
        //  enforce: 'pre',
        //  test: /\.(js|vue)$/,
        //  loader: 'eslint-loader',
        //  exclude: /(node_modules)/
        //})
      }
    }
  },
  babel:{
    "plugins": [["component", [
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-default"
      },
      'transform-async-to-generator',
      'transform-runtime'
    ]]],
    comments: true
  },
  plugins: [
    { src: '~plugins/element-ui', ssr: true }
  ],
  css: [
    'element-ui/lib/theme-default/index.css'
  ]
}
