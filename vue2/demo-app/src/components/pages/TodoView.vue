<template>
	<h1>Todo</h1>
	
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Todo',
		data: {
			todos: [
				{id:1, title: 'title1', content: "内容1です"},
				{id:2, title: 'title2', content: "内容2です"},
				{id:3, title: 'title3', content: "内容3です"},
				{id:4, title: 'title4', content: "内容4です"},
				{id:5, title: 'title5', content: "内容5です"},
				{id:6, title: 'title6', content: "内容5です"},
			]
		}
  })
</script>