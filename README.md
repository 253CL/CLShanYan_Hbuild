# CLShanYan_Hbuild

闪验SDK Hbuild插件&Demo

## 插件市场
[闪验SDK Hbuild插件市场](http://ext.dcloud.net.cn/plugin?id=645)

## Documents
[闪验SDK-HBuilder插件集成文档](https://github.com/253CL/CLShanYan_Hbuild/wiki/闪验SDK-HBuilder插件集成文档)

## 快速体验示例工程
 1. 到闪验官网申请创建应用，提供包名包签名/bundleID，得到对应的appID/appKey
 2. 搜索初始化方法`shanYanSDKModule.init`,将appID换成自己的appid（appid安卓/iOS不同，分别与包名包签名/bundleID绑定）
 3. 在manifest中导入闪验离线插件或云插件
 4. 分别云打包安卓iOS自定义基座,打包时填入的包名包签名/bundleID需和初始化使用的appid对应
 5. HBuilderX->『运行』->『运行到手机或模拟器』->『制作自定义调试基座』->勾选自定义基座
 6. HBuilderX->『运行』->『运行到手机或模拟器』->『运行设备XXX』
 
## WebSite
http://flash.253.com

## Author

app@253.com

## License

CL_ShanYanSDK is available under the MIT license. See the LICENSE file for more info.

