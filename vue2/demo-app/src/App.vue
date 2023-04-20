<template>
  <v-app>
    <Header />
    <v-main>
      <router-view/>
      <ProgressBar />
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Header from './components/molecules/Header.vue'
  import ProgressBar from "./components/atoms/ProgressBar.vue";

  export default Vue.extend({
    name: 'App',
    components: {
      Header,
      ProgressBar
    },
  });
</script>
