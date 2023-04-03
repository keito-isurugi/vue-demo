<template>
	<div>
		<h1>Todo</h1>
		<ul v-for="(todo, index) in todos" :key="index">
			<div class="d-flex">
				<li>ID：{{ todo.id }}、Title：{{ todo.title }}、Content：{{ todo.content }}</li>
				<button :id="todo.id" @click="deleteTodo(index)">delete</button>
			</div>
		</ul>

		<br>

		<div>
			<label for="title">title</label>
			<input v-model="title" id="title" type="text" placeholder="title">
			<label for="content">content</label>
			<input v-model="content" id="content" type="text" placeholder="content">
			<button @click="addTodo">add</button>
		</div>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Todo',
		data() {
			return {
				title: '',
				content: '',
				todos: [
					{id:1, title: 'title1', content: "This is content 1."},
					{id:2, title: 'title2', content: "This is content 2."},
					{id:3, title: 'title3', content: "This is content 3."},
					{id:4, title: 'title4', content: "This is content 4."},
					{id:5, title: 'title5', content: "This is content 5."},
					{id:6, title: 'title6', content: "This is content 5."},
				]
			}
		},
		methods: {
			deleteTodo(index) {
				this.todos.splice(index, 1)
			},
			addTodo() {
				if(this.title !== "" && this.title !== ""){
					const todo = {
						id: Number(this.todos.length + 1),
						title: this.title,
						content: this.content
					}
					this.todos.push(todo)
					this.title = ''
					this.content = ''
					alert("Todoを追加しました")
				} else {
					alert("タイトル、内容を入力してください。")
				}
			}
		}
  })
	
</script>