<template>
	<div class="demo-wrap">
		<h2>Dnd Demo</h2>
		<!-- <draggable tag="ul">
			<li v-for="item in items" :key="item.no">
				{{item.name}}-(No.{{item.no}})
			</li>
		</draggable> -->
		
		<div id="box1" class="box">
			<draggable tag="ul" :options="{group:'ITEMS'}">
				<li v-for="item in items" :key="item.no">{{item.name}}-(No.{{item.no}})</li>
			</draggable>
		</div>
		<div id="box2" class="box">
			<draggable tag="ul" :options="{group:'ITEMS'}">
				<li v-for="item in items2" :key="item.no">{{item.name}}-(No.{{item.no}})</li>
			</draggable>
		</div>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import draggable from 'vuedraggable'

  export default Vue.extend({
    name: 'DndDemo',
		components: {
			'draggable': draggable,
		},
		data() {
			return {
				// items:[
				// 	{no:1, name:'キャベツ', categoryNo:'1'},
				// 	{no:2, name:'ステーキ', categoryNo:'2'},
				// 	{no:3, name:'リンゴ', categoryNo:'3'}
				// ]
				items:[ 
					{no:1, name:'キャベツ', categoryNo:'1'}, 
					{no:2, name:'ステーキ', categoryNo:'2'} 
				], 
				items2:[ 
					{no:5, name:'きゅうり', categoryNo:'1'},
					{no:6, name:'ハンバーグ', categoryNo:'2'} 
				] 
			}
		},
		methods: {
		},
  })
</script>

<style scoped>
.demo-wrap {
	margin-top: 10px;
	margin-bottom: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
	border-top: 1px solid #000;
}

ul {
  list-style-type: none;
  padding: 3px;
}
li {
  cursor: pointer;
  padding: 10px;
  border: solid #ddd 1px;
}

.box {
  width: 50%;
  float: left;
  padding: 20px 0;
}
#box1 {
  background-color: #fdd;
}
#box2 {
  background-color: #ddf;
}
li {
  cursor:pointer;
  padding: 10px;
  border: solid #ddd 1px;
  background-color: #fff;
}
</style>