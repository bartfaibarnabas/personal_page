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
			}
	},
	data() {
		return {
		};
	},
	computed: {
		textArray() {
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