<template>
	<div>
		<h1>Demo</h1>
		<ApiDemo />
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import ApiDemo from '../molecules/demo/ApiDemo.vue'

  export default Vue.extend({
    name: 'Demo',
		data() {
			return {
			}
		},
		components: {
			ApiDemo
		},
		methods: {
		},
  })
	
</script>

<style scoped>
</style>