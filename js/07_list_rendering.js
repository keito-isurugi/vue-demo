var app = new Vue({
  el: '#app',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ],
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    },
    numbers: [ 1, 2, 3, 4, 5 ],
    sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
  },
  methods: {
    fooOnly: function() {
      this.items = this.items.filter(function (item) {
        return item.message.match(/Foo/)
      })
    },
    buzzPush: function() {
      this.items.push({ message: 'Baz' })
    },
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    },
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})



Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})


new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})