Vue.component('navigation-link', {
  props: ['url'],
  template:`
      <a
        v-bind:href="url"
        class="nav-link"
      >
      <slot></slot>
    </a>
  `
})

Vue.component('submit-button', {
  template:`
    <button type="submit">
      <slot>Submit</slot>
    </button>
  `
})

Vue.component('base-layout', {
  template:`
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `
})

Vue.component('current-user', {
  props: ['user'],
  template:`
    <span>
      <slot v-bind:user="user">
        {{ user.lastName }}
      </slot>
    </span>
  `
})


var app = new Vue({
  el: '#app',
  data: {
    user: {
      name: 'yamada',
      lastName: 'tanaka',
      firstName: 'taro',
    }
  },
  methods: {
  },
  computed: {
  },
})
