<template>
  <div>
    <special-text :text="hi" />
    <special-text :text="name" />
    <special-text :text="job" />
</div>
</template>

<script>
import specialText from '../components/special-text/specialText.vue';
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
  },
}
</script>
