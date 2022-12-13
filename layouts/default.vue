<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      height="70"
      class="app-bar"
    >
      <v-spacer></v-spacer>
      <headerMenu/>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import headerMenu from '../components/header'

export default {
  name: 'default',
  components: {
    headerMenu,
  },
  data () {
    return {
      loginDailog: false,
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
  created() {
    /*this.setAuthCookie();
    this.verifyCookie();*/

  },
  methods: {
  },
  computed: {
    isLoggedIn() {

    }
  },
  watch: {
  }
}
</script>
<style scoped>
.v-main {
  padding-top: 200px !important;
}
.app-bar ::v-deep .v-toolbar__content {
  box-shadow: 0px 12px 3px $background-page;
}
</style>
