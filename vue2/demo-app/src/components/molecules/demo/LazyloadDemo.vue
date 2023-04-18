<template>
	<div class="demo-wrap">
		<h2>Lazyload Demo</h2>
		<!-- <img src="../../../assets/error.gif" alt="">
		<ul>
			<li v-for="item, index in items" :key="index">
				<img v-lazy="item.path">
			</li>
		</ul> -->
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import VueLazyload from 'vue-lazyload'
	import loadImage from '../../../assets/loading-circle.gif'
	import errorImage from '../../../assets/error.gif'
	
	Vue.use(VueLazyload, {
		preLoad: 1.3,
		error: errorImage,
		loading: loadImage,
		attempt: 1
	})
	
  export default Vue.extend({
    name: 'LazyloadDemo',
		data() {
			return {
				items: [
					{no:1, path: 'https://dummyimage.com/600x600/fcc/000.png&text=Uploaded1'},
					{no:2, path: 'https://dummyimage.com/600x600/fcc/000.png&text=Uploaded2'},
					{no:3, path: 'https://dummyimage.com/600x600/fcc/000.png&text=Uploaded3'},
					{no:4, path: 'https://dummyimage.com/600x600/fcc/000.png&text=Uploaded4'}
				]
			}
		},
		methods: {
		},
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