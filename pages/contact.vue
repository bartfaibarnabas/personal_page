<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-icon>
        mdi-account-hard-hat-outline
      </v-icon>
      {{ title }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      title:'Under Construction',
    };
  },
  computed: {
    titleChars() {
      return this.title.split('');
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
