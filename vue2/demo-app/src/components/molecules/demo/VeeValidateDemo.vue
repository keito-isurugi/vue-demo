<template>
	<div class="demo-wrap">
		<h2>VeeValidate Demo</h2>
		<ValidationProvider rules="secret" v-slot="{ errors }">
			<input v-model="email" type="text">
			<span>{{ errors[0] }}</span>
		</ValidationProvider>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import { ValidationProvider, extend } from 'vee-validate';

	extend('secret', {
		validate: value => value === 'example',
		message: 'This is not the magic word'
	});

	export default Vue.extend({
		name: 'VeeValidateDemo',
		data() {
			return{
			}
		},
		methods: {
		},
		components: {
			'ValidationProvider': ValidationProvider
		}
	})
</script>

<style>
.demo-wrap {
	margin-top: 10px;
	margin-bottom: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
	border-top: 1px solid #000;
}
</style>