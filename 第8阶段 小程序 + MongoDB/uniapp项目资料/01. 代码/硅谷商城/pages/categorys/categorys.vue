<template>
	<view class="categoryContainer">
		<!-- 头部 -->
		<view class="searchHeader">
			<view class="search">搜索商品</view>
		</view>
		
		<view class="contentContainer">
			<view class="leftContainer">
				<scroll-view  class="scrollContainer" scroll-y="true" show-scrollbar='false'>
					<ul class='navList'>
						<li 
						@click='changeNavIndex(item.id)'
						 v-for='(item, index) in categoryList'
							:key='index' 
							:class='navIndex === item.id?"active":""'
						>{{item.name}}</li>
					</ul>
				</scroll-view>
			</view>
			
			<!-- 右侧 -->
			<view class="rightContainer">
				<scroll-view scroll-y="true" class="scrollContainer">
					<view class="proList">
						<image class="cateImg" :src="categoryObj.imgUrl" mode=""></image>
						<view  class='proItem' v-for='(item, index) in categoryObj.subCateList' :key='index'>
							<image :src="item.wapBannerUrl" mode=""></image>
							<p>{{item.name}}</p>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				categoryList: [],
				navIndex: 0
			}
		},
		async mounted() {
			let navListData = await request('/getCateGoryData')
			// 更新数据
			this.categoryList = navListData.data
			this.navIndex = this.categoryList[0].id
			
		},
		methods:{
			changeNavIndex(navIndex){
				this.navIndex = navIndex
			}
		},
		computed: {
			categoryObj(){
				return (this.categoryList.filter(item => item.id === this.navIndex))[0]
			}
		}
	}
</script>

<style lang="stylus">
	.categoryContainer
		.searchHeader 
			width 100%
			height 56upx
			padding 10upx 0
			.search
				width 94%
				height 56upx
				line-height 56upx
				background #EDEDED
				margin 0 auto
				text-align center
				font-size 28upx
				border-radius 10upx
		.contentContainer
			display flex
			box-sizing border-box
			height calc(100vh - 76upx)
			border-top 1upx solid #EEEEEE
			.leftContainer
				width 20%
				height 100%
				font-size 26upx
				text-align center
				box-sizing border-box
				border-right 1upx solid #eee
				.scrollContainer
					height 100%
					.navList
						li 
							position relative
							height 80upx
							line-height 80upx
							color #666
							&.active
								&:after
									content ''
									height 70%
									width 2rpx 
									background #B4282D
									position absolute
									top 15%
									left 6upx
			.rightContainer
				width 80%
				height 100%
				.scrollContainer
					height 100%
				.proList
					width 100%
					display flex
					flex-wrap wrap
					.cateImg
						width 520upx
						height 190upx
						margin 20upx auto
					.proItem 
						width 33%
						padding 10upx
						box-sizing border-box
						display flex 
						align-items center
						flex-direction column
						image 
							width 90% 
							height 144upx
						p
							font-size 24upx
							text-align center
</style>
