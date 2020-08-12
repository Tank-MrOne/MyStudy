<template>
	<div class='cateContainer'>	
		<div class="cateItem" v-for='(item, index) in indexData.categoryModule' :key='index'>
			<img class="cateImg" :src="item.titlePicUrl" mode=""></img>
			<scroll-view scroll-x="true">
				<div class="scrollItem" v-for="(scrollItem, index) in item.itemList" :key='index'>
					<img class="scrollImg" :src="scrollItem.showPicUrl" mode=""></img>
					<p>{{scrollItem.name}}</p>
				</div>
				<div class='scrollItem more'>
					<div class='scrollImg'>查看更多></div>
				</div>
			</scroll-view>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		computed: {
			...mapState({
				indexData: state => state.index.indexData
			})
		},
		mounted() {
			console.log(this.indexData)
		}
	}
</script>

<style lang="stylus">
	.cateContainer 
		.cateItem 
			white-space nowrap
			.cateImg
				width 100%
				height 370upx
			.scrollItem 
				width 200upx
				display inline-block
				margin 20upx 10upx
				vertical-align top
				&.more
					text-align center
					line-height 200upx
					font-size 26upx
				.scrollImg
					width 200upx 
					height 200upx
					background #eee
				p
					font-size 24upx
					line-height 40upx
					width 100%
					/* 自动换行 */
					white-space pre-wrap
					/* 多行文本 溢出省略号替代 */ 
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
</style>
