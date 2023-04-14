<template>
	<div class="demo-wrap">
		<h2>VuexDemo</h2>
		<!-- <div>{{ count }}</div>
		<button @click="increment">count up</button> -->
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import Vuex from 'vuex'

	Vue.use(Vuex)

	const store = new Vuex.Store({
		state: {
			count: 0
		},

		getters: {
			squared: (state) => state.count * state.count,
			cubed: (state, getters) => state.count * getters.squared
		},

		mutations: {
			increment (state, amount) {
				state.count += amount
			}
		}
	})

	console.log(store.getters.cubed)

	console.log(store.state.count)

	store.commit('increment', 1)

	console.log(store.state.count)

	// const store = {
	// 	state:{
	// 		count: 0
	// 	},
	// 	increment() {
	// 		this.state.count ++
	// 	}
	// }

  export default Vue.extend({
    name: 'VuexDemo',
		data() {
			return {
				count: store.state
			}
		},
		// methods: {
		// 	increment () {
		// 		store.increment()
		// 	}
		// },
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