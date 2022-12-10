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
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import jwt from 'jsonwebtoken';
import headerMenu from '../components/header'

  const verifyPromise = (authClaim, secret) => new Promise((resolve, reject) => {
    jwt.verify(authClaim, secret, async (_err, payload) => {
      if (_err) {
        reject(_err);
      } else {
        resolve(payload);
      }
    });
  });

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
      title: 'Vuetify.js',
      secret: 'cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ',
    }
  },
  created() {
    /*this.setAuthCookie();
    this.verifyCookie();*/

  },
  methods: {
    setAuthCookie() {
      const token = jwt.sign({ status: 'loggedIn', userName: 'name' }, this.secret, { expiresIn: '6h' });
      this.$auth.$storage.setCookie('authClaim', token);
    },
    verifyCookie() {
      console.log('verify');
      const jwtAuthToken = this.$auth.$storage.getCookies()['auth.authClaim'];
      console.log(jwtAuthToken);
      /*verifyPromise(jwtAuthToken, this.secret).then((result) => {
        console.log(
          'VERIF'
        )
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });*/
     const authClaim = jwt.decode(jwtAuthToken);
      console.log(authClaim);
      if (authClaim) {
        this.$store.commit('setUser', authClaim.userName);
      }
    },
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
.app-bar {
  margin-bottom: 20px;
}
.app-bar ::v-deep .v-toolbar__content {
  box-shadow: 0px 12px 3px #121212;
}
</style>
