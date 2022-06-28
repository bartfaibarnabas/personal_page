<template>
<div>
  <div v-if="user">
    <v-tabs
        v-model="tab"
        center-active
        dark
      >
      <v-tab>Meggyőzéstechnika</v-tab>
      <v-tab>Menedzsment</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <mt-quiz/>       
      </v-tab-item>
      <v-tab-item>
        <quiz/>      
      </v-tab-item>
    </v-tabs-items>
  </div>
  <v-alert v-else type="info">
    Login for test
  </v-alert>
</div>
</template>

<script>
import quiz from '../components/quiz.vue';
import mtQuiz from '../components/quiz_mt.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'test',
  components: {
    quiz,
    mtQuiz,
  },
  data() {
    return {
      tab: 0,
    };
  },
  created() {
    if (!this.user) {
      this.$router.push({
        path: '/home',
      })
    }
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
