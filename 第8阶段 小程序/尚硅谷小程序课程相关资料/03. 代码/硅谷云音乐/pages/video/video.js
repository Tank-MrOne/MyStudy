import request from '../../utils/request'
Page({
  data: {
    videoGroupList:[], // 导航列表
    navId: '', // 视频标签id标识
    videoList: [], // 视频列表数据
    triggered: false, // 标识下拉刷新是否被触发
    videoId: null // 视频ID
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    
    // 判断用户是否登录
    let userInfo = wx.getStorageSync('cookies');
    if(!userInfo){
      // 用户没有登录
      
      wx.showLoading({
        title: '请先登录',
        success: () => {
          wx.redirectTo({
            url: '/pages/login/login'
          })
        }
      })
    
    }
    // 获取导航列表数据
    let videoGroupListData = await request('/video/group/list');
    this.setData({
      videoGroupList: videoGroupListData.data.slice(0, 14),
      navId: videoGroupListData.data[0].id
    })
    
    
    this.getVideoList(this.data.navId);
  },
  
  // 获取视频列表数
  async getVideoList(navId){
    let videoListData = await request('/video/group', {id: navId})
    // 关闭消息提示
    wx.hideLoading();
    // console.log(videoListData);
    // 更新至data中的videoList
    this.setData({
      videoList: videoListData.datas,
      triggered: false,  // 关闭下拉刷新
    })
    
    
  },
  
  // 修改导航id值
  changeNavId(event){
    this.setData({
      navId: event.currentTarget.id>>>0,
      videoList: [], // 清空原有数据
    })
    
    wx.showLoading({
      title: '正在加载',
      mask: true
    })
    
    this.getVideoList(this.data.navId)
  },
  // 下拉刷新的回调
  handleRefresher(){
    console.log('下拉刷新');
    // 发送请求，更新数据
    this.getVideoList(this.data.navId);
  },
  // scroll-view滑动到底部的事件回调
  handleScrollLower(){
    console.log('滑动到scroll-view的底部了。。。');
    wx.showLoading({
      title: '正在努力加载'
    })
    // 1. 发送请求获取数据
    let newVideoList = [
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_C3F0936692A9CAA492E1D34B4A995591",
          "coverUrl": "https://p1.music.126.net/l8VxATyRbRootBpXouEOhQ==/109951164970446072.jpg",
          "height": 1080,
          "width": 1920,
          "title": "Beyond《海阔天空》那些没打倒你的苦难是通向幸福的考验",
          "description": "Beyond《海阔天空》那些没打倒你的苦难是通向幸福的考验\n#超燃计划#\n#Beyond#",
          "commentCount": 12,
          "shareCount": 3,
          "resolutions": [
            {
              "resolution": 240,
              "size": 31599446
            },
            {
              "resolution": 480,
              "size": 48795891
            },
            {
              "resolution": 720,
              "size": 67621897
            },
            {
              "resolution": 1080,
              "size": 129145292
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 370000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/zaCXVkBENc9kp-EpFJRwwA==/109951164453953719.jpg",
            "accountStatus": 0,
            "gender": 2,
            "city": 370100,
            "birthday": 723744000000,
            "userId": 136920183,
            "userType": 201,
            "nickname": "木子的影像声色",
            "signature": "世间好物不坚牢，彩云易散琉璃脆。",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164453953710,
            "backgroundImgId": 109951163755109000,
            "backgroundUrl": "http://p1.music.126.net/_WyasStVi6NFTXVxiwHI0A==/109951163755109000.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": {
              "1": "音乐原创视频达人"
            },
            "djStatus": 10,
            "vipType": 0,
            "remarkName": null,
            "backgroundImgIdStr": "109951163755109000",
            "avatarImgIdStr": "109951164453953719",
            "avatarImgId_str": "109951164453953719"
          },
          "urlInfo": {
            "id": "C3F0936692A9CAA492E1D34B4A995591",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/3ijPzt62_2989235814_uhd.mp4?ts=1589637669&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=iSZuMJXfnqdDERVpvemZoqRXFiygvdQM&sign=96ab37e6ba2366b52f67b86116ac5c1f&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUJlOHUAF0KZfRhBqApkIJ9148guIHIiJ2Tq6CoDJ6NgC6URdIIRsW1+SweWh18G4VoifIqYIeV0DIXpQ6xLh41Z8A+TFC17PMqGJmusUG3IeKjQWVdbbeRqso9OxU05abLMbKh3sJmE7osnolMLEIbna+LSrClrSPlpuo7TYL0Z04kjdWqp7hShDjlBzeRTyy",
            "size": 129145292,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 1080
          },
          "videoGroup": [
            {
              "id": -23089,
              "name": "#粤语经典老歌【精选珍藏】#",
              "alg": "groupTagRank"
            },
            {
              "id": 72114,
              "name": "Beyond",
              "alg": "groupTagRank"
            },
            {
              "id": 259129,
              "name": "热歌放映厅",
              "alg": "groupTagRank"
            },
            {
              "id": 14194,
              "name": "励志",
              "alg": "groupTagRank"
            },
            {
              "id": 58101,
              "name": "听BGM",
              "alg": "groupTagRank"
            },
            {
              "id": 23116,
              "name": "音乐推荐",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "海阔天空",
              "id": 347230,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 11127,
                  "name": "Beyond",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "600902000004240302",
              "fee": 1,
              "v": 33,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 34209,
                "name": "海阔天空",
                "picUrl": "http://p1.music.126.net/QHw-RuMwfQkmgtiyRpGs0Q==/102254581395219.jpg",
                "tns": [],
                "pic": 102254581395219
              },
              "dt": 326000,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 13042459,
                "vd": 0
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 7825492,
                "vd": 2310
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 5217009,
                "vd": 1324
              },
              "a": null,
              "cd": "1",
              "no": 1,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 1,
              "s_id": 0,
              "cp": 7002,
              "mv": 376199,
              "rtype": 0,
              "rurl": null,
              "mst": 9,
              "publishTime": 746812800000,
              "privilege": {
                "id": 347230,
                "fee": 1,
                "payed": 0,
                "st": 0,
                "pl": 0,
                "dl": 0,
                "sp": 0,
                "cp": 0,
                "subp": 0,
                "cs": false,
                "maxbr": 999000,
                "fl": 0,
                "toast": false,
                "flag": 1284,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "C3F0936692A9CAA492E1D34B4A995591",
          "durationms": 286570,
          "playTime": 3763,
          "praisedCount": 21,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_590ACD3C12A52A9955D68CD9B2965603",
          "coverUrl": "https://p1.music.126.net/wkSsrNwY6KKTKgkvTAt0rw==/109951164943621969.jpg",
          "height": 720,
          "width": 1280,
          "title": "楊丞琳 - 左邊 (香港Live)",
          "description": "楊丞琳 - 左邊 (香港Live)",
          "commentCount": 1,
          "shareCount": 1,
          "resolutions": [
            {
              "resolution": 240,
              "size": 12432838
            },
            {
              "resolution": 480,
              "size": 20141257
            },
            {
              "resolution": 720,
              "size": 29869649
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 110000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/5rK5EE48oekIjNHyR3GIYg==/109951163424583352.jpg",
            "accountStatus": 0,
            "gender": 0,
            "city": 110101,
            "birthday": -2209017600000,
            "userId": 1345020800,
            "userType": 201,
            "nickname": "拾號播放器",
            "signature": "让我们一起泡在音乐水里面",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951163424583360,
            "backgroundImgId": 109951162868128400,
            "backgroundUrl": "http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": {
              "1": "音乐视频达人"
            },
            "djStatus": 0,
            "vipType": 0,
            "remarkName": null,
            "backgroundImgIdStr": "109951162868128395",
            "avatarImgIdStr": "109951163424583352",
            "avatarImgId_str": "109951163424583352"
          },
          "urlInfo": {
            "id": "590ACD3C12A52A9955D68CD9B2965603",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/Kv6HJ6Yn_2973640455_shd.mp4?ts=1589637669&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=pVHSYJLsZlWDsSXmOijSQcFQBopMvVlV&sign=517f0a87bb92c987ae5c64a5fbc5ae33&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUJlOHUAF0KZfRhBqApkIJ9148guIHIiJ2Tq6CoDJ6NgC6URdIIRsW1+SweWh18G4VoifIqYIeV0DIXpQ6xLh41Z8A+TFC17PMqGJmusUG3IeKjQWVdbbeRqso9OxU05abLMbKh3sJmE7osnolMLEIbna+LSrClrSPlpuo7TYL0Z3fIR/DOLq7uPXUr4Y/ehEN",
            "size": 29869649,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 720
          },
          "videoGroup": [
            {
              "id": -35131,
              "name": "#「青春印象」有没有一首歌瞬间勾起你的回忆#",
              "alg": "groupTagRank"
            },
            {
              "id": 94113,
              "name": "杨丞琳",
              "alg": "groupTagRank"
            },
            {
              "id": 259129,
              "name": "热歌放映厅",
              "alg": "groupTagRank"
            },
            {
              "id": 59101,
              "name": "华语现场",
              "alg": "groupTagRank"
            },
            {
              "id": 57110,
              "name": "饭拍现场",
              "alg": "groupTagRank"
            },
            {
              "id": 57108,
              "name": "流行现场",
              "alg": "groupTagRank"
            },
            {
              "id": 1100,
              "name": "音乐现场",
              "alg": "groupTagRank"
            },
            {
              "id": 58100,
              "name": "现场",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "左边",
              "id": 22740077,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 10199,
                  "name": "杨丞琳",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "600902000005314891",
              "fee": 8,
              "v": 22,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 2088097,
                "name": "異想天開(新歌+精選)",
                "picUrl": "http://p1.music.126.net/Bs1QSZie0p1yM6hH_eqw-w==/758663023207500.jpg",
                "tns": [],
                "pic": 758663023207500
              },
              "dt": 274000,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 10998748,
                "vd": -2
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 6599309,
                "vd": -2
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 4399590,
                "vd": -2
              },
              "a": null,
              "cd": "1",
              "no": 32,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 1,
              "s_id": 0,
              "cp": 7001,
              "mv": 5297574,
              "rtype": 0,
              "rurl": null,
              "mst": 9,
              "publishTime": 1271952000007,
              "privilege": {
                "id": 22740077,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 320000,
                "fl": 128000,
                "toast": false,
                "flag": 4,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "590ACD3C12A52A9955D68CD9B2965603",
          "durationms": 179235,
          "playTime": 2666,
          "praisedCount": 8,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_DD6094237D23485BD4B00C0E63F314B5",
          "coverUrl": "https://p1.music.126.net/QsjY-gGiKojhVfczgpQHAA==/109951164954253670.jpg",
          "height": 720,
          "width": 1280,
          "title": "【渐行渐远的风不再歌唱】二次元爱恋踩点剪辑",
          "description": null,
          "commentCount": 8,
          "shareCount": 6,
          "resolutions": [
            {
              "resolution": 240,
              "size": 3803388
            },
            {
              "resolution": 480,
              "size": 5342302
            },
            {
              "resolution": 720,
              "size": 6979258
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 1000000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/5ndYw0hnFH9gmCKFIOqqMA==/109951164640195810.jpg",
            "accountStatus": 0,
            "gender": 1,
            "city": 1005500,
            "birthday": 968774400000,
            "userId": 538696372,
            "userType": 201,
            "nickname": "知語不知秋",
            "signature": "“大家好，初次见面，我是阿秋”\n（明娜桑，哈吉呢马西跌，阿秋蝶斯）\n一个喜欢ACG的精分系“蓝孩子”\n承蒙厚爱，\n愿为大家提供一个小窝\n现实中累了，就来这歇歇吧\n(*๓´╰╯`๓)♡",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164640195800,
            "backgroundImgId": 109951164354928940,
            "backgroundUrl": "http://p1.music.126.net/qNyP_3LFXMrhhbKe74vAKA==/109951164354928940.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": {
              "1": "二次元原创视频达人"
            },
            "djStatus": 0,
            "vipType": 11,
            "remarkName": null,
            "backgroundImgIdStr": "109951164354928940",
            "avatarImgIdStr": "109951164640195810",
            "avatarImgId_str": "109951164640195810"
          },
          "urlInfo": {
            "id": "DD6094237D23485BD4B00C0E63F314B5",
            "url": "http://vodkgeyttp9.vod.126.net/cloudmusic/4sFIUskj_2987180318_shd.mp4?ts=1589637669&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=dNZgdoOGnpuXrEWVaabgLxdFFZzATSoa&sign=20c17cedc80a8d06f122fe7a3c2bb541&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUJlOHUAF0KZfRhBqApkIJ9148guIHIiJ2Tq6CoDJ6NgC6URdIIRsW1+SweWh18G4VoifIqYIeV0DIXpQ6xLh41Z8A+TFC17PMqGJmusUG3IeKjQWVdbbeRqso9OxU05abLMbKh3sJmE7osnolMLEIbna+LSrClrSPlpuo7TYL0Z04kjdWqp7hShDjlBzeRTyy",
            "size": 6979258,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 720
          },
          "videoGroup": [
            {
              "id": 259129,
              "name": "热歌放映厅",
              "alg": "groupTagRank"
            },
            {
              "id": 59115,
              "name": "动漫混剪",
              "alg": "groupTagRank"
            },
            {
              "id": 57104,
              "name": "ACG音乐",
              "alg": "groupTagRank"
            },
            {
              "id": 16128,
              "name": "日漫",
              "alg": "groupTagRank"
            },
            {
              "id": 3102,
              "name": "二次元",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "DD6094237D23485BD4B00C0E63F314B5",
          "durationms": 73685,
          "playTime": 3011,
          "praisedCount": 28,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_D87787F1ABDA6DD3D7A5789481C4948B",
          "coverUrl": "https://p1.music.126.net/QanE7Pvo5qbInlV2tUSCRQ==/109951164907580475.jpg",
          "height": 1080,
          "width": 1920,
          "title": "我一言难尽，忍不住伤心《一言难尽》",
          "description": "我一言难尽，忍不住伤心《一言难尽》",
          "commentCount": 2,
          "shareCount": 12,
          "resolutions": [
            {
              "resolution": 240,
              "size": 17129760
            },
            {
              "resolution": 480,
              "size": 26488013
            },
            {
              "resolution": 720,
              "size": 37024813
            },
            {
              "resolution": 1080,
              "size": 79816061
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 370000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/HBaDvJQA-cIQlNO1qs_EFA==/109951164901152708.jpg",
            "accountStatus": 0,
            "gender": 2,
            "city": 370600,
            "birthday": 1520006400000,
            "userId": 3288967972,
            "userType": 0,
            "nickname": "这个香菜不太香",
            "signature": "",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164901152700,
            "backgroundImgId": 109951162868126480,
            "backgroundUrl": "http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": null,
            "djStatus": 0,
            "vipType": 0,
            "remarkName": null,
            "backgroundImgIdStr": "109951162868126486",
            "avatarImgIdStr": "109951164901152708",
            "avatarImgId_str": "109951164901152708"
          },
          "urlInfo": {
            "id": "D87787F1ABDA6DD3D7A5789481C4948B",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/wufs59RV_2971659307_uhd.mp4?ts=1589637669&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=EApVXOwnXufXrMrdLxOcHdqLbBDWlaGU&sign=d76da85c0bcb048f2ee0e0f6bac4d409&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUJlOHUAF0KZfRhBqApkIJ9148guIHIiJ2Tq6CoDJ6NgC6URdIIRsW1+SweWh18G4VoifIqYIeV0DIXpQ6xLh41Z8A+TFC17PMqGJmusUG3IeKjQWVdbbeRqso9OxU05abLMbKh3sJmE7osnolMLEIbna+LSrClrSPlpuo7TYL0Z04kjdWqp7hShDjlBzeRTyy",
            "size": 79816061,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 1080
          },
          "videoGroup": [
            {
              "id": -26926,
              "name": "#经典老歌 【 70-80-90 精选 】#",
              "alg": "groupTagRank"
            },
            {
              "id": 259132,
              "name": "云村放映厅",
              "alg": "groupTagRank"
            },
            {
              "id": 259129,
              "name": "热歌放映厅",
              "alg": "groupTagRank"
            },
            {
              "id": 13116,
              "name": "爱情",
              "alg": "groupTagRank"
            },
            {
              "id": 76106,
              "name": "饭制混剪",
              "alg": "groupTagRank"
            },
            {
              "id": 3107,
              "name": "混剪",
              "alg": "groupTagRank"
            },
            {
              "id": 24127,
              "name": "电影",
              "alg": "groupTagRank"
            },
            {
              "id": 1105,
              "name": "最佳饭制",
              "alg": "groupTagRank"
            },
            {
              "id": 3100,
              "name": "影视",
              "alg": "groupTagRank"
            },
            {
              "id": 58101,
              "name": "听BGM",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "一言难尽",
              "id": 190690,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 6469,
                  "name": "张宇",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "600902000000818296",
              "fee": 8,
              "v": 27,
              "crbt": "b22bf03548f1da6bfe7371f684aebbd6",
              "cf": "",
              "al": {
                "id": 19264,
                "name": "一言难尽",
                "picUrl": "http://p1.music.126.net/tzG5F3Icr18fmTI8iInWuw==/18537766046302719.jpg",
                "tns": [],
                "pic_str": "18537766046302719",
                "pic": 18537766046302720
              },
              "dt": 253858,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 10147013,
                "vd": -0.000265076
              },
              "m": {
                "br": 160000,
                "fid": 0,
                "size": 5074034,
                "vd": -0.000265076
              },
              "l": {
                "br": 96000,
                "fid": 0,
                "size": 3044842,
                "vd": -0.000265076
              },
              "a": null,
              "cd": "1",
              "no": 1,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 2,
              "s_id": 0,
              "cp": 564038,
              "mv": 5361500,
              "rtype": 0,
              "rurl": null,
              "mst": 9,
              "publishTime": 801936000000,
              "privilege": {
                "id": 190690,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 999000,
                "fl": 128000,
                "toast": false,
                "flag": 260,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "D87787F1ABDA6DD3D7A5789481C4948B",
          "durationms": 244565,
          "playTime": 17329,
          "praisedCount": 17,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_44E10C16165AD91F8AB0C57CFD12D02B",
          "coverUrl": "https://p2.music.126.net/x5eZy2FOhsF_DFSSXF2QrQ==/109951164973054088.jpg",
          "height": 1080,
          "width": 1920,
          "title": "巴塞罗那&里奥·梅西&燃泪混剪—1V6盘带进球盛宴",
          "description": "#超燃计划# 我作为球迷球龄20年，短短十分钟不足以描述我对梅西10多年的感情。看完精彩单枪匹马进球集锦以及梅西的故事，让你对梅球王有重新的认识。你们是否也深埋梅西呢？",
          "commentCount": 0,
          "shareCount": 10,
          "resolutions": [
            {
              "resolution": 240,
              "size": 27269164
            },
            {
              "resolution": 480,
              "size": 42361599
            },
            {
              "resolution": 720,
              "size": 58405306
            },
            {
              "resolution": 1080,
              "size": 103503204
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 330000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/crbtlwrxxL7K8UxpvrU2bw==/109951163259894524.jpg",
            "accountStatus": 0,
            "gender": 1,
            "city": 330100,
            "birthday": 818352000000,
            "userId": 377210063,
            "userType": 201,
            "nickname": "DJSageZ",
            "signature": "唯有Progressive House风格最震撼，唯有A神是初恋和信仰，唯有铁叔是传承，唯有小马丁是大气。电音粉们会用心欣赏每首DJ的电音作品，戴上耳麦闭上眼 五感去感受电音次元力量🙋🙋🙋",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951163259894530,
            "backgroundImgId": 19063332602554332,
            "backgroundUrl": "http://p1.music.126.net/CQaI9-geewRjLTGgA6yfVg==/19063332602554331.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": {
              "1": "影视视频达人"
            },
            "djStatus": 0,
            "vipType": 11,
            "remarkName": null,
            "backgroundImgIdStr": "19063332602554331",
            "avatarImgIdStr": "109951163259894524",
            "avatarImgId_str": "109951163259894524"
          },
          "urlInfo": {
            "id": "44E10C16165AD91F8AB0C57CFD12D02B",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/8E71MXYX_2993504901_uhd.mp4?ts=1589637669&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=BBwTXkZcfnoTbmNcuhipAzRxOwkFLGRA&sign=f1c3e14f98c502c8c680c451e221c829&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUJlOHUAF0KZfRhBqApkIJ9148guIHIiJ2Tq6CoDJ6NgC6URdIIRsW1+SweWh18G4VoifIqYIeV0DIXpQ6xLh41Z8A+TFC17PMqGJmusUG3IeKjQWVdbbeRqso9OxU05abLMbKh3sJmE7osnolMLEIbna+LSrClrSPlpuo7TYL0Z3fIR/DOLq7uPXUr4Y/ehEN",
            "size": 103503204,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 1080
          },
          "videoGroup": [
            {
              "id": -27041,
              "name": "#车载系【一】开车必备#",
              "alg": "groupTagRank"
            },
            {
              "id": 97114,
              "name": "足球",
              "alg": "groupTagRank"
            },
            {
              "id": 78101,
              "name": "体育运动",
              "alg": "groupTagRank"
            },
            {
              "id": 259129,
              "name": "热歌放映厅",
              "alg": "groupTagRank"
            },
            {
              "id": 14176,
              "name": "体育",
              "alg": "groupTagRank"
            },
            {
              "id": 3107,
              "name": "混剪",
              "alg": "groupTagRank"
            },
            {
              "id": 58101,
              "name": "听BGM",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "L-Holidays (Radio Edit)",
              "id": 28136576,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 42785,
                  "name": "Remady",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "",
              "fee": 0,
              "v": 140,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 2734474,
                "name": "Kontor Top Of The Clubs - The Biggest Hits Of The Year Mmxiii",
                "picUrl": "http://p1.music.126.net/KrEcludz4XGTapcK2riAvg==/2529976255529203.jpg",
                "tns": [],
                "pic": 2529976255529203
              },
              "dt": 182000,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 7319754,
                "vd": -34300
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 4391950,
                "vd": -32200
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 2928048,
                "vd": -31000
              },
              "a": null,
              "cd": "1",
              "no": 54,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 2,
              "s_id": 0,
              "cp": 0,
              "mv": 0,
              "rtype": 0,
              "rurl": null,
              "mst": 9,
              "publishTime": 1383840000007,
              "privilege": {
                "id": 28136576,
                "fee": 0,
                "payed": 0,
                "st": 0,
                "pl": 320000,
                "dl": 320000,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 320000,
                "fl": 320000,
                "toast": false,
                "flag": 128,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "44E10C16165AD91F8AB0C57CFD12D02B",
          "durationms": 180522,
          "playTime": 1457,
          "praisedCount": 7,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_84884B97F0DDA92CB43272BA09D93474",
          "coverUrl": "https://p1.music.126.net/TfiBuFLZm_TyT-sqmQuKfQ==/109951164946839935.jpg",
          "height": 1080,
          "width": 1920,
          "title": "Water Fountain|当你听到这首歌的时候，回忆到了什么？",
          "description": "我原本以为，我喜欢你是因为你长的好看。\n后来我才发现，这个世界上比你好看的多的去了，\n但我还是最喜欢你。\n因为是你。",
          "commentCount": 0,
          "shareCount": 0,
          "resolutions": [
            {
              "resolution": 240,
              "size": 18109683
            },
            {
              "resolution": 480,
              "size": 29499105
            },
            {
              "resolution": 720,
              "size": 42839980
            },
            {
              "resolution": 1080,
              "size": 78272412
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 130000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/mwLS_BZr8G2jJKIKfQwvfQ==/109951164864995169.jpg",
            "accountStatus": 0,
            "gender": 0,
            "city": 130700,
            "birthday": 988992000000,
            "userId": 3279643657,
            "userType": 201,
            "nickname": "小胡子音乐儿",
            "signature": "",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164864995170,
            "backgroundImgId": 109951162868128400,
            "backgroundUrl": "http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": {
              "1": "影视视频达人"
            },
            "djStatus": 0,
            "vipType": 0,
            "remarkName": null,
            "backgroundImgIdStr": "109951162868128395",
            "avatarImgIdStr": "109951164864995169",
            "avatarImgId_str": "109951164864995169"
          },
          "urlInfo": {
            "id": "84884B97F0DDA92CB43272BA09D93474",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/s4aHwccR_2983511819_uhd.mp4?ts=1589637669&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=nFfoejFeItlbKaosswLdpdOOHJhaQODK&sign=d085fbc5ef6e8386ebddab0e4b05f72c&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUJlOHUAF0KZfRhBqApkIJ9148guIHIiJ2Tq6CoDJ6NgC6URdIIRsW1+SweWh18G4VoifIqYIeV0DIXpQ6xLh41Z8A+TFC17PMqGJmusUG3IeKjQWVdbbeRqso9OxU05abLMbKh3sJmE7osnolMLEIbna+LSrClrSPlpuo7TYL0Z04kjdWqp7hShDjlBzeRTyy",
            "size": 78272412,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 1080
          },
          "videoGroup": [
            {
              "id": -34189,
              "name": "#Zoey BGM#",
              "alg": "groupTagRank"
            },
            {
              "id": 259129,
              "name": "热歌放映厅",
              "alg": "groupTagRank"
            },
            {
              "id": 59115,
              "name": "动漫混剪",
              "alg": "groupTagRank"
            },
            {
              "id": 57104,
              "name": "ACG音乐",
              "alg": "groupTagRank"
            },
            {
              "id": 16128,
              "name": "日漫",
              "alg": "groupTagRank"
            },
            {
              "id": 3102,
              "name": "二次元",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "Water Fountain",
              "id": 1325350637,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 1028104,
                  "name": "Alec Benjamin",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "",
              "fee": 1,
              "v": 173,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 74408260,
                "name": "Narrated For You",
                "picUrl": "http://p1.music.126.net/sgov4rBs12EN8IkmQL1fYA==/109951163787355382.jpg",
                "tns": [],
                "pic_str": "109951163787355382",
                "pic": 109951163787355380
              },
              "dt": 218932,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 8758378,
                "vd": -2
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 5255044,
                "vd": -2
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 3503377,
                "vd": -2
              },
              "a": null,
              "cd": "01",
              "no": 2,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 1,
              "s_id": 0,
              "cp": 7002,
              "mv": 10834354,
              "rtype": 0,
              "rurl": null,
              "mst": 9,
              "publishTime": 1542297600000,
              "privilege": {
                "id": 1325350637,
                "fee": 1,
                "payed": 0,
                "st": 0,
                "pl": 0,
                "dl": 0,
                "sp": 0,
                "cp": 0,
                "subp": 0,
                "cs": false,
                "maxbr": 320000,
                "fl": 0,
                "toast": false,
                "flag": 1284,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "84884B97F0DDA92CB43272BA09D93474",
          "durationms": 209280,
          "playTime": 369,
          "praisedCount": 2,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_56E7308A8EEC14FA8CD8C55B9F93A6A7",
          "coverUrl": "https://p2.music.126.net/Topznw-hngpARI-YUrrh7Q==/109951164948007510.jpg",
          "height": 1080,
          "width": 1920,
          "title": "节奏把控，史诗画面级卡点【指环王】#超燃计划#",
          "description": "我知道美好的日子总会来到\n阳光终会降临到我身上\n愿以后不会再为今天而流泪感伤\n不用担心我们 其实我一直挂念着你\n#超燃计划#",
          "commentCount": 2,
          "shareCount": 1,
          "resolutions": [
            {
              "resolution": 240,
              "size": 12828383
            },
            {
              "resolution": 480,
              "size": 21379472
            },
            {
              "resolution": 720,
              "size": 31045772
            },
            {
              "resolution": 1080,
              "size": 52029541
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 370000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/0l7QstEUdkytHI-WlMd7aA==/109951164517476142.jpg",
            "accountStatus": 0,
            "gender": 2,
            "city": 370200,
            "birthday": 918576000000,
            "userId": 95850992,
            "userType": 201,
            "nickname": "有一只神秘",
            "signature": "“你这一生有为什么而拼尽全力过吗”\n“没有哦”\n“那现在有了”",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164517476140,
            "backgroundImgId": 18553159208927424,
            "backgroundUrl": "http://p1.music.126.net/zAFFC23wRmsaeNiQ6ykE0Q==/18553159208927422.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": {
              "1": "二次元原创视频达人"
            },
            "djStatus": 0,
            "vipType": 11,
            "remarkName": null,
            "backgroundImgIdStr": "18553159208927422",
            "avatarImgIdStr": "109951164517476142",
            "avatarImgId_str": "109951164517476142"
          },
          "urlInfo": {
            "id": "56E7308A8EEC14FA8CD8C55B9F93A6A7",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/L5MeUpyy_2984813272_uhd.mp4?ts=1589637669&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=FtbKGNDPVjILTxbISiTzDxAzjKeAtZop&sign=fa15d430e334066418da742fae122b9b&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUJlOHUAF0KZfRhBqApkIJ9148guIHIiJ2Tq6CoDJ6NgC6URdIIRsW1+SweWh18G4VoifIqYIeV0DIXpQ6xLh41Z8A+TFC17PMqGJmusUG3IeKjQWVdbbeRqso9OxU05abLMbKh3sJmE7osnolMLEIbna+LSrClrSPlpuo7TYL0Z3fIR/DOLq7uPXUr4Y/ehEN",
            "size": 52029541,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 1080
          },
          "videoGroup": [
            {
              "id": 259129,
              "name": "热歌放映厅",
              "alg": "groupTagRank"
            },
            {
              "id": 13172,
              "name": "欧美",
              "alg": "groupTagRank"
            },
            {
              "id": 13225,
              "name": "剧情",
              "alg": "groupTagRank"
            },
            {
              "id": 76106,
              "name": "饭制混剪",
              "alg": "groupTagRank"
            },
            {
              "id": 3107,
              "name": "混剪",
              "alg": "groupTagRank"
            },
            {
              "id": 24127,
              "name": "电影",
              "alg": "groupTagRank"
            },
            {
              "id": 1105,
              "name": "最佳饭制",
              "alg": "groupTagRank"
            },
            {
              "id": 3100,
              "name": "影视",
              "alg": "groupTagRank"
            },
            {
              "id": 58101,
              "name": "听BGM",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "Better Days",
              "id": 1433904258,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 98105,
                  "name": "OneRepublic",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "",
              "fee": 8,
              "v": 4,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 86823819,
                "name": "Better Days",
                "picUrl": "http://p1.music.126.net/AqZeiCIehJg5oD1tcb42Zg==/109951164839030963.jpg",
                "tns": [],
                "pic_str": "109951164839030963",
                "pic": 109951164839030960
              },
              "dt": 144561,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 5783554,
                "vd": -59481
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 3470150,
                "vd": -56912
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 2313448,
                "vd": -55294
              },
              "a": null,
              "cd": "01",
              "no": 1,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 1,
              "s_id": 0,
              "cp": 7003,
              "mv": 10927275,
              "rtype": 0,
              "rurl": null,
              "mst": 9,
              "publishTime": 1585065600000,
              "privilege": {
                "id": 1433904258,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 320000,
                "fl": 128000,
                "toast": false,
                "flag": 260,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "56E7308A8EEC14FA8CD8C55B9F93A6A7",
          "durationms": 144768,
          "playTime": 2709,
          "praisedCount": 14,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_20DF07F0835A9BBAC8E2150407706402",
          "coverUrl": "https://p2.music.126.net/PKCNxd8_p8taL0AaqMsJeQ==/109951164908860043.jpg",
          "height": 1920,
          "width": 1080,
          "title": "【Momentum】相遇，你，是我最初的梦想",
          "description": "你的那段岁月\n是我最后的奇迹 \n让每一个人 \n都会渴望有人陪伴的季节",
          "commentCount": 0,
          "shareCount": 0,
          "resolutions": [
            {
              "resolution": 240,
              "size": 10315270
            },
            {
              "resolution": 480,
              "size": 16452381
            },
            {
              "resolution": 720,
              "size": 24222876
            },
            {
              "resolution": 1080,
              "size": 47606017
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 130000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/lQhs-4MfUI_YJ6pN5Zwg6A==/109951164865028543.jpg",
            "accountStatus": 0,
            "gender": 0,
            "city": 130300,
            "birthday": 981043200000,
            "userId": 3279648710,
            "userType": 201,
            "nickname": "大胡子音乐儿",
            "signature": "",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164865028540,
            "backgroundImgId": 109951162868126480,
            "backgroundUrl": "http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": {
              "1": "影视视频达人"
            },
            "djStatus": 0,
            "vipType": 0,
            "remarkName": null,
            "backgroundImgIdStr": "109951162868126486",
            "avatarImgIdStr": "109951164865028543",
            "avatarImgId_str": "109951164865028543"
          },
          "urlInfo": {
            "id": "20DF07F0835A9BBAC8E2150407706402",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/fJwcgZ7Y_2971852198_uhd.mp4?ts=1589637669&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=yHlRtugdeEYKxEhlVtqADbFRlVvIxXsa&sign=5e7810c56e63d8db979ec5b16fbc8b94&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUJlOHUAF0KZfRhBqApkIJ9148guIHIiJ2Tq6CoDJ6NgC6URdIIRsW1+SweWh18G4VoifIqYIeV0DIXpQ6xLh41Z8A+TFC17PMqGJmusUG3IeKjQWVdbbeRqso9OxU05abLMbKh3sJmE7osnolMLEIbna+LSrClrSPlpuo7TYL0Z3fIR/DOLq7uPXUr4Y/ehEN",
            "size": 47606017,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 1080
          },
          "videoGroup": [
            {
              "id": -20309,
              "name": "#百大DJ 音乐节热播EDM 1#",
              "alg": "groupTagRank"
            },
            {
              "id": 259129,
              "name": "热歌放映厅",
              "alg": "groupTagRank"
            },
            {
              "id": 59115,
              "name": "动漫混剪",
              "alg": "groupTagRank"
            },
            {
              "id": 57104,
              "name": "ACG音乐",
              "alg": "groupTagRank"
            },
            {
              "id": 16128,
              "name": "日漫",
              "alg": "groupTagRank"
            },
            {
              "id": 3102,
              "name": "二次元",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "Momentum",
              "id": 491943301,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 139072,
                  "name": "Don Diablo",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": null,
              "fee": 1,
              "v": 22,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 35793335,
                "name": "Momentum",
                "picUrl": "http://p1.music.126.net/Gnxw4Qwgr20aDgsTg1fxdA==/109951163244417477.jpg",
                "tns": [],
                "pic_str": "109951163244417477",
                "pic": 109951163244417470
              },
              "dt": 169004,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 6762623,
                "vd": -53600
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 4057591,
                "vd": -51100
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 2705075,
                "vd": -49699
              },
              "a": null,
              "cd": "1",
              "no": 1,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 2,
              "s_id": 0,
              "cp": 7002,
              "mv": 5603105,
              "rtype": 0,
              "rurl": null,
              "mst": 9,
              "publishTime": 1500566400007,
              "privilege": {
                "id": 491943301,
                "fee": 1,
                "payed": 0,
                "st": 0,
                "pl": 0,
                "dl": 0,
                "sp": 0,
                "cp": 0,
                "subp": 0,
                "cs": false,
                "maxbr": 999000,
                "fl": 0,
                "toast": false,
                "flag": 1284,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "20DF07F0835A9BBAC8E2150407706402",
          "durationms": 169237,
          "playTime": 2066,
          "praisedCount": 6,
          "praised": false,
          "subscribed": false
        }
      }
    ]
    let arr = [1,2,3,4]
    // 2. 将获取到数据同之前的数据合并
    setTimeout(() => {
      let videoList = this.data.videoList;
      videoList = videoList.concat(newVideoList)
  
      wx.hideLoading()
      // 3. 更新状态
      this.setData({
        videoList
      })
    }, 2000)
  },
  
  handlePlay(event){
    console.log('play播放');
    let {id} = event.currentTarget;
    // 找到上一个播放video的上下文对象videoContext
    // stop()
    // 上一个video的上下文对象
    // 当本地的视频id和上一下的视频id不是同一个id的时候
    // this.vid !== event.currentTarget.id && this.videoContext && this.videoContext.stop();
    if(this.vid !== id){
      if(this.videoContext){
        this.videoContext.stop();
      }
    }
  
    // 修改videoId视频id
    this.setData({
      videoId: id
    })
    
    this.vid = id;
    this.videoContext = wx.createVideoContext(id);
    this.videoContext.play()
    // this.videoContext.stop();
  },
  
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 缺点： 针对于整个页面的
    console.log('页面滑到底部了。。。');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('用户转发分享');
    // 自定义转发内容
    return {
      title: '这是我自定义的转发内容',
      path: '/pages/video/video',
      imageUrl: '/static/images/nvsheng.jpg'
    }
  }
})
