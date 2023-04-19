<template>
	<div class="demo-wrap">
		<h2>Icons Demo</h2>
		<v-icon
      large
      color="green darken-2"
    >
      mdi-domain
    </v-icon>
		<v-icon
      large
      color="blue darken-2"
    >
      mdi-ab-testing
    </v-icon>
		<v-icon
      large
      color="purple darken-2"
			@click="next"
    >
      mdi-cow
    </v-icon>
		<v-btn
        class="ma-2"
        color="primary"
        dark
      >
        Accept
        <v-icon
          dark
          right
        >
          mdi-checkbox-marked-circle
        </v-icon>
      </v-btn>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'

	export default Vue.extend({
		name: 'IconsDemo',
		data() {
			return{
			}
		},
		methods: {
			next () {
        alert('You clicked next!')
      },
		}
	})
</script>

<style>
.demo-wrap {
	margin-top: 10px;
	margin-bottom: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
	border-top: 1px solid #000;
}
</style>