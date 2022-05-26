<template>
<div>
    <client-only>
        <v-container v-for="(quiz, index) in quizData" :key="quiz.index">
            <v-card class="pa-4">
                <p v-html="quiz.question"></p>
                <v-radio-group
                v-model="answers[index]"
                >
                <v-radio
                    v-for="option in quiz.answers" :key="option.letter"
                    :class="(checked && option.isCorrect) ? 'correct' : ''"
                    :label="option.answer"
                    :value="option.letter"
                />
                </v-radio-group>
            </v-card>
        </v-container>
        <v-card class="float-button">
                <v-progress-circular
                v-if="checked"
                :rotate="360"
                :size="100"
                :width="15"
                :value="(correctAnswers / quizData.length)*100"
                color="teal"
                >
                {{correctAnswers}}/{{quizData.length}}
                </v-progress-circular>
            <v-btn  @click="check">
                <v-icon left>mdi-check-all</v-icon>
                {{checked ? 'uncheck' : 'check'}}
            </v-btn>
        </v-card>
    </client-only>
</div>
</template>

<script>
import business_law from '../assets/data/quiz_law.json';
import marketing from '../assets/data/quiz_marketing.json';
import behavior from '../assets/data/quiz_corp_beh.json';

export default {
  name: 'test',
  data() {
    return {
      answers:{},
      checked: false,
      correctAnswers: 0,
      quizData: [],
    };
  },
  created() {
    const marketingData = this.shuffle(marketing.map((element, index) => {
        return this.calcAnswer(element, index);
      }));
    const lawData = this.shuffle(business_law.map((element, index) => {
      return this.calcAnswer(element, index);
    }));
    const behaviorData = this.shuffle(behavior.map((element, index) => {
      return this.calcAnswer(element, index);
    }));
    this.quizData.push(...lawData);
    this.quizData.push(...behaviorData);
    this.quizData.push(...marketingData);
  },
  methods: {
      calcAnswer(element, index) {
        const answers = [];
        Object.keys(element).forEach((key) => {
          if (key.includes('answer')) {
            answers.push({
              answer: element[key],
              letter: key,
              isCorrect: element.correct === key,
            });
          }
        });
        return {
          question: element.question,
          answers: this.shuffle(answers),
          index,
          correct: element.correct,
        }
      },
      check() {
          this.correctAnswers = 0;
          this.quizData.forEach((element, index) => {
              if (this.answers[index] === element.correct) {
                  this.correctAnswers += 1;
              }
          });
          this.checked = !this.checked;
      },
      shuffle (array) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
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
.float-button {
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 4;
}
</style>
