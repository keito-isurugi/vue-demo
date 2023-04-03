<template>
	<div>
		<h1>Todo</h1>
		<h2>Todos</h2>
		<ul v-for="(todo, index) in todos" :key="index">
			<div class="d-flex">
				<li>ID：{{ todo.id }}、Title：{{ todo.title }}、Content：{{ todo.content }}</li>
				<v-btn color="#D50000" class="white--text" :id="todo.id" @click="deleteTodo(index)">delete</v-btn>
			</div>
		</ul>

		<br>

		<div>
			<h2>Add Todo</h2>
			<div class="input-wrap">
				<v-text-field
					v-model="title"
					label="Title"
					:rules="rules"
					hide-details="auto"
				></v-text-field>
				<v-text-field
					v-model="content"
					label="Content"
					:rules="rules"
					hide-details="auto"
				></v-text-field>
				<v-btn color="#2196F3" class="white--text" @click="addTodo">add</v-btn>
			</div>
		</div>

		<v-btn
			v-for="(item, index) in items"
			:key="index"
			:value="index"
			@click="buttonClicked(index)"
		>
			{{ item }}
		</v-btn>
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
				],
				items: ['Button 1', 'Button 2', 'Button 3'],
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
			},
			buttonClicked(id) {
				console.log('Clicked button with id ' + id);
			},
		}
  })
	
</script>

<style scoped>
	.input-wrap {
		width: 30%;
	}
</style>