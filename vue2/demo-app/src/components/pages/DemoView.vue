<template>
	<div>
		<h1>Demo</h1>
		<ApiDemo />
		<VuexDemo />
		<DndDemo />
		<LazyloadDemo />
		<DatepickerDemo />
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import ApiDemo from '../molecules/demo/ApiDemo.vue'
	import VuexDemo from '../molecules/demo/VuexDemo.vue'
	import DndDemo from '../molecules/demo/DndDemo.vue'
	import LazyloadDemo from '../molecules/demo/LazyloadDemo.vue'
	import DatepickerDemo from '../molecules/demo/DatepickerDemo.vue'

  export default Vue.extend({
    name: 'Demo',
		data() {
			return {
			}
		},
		components: {
			ApiDemo,
			VuexDemo,
			DndDemo,
			LazyloadDemo,
			DatepickerDemo,
		},
		methods: {
		},
  })
	
</script>

<style scoped>
</style>