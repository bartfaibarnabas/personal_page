<template>
  <v-row justify="center" align="center">
    <v-col v-for="(char, key) in titleChars" :key="key" class="page-title">
      <p class="shadow-helper left inactive">{{char}}</p>
      <p class="shadow-helper right inactive">{{char}}</p>
      <p :id="'title-char-'" class="title-char">{{char}}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title:'Hi, I am Barnabás, software engineer',
    };
  },
  computed: {
    titleChars() {
      return this.title.split('');
    },
    hasCharHoover() {
      return document.getElementById("title-char-");
      // Here needs a hoover-char component and that component should know the hoover is exist or not
    },
  },
}
</script>
<style lang="scss" scoped>
.page-title {
  display: flex;
  .title-char {
    font-size: 5vw;
    color: $primary-color;
    z-index: 1;
  }
  .shadow-helper {
    font-size: 5vw;
    position: absolute;
    z-index: 0;
    &.right {
      margin-left: -0.5vw;
      color:  #00ffe5;
      transition: all 700ms;
    }
    &.left {
      margin-left: 0.5vw;
      color:  #fb00ff;
      transition: all 700ms;
    }
    &.inactive {
      margin-left: 0px;
    }
  }
}

</style>
