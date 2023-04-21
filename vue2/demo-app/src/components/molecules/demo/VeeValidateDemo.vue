<template>
	<div class="demo-wrap">
		<h2>VeeValidate Demo</h2>
		<ValidationProvider rules="secret" v-slot="{ errors }">
			<input v-model="email" type="text">
			<span>{{ errors[0] }}</span>

			<v-sheet width="300" class="mb-10 ml-10">
				<v-form validate-on="submit" @submit.prevent="submit">
					<v-text-field
						v-model="user.name"
						:rules="rules"
						:counter="50"
						label="Name"
						required
					></v-text-field>
					<v-text-field
						v-model="user.email"
						:rules="rules"
						:counter="50"
						label="Email"
						required
					></v-text-field>
					<v-text-field
						v-model="user.tel"
						:rules="rules"
						:counter="50"
						label="Tel"
						required
					></v-text-field>
					<v-btn type="submit" block class="mt-5">Register</v-btn>
				</v-form>
			</v-sheet>
		</ValidationProvider>
		<ul v-for="user in users" :key="user.id">
			<li class="user-flex">
				<p><span class="mr-2 font-weight-bold">ID:</span>{{ user.id }}</p>
				<p><span class="mr-2 font-weight-bold">Name:</span>{{ user.name }}</p>
				<p><span class="mr-2 font-weight-bold">Email:</span>{{ user.email }}</p>
				<p><span class="mr-2 font-weight-bold">Tel:</span>{{ user.tel }}</p>
			</li>
		</ul>
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
				user: {
					id: "",
					name: "",
					email: "",
					tel: "",
				},
				users: [
					{id:1, name: "suzuki", email: "test1email.com", tel: "111-1111-1111"},
					{id:2, name: "suzuki", email: "test2email.com", tel: "222-2222-2222"},
					{id:3, name: "suzuki", email: "test3email.com", tel: "333-3333-3333"},
					{id:4, name: "suzuki", email: "test4email.com", tel: "444-4444-4444"},
					{id:5, name: "suzuki", email: "test5email.com", tel: "555-5555-5555"},
				]
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
.user-flex {
	display: flex;
	gap: 20px;
}
</style>