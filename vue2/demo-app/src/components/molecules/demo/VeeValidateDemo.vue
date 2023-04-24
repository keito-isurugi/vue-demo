<template>
	<div class="demo-wrap">
		<h2>VeeValidate Demo</h2>
		<ValidationObserver  ref="obs" v-slot="ObserverProps">

				<v-sheet width="300" class="mb-10 ml-10">
					<ValidationProvider name="名前" rules="required">
						<div slot-scope="ProviderProps">
							<v-text-field
								v-model="user.name"
								:counter="50"
								label="Name"
							></v-text-field>
							<p class="error">{{ ProviderProps.errors[0] }}</p>
						</div>
					</ValidationProvider>
					
					<ValidationProvider name="メールアドレス" rules="required|email">
						<div slot-scope="ProviderProps">
							<v-text-field
								v-model="user.email"
								:counter="50"
								label="Email"
							></v-text-field>
							<p class="error">{{ ProviderProps.errors[0] }}</p>
						</div>
					</ValidationProvider>

					<ValidationProvider name="電話番号" rules="required">
						<v-text-field
							v-model="user.tel"
							:counter="50"
							label="Tel"
						></v-text-field>
					</ValidationProvider>

					<v-btn block class="mt-5" type="button" @click="submit" :disabled="ObserverProps.invalid || !ObserverProps.validated">Register</v-btn>
				</v-sheet>
			
		</ValidationObserver>
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
	import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
	import { required, email } from 'vee-validate/dist/rules';

	extend('secret', {
		validate: value => value === 'example',
		message: 'This is not the magic word'
	});

	extend('required', required);
	extend('email', email);	

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
					{id:1, name: "test1", email: "test1email.com", tel: "111-1111-1111"},
					{id:2, name: "test2", email: "test2email.com", tel: "222-2222-2222"},
					{id:3, name: "test3", email: "test3email.com", tel: "333-3333-3333"},
					{id:4, name: "test4", email: "test4email.com", tel: "444-4444-4444"},
					{id:5, name: "test5", email: "test5email.com", tel: "555-5555-5555"},
				]
			}
		},
		methods: {
			submit() {
			this.user.id = this.users.length + 1;
			this.users.push(this.user);
			this.user = {
				id: "",
				name: "",
				email: "",
				tel: "",
			};
  }
		},
		components: {
			'ValidationProvider': ValidationProvider,
			'ValidationObserver': ValidationObserver,
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