<template>
	<view id="indexContainer">
		<!-- 头部 -->
		<div class="header-search-login">
			<image class="logo" src="/static/images/logo.png" ></image>
			<div class="searchInput" >
				 <i class='iconfont icon-sousuo'></i>
				 <input type="text" placeholder="搜索商品" placeholder-class="placeholder">
			</div>
			<button @click="toLogin">{{userName?userName:'登录'}}</button>
		</div>
		
		<!-- 导航区域 -->
		<scroll-view class="navContainer" scroll-x="true" v-if="indexData.kingKongModule">
			<view @click="changeNavId(0, 0)" class="navItem " :class="{activeClass: navId === 0}">
				推荐
			</view>
			<view @click="changeNavId((index + 1), navItem.L1Id)" class="navItem " :class="{activeClass: navId === (index + 1)}" v-for="(navItem, index) in indexData.kingKongModule.kingKongList" :key='index'>
				{{navItem.text}}
			</view>
		</scroll-view>
		
	
		<!-- 首页组件 -->
		<scroll-view scroll-y="true" class="indexContent">
			<Recommend v-if='navId===0'></Recommend>
			<CateList v-if='navId !== 0' :navIndex='navIndex'></CateList>
			<!-- 不支持使用动态组件 -->
			<!-- <component :is='comName' :navIndex='navIndex'></component> -->
		</scroll-view>
	</view>
</template>

<script>
	// axios不能用
	// import axios from 'axios'
	// import {getIndex} from '../../api/index.js'
	import { mapActions, mapState } from 'vuex'
	import Recommend from '../../components/recommend/recommend.vue'
	import CateList from '../../components/cateList/cateList.vue'
	import request from '../../utils/request.js'
	export default {
		components: {
			Recommend, CateList
		},
		data() {
			return {
				navId: 0, // 导航动态class标识
				navIndex: 0,// 导航对应页面标识
				comName: 'Recommend',
				userName: '',
			};
		},
		async mounted(){
			console.log('mounted')
			this.getIndexData()
			// this.indexData = await request('/getIndexData')
			
			// 判断用户是否登录
			// 验证用户是否登录
			let userInfo = wx.getStorageSync('userInfo')
			if(userInfo){
				this.userName = JSON.parse(userInfo.rawData).nickName
			}
			
		},
		methods: {
			...mapActions({
				getIndexData: 'getIndexData'
			}),
			changeNavId(navId, navIndex){
				(navId !== this.navId) && (this.navId = navId, this.navIndex = navIndex)
			},
			toLogin(){
				if(!this.userName){
					uni.navigateTo({
						url: '../login/login'
					})
				}
			}
		},
		computed: {
			...mapState({
				indexData: state => state.index.indexData
			})
		},
		watch: {
			navId(newValue){
				this.comName = (newValue === 0?'Recommend': 'CateList')
			}
		}
	}
</script>

<style lang="stylus">
	#indexContainer
		width 100%
		height 100%
		.header-search-login
			display flex
			width 100%
			height 60upx
			padding 10upx 0
			.logo
				width 140upx
				height 40upx
				margin 10upx 30upx
			.searchInput 
				height 60upx
				width 420upx
				background #ededed
				position relative
				border-radius 10upx
				.iconfont
					font-size 30upx
					position absolute
					left 10upx 
					top 25%
				// icon
				// 	position absolute
				// 	left 10upx
				// 	top 25%
				input
					border-radius 10upx
					height 60upx
					width 370upx
					margin-left 50upx
				.placeholder
					font-size 24upx
					color #666
			button
				width 144upx
				height 60upx
				padding 0 4upx
				color #b4282d
				line-height 56upx
				text-align center
				font-size 24upx
				margin 0 20upx
				white-space nowrap
				overflow hidden
				text-overflow ellipsis
		.navContainer
			width 100%
			white-space nowrap
			height 80upx
			.navItem
				display inline-block
				width 140upx
				height 100%
				margin 0 10upx
				line-height 80upx
				text-align center
				font-size 28upx
				position relative
				&.activeClass:after
					content ''
					height 1upx
					width 100%
					position absolute
					bottom 0
					left 0
					background #BB2C08
		.indexContent
			height calc(100vh - 160upx)
		
</style>
