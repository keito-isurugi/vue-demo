var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello',
    firstName: '',
    lastName: ''
  },
  // methods: {
  //   reversedMessage: function () {
  //     return this.message.split('').reverse().join('')
  //   }
  // },
  // computed: {
  //   reversedMessage: function () {
  //     return this.message.split('').reverse().join('')
  //   },
  //   now: function () {
  //     return Date.now()
  //   },
  //   fullName: function () {
  //     return this.firstName + ' ' + this.lastName
  //   },
  // },
  methods: {
    fullName: function () {
        return this.firstName + ' ' + this.lastName
    },
    now: function () {
        return Date.now()
    }
  }

})