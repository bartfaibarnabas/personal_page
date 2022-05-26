<template>
<v-dialog v-model="value" width="400">
     <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Opening from the bottom</v-toolbar>
            <v-card-text>
                <v-form v-model="valid">
                    <v-text-field label="Name" v-model="name"/>
                    <v-text-field label="Password" type="password" v-model="password"/>
                </v-form>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            <v-btn
                text
                @click="login"
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
    },
    data() {
        return {
            name: '',
            password: '',
            valid: false,
        };
    },
    methods: {
        login () {
            this.$auth.loginWith('google')
        },
    },
    watch:{
        value() {
            //this.$auth.loginWith('auth0')
        }
    },
})
</script>
