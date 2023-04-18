<template>
	<div class="demo-wrap">
		<h2>Datepicker Demo</h2>
		<vuejs-datepicker></vuejs-datepicker>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import vuejsDatepicker from 'vuejs-datepicker';

	export default Vue.extend({
		name: 'DatepickerDemo',
		components: {
			'vuejs-datepicker': vuejsDatepicker
		}
	})
</script>

<style scoped>
.demo-wrap {
	margin-top: 10px;
	margin-bottom: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
	border-top: 1px solid #000;
}
</style>