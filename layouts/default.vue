<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
    <v-spacer></v-spacer>
      <v-btn v-if="!user" depressed @click="openLoginDialog">
        <v-icon>mdi-account</v-icon>
        <span>Login</span>
      </v-btn>
      <v-btn v-else depressed @click="logout">
        <v-icon>mdi-account</v-icon>
        <span>Logout</span>
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
      <login v-model="loginDailog" :close="closeDialog"/>
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
    closeDialog() {
      this.loginDailog = false;
    },
    logout() {
       this.$store.commit('setUser', null);
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
}
</script>
