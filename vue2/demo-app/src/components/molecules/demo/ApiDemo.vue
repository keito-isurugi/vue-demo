<template>
	<div class="demo-wrap">
		<h2>API Demo(axios)</h2>
		<ul v-for="(user, index) in users" :key="index">
			<div class="d-flex">
				<li>ID：{{ user.id }}、Name：{{ user.name }}</li>
			</div>
		</ul>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import axios from 'axios'

  export default Vue.extend({
    name: 'ApiDemo',
		data() {
			return {
				title: '',
				content: '',
				users: [],
			}
		},
		methods: {
		},
		mounted () {
			axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(response => (
					this.users = response.data
				))
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