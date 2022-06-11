<template>
<v-dialog v-model="value" width="400" @click:outside="close" color="red">
  <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
          color="primary"
          dark
        >Login</v-toolbar>
        <v-card-text>
            <v-form v-model="valid">
                <v-text-field requried label="Name" v-model="name"/>
                <v-text-field required label="Password" type="password" v-model="password"/>
            </v-form>
        </v-card-text>
        <v-alert v-if="showLoginWarning" type="error" class="ma-2">Login failed</v-alert>
        <v-card-actions class="justify-end">
          <v-btn
            text
            @click="close"
          >Close</v-btn>
        <v-btn
            text
            @click="login"
            :disabled="!name || !password"
          >Login</v-btn>
        </v-card-actions>
      </v-card>
    </template>
</v-dialog>
</template>
<script>

export default ({
    props: {
        value: Boolean,
        close: Function,
    },
    data() {
        return {
            name: '',
            password: '',
            valid: false,
            showLoginWarning: false,
        };
    },
    methods: {
        login () {
            //this.$auth.loginWith('google')
          this.showLoginWarning = false;
          if (this.name === 'teszt' && this.password === '123') {
            this.$store.commit('setUser', this.name);
            this.name = '';
            this.password = '';
            this.close();
          }
          else {
            this.name = '';
            this.password = '';
            this.showLoginWarning = true;
          }
        },
    },
    watch:{
        value() {
            //this.$auth.loginWith('auth0')
        }
    },
})
</script>
