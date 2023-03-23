Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

var app = new Vue({
  el: '#app',
  data: {
    isActive: true,
    hasError: false,
    error: null,
    activeClass: 'active',
    errorClass: 'text-danger',
    activeColor: 'blue',
    fontSize: 12
  },
  methods: {
    chageIsActive: function() {
      this.isActive = !this.isActive
    }
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})