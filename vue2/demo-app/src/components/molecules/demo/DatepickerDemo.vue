<template>
	<div class="demo-wrap">
		<h2>Datepicker Demo</h2>
		<vuejs-datepicker
			format="yyyy年MMMMd日(D) "
			input-class="date-input"
			:language="ja"
			:value="today"
			:clear-button="true"
		/>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import vuejsDatepicker from 'vuejs-datepicker';
	import { ja } from 'vuejs-datepicker/dist/locale'

	export default Vue.extend({
		name: 'DatepickerDemo',
		data() {
			return{
				ja: ja,
				calendarDate: '',
				today: new Date()
			}
		},
		components: {
			'vuejs-datepicker': vuejsDatepicker
		}
	})
	console.log(new Date())
</script>

<style>
.demo-wrap {
	margin-top: 10px;
	margin-bottom: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
	border-top: 1px solid #000;
}

.date-input {
	border: 2px solid red !important;
}
</style>