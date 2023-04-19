<template>
	<div class="demo-wrap">
		<h2>VueGoTop Demo</h2>
		<go-top 
			:size='100'
			:right='10'
			:bottom='10'
			fg-color='#000'
			bg-color='aqua'
			:radius='0'
			weight='bold'
			ripple-bg='rgba(80, 80, 80, .5)'
			/>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import GoTop from '@inotom/vue-go-top';

	export default Vue.extend({
		name: 'VueGoTopDemo',
		data() {
			return{
			}
		},
		components: {
			GoTop
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