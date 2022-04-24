<template>
    <v-layout>
        <v-flex>
            <v-btn class="signIn mb-2" primary @click.native="facebookLogin">Facebook</v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data () {
        return {
            formEmail: '',
            formPassword: '',
        };
    },
    methods: {
        facebookLogin() {
            this.$store.dispatch('signInWithFacebook').then(() => {
                location.reload();
            }).catch((err) => {
                console.log(err.message);
            });
        },
    },
}
</script>