<template>
  <div>
    <special-text text="Hey!" />
    <special-text :text="title" />
    <special-text :text="text" />
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
      title:`I'm Barnabás,`,
      text: 'software engineer',
    };
  },
  computed: {
  },
}
</script>
