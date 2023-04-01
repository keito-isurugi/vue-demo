<template>
	<div>
		<h1>Todo</h1>
		<ul v-for="(todo, index) in todos" :key="index">
			<div class="d-flex">
				<li>タイトル：{{ todo.title }}、内容：{{ todo.content }}</li>
				<button :id="todo.id" v-on:click="deleteTodo">削除</button>
			</div>
		</ul>

		<br>

		<div>
			<label for="title">タイトル</label>
			<input v-model="title" id="title" type="text" placeholder="タイトル">
			<label for="content">内容</label>
			<input v-model="content" id="content" type="text" placeholder="内容">
			<button>追加</button>
			<p>入力中タイトル: {{ title }}</p>
			<p>入力中内容: {{ content }}</p>
		</div>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Todo',
		data: () => ({
			title: '',
			content: '',
			todos: [
				{id:1, title: 'タイトル1', content: "内容1です"},
				{id:2, title: 'タイトル2', content: "内容2です"},
				{id:3, title: 'タイトル3', content: "内容3です"},
				{id:4, title: 'タイトル4', content: "内容4です"},
				{id:5, title: 'タイトル5', content: "内容5です"},
				{id:6, title: 'タイトル6', content: "内容5です"},
			]
		}),
		methods: {
			hoge: function() {
				alert("hoge")
			},
			deleteTodo: () => {
				alert("delete")
			},
			addTodo: () => {
				alert("addtodo")
			}
		}
  })
	
</script>