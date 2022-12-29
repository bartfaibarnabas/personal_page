<template>
  <v-container>
    <v-row justify="center" class="page-title-container">
      <special-text text="Experience" />
    </v-row>
    <v-row justify="center">
        <v-timeline :dense="$vuetify.breakpoint.smAndDown" align-top>
          <timeline-item icon="mdi-file-code-outline" color="cyberyellow" title="Software Developer" date="04.2019 - 08.2022">
            <v-col
              cols="12"
            >
              As a JavaScript developer in Telcotrend Consulting I worked for the greatest Hungarian telecommunication service provider. I developed frontend and backend systems and mainly I used JavaScript, Vue.js, Node.js, MySQL and Docker. For some other project needed a different stack thus I have experience with Java and Spring-Boot.
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
            </v-col>            
          </timeline-item>
          <timeline-item icon="mdi-server-network" color="cyberblue" title="Devops Engineer" left date="08.2017 - 08.2018">
            <v-col
              cols="12"
            >
              As a Junior devops engineer in UnifyLab my tasks were to handle issues in builds to improve the building process and to create new build flows. 
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
            </v-col>            
          </timeline-item>
          <timeline-item icon="mdi-account-school-outline" color="cyberyellow" title="Software engineer degree" right date="09.2015 - 01.2022">
            <v-col
              cols="12"
            >
              During my studies I had to learn a plenty of interesting things about software engineering and development. As my thesis I designed, developed and documented a Price and Product comparison service.
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
            </v-col>            
          </timeline-item>
        </v-timeline>
    </v-row>
  </v-container>
</template>

<script>
import timelineItem from '../components/timelineItem.vue';
import specialText from '../components/specialText/specialText.vue';

export default {
  name: 'index',
  components: { timelineItem, specialText },
  data() {
    return {
      title:'Experience',
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
.page-title-container {
  max-width:650px;
  margin:auto;
}
.page-title {
  .title-char {
    font-size:5vw;
    color: $primary-color;
    &.rotate {
      transform: rotateY(360deg);
      float:left;
      &:hover {
        animation: turn 1.0s ease-in ;
      }
    }
  }
}
@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
