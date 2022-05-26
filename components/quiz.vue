<template>
<div>
    <client-only>
        <v-container v-for="(quiz, index) in quizData" :key="quiz.index">
            <v-card :light="lightMode" class="pa-4" v-if="quiz.type === 'radio'">
                <p v-html="quiz.question"></p>
                <v-radio-group
                v-model="answers[index]"
                >
                <v-radio
                    v-for="option in quiz.answers" :key="option.letter"
                    class="radio"
                    :class="{ 
                      correct: (checked && option.isCorrect && answers[index]) || (showAnswers && option.isCorrect),
                      incorrect: (checked && !option.isCorrect && answers[index] === option.letter),
                    }"
                    :label="option.answer"
                    :value="option.letter"
                />
                </v-radio-group>
            </v-card>
            <v-card :light="lightMode" class="pa-4" v-if="quiz.type === 'text'">
              <v-row>
                <v-col cols="8" sm="10" lg="11">
                  <p  v-html="quiz.question"></p>
                </v-col >
                <v-col cols="4" sm="2" lg="1" align="right">
                  <v-btn xs1 text @click="quiz.show = !quiz.show">
                    <v-icon center>{{quiz.show ? 'mdi-eye-off' : 'mdi-eye'}}</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
                <p class="text-answer" v-if="quiz.show" v-html="quiz.answer"></p>
                <v-text-field outlined></v-text-field>
            </v-card>
        </v-container>
        <v-card
        :light="lightMode"
        class="float-circular"
        v-if="checked"
        >
          <v-progress-circular
            :rotate="360"
            :size="130"
            :width="20"
            :value="(correctAnswers / quizData.length)*100"
            color="teal"
            >
            {{correctAnswers}}/{{filledAnswersCount}} of {{quizData.length}}
          </v-progress-circular>
        </v-card>
        <v-card class="float-button" :light="lightMode">
            <v-btn @click="lightMode = !lightMode">
                <v-icon center>mdi-theme-light-dark</v-icon>
            </v-btn>
            <v-btn @click="showAnswers = !showAnswers">
                <v-icon center>{{showAnswers ? 'mdi-eye-off' : 'mdi-eye'}}</v-icon>
            </v-btn>
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
import text_law from '../assets/data/text_law.json';
import text_org from '../assets/data/text_org_beh.json';

export default {
  name: 'test',
  data() {
    return {
      answers: {},
      checked: false,
      correctAnswers: 0,
      quizData: [],
      showAnswers: false,
      lightMode: false,
    };
  },
  created() {
    const lawData = this.shuffle(business_law.map((element, index) => {
      return this.calcRadioAnswer(element, index);
    }));
    this.quizData.push(...lawData);

    const lawText = this.shuffle(text_law.map((element, index) => {
      return this.calcTextAnswer(element, index);
    }));
    this.quizData.push(...lawText);

    const behaviorData = this.shuffle(behavior.map((element, index) => {
      return this.calcRadioAnswer(element, index);
    }));
    this.quizData.push(...behaviorData);
    
    const behaviorText = this.shuffle(text_org.map((element, index) => {
      return this.calcTextAnswer(element, index);
    }));
    this.quizData.push(...behaviorText);

    const marketingData = this.shuffle(marketing.map((element, index) => {
        return this.calcRadioAnswer(element, index);
    }));
    this.quizData.push(...marketingData);
    
  },
  computed: {
    filledAnswersCount () {
      return Object.keys(this.answers).length;
    }
  },
  methods: {
      calcRadioAnswer(element, index) {
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
          type: 'radio',
          question: element.question,
          answers: this.shuffle(answers),
          index: index + this.quizData.length,
          correct: element.correct,
        }
      },
      calcTextAnswer(element, index) {
        return {
          type: 'text',
          question: element.question,
          answer: element.answer,
          index: index + this.quizData.length,
          show: false,
        }
      },
      check() {
          this.correctAnswers = 0;
          this.quizData.forEach((element, index) => {
              if (element.type === 'radio' && this.answers[index] === element.correct) {
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
  watch: {
    answers() {
        this.correctAnswers = 0;
        this.quizData.forEach((element, index) => {
          if (element.type === 'radio' && this.answers[index] === element.correct) {
              this.correctAnswers += 1;
          }
      });
    },
    showAnswers() {
      this.quizData.map(quiz => {
        if(quiz.type === "text") {
          quiz.show = this.showAnswers;
        }
      })
    }
  }
}
</script>
<style scoped>
.text-show-button {
  position: absolute;
  margin-right: 15px;
  right: 0px;
}
.correct>>>.theme--light {
  color:aliceblue;
}
.incorrect>>>.theme--light {
  color:aliceblue;
}
.correct {
    background: rgb(79, 127, 79);
    font-weight: 500;
    border-radius: 5px;
}
.incorrect {
    background:red;
    font-weight: 500;
    border-radius: 5px;
}
.float-button {
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 4;
}
.float-circular {
    position: fixed;
    right: 10px;
    top: 70px;
    z-index: 4;
    border-radius: 50%;
}
.text-answer {
  border: 4px solid #4f7f4f;
  border-radius: 5px;
  padding: 10px;
}
</style>
