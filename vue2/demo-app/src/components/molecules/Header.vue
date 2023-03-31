<template>
	<div>
		<v-app-bar
				app
				color="primary"
				dark
				>
				<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
				<div class="d-flex align-center">
					<h1>Vue2 DEMO</h1>
				</div>
				<v-spacer></v-spacer>
			</v-app-bar>
			<Sidebar v-model="drawer"/>
		</div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Sidebar from './Sidebar.vue'

  export default Vue.extend({
    name: 'Header',
		data: () => ({
      drawer: false,
    }),
		components: {
			Sidebar
		}
  })
</script>
