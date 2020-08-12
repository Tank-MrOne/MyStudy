<template>
	<view class="recommendContainer">
		<swiper class="banner" :indicator-dots="true" :autoplay="true" indicator-color='green' indicator-active-color='pink'>
			<swiper-item>
				<image src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg" mode=""></image>
			</swiper-item>
		</swiper>
		
		<!-- policyDescList 三个横向图标 -->
		<div class='policyDescList'>
			<div class='policyDescItem' v-for='(item, index) in indexData.policyDescList' :key='index'>
				<img :src="item.icon" alt="">
				<span>{{item.desc}}</span>
			</div>
		</div>
		
		<!-- kingKongList 10个图标列表 -->
		<div class="kingKongList" v-if='indexData.kingKongModule'>
			<div class="kingKongItem" v-for='(item, index) in indexData.kingKongModule.kingKongList' :key='index'>
				<img :src="item.picUrl" mode=""></img>
				<span>{{item.text}}</span>
			</div>
		</div>
		
		
		<!-- CateGorys 组件， scoll-view练习  -->
		<CateGorys />
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import CateGorys from '../cateGorys/cateGorys.vue'
	export default {
		components: {
			CateGorys
		},
		data() {
			return {
				
			};
		},
		computed: {
			...mapState({
				indexData: state => state.index.indexData
			})
		}
	}
</script>

<style lang="stylus">
	.recommendContainer
		margin-top 4upx
		.banner
			width 100%
			height 350upx
			image
				width 100%
				height 100% 
		.policyDescList
			display flex
			.policyDescItem
				flex 1
				text-align center
				img 
					width 32upx
					height 32upx
					vertical-align middle
					margin-right 6upx
				span 	
					font-size 24upx
					vertical-align middle
		.kingKongList
			display flex 
			flex-wrap wrap
			margin 20upx 0
			.kingKongItem 
				width 20% 
				display flex
				flex-direction column
				align-items center 
				img 
					width 110upx
					height 110upx
				span
					font-size 24upx
					line-height 50upx
</style>
