<template>
	<div class="demo-wrap">
		<h2>VueGoodTable Demo</h2>
		<vue-good-table
			:columns="columns"
			:rows="rows"
			:search-options="{
				enabled: true,
				placeholder: '検索したい文字を入力してください'
			}" />
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import { VueGoodTable } from 'vue-good-table';
	// import the styles
	import 'vue-good-table/dist/vue-good-table.css'

	export default Vue.extend({
		name: 'VueGoodTableDemo',
		data() {
			return {
				columns: [
					{
						label: 'Name',
						field: 'name',
						filterOptions: {
							enabled: true,
						}
					},
					{
						label: 'Age',
						field: 'age',
						type: 'number',
					},
					{
						label: 'Created On',
						field: 'createdAt',
						type: 'date',
						dateInputFormat: 'yyyy-MM-dd',
						dateOutputFormat: 'yyyy-MM-dd',
					},
					{
						label: 'Percent',
						field: 'score',
						type: 'percentage',
					},
				],
				rows: [
					{ id:1, name:"John", age: 20, createdAt: null,score: 0.03343 },
					{ id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
					{ id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
					{ id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
					{ id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
					{ id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
				],
			}
		},
		components: {
			'vue-good-table': VueGoodTable
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