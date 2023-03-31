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

    <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group>
            <v-list-item
              v-for="(menuItem, index) in menuItems"
              :key="index"
              class="v-list-item"
              >
              <v-hover v-slot="{ hover }">
                <router-link 
                  :to="menuItem.url"
                  class="link"
                  :style="{ 'text-decoration': hover ? 'underline' : 'none' }"
                  >{{ menuItem.name }}</router-link>
              </v-hover>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
		</div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import constants from '../../common/constants'

  export default Vue.extend({
    name: 'Header',
		data: () => ({
      drawer: false,
      menuItems: constants.menuItems
    }),
  })
</script>

<style scoped>
  .v-list-item {
    height: 40px;
    width: 100%;
  }
  .link {
    height: 100%;
    width: 100%;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
</style>