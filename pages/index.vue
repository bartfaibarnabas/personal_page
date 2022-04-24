<template>
  <v-row justify="center" align="center">
    <v-col v-for="(char, key) in titleChars" :key="key" class="page-title">
      <p class="title-char">{{char}}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      title:'WELCOME',
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
.page-title{
  .title-char{
    font-size:10vw;
    color:lightgrey;
    transform: rotateY(360deg);
    float:left;
    &:hover {
      animation: turn 1.5s ease-in ;
    }
  }
}
@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
