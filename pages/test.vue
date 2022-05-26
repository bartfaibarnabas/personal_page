<template>
<quiz/>
</template>

<script>
import quiz from '../components/quiz.vue';

export default {
  name: 'test',
  components: {
    quiz,
  },
  data() {
    return {
    };
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
