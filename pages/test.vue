<template>
<div>
<h1 class="u-c-title">Under construction</h1>

  <v-container v-for="(quiz, index) in quizComp" :key="quiz.question">
    <p>{{quiz.question}}</p>
    <v-radio-group
      v-model="answers[index]"
    >
      <v-radio
        :class="(checked && quiz.correct === 'a') ? 'correct' : ''"
        :label="quiz.a"
        value="a"
      ></v-radio>
        <v-radio
        :class="(checked && quiz.correct === 'b') ? 'correct' : ''"
        :label="quiz.b"
        value="b"
      ></v-radio>
        <v-radio
        :class="(checked && quiz.correct === 'c') ? 'correct' : ''"
        :label="quiz.c"
        value="c"
      ></v-radio>
        <v-radio
        :class="(checked && quiz.correct === 'd') ? 'correct' : ''"
        :label="quiz.d"
        value="d"
      ></v-radio>
    </v-radio-group>
  </v-container>
  <v-btn @click="check">
      check
  </v-btn>
</div>
</template>

<script>
import quiz from '../assets/data/quiz.json';

export default {
  name: 'test',
  data() {
    return {
      answers:{},
      checked: false,
    };
  },
  computed: {
    quizComp() {
      return quiz;
    },
  },
  methods: {
      check() {
          this.checked = !this.checked;
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
