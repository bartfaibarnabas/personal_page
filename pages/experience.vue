<template>
  <v-container>
    <v-row justify="center" class="page-title-container">
      <special-text text="Experience" />
    </v-row>
    <v-row>
        <v-timeline :dense="$vuetify.breakpoint.smAndDown" align-top>
          <timeline-item icon="mdi-file-code-outline" color="cyberyellow" title="Frontend Developer" date="04.2019 - 08.2022">
            <v-col
              cols="12"
              md="10"
            >
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
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
              md="10"
            >
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
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
              md="10"
            >
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
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
import specialText from '../components/special-text/specialText.vue';

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
