<template>
	<div class="demo-wrap">
		<h2>VmdEditor Demo</h2>
		<vm-editor />
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import VMdEditor from '@kangc/v-md-editor';
	import '@kangc/v-md-editor/lib/style/base-editor.css';
	import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
	import '@kangc/v-md-editor/lib/theme/style/github.css';
	import enUS from '@kangc/v-md-editor/lib/lang/en-US';

	// highlightjs
	import hljs from 'highlight.js';
	VMdEditor.use(githubTheme, {
		Hljs: hljs,
		EnUS: enUS
	});


	export default Vue.extend({
		name: 'VmdEditorDemo',
		data() {
			return {
				enUS: enUS
			}
		},
		components: {
			'vm-editor': VMdEditor
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