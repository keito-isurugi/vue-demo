var app = new Vue({
  el: '#app',
  data: {
    awesome: true,
    type: 'A',
    loginType: 'username',
    ok: false
  },
  methods: {
    changeAwesome: function() {
      this.awesome = !this.awesome
    },
    changeLoginType: function() {
      this.loginType = this.loginType === 'username' ? 'hoge' : 'username'
      console.log()
    }
  },
  computed: {
    
  }
})