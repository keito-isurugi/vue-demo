var ComponentA = ('component-a', {
  template: '<p>ComponentA</p>'
})
var ComponentB = {
  components: {
    'component-a': ComponentA
  },
}
// Vue.ComponentB('component-b', {
//   template: '<p>ComponentB</p>'
// })
// Vue.componentC('component-c', {
//   template: '<p>ComponentC</p>'
// })


var app = new Vue({
  el: '#app',
  data: {
  },
  methods: {
  },
  computed: {
  },
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
