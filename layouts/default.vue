<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
    <v-spacer></v-spacer>
      <v-btn depressed @click="openLoginDialog">
        <v-icon>mdi-account</v-icon>
        <span>Login</span>
      </v-btn>
      </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <login v-model="loginDailog"/>
    </v-footer>
  </v-app>
</template>

<script>
import login from '../components/login.vue'
export default {
  name: 'DefaultLayout',
  components: {
    login,
  },
  data () {
    return {
      loginDailog: false,

      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-user',
          title: 'Login',
          to: '/'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    openLoginDialog() {
      console.log('login');
      this.loginDailog = true;
    },
  },
}
</script>
