<template>
<div>
  <div v-if="true">
    <v-tabs
        v-model="tab"
        center-active
        dark
      >
      <v-tab>Igék</v-tab>
      <v-tab>Főnevek</v-tab>
      <v-tab>Melléknevek</v-tab>
      <v-tab>Kötőszavak</v-tab>
      <v-tab>Elöljárók</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <studyCard :lightMode="lightMode" v-for="item in verbs" :key="item.hu" :item="item" :showAnswers="showAnswers" verb/>    
      </v-tab-item>
      <v-tab-item>
        <studyCard :lightMode="lightMode" v-for="item in nouns" :key="item.hu" :item="item" :showAnswers="showAnswers"/>       
      </v-tab-item>
      <v-tab-item>
        <studyCard :lightMode="lightMode" v-for="item in adjectives" :key="item.hu" :item="item" :showAnswers="showAnswers"/>       
      </v-tab-item>
      <v-tab-item>
        <studyCard :lightMode="lightMode" v-for="item in conjunctions" :key="item.hu" :item="item" :showAnswers="showAnswers"/>       
      </v-tab-item>
      <v-tab-item>
        <studyCard :lightMode="lightMode" v-for="item in foremens" :key="item.hu" :item="item" :showAnswers="showAnswers"/>       
      </v-tab-item>
    </v-tabs-items>
  </div>
        <v-card class="float-button" :light="lightMode">
            <v-btn @click="lightMode = !lightMode">
                <v-icon center>mdi-theme-light-dark</v-icon>
            </v-btn>
            <v-btn @click="showAnswers = !showAnswers">
                <v-icon center>{{showAnswers ? 'mdi-eye-off' : 'mdi-eye'}}</v-icon>
            </v-btn>
        </v-card>
</div>
</template>

<script>
import studyCard from '../components/studyCard.vue';
import words from '../assets/data/words.json';
import { mapMutations } from 'vuex';

export default {
  name: 'Cards',
  components: {
    studyCard,
  },
  data() {
    return {
      tab: 0,
      showAnswers: false,
      lightMode: false,
    };
  },
  created() {
    /*if (!this.user) {
      this.$router.push({
        path: '/home',
      })
    }*/
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    verbs() {
      return words.verbs.reverse();
    },
    nouns() {
      return words.nouns.reverse();
    },
    adjectives() {
      return words.adjectives.reverse();
    },
    conjunctions() {
      return words.conjunctions;
    },
    foremens() {
      return words.foremens;
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
.float-circular {
    position: fixed;
    right: 10px;
    top: 90px;
    z-index: 4;
    border-radius: 50%;
}
.text-answer {
  border: 4px solid #4f7f4f;
  border-radius: 5px;
  padding: 10px;
}
</style>
