Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}<span>あああ</span></h3>'
})

Vue.component('blog-post2', {
  props: ['post'],
  template: '\
  <div class="blog-post">\
    <h3>{{ post.title }}</h3>\
    <button v-on:click="$emit(\'enlarge-text\', 0.1)">\
      Enlarge text\
    </button>\
    <div v-html="post.content"></div>\
  </div>\
  '
})

// Vue.component('custom-input', {
//   props: ['value'],
//   template: '\
//     <input\
//       v-bind:value="value"\
//       v-on:input="$emit(\'input\', $event.target.value)"\
//     >\
//   '
// })

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    count: 0,
    posts: [
      { id: 1, title: 'My journey with Vue', content: 'hogehoge' },
      { id: 2, title: 'Blogging with Vue', content: 'foofoo' },
      { id: 3, title: 'Why Vue is so fun', content: 'buzzbuzz' }
    ],
    postFontSize: 1.4,
    text: ''
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    },
    searchText: function (enlargeAmount) {
      // this.text = enlargeAmount
      console.log(enlargeAmount)
    },
  },
  computed: {
  }
})
