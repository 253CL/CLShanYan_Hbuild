<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<m-input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">登录</button>
		</view>
		<view class="btn-row">
			<button type="primary" @tap="qulickLogin">本机号码一键登录</button>
		</view>
		<view class="action-row">
			<navigator url="../reg/reg">注册账号</navigator>
			<text>|</text>
			<navigator url="../pwd/pwd">忘记密码</navigator>
		</view>
		<view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
			<view class="oauth-image" v-for="provider in providerList" :key="provider.value">
				<image :src="provider.image" @tap="oauth(provider.value)"></image>
			</view>
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
			let platform = uni.getSystemInfoSync().platform;
			if (platform == 'android') {
				//预取号
				shanYanSDKModule.getPhoneInfo((complete) => {
					console.log(JSON.stringify(complete));
				});
			} else if (platform == 'ios') {
				//预取号
				shanYanSDKModule.preGetPhonenumber((complete) => {
					console.log(JSON.stringify(complete));
				});
			}

		},
		components: {
			mInput
		},
		data() {
			return {
				providerList: [],
				hasProvider: false,
				account: '',
				password: '',
				positionTop: 0
			}
		},
		computed: mapState(['forcedLogin']),
		methods: {
			...mapMutations(['login']),
			initProvider() {
				const filters = ['weixin', 'qq', 'sinaweibo'];
				uni.getProvider({
					service: 'oauth',
					success: (res) => {
						if (res.provider && res.provider.length) {
							for (let i = 0; i < res.provider.length; i++) {
								if (~filters.indexOf(res.provider[i])) {
									this.providerList.push({
										value: res.provider[i],
										image: '../../static/img/' + res.provider[i] + '.png'
									});
								}
							}
							this.hasProvider = true;
						}
					},
					fail: (err) => {
						console.error('获取服务供应商失败：' + JSON.stringify(err));
					}
				});
			},
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
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

					shanYanSDKModule.setAuthThemeConfig({
						setAuthBGImgPath: "static/eb9a0dae18491990a43fe02832d3cafa.jpg",
						setNavColor: '#ff0000',
						setLogoImgPath: 'static/logo_shanyan_text.png',
						setAppPrivacyOne: {
							title: '用户协议1',
							url: "http://flash.253.com/"
						},
						setPrivacyState: false,
						setPrivacyText: {
							privacyTextOne: '同意',
							privacyTextTwo: "、",
							privacyTextThree: '和',
							privacyTextFour: '并授权登录'
						}
					});

					shanYanSDKModule.openLoginAuth(true,
						result => {
							console.log(JSON.stringify(result));
						},
						result => {
							console.log(JSON.stringify(result));

							//debug_test
							uni.showToast({
								icon: "none",
								title: JSON.stringify(oneKeyLoginListenerResult),
								duration: 3000
							});

						});

					return;
				} else if (platform == 'ios') {
					//iOS一键登录
					
					//弹窗方式
					
					//配置界面

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

					//一键登录
					shanYanSDKModule.quickAuthLoginWithConfigure({

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
						},
						openLoginAuthListenerResult => {
							//拉起授权页面回调
							uni.hideLoading();

							//debug_test
							uni.showToast({
								icon: "none",
								title: JSON.stringify(openLoginAuthListenerResult),
								duration: 3000
							});
						},
						oneKeyLoginListenerResult => {
							uni.hideLoading();
							//点一键登录回调	
							if (oneKeyLoginListenerResult.error != null) {
								if (oneKeyLoginListenerResult.code == 1011) {
									//提示：错误无需提示给用户，可以在用户无感知的状态下直接切换登录方式
									//用户取消登录（点返回）
									//处理建议：如无特殊需求可不做处理，仅作为交互状态回调，此时已经回到当前用户自己的页面
									//点击sdk自带的返回，无论是否设置手动销毁，授权页面都会强制关闭
								} else {
									//处理建议：其他错误代码表示闪验通道无法继续，可以统一走开发者自己的其他登录方式，也可以对不同的错误单独处理
									//1003    一键登录获取token失败
									//其他     其他错误//

									//关闭授权页
									shanYanSDKModule.finishAuthControllerCompletion(oneKeyLoginListenerResult => {
										//如需跳转，code here:

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
						});
				}
			},
			bindLogin() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				/**
				 * 下面简单模拟下服务端的处理
				 * 检测用户账号密码是否在已注册的用户列表中
				 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
				 */
				const data = {
					account: this.account,
					password: this.password
				};
				const validUser = service.getUsers().some(function(user) {
					return data.account === user.account && data.password === user.password;
				});
				if (validUser) {
					this.toMain(this.account);
				} else {
					uni.showToast({
						icon: 'none',
						title: '用户账号或密码不正确',
					});
				}
			},
			oauth(value) {
				uni.login({
					provider: value,
					success: (res) => {
						uni.getUserInfo({
							provider: value,
							success: (infoRes) => {
								/**
								 * 实际开发中，获取用户信息后，需要将信息上报至服务端。
								 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
								 */
								this.toMain(infoRes.userInfo.nickName);
							}
						});
					},
					fail: (err) => {
						console.error('授权登录失败：' + JSON.stringify(err));
					}
				});
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
			this.initPosition();
			this.initProvider();
		}
	}
</script>

<style>
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.action-row navigator {
		color: #007aff;
		padding: 0 20upx;
	}

	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		width: 100upx;
		height: 100upx;
		border: 1upx solid #dddddd;
		border-radius: 100upx;
		margin: 0 40upx;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 60upx;
		height: 60upx;
		margin: 20upx;
	}
</style>
