<template>
	<view class="content">
		<view class="result_group">
			<text class="text_attr">code： {{shanyan_code}}</text>
			<text class="text_attr">result: {{shanyan_result}}</text>
		</view>
		<view class="tableTitle">
			<text class="midText">一键登录功能</text>
		</view>
		<view class="action-row">
			<view class="button_attr">
				<button type="primary" @tap="init">闪验SDK 初始化</button>
			</view>
			<view class="button_attr">
				<button type="primary" @tap="getPhoneInfo">闪验SDK 预取号</button>
			</view>
		</view>
		<view class="action-row">
			<view class="button_attr">
				<button type="primary" @tap="setAuthCJSThemeConfig">授权页 沉浸样式</button>
			</view>
			<view class="button_attr">
				<button type="primary" @tap="setAuthDialogThemeConfig">授权页 弹窗样式</button>
			</view>
		</view>
		<view class="button_attr">
			<button type="primary" @tap="qulickLogin">闪验SDK 拉起授权页</button>
		</view>
		<view class="tableTitle">
			<text class="midText">本机号认证功能</text>
		</view>
		<view class="button_attr">
			<button type="primary" @tap="init">本机认证 初始化</button>
		</view>
		<view class="button_attr">
			<button type="primary" @tap="startAuthentication">本机认证 获取token</button>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import mInput from '../../components/m-input.vue'

	const shanYanSDKModule = uni.requireNativePlugin('CLSDK-ShanYanSDKModule'); //调用

	export default {
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
		},
		components: {
			mInput
		},
		data() {
			return {
				account: '',
				shanyan_code: '状态码',
				shanyan_result: '信息描述',
				
				ios_uiConfigure: {}
			}
		},
		computed: mapState(['forcedLogin']),
		methods: {
			init() {
				//初始化建议在app启动时调用，即App.vue的onLaunch方法中
				uni.showLoading({
					mask: true,
				})
				let platform = uni.getSystemInfoSync().platform;
				let appid;
				if (platform == 'android') {
					appid = 'loXN4jDs';//appID与包名绑定
				} else if (platform == 'ios') {
					appid = 'iOSappID';//appID与bundleID绑定
				}
				shanYanSDKModule.setDebug(true),
				//闪验SDK 初始化
				shanYanSDKModule.init({
					appid: appid,
				}, result => {
					uni.hideLoading();
					this.shanyan_code = JSON.stringify(result.code);
					this.shanyan_result = JSON.stringify(result);
					console.log(JSON.stringify(result));
				});

			},
			getPhoneInfo() {
				uni.showLoading({
					mask: true,
				})
				
				//实际预取号建议提前调用，如将要调起授权页的前置页面的onLoad中、个人中心页面的onLoad等可预期会触发一键登录的时机
				
				let platform = uni.getSystemInfoSync().platform;
				if (platform == 'android') {
					//闪验SDK 预取号
					shanYanSDKModule.getPhoneInfo((result) => {
						uni.hideLoading();
						this.shanyan_code = JSON.stringify(result.code);
						this.shanyan_result = JSON.stringify(result.result);
						console.log(JSON.stringify(result));
					});
				} else if (platform == 'ios') {
					//闪验SDK 预取号
					shanYanSDKModule.preGetPhonenumber((complete) => {
						uni.hideLoading();
						this.shanyan_code = JSON.stringify(complete.code);
						this.shanyan_result = JSON.stringify(complete);
						console.log(JSON.stringify(complete));
					});
				}
			},
			setAuthCJSThemeConfig() {
				
				let platform = uni.getSystemInfoSync().platform;
				if (platform == 'android') {
					//Android 全屏模式
					
					//闪验SDK  配置授权页方法
					shanYanSDKModule.setAuthThemeConfig({
						//授权页已有元素配置
						uiConfig: {
							setAuthBGImgPath: "static/eb9a0dae18491990a43fe02832d3cafa.jpg",
							setNavColor: '#ff0000',
							setLogoImgPath: 'static/logo_shanyan_text.png',
							setAppPrivacyOne: {
								title: '闪验用户协议',
								url: "https://api.253.com/api_doc/yin-si-zheng-ce/wei-hu-wang-luo-an-quan-sheng-ming.html"
							},
							setAppPrivacyTwo: {
								title: '闪验隐私政策',
								url: "https://api.253.com/api_doc/yin-si-zheng-ce/ge-ren-xin-xi-bao-hu-sheng-ming.html"
							},
							setAppPrivacyThree: {
								title: '服务协议',
								url: "https://api.253.com/api_doc/yin-si-zheng-ce/ge-ren-xin-xi-bao-hu-sheng-ming.html"
							},
							setPrivacyState: false,
							setPrivacyText: {
								privacyTextOne: '登录即同意',
								privacyTextTwo: "、",
								privacyTextThree: '、',
								privacyTextFour: '和',
								privacyTextFive: '并授权登录'
							},
					
						}, //授权页添加自定义控件元素
						widgets: {
							widget1: {
								widgetId: "customView_one",
								type: "TextView",
								left: "",
								top: "300",
								right: "",
								bottom: "",
								width: "",
								height: "30",
								textContent: "自定义控件1（点击不销毁授权页）",
								textFont: "13",
								textColor: "#cc0000",
								backgroundColor: "#ffffff",
								isFinish: "false"
							},
							widget2: {
								widgetId: "customView_two",
								type: "TextView",
								left: "",
								top: "360",
								right: "",
								bottom: "",
								width: "",
								height: "30",
								textContent: "自定义控件2（点击销毁授权页）",
								textFont: "13",
								textColor: "#cc0000",
								backgroundColor: "#ffffff",
								isFinish: "true"
							},
							widget3: {
								widgetId: "customView_three",
								type: "ImageView",
								left: "",
								top: "400",
								right: "",
								bottom: "",
								width: "",
								height: "",
								backgroundImgPath: "static/qq.png",
								isFinish: "true"
							}
						},
					}, result => {
						console.log(JSON.stringify(result));
					});
					
					this.shanyan_code = 1000;
					this.shanyan_result = "授权页配置完成";
					
				}else if (platform == 'ios') {
					
					//iOS 全屏模式
				
					let screenWidth_Portrait = plus.screen.resolutionWidth; //竖屏宽
					
					var screenScale = screenWidth_Portrait / 375.0; //相对iphone6屏幕
					if (screenScale > 1) {
						screenScale = 1; //大屏的无需放大
					}
					
					//竖屏
					let clLayoutLogoTop_Portrait = screenScale * 60;
					let clLayoutLogoWidth_Portrait = 60 * screenScale;
					let clLayoutLogoHeight_Portrait = 60 * screenScale;
					let clLayoutLogoCenterX_Portrait = 0;
					
					let clLayoutPhoneCenterY_Portrait = -20 * screenScale;
					let clLayoutPhoneLeft_Portrait = 50 * screenScale;
					let clLayoutPhoneRight_Portrait = -50 * screenScale;
					let clLayoutPhoneHeight_Portrait = 20 * screenScale;
					
					let clLayoutLoginBtnCenterY_Portrait = clLayoutPhoneCenterY_Portrait + clLayoutPhoneHeight_Portrait * 0.5 *
						screenScale + 20 * screenScale + 15 * screenScale;
					let clLayoutLoginBtnHeight_Portrait = 30 * screenScale;
					let clLayoutLoginBtnLeft_Portrait = 70 * screenScale;
					let clLayoutLoginBtnRight_Portrait = -70 * screenScale;
					
					let clLayoutAppPrivacyLeft_Portrait = 40 * screenScale;
					let clLayoutAppPrivacyRight_Portrait = -40 * screenScale;
					let clLayoutAppPrivacyBottom_Portrait = 0 * screenScale;
					let clLayoutAppPrivacyHeight_Portrait = 45 * screenScale;
					
					let clLayoutSloganLeft_Portrait = 0;
					let clLayoutSloganRight_Portrait = 0;
					let clLayoutSloganHeight_Portrait = 15 * screenScale;
					let clLayoutSloganBottom_Portrait = clLayoutAppPrivacyBottom_Portrait - clLayoutAppPrivacyHeight_Portrait;
					
					//横屏 （如app本身不支持横屏，可不需设置横屏下UI配置）
					
					let clLayoutLogoWidth_Landscape = 60 * screenScale;
					let clLayoutLogoHeight_Landscape = 60 * screenScale;
					let clLayoutLogoCenterX_Landscape = 0;
					let clLayoutLogoTop_Landscape = 25 * screenScale;
					
					let clLayoutPhoneCenterY_Landscape = -20 * screenScale;
					let clLayoutPhoneLeft_Landscape = 50 * screenScale;
					let clLayoutPhoneRight_Landscape = -50 * screenScale;
					let clLayoutPhoneHeight_Landscape = 20 * screenScale;
					
					let clLayoutLoginBtnCenterY_Landscape = clLayoutPhoneCenterY_Landscape + clLayoutPhoneHeight_Landscape * 0.5 *
						screenScale + 20 * screenScale + 15 * screenScale;
					let clLayoutLoginBtnHeight_Landscape = 30 * screenScale;
					let clLayoutLoginBtnLeft_Landscape = 70 * screenScale;
					let clLayoutLoginBtnRight_Landscape = -70 * screenScale;
					
					let clLayoutAppPrivacyLeft_Landscape = 40 * screenScale;
					let clLayoutAppPrivacyRight_Landscape = -40 * screenScale;
					let clLayoutAppPrivacyBottom_Landscape = 0 * screenScale;
					let clLayoutAppPrivacyHeight_Landscape = 45 * screenScale;
					
					let clLayoutSloganLeft_Landscape = 0;
					let clLayoutSloganRight_Landscape = 0;
					let clLayoutSloganHeight_Landscape = 15 * screenScale;
					let clLayoutSloganBottom_Landscape = clLayoutAppPrivacyBottom_Landscape - clLayoutAppPrivacyHeight_Landscape;
					
					this.ios_uiConfigure = 
					{
					
						clBackgroundImg: "static/eb9a0dae18491990a43fe02832d3cafa.jpg",
									
						shouldAutorotate: true,
						/**支持方向
						 * 如支持横竖屏，需同时设置 clOrientationLayOutPortrait 和 clOrientationLayOutLandscape
						 * 0:UIInterfaceOrientationMaskPortrait
						 * 1:UIInterfaceOrientationMaskLandscapeLeft
						 * 2:UIInterfaceOrientationMaskLandscapeRight
						 * 3:UIInterfaceOrientationMaskPortraitUpsideDown
						 * 4:UIInterfaceOrientationMaskLandscape
						 * 5:UIInterfaceOrientationMaskAll
						 * 6:UIInterfaceOrientationMaskAllButUpsideDown
						 * */
						supportedInterfaceOrientations: 5,
									
						/**偏好方向 
						 * -1:UIInterfaceOrientationUnknown
						 * 0:UIInterfaceOrientationPortrait
						 * 1:UIInterfaceOrientationPortraitUpsideDown
						 * 2:UIInterfaceOrientationLandscapeLeft
						 * 3:UIInterfaceOrientationLandscapeRight
						 * */
						//偏好方向默认Portrait preferredInterfaceOrientationForPresentation: Number(5),
									
						clNavigationBackgroundClear: true, //导航栏透明
						clNavigationBackBtnImage: "static/img/close-white.png", //返回按钮图片
						clNavBackBtnAlimentRight: false, //返回按钮居右,设置自定义导航栏返回按钮时，以自定义为准
									
						clLogoImage: "static/img/logo_shanyan_text.png", //logo图片
									
						clLoginBtnText: "本机号一键登录", //一键登录按钮文字
						clLoginBtnTextColor: [1, 1, 1, 1.0], //rgba
						clLoginBtnBgColor: [0.2, 0.8, 0.2, 1.0], //rgba
						clLoginBtnTextFont: 15 * screenScale,
						clLoginBtnCornerRadius: 10,
						clLoginBtnBorderWidth: 0.5,
						clLoginBtnBorderColor: [0.1, 0.8, 0.1, 1.0], //rgba 
									
						clPhoneNumberFont: 20.0 * screenScale,
									
						clAppPrivacyColor: [
							[0.6, 0.6, 0.6, 1.0],
							[0, 1, 0, 1.0]
						], //2 item,commomTextColor and appPrivacyTextColor
						clAppPrivacyTextFont: 11 * screenScale,
						clAppPrivacyTextAlignment: 0, //0: center 1: left 2: right
						clAppPrivacyFirst: ["测试连接A", "https://www.baidu.com"], // 2 item, name and url
						clAppPrivacySecond: ["测试连接B", "https://www.sina.com"], // 2 item, name and url
									
						clCheckBoxVerticalAlignmentToAppPrivacyCenterY: true,
						clCheckBoxSize: [30 * screenScale, 30 * screenScale], //2 item, width and height
						clCheckBoxImageEdgeInsets: [2 * screenScale, 10 * screenScale, 13 * screenScale, 5 * screenScale], //4 item, top left bottom right
						clCheckBoxUncheckedImage: "static/img/checkBoxNor.png",
						clCheckBoxCheckedImage: "static/img/checkBoxSEL.png",
									
						clLoadingSize: [50, 50], //2 item, width and height
						clLoadingTintColor: [0.2, 0.8, 0.2, 1],
						clLoadingBackgroundColor: [1, 1, 1, 1],
						clLoadingCornerRadius: 5,
									
						//竖屏布局对象
						clOrientationLayOutPortrait: {

							//控件
							clLayoutLogoWidth: clLayoutLogoWidth_Portrait,
							clLayoutLogoHeight: clLayoutLogoHeight_Portrait,
							clLayoutLogoCenterX: clLayoutLogoCenterX_Portrait,
							clLayoutLogoTop: clLayoutLogoTop_Portrait,
									
							clLayoutPhoneCenterY: clLayoutPhoneCenterY_Portrait,
							clLayoutPhoneHeight: clLayoutPhoneHeight_Portrait,
							clLayoutPhoneLeft: clLayoutPhoneLeft_Portrait,
							clLayoutPhoneRight: clLayoutPhoneRight_Portrait,
									
							clLayoutLoginBtnCenterY: clLayoutLoginBtnCenterY_Portrait,
							clLayoutLoginBtnHeight: clLayoutLoginBtnHeight_Portrait,
							clLayoutLoginBtnLeft: clLayoutLoginBtnLeft_Portrait,
							clLayoutLoginBtnRight: clLayoutLoginBtnRight_Portrait,
									
							clLayoutAppPrivacyLeft: clLayoutAppPrivacyLeft_Portrait,
							clLayoutAppPrivacyRight: clLayoutAppPrivacyRight_Portrait,
							clLayoutAppPrivacyBottom: clLayoutAppPrivacyBottom_Portrait,
							clLayoutAppPrivacyHeight: clLayoutAppPrivacyHeight_Portrait,
									
							clLayoutSloganLeft: clLayoutSloganLeft_Portrait,
							clLayoutSloganRight: clLayoutSloganRight_Portrait,
							clLayoutSloganHeight: clLayoutSloganHeight_Portrait,
							clLayoutSloganBottom: clLayoutSloganBottom_Portrait,
						},
						//横屏布局对象 （如app本身不支持横屏，可不需设置横屏下UI配置对象）
						clOrientationLayOutLandscape: {
	
							//控件
							clLayoutLogoWidth: clLayoutLogoWidth_Landscape,
							clLayoutLogoHeight: clLayoutLogoHeight_Landscape,
							clLayoutLogoCenterX: clLayoutLogoCenterX_Landscape,
							clLayoutLogoTop: clLayoutLogoTop_Landscape,
									
							clLayoutPhoneCenterY: clLayoutPhoneCenterY_Landscape,
							clLayoutPhoneHeight: clLayoutPhoneHeight_Landscape,
							clLayoutPhoneLeft: clLayoutPhoneLeft_Landscape,
							clLayoutPhoneRight: clLayoutPhoneRight_Landscape,
									
							clLayoutLoginBtnCenterY: clLayoutLoginBtnCenterY_Landscape,
							clLayoutLoginBtnHeight: clLayoutLoginBtnHeight_Landscape,
							clLayoutLoginBtnLeft: clLayoutLoginBtnLeft_Landscape,
							clLayoutLoginBtnRight: clLayoutLoginBtnRight_Landscape,
									
							clLayoutAppPrivacyLeft: clLayoutAppPrivacyLeft_Landscape,
							clLayoutAppPrivacyRight: clLayoutAppPrivacyRight_Landscape,
							clLayoutAppPrivacyBottom: clLayoutAppPrivacyBottom_Landscape,
							clLayoutAppPrivacyHeight: clLayoutAppPrivacyHeight_Landscape,
									
							clLayoutSloganLeft: clLayoutSloganLeft_Landscape,
							clLayoutSloganRight: clLayoutSloganRight_Landscape,
							clLayoutSloganHeight: clLayoutSloganHeight_Landscape,
							clLayoutSloganBottom: clLayoutSloganBottom_Landscape,
						},
						//自定义控件
						widgets: {
							widget0: {
								widgetId: "customView_nav_left", //字符标记
								type: "Button", // 类型：Button：按钮，ImageView:图片 TextView:文本
								navPosition: "navleft", //按钮位置 navleft:导航栏左侧 ，navright:导航栏右侧（不设置默认添加到授权页上）,当设置为导航栏控件时，仅宽高可设置，位置固定
								textContent: "自定义左侧返回按钮",//文字
								textFont: 11,//字体
								textColor: [1,1,0,1],//文字颜色[r,g,b,a]
								// backgroundColor: [0,0,1,1],//控件背景色[r,g,b,a]
								image: "static/img/close-black.png",
				
								
								// cornerRadius: 10,//圆角，设置圆角时请设置masksToBounds:true
								// masksToBounds:true,//圆角相关
								
								isFinish: true,//点击销毁授权页,
								
								// clLayoutLeft:12,
								// clLayoutTop:60,
								// clLayoutRight:-12,
								// clLayoutBottom:-80,
								clLayoutWidth:40,
								clLayoutHeight:40,
								// clLayoutCenterX:0,
								// clLayoutCenterY:0,
							},
							widgetnavRight: {
								widgetId: "customView_nav_right", //字符标记
								type: "Button", // 类型：Button：按钮，ImageView:图片 TextView:文本
								navPosition: "navright", //按钮位置 navleft:导航栏左侧 ，navright:导航栏右侧（不设置默认添加到授权页上）,当设置为导航栏控件时，仅宽高可设置，位置固定
								textContent: "自定义控件1（点击销毁授权页）",//文字
								textFont: 13,//字体
								textColor: [0,1,0,1],//文字颜色[r,g,b,a]
								backgroundColor: [0,0,1,1],//控件背景色[r,g,b,a]
								image: "static/img/checkbox-multiple-ma.png",
								
								cornerRadius: 10,//圆角，设置圆角时请设置masksToBounds:true
								masksToBounds:true,//圆角相关
								
								isFinish: true,//点击销毁授权页,
								
								// clLayoutLeft:12,
								// clLayoutTop:60,
								// clLayoutRight:-12,
								// clLayoutBottom:-80,
								clLayoutWidth:60,
								clLayoutHeight:40,
								// clLayoutCenterX:0,
								// clLayoutCenterY:0,
							},
							widget1: {
								widgetId: "customView_one", //字符标记
								type: "Button", // 类型：Button：按钮，ImageView:图片 TextView:文本
								textContent: "自定义控件34（点击销毁授权页）",//文字
								textFont: 13,//字体
								textColor: [0,1,0,1],//文字颜色[r,g,b,a]
								backgroundColor: [0,0,1,1],//控件背景色[r,g,b,a]
								// image: "static/img/logo_shanyan_text.png",

								
								cornerRadius: 10,//圆角，设置圆角时请设置masksToBounds:true
								masksToBounds:true,//圆角相关
								
								// isFinish: true,//点击销毁授权页,
								
								// clLayoutLeft:12,
								// clLayoutTop:60,
								// clLayoutRight:-12,
								clLayoutBottom:-50,
								clLayoutWidth:180,
								clLayoutHeight:50,
								clLayoutCenterX:0,
								// clLayoutCenterY:0,
							},
							widget2: {
								widgetId: "customView_two", //字符标记
								type: "TextView", // 类型：Button：按钮，ImageView:图片 TextView:文本
								textContent: "自定义控件文本自定义控件文本自定义控件文本自定义控件文本自定义控件文本自定义控件文本自定义控件文本",//文字
								textFont: 10,//字体
								textColor: [1,0.5,0.6,1],//文字颜色[r,g,b,a]
								backgroundColor: [0,1,0,1],//控件背景色[r,g,b,a]
								numberOfLines:0, //行数：默认单行， 0:无限，自动换行，其他：指定行数
								textAlignment: 2, //0: center 1: left 2: right //仅TextView有效
								
								clLayoutLeft:80,
								// clLayoutTop:60,
								clLayoutRight:-80,
								clLayoutBottom:-120,
								// clLayoutWidth:150,
								clLayoutHeight:60,
								// clLayoutCenterX:0,
								// // clLayoutCenterY:0,
							},
							widget3: {
								widgetId: "customView_three_imageView", //字符标记
								type: "ImageView", // 类型：Button：按钮，ImageView:图片 TextView:文本
								image: "static/img/shanyanlogo1.png",
								backgroundColor: [0,1,0,1],//控件背景色[r,g,b,a]
								
								cornerRadius: 40,//圆角，设置圆角时请设置masksToBounds:true
								masksToBounds:true,//圆角相关
								
								clLayoutLeft:80,
								clLayoutTop:160,
								clLayoutRight:-80,
								// clLayoutBottom:-280,
								// clLayoutWidth:150,
								clLayoutHeight:80,
								// clLayoutCenterX:0,
								// clLayoutCenterY:0,
							}
						},
					}
					
					//设置自定义控件点击回调
					shanYanSDKModule.setCustomInterface((customInterface) => {
								
						this.shanyan_result = JSON.stringify(customInterface);
						console.log(JSON.stringify(customInterface));
					});
					
					this.shanyan_code = 1000;
					this.shanyan_result = "授权页配置完成";
					
				}
			},
			setAuthDialogThemeConfig() {
				
				let platform = uni.getSystemInfoSync().platform;
				if (platform == 'android') {
					//Android 弹窗模式
					
					shanYanSDKModule.setAuthThemeConfig({
						//授权页已有元素配置
						uiConfig: {
							setAuthBGImgPath: "static/eb9a0dae18491990a43fe02832d3cafa.jpg",
							setNavColor: '#ff0000',
							setNavText: "",
							setNavTextSize: "0",
							setNavReturnImgPath: "static/close_black.png",
							setNavReturnBtnOffsetRightX: "15",
							setLogoImgPath: 'static/logo_shanyan_text.png',
							setLogoOffsetY: "15",
							setLogoWidth: "110",
							setLogoHeight: "60",
							setNumFieldOffsetY: "80",
							setNumberSize: "18",
							setLogBtnText: "本机号码免密登录",
							setLogBtnOffsetY: "140",
							setPrivacyState:"true",
							setAppPrivacyOne: {
								title: '闪验用户协议',
								url: "https://api.253.com/api_doc/yin-si-zheng-ce/wei-hu-wang-luo-an-quan-sheng-ming.html"
							},
							setAppPrivacyTwo: {
								title: '闪验隐私政策',
								url: "https://api.253.com/api_doc/yin-si-zheng-ce/ge-ren-xin-xi-bao-hu-sheng-ming.html"
							},
							setAppPrivacyThree: {
								title: '服务协议',
								url: "https://api.253.com/api_doc/yin-si-zheng-ce/ge-ren-xin-xi-bao-hu-sheng-ming.html"
							},
							setPrivacyText: {
								privacyTextOne: '登录即同意',
								privacyTextTwo: "、",
								privacyTextThree: '、',
								privacyTextFour: '和',
								privacyTextFive: '并授权登录'
							},
							setSloganHidden: "true",
							setDialogTheme: {
								width: "300",
								height: "400",
								marginLeft: "0",
								marginTop: "0",
								isBottom: "false"
							}
					
						}, //授权页添加自定义控件元素
						widgets: {
							widget1: {
								widgetId: "customView_one",
								type: "TextView",
								left: "",
								top: "195",
								right: "",
								bottom: "",
								width: "",
								height: "30",
								textContent: "自定义控件（不销毁授权页）",
								textFont: "13",
								textColor: "#cc0000",
								backgroundColor: "#ffffff",
								isFinish: "false"
							},
							widget2: {
								widgetId: "customView_two",
								type: "ImageView",
								left: "",
								top: "230",
								right: "",
								bottom: "",
								width: "30",
								height: "30",
								backgroundImgPath: "static/qq.png",
								isFinish: "true"
							}
						},
					}, result => {
						console.log(JSON.stringify(result));
					
					});
					
					this.shanyan_code = 1000;
					this.shanyan_result = "授权页配置完成";
					
				}else if (platform == 'ios') {
					
					//iOS 弹窗模式
					
					let screenWidth_Portrait = plus.screen.resolutionWidth; //竖屏宽
					let screenHeight_Portrait = plus.screen.resolutionHeight; //竖屏宽
					let screenWidth_Landscape = plus.screen.resolutionHeight; //横屏宽(即竖屏高)
					let screenHeight_Landscape = plus.screen.resolutionWidth; //横屏高(即竖屏宽)
					
					var screenScale = screenWidth_Portrait / 375.0; //相对iphone6屏幕
					if (screenScale > 1) {
						screenScale = 1; //大屏的无需放大
					}
					
					//竖屏
					//窗口中心
					let clAuthWindowOrientationCenterX_Portrait = screenWidth_Portrait * 0.5;
					let clAuthWindowOrientationCenterY_Portrait = screenHeight_Portrait * 0.5;
					
					//窗口宽高
					let clAuthWindowOrientationWidth_Portrait = screenWidth_Portrait * 0.8;
					let clAuthWindowOrientationHeight_Portrait = clAuthWindowOrientationWidth_Portrait * 0.8;
					
					let clLayoutLogoTop_Portrait = screenScale * 25;
					let clLayoutLogoWidth_Portrait = 60 * screenScale;
					let clLayoutLogoHeight_Portrait = 60 * screenScale;
					let clLayoutLogoCenterX_Portrait = 0;
					
					let clLayoutPhoneCenterY_Portrait = -20 * screenScale;
					let clLayoutPhoneLeft_Portrait = 50 * screenScale;
					let clLayoutPhoneRight_Portrait = -50 * screenScale;
					let clLayoutPhoneHeight_Portrait = 20 * screenScale;
					
					let clLayoutLoginBtnCenterY_Portrait = clLayoutPhoneCenterY_Portrait + clLayoutPhoneHeight_Portrait * 0.5 *
						screenScale + 20 * screenScale + 15 * screenScale;
					let clLayoutLoginBtnHeight_Portrait = 30 * screenScale;
					let clLayoutLoginBtnLeft_Portrait = 70 * screenScale;
					let clLayoutLoginBtnRight_Portrait = -70 * screenScale;
					
					let clLayoutAppPrivacyLeft_Portrait = 40 * screenScale;
					let clLayoutAppPrivacyRight_Portrait = -40 * screenScale;
					let clLayoutAppPrivacyBottom_Portrait = 0 * screenScale;
					let clLayoutAppPrivacyHeight_Portrait = 45 * screenScale;
					
					let clLayoutSloganLeft_Portrait = 0;
					let clLayoutSloganRight_Portrait = 0;
					let clLayoutSloganHeight_Portrait = 15 * screenScale;
					let clLayoutSloganBottom_Portrait = clLayoutAppPrivacyBottom_Portrait - clLayoutAppPrivacyHeight_Portrait;
					
					//横屏
					//窗口中心
					let clAuthWindowOrientationCenterX_Landscape = screenWidth_Landscape * 0.5;
					let clAuthWindowOrientationCenterY_Landscape = screenHeight_Landscape * 0.5;
					
					//窗口宽高
					let clAuthWindowOrientationWidth_Landscape = screenWidth_Portrait * 0.8; //窗口宽度为竖屏宽度的0.8;
					let clAuthWindowOrientationHeight_Landscape = clAuthWindowOrientationWidth_Landscape * 0.8; //窗口高度为窗口宽度的0.8
					
					let clLayoutLogoWidth_Landscape = 60 * screenScale;
					let clLayoutLogoHeight_Landscape = 60 * screenScale;
					let clLayoutLogoCenterX_Landscape = 0;
					let clLayoutLogoTop_Landscape = 25 * screenScale;
					
					let clLayoutPhoneCenterY_Landscape = -20 * screenScale;
					let clLayoutPhoneLeft_Landscape = 50 * screenScale;
					let clLayoutPhoneRight_Landscape = -50 * screenScale;
					let clLayoutPhoneHeight_Landscape = 20 * screenScale;
					
					let clLayoutLoginBtnCenterY_Landscape = clLayoutPhoneCenterY_Landscape + clLayoutPhoneHeight_Landscape * 0.5 *
						screenScale + 20 * screenScale + 15 * screenScale;
					let clLayoutLoginBtnHeight_Landscape = 30 * screenScale;
					let clLayoutLoginBtnLeft_Landscape = 70 * screenScale;
					let clLayoutLoginBtnRight_Landscape = -70 * screenScale;
					
					let clLayoutAppPrivacyLeft_Landscape = 40 * screenScale;
					let clLayoutAppPrivacyRight_Landscape = -40 * screenScale;
					let clLayoutAppPrivacyBottom_Landscape = 0 * screenScale;
					let clLayoutAppPrivacyHeight_Landscape = 45 * screenScale;
					
					let clLayoutSloganLeft_Landscape = 0;
					let clLayoutSloganRight_Landscape = 0;
					let clLayoutSloganHeight_Landscape = 15 * screenScale;
					let clLayoutSloganBottom_Landscape = clLayoutAppPrivacyBottom_Landscape - clLayoutAppPrivacyHeight_Landscape;
					
					this.ios_uiConfigure = 
					{
					
						clBackgroundImg: "static/eb9a0dae18491990a43fe02832d3cafa.jpg",
				
						shouldAutorotate: true,
						/**支持方向
						 * 如支持横竖屏，需同时设置 clOrientationLayOutPortrait 和 clOrientationLayOutLandscape
						 * 0:UIInterfaceOrientationMaskPortrait
						 * 1:UIInterfaceOrientationMaskLandscapeLeft
						 * 2:UIInterfaceOrientationMaskLandscapeRight
						 * 3:UIInterfaceOrientationMaskPortraitUpsideDown
						 * 4:UIInterfaceOrientationMaskLandscape
						 * 5:UIInterfaceOrientationMaskAll
						 * 6:UIInterfaceOrientationMaskAllButUpsideDown
						 * */
						supportedInterfaceOrientations: 5,
				
						/**偏好方向 
						 * -1:UIInterfaceOrientationUnknown
						 * 0:UIInterfaceOrientationPortrait
						 * 1:UIInterfaceOrientationPortraitUpsideDown
						 * 2:UIInterfaceOrientationLandscapeLeft
						 * 3:UIInterfaceOrientationLandscapeRight
						 * */
						//偏好方向默认Portrait preferredInterfaceOrientationForPresentation: Number(5),
				
						clNavigationBackgroundClear: true, //导航栏透明
						clNavigationBackBtnImage: "static/img/close-white.png", //返回按钮图片
						clNavBackBtnAlimentRight: true, //返回按钮居右
				
						clLogoImage: "static/img/logo_shanyan_text.png", //logo图片
				
						clLoginBtnText: "本机号一键登录", //一键登录按钮文字
						clLoginBtnTextColor: [1, 1, 1, 1.0], //rgba
						clLoginBtnBgColor: [0.2, 0.8, 0.2, 1.0], //rgba
						clLoginBtnTextFont: 15 * screenScale,
						clLoginBtnCornerRadius: 10,
						clLoginBtnBorderWidth: 0.5,
						clLoginBtnBorderColor: [0.1, 0.8, 0.1, 1.0], //rgba 
				
						clPhoneNumberFont: 20.0 * screenScale,
				
						clAuthTypeUseWindow: true,
						clAuthWindowCornerRadius: 20,
				
						clAppPrivacyColor: [
							[0.6, 0.6, 0.6, 1.0],
							[0, 1, 0, 1.0]
						], //2 item,commomTextColor and appPrivacyTextColor
						clAppPrivacyTextFont: 11 * screenScale,
						clAppPrivacyTextAlignment: 0, //0: center 1: left 2: right
						clAppPrivacyFirst: ["测试连接A", "https://www.baidu.com"], // 2 item, name and url
						clAppPrivacySecond: ["测试连接B", "https://www.sina.com"], // 2 item, name and url
				
						clCheckBoxVerticalAlignmentToAppPrivacyCenterY: true,
						clCheckBoxSize: [30 * screenScale, 30 * screenScale], //2 item, width and height
						clCheckBoxImageEdgeInsets: [2 * screenScale, 10 * screenScale, 13 * screenScale, 5 * screenScale], //4 item, top left bottom right
						clCheckBoxUncheckedImage: "static/img/checkBoxNor.png",
						clCheckBoxCheckedImage: "static/img/checkBoxSEL.png",
				
						clLoadingSize: [50, 50], //2 item, width and height
						clLoadingTintColor: [0.2, 0.8, 0.2, 1],
						clLoadingBackgroundColor: [1, 1, 1, 1],
						clLoadingCornerRadius: 5,
				
						//竖屏布局对象
						clOrientationLayOutPortrait: {
							//窗口
							clAuthWindowOrientationWidth: clAuthWindowOrientationWidth_Portrait,
							clAuthWindowOrientationHeight: clAuthWindowOrientationHeight_Portrait,
				
							clAuthWindowOrientationCenterX: clAuthWindowOrientationCenterX_Portrait,
							clAuthWindowOrientationCenterY: clAuthWindowOrientationCenterY_Portrait,
				
							//控件
							clLayoutLogoWidth: clLayoutLogoWidth_Portrait,
							clLayoutLogoHeight: clLayoutLogoHeight_Portrait,
							clLayoutLogoCenterX: clLayoutLogoCenterX_Portrait,
							clLayoutLogoTop: clLayoutLogoTop_Portrait,
				
							clLayoutPhoneCenterY: clLayoutPhoneCenterY_Portrait,
							clLayoutPhoneHeight: clLayoutPhoneHeight_Portrait,
							clLayoutPhoneLeft: clLayoutPhoneLeft_Portrait,
							clLayoutPhoneRight: clLayoutPhoneRight_Portrait,
				
							clLayoutLoginBtnCenterY: clLayoutLoginBtnCenterY_Portrait,
							clLayoutLoginBtnHeight: clLayoutLoginBtnHeight_Portrait,
							clLayoutLoginBtnLeft: clLayoutLoginBtnLeft_Portrait,
							clLayoutLoginBtnRight: clLayoutLoginBtnRight_Portrait,
				
							clLayoutAppPrivacyLeft: clLayoutAppPrivacyLeft_Portrait,
							clLayoutAppPrivacyRight: clLayoutAppPrivacyRight_Portrait,
							clLayoutAppPrivacyBottom: clLayoutAppPrivacyBottom_Portrait,
							clLayoutAppPrivacyHeight: clLayoutAppPrivacyHeight_Portrait,
				
							clLayoutSloganLeft: clLayoutSloganLeft_Portrait,
							clLayoutSloganRight: clLayoutSloganRight_Portrait,
							clLayoutSloganHeight: clLayoutSloganHeight_Portrait,
							clLayoutSloganBottom: clLayoutSloganBottom_Portrait,
						},
						//横屏布局对象
						clOrientationLayOutLandscape: {
							//窗口
							clAuthWindowOrientationWidth: clAuthWindowOrientationWidth_Landscape,
							clAuthWindowOrientationHeight: clAuthWindowOrientationHeight_Landscape,
				
							clAuthWindowOrientationCenterX: clAuthWindowOrientationCenterX_Landscape,
							clAuthWindowOrientationCenterY: clAuthWindowOrientationCenterY_Landscape,
				
							//控件
							clLayoutLogoWidth: clLayoutLogoWidth_Landscape,
							clLayoutLogoHeight: clLayoutLogoHeight_Landscape,
							clLayoutLogoCenterX: clLayoutLogoCenterX_Landscape,
							clLayoutLogoTop: clLayoutLogoTop_Landscape,
				
							clLayoutPhoneCenterY: clLayoutPhoneCenterY_Landscape,
							clLayoutPhoneHeight: clLayoutPhoneHeight_Landscape,
							clLayoutPhoneLeft: clLayoutPhoneLeft_Landscape,
							clLayoutPhoneRight: clLayoutPhoneRight_Landscape,
				
							clLayoutLoginBtnCenterY: clLayoutLoginBtnCenterY_Landscape,
							clLayoutLoginBtnHeight: clLayoutLoginBtnHeight_Landscape,
							clLayoutLoginBtnLeft: clLayoutLoginBtnLeft_Landscape,
							clLayoutLoginBtnRight: clLayoutLoginBtnRight_Landscape,
				
							clLayoutAppPrivacyLeft: clLayoutAppPrivacyLeft_Landscape,
							clLayoutAppPrivacyRight: clLayoutAppPrivacyRight_Landscape,
							clLayoutAppPrivacyBottom: clLayoutAppPrivacyBottom_Landscape,
							clLayoutAppPrivacyHeight: clLayoutAppPrivacyHeight_Landscape,
				
							clLayoutSloganLeft: clLayoutSloganLeft_Landscape,
							clLayoutSloganRight: clLayoutSloganRight_Landscape,
							clLayoutSloganHeight: clLayoutSloganHeight_Landscape,
							clLayoutSloganBottom: clLayoutSloganBottom_Landscape,
						},
					}
					this.shanyan_code = 1000;
					this.shanyan_result = "授权页配置完成";
				}
			},
			startAuthentication() {
				uni.showLoading({
					mask: true,
				});
				shanYanSDKModule.startAuthentication((result) => {
					uni.hideLoading();
					this.shanyan_code = JSON.stringify(result.code);
					this.shanyan_result = JSON.stringify(result);
					
					let platform = uni.getSystemInfoSync().platform;
					if (platform == 'android') {
						
						
						
					}else if (platform == 'ios') {
						
						if (result.errorCode != null) {
							//iOS errorCode存在即为失败
						}else{
							//成功
						}
					}
										
					console.log(JSON.stringify(result));
				});
			},
			qulickLogin() {
				uni.showLoading({
					mask: true,
				})
				setTimeout(function() {
					uni.hideLoading();
				}, 5000);
				let platform = uni.getSystemInfoSync().platform;
				if (platform == 'android') {
					/*************************Android*************************/
					//闪验SDK  拉起授权页方法
					shanYanSDKModule.openLoginAuth(true,
						result => {
							uni.hideLoading();
							this.shanyan_code = JSON.stringify(result.code);
							this.shanyan_result = JSON.stringify(result.result);
							console.log(JSON.stringify(result));
						},
						result => {
							this.shanyan_code = JSON.stringify(result.code);
							this.shanyan_result = JSON.stringify(result.result);
							console.log(JSON.stringify(result));
						});

				} else if (platform == 'ios') {
					/*************************iOS*************************/
					//闪验SDK  拉起授权页方法

					if(this.ios_uiConfigure == null){
						//debug_test
						uni.showToast({
							icon: "none",
							title: "请先配置UI",
							duration: 3000
						});
						return;
					}

					//一键登录
					shanYanSDKModule.quickAuthLoginWithConfigure(this.ios_uiConfigure,
						openLoginAuthListenerResult => {
							//拉起授权页面回调
							uni.hideLoading();

							//debug_test
							uni.showToast({
								icon: "none",
								title: JSON.stringify(openLoginAuthListenerResult),
								duration: 3000
							});
							
							this.shanyan_code = JSON.stringify(openLoginAuthListenerResult.code);
							this.shanyan_result = JSON.stringify(openLoginAuthListenerResult);
							console.log(JSON.stringify(openLoginAuthListenerResult));
						},
						oneKeyLoginListenerResult => {
							uni.hideLoading();
							//点一键登录回调	
							if (oneKeyLoginListenerResult.errorCode != null) {
								if (oneKeyLoginListenerResult.code == 1011) {
									//提示：错误无需提示给用户，可以在用户无感知的状态下直接切换登录方式
									//用户取消登录（点返回）
									//处理建议：如无特殊需求可不做处理，仅作为交互状态回调，此时已经回到当前用户自己的页面
									//点击sdk自带的返回，无论是否设置手动销毁，授权页面都会强制关闭
								} else {
									//处理建议：其他错误代码表示闪验通道无法继续，可以统一走开发者自己的其他登录方式，也可以对不同的错误单独处理
									//关闭授权页
									shanYanSDKModule.finishAuthControllerCompletion(oneKeyLoginListenerResult => {
										
									});
								}
							} else {
								//SDK获取Token成功

								//此处根据token调用户后台接口获取手机号，获取成功或失败后再调shanYanSDKModule.finishAuthControllerCompletion()关闭页面
								// //关闭授权页
								shanYanSDKModule.finishAuthControllerCompletion(oneKeyLoginListenerResult => {
									//如需跳转，code here:
								});

								//debug_test
								uni.showToast({
									icon: "none",
									title: JSON.stringify(oneKeyLoginListenerResult),
									duration: 3000
								});
							}
							
							this.shanyan_code = JSON.stringify(oneKeyLoginListenerResult.code);
							this.shanyan_result = JSON.stringify(oneKeyLoginListenerResult);
							console.log(JSON.stringify(oneKeyLoginListenerResult));
						});
				}
			},
			toMain(userName) {
				this.login(userName);
				/**
				 * 强制登录时使用reLaunch方式跳转过来
				 * 返回首页也使用reLaunch方式
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../main/main',
					});
				} else {
					uni.navigateBack();
				}

			}
		},
		onReady() {
			// this.initPosition();
			// this.initProvider();
		}
	}
</script>

<style>
	.result_group {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		background-color: #B9F6CA;
		margin: 0 10upx;
		border-radius: 10upx;

	}

	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: 0 10upx;
		border-radius: 10upx;
		width: 100%;
	}

	.text_attr {
		width: 95%;
		margin-left: 30upx;
		margin-top: 10upx;
		margin-bottom: 10upx;
		margin-right: 30upx;
		word-wrap: break-word;
		word-break: break-all;
		font-size: 30upx;
	}

	.button_attr {
		justify-content: center;
		margin-top: 30upx;
		margin-left: 15upx;
		margin-right: 15upx;
		margin-bottom: 30upx;
	}

	.tableTitle {
		position: relative;
		margin-top: 50upx;
		margin-bottom: 50upx;
		width: 100%;
		height: 1px;
		background-color: #d4d4d4;
		text-align: center;
		font-size: 16px;
		color: rgba(101, 101, 101, 1);
	}

	.midText {
		position: absolute;
		left: 50%;
		background-color: #f2f2f5;
		transform: translateX(-50%) translateY(-50%);
	}
</style>
