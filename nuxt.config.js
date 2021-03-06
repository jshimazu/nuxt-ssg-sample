import axios from 'axios'

export default {
  ssr: true,
  target: 'static',
  // Target: https://go.nuxtjs.dev/config-target

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-ssg-sample',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    crawler: false,
    fallback: true,
    async routes() {
      const routes = []
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      for (const todo of res.data) {
        routes.push({
          route: `/todos/${todo.id}`,
          payload: todo,
        })
      }
      return routes
    },
  },
}
