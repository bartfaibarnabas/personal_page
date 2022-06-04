<template>
<div>
  <quiz v-if="user"/>
  <v-alert v-else type="info">
    Login for test
  </v-alert>
</div>
</template>

<script>
import quiz from '../components/quiz.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'test',
  components: {
    quiz,
  },
  data() {
    return {
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
}
</script>
<style scoped>
.correct {
    background: rgb(79, 127, 79);
    font-weight: 500;
}
.incorrect {
    background:red;
    font-weight: 500;
}
</style>
