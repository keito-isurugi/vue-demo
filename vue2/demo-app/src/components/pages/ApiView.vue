<template>
	<div>
		<h1>API</h1>
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
    name: 'Api',
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
				console.log(this.users)
		}
  })
	
</script>

<style scoped>
</style>