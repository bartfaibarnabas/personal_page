import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - BB',
    title: 'BB',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.ico' }
    ]
  },
  mode: 'spa',

  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      './assets/styles/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/firebase',
  ],
  firebase: {
    config: {
      apiKey: 'AIzaSyAGNS04UtFZRXl0R_MauPV5USKLxEBbYmk',
      authDomain: 'bbperssite.firebaseapp.com',
      projectId: 'bbperssite',
      storageBucket: 'bbperssite.appspot.com',
      messagingSenderId: '584787693700',
      appId: '1:584787693700:web:23a483f177470c198b32d1',
      measurementId: 'G-C7EX49PQJC'
    },
    services: {
      auth: true // Just as example. Can be any other service.
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  auth: {
    strategies: {
      google: {
        clientId: '584787693700-fce79bu23lb56fpnsgr8qe9d0iuknem3.apps.googleusercontent.com',
        scope: ['profile', 'email'],
        responseType: 'token id_token',
        code_challenge_method: '',
      },
      facebook: {
        endpoints: {
          userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}'
        },
        clientId: 'bartfaibarnabas',
        scope: ['public_profile', 'email']
      },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  database: {
    emulatorPort: 9000,
    emulatorHost: 'localhost',
  },

  router: {
    middleware: 'router-auth',
  }
}
