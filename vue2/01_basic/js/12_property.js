Vue.component('blog-post', {
  // JavaScript 内ではキャメルケース
  props: ['postTitle'],
  template: '<p>{{ postTitle }}</p>'
})
Vue.component('blog-post2', {
  props: ['title'],
  template: '<p>{{ title }}</p>'
})
Vue.component('blog-post3', {
  props: ['likes'],
  template: '<p>{{ likes }}</p>'
})
Vue.component('blog-post4', {
  props: ['is-published'],
  template: '<p>{{ isPublished }}</p>'
})
Vue.component('blog-post5', {
  props: ['comment-ids'],
  template: '<p>{{ commentIds }}</p>'
})
Vue.component('blog-post6', {
  props: ['author'],
  template: '<p>{{ author }}</p>'
})


var app = new Vue({
  el: '#app',
  data: {
    post: {
      title: 'hoge',
      author: {name: 'foo', company: 'buzz'},
      likes: 100,
      isPublished: true,
      commentIds: [234, 266, 273]
    }
  },
  methods: {
  },
  computed: {
  },

})
