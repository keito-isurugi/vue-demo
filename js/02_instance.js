var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})

var app = new Vue({
  el: '#app',
  data: obj
})


var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data,
  created: function () {
    // `this` は vm インスタンスを指します
    console.log('a is: ' + this.a)
  }
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch はインスタンスメソッドです
vm.$watch('a', function (newValue, oldValue) {
   // このコールバックは `vm.a` の値が変わる時に呼ばれます
})