Vue.component('todo-item', {
  // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
  // このプロパティは todo と呼ばれます。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    message_1: 'hoge',
    message_2: 'You loaded this page on ' + new Date().toLocaleString(),
    seen: false,
    todos: [
      { text: 'Learn JavaScript', no: 1 },
      { text: 'Learn Vue', no: 2 },
      { text: 'Build something awesome', no: 3 }
    ],
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
