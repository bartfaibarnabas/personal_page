<template>
	<v-row justify="center" align="center">
		<letter :char="char" v-for="(char, key) in textArray" :key="key" class="page-title"/>
	</v-row>
</template>

<script>
import letter from './letter.vue';

export default {
	name: 'special-text',
	components: {
		letter,
	},
	props: {
		text: {
				type: String,
				default: 'Hey, I am Barnabás, software developer',
			}
	},
	data() {
		return {
		};
	},
	computed: {
		textArray() {
			console.log(...this.text);
			return [...this.text];
		},
	},
}
</script>

<style lang="scss" scoped>
.page-title {
  display: flex;
	padding: 0px;
}

</style>