<template>
	<v-navigation-drawer
		:value="value"
		fixed
		temporary
		@input="$emit('input', $event)"
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
</template>

<script lang="ts">
  import Vue from 'vue'
  import constants from '../../common/constants'

  export default Vue.extend({
    name: 'Sidebar',
		props: {
			value: {
				type: Boolean,
				default: false
			}
    },
		data: () => ({
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