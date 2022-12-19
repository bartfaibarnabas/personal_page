<template>
  <div>
    <special-text :text="hi" />
    <special-text :text="name" />
    <special-text :text="job" />
    <v-row>
      <v-col sm="12" md="6">
        text
      </v-col>
      <v-col sm="12" md="6">
        <bar-chart></bar-chart>
      </v-col>
    </v-row>

</div>
</template>

<script>
import specialText from '../components/specialText/specialText.vue';
import barChart from '../components/barChart/barChart.vue';
export default {
  name: 'home',
  components: {
    specialText,
  },
  data() {
    return {
      hi: ``,
      name:``,
      job: '',
    };
  },
  created() {
      const hi = `Hey!`, name = `I'm Barnabás,`, job = 'software engineer.';
      let totalCounter = 0;
      [...hi].forEach((char, index) => {
          setTimeout(() => {
            this.hi += char;
        }, (index)*250);
      });
      [...name].forEach((char, index) => {
          totalCounter ++;
          setTimeout(() => {
            this.name += char;
        }, (hi.length*250) + (index)*100);
      });
      [...job].forEach((char, index) => {
          setTimeout(() => {
            this.job += char;
        }, (hi.length*250) + (name.length*120) + (index*80));
      });    
  },
  computed: {
    chartData() {
      return {
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: '',
            data: [2, 1, 16, 3, 2],
            backgroundColor: 'rgba(20, 255, 0, 0.3)',
            borderColor: 'rgba(100, 255, 0, 1)',
            borderWidth: 2,
          },
        ],
      };
    },
    options() {
      return {
        
      };
    }
  },
}
</script>
