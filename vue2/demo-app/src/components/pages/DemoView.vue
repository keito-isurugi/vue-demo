<template>
	<div>
		<h1>Demo</h1>
		<ApiDemo />
		<VuexDemo />
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import ApiDemo from '../molecules/demo/ApiDemo.vue'
	import VuexDemo from '../molecules/demo/VuexDemo.vue'

  export default Vue.extend({
    name: 'Demo',
		data() {
			return {
			}
		},
		components: {
			ApiDemo,
			VuexDemo
		},
		methods: {
		},
  })
	
</script>

<style scoped>
</style>