<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Vue2 DEMO</h1>
      </div>
      <v-spacer></v-spacer>
      <v-hover v-slot="{ hover }">
        <router-link 
          to="/" 
          class="white--text font-weight-bold"
          :style="{ 'text-decoration': hover ? 'underline' : 'none' }"
          >HOME</router-link>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <router-link 
          to="./about" 
          class="white--text font-weight-bold"
          :style="{ 'text-decoration': hover ? 'underline' : 'none' }"
          >ABOUT</router-link>
      </v-hover>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'App',

    data: () => ({
      //
    }),
  });
</script>
