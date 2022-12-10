<template>
<div>
        <v-card :light="lightMode" class="pa-4 word-card">
              <v-row>
                <v-col cols="6" sm="7" lg="7">
                  <p  v-html="item.hu"></p>
                </v-col>
                <v-col cols="3" sm="4" lg="4">
                  <p v-if="item.note" class="right">{{item.note}}</p>
                </v-col>
                <v-col cols="4" sm="1" lg="1" align="right">
                  <v-btn xs1 text @click="check()">
                    <v-icon center>{{(checked || showAnswers) ? 'mdi-eye-off' : 'mdi-eye'}}</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="answerField">
                    <v-text-field label="de" outlined v-model="deAnswer"></v-text-field>
                    <p class="text-answer" :class="{ 'correct': isDeCorrect }" v-if="checked || showAnswers" v-html="item.de"></p>
                </v-col>
                <v-col class="answerField">
                    <v-text-field :label="verb ? 'en (to ...)' : 'eng'" outlined v-model="enAnswer"></v-text-field>
                    <p class="text-answer" :class="{ 'correct': isEnCorrect }" v-if="checked || showAnswers" v-html="item.en"></p>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            deAnswer: '',
            enAnswer: '',
            isDeCorrect: false,
            isEnCorrect: false,
            checked: false,
        };
    },
    props: {
        lightMode: Boolean,
        item: Object,
        verb: Boolean,
        showAnswers: Boolean,
    },
    methods: {
        check() {
            this.checked = !this.checked
        }
    },
    watch: {
        deAnswer() {
            if (this.deAnswer === this.item.de) {
                this.isDeCorrect = true;
            } else {
                this.isDeCorrect = false;
            }
        },
        enAnswer() {
            if (this.enAnswer === this.item.en) {
                this.isEnCorrect = true;
            } else {
                this.isEnCorrect = false;
            }
        },
    },
}
</script>

<style scoped lang="scss">
    .word-card {
        border: 2px solid grey;
        border-radius: 5px;
        margin: 5px;
    }
    .correct {
        color: green !important;
    }
    .text-answer {
        color:red;
        padding-left: 10px;
        margin-bottom: 0px;
        position: absolute;
        bottom: 20px;
    }
    .answerField {
        margin-bottom: 15px;
    }

    .right {
        float: right;
    }


</style>