<template>
	<div class="demo-wrap">
		<h2>VueTyper Demo</h2>
		<vue-typer 
			text='Hello World! I was registered globally!'
			:type-delay='300'
		/>
		<br>
		<vue-typer text='これはVue Typerのデモです!'></vue-typer>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import { VueTyper } from 'vue-typer'

	export default Vue.extend({
		name: 'VueTyperDemo',
		data() {
			return{
			}
		},
		components: {
			'vue-typer': VueTyper
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
.vue-typer {
  font-family: Copperplate, 'Copperplate Gothic Light', fantasy;
}

.vue-typer .custom.char.typed {
  color: #607D8B;
}
.vue-typer .custom.char.selected {
  color: #607D8B;
  background-color: transparent;
  text-decoration: line-through;
}

.vue-typer .custom.caret {
  display: none;
}
</style>