<template>
	<div class="demo-wrap">
		<h2>Dnd Demo</h2>

		<button v-on:click="doAdd">追加</button>
		<draggable tag="ul">
			<li v-for="item, index in myList" :key="item.no">
				{{item.name}}-(No.{{item.no}})
				<span class="del" v-on:click="doDelete(index)">[削除]</span>
			</li>
		</draggable>
		
		<div id="box1" class="box">
			<draggable tag="ul" :options="{group:'ITEMS'}"  @end="onEnd">
				<li v-for="item in items2" :key="item.no">{{item.name}}-(No.{{item.no}})</li>
			</draggable>
		</div>
		<div id="box2" class="box">
			<draggable tag="ul" :options="{group:'ITEMS'}">
				<li v-for="item in items3" :key="item.no">{{item.name}}-(No.{{item.no}})</li>
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
				items:[
					{no:1, name:'キャベツ', categoryNo:'1'},
					{no:2, name:'ステーキ', categoryNo:'2'},
					{no:3, name:'リンゴ', categoryNo:'3'}
				],
				items2:[ 
					{no:1, name:'キャベツ', categoryNo:'1'}, 
					{no:2, name:'ステーキ', categoryNo:'2'} 
				], 
				items3:[ 
					{no:5, name:'きゅうり', categoryNo:'1'},
					{no:6, name:'ハンバーグ', categoryNo:'2'} 
				],
				newNo: 4
			}
		},
		computed: {
			myList: function(){
				return (this as any).items;
			}
		},
		methods: {
			doAdd: function() {
				var no = 0;

				// itemsの中の一番大きなnoを取得して１を足す
				if(this.items.concat().length > 0) {
					no =  Math.max.apply(null, this.items.concat().map((item: { no: any; }) => item.no)) + 1
					this.newNo = this.newNo < no ? no: this.newNo;
				}

				// itemsにアイテムを追加
				this.items.push(
				{
					no: this.newNo,
					name: '追加リスト'+ this.newNo,
					categoryNo: '5'
				}
				);
			},
			doDelete: function(index: any){
				this.items.splice(index, 1);
			},
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