"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************************************************************************************!*\
  !*** /Users/wanglijun/Git/CLShanYan_Hbuild/CLShanYan_Hbuild_demo/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_login_login_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            const promise = this.constructor\n            return this.then(\n              value => promise.resolve(callback()).then(() => value),\n              reason => promise.resolve(callback()).then(() => {\n                throw reason\n              })\n            )\n          }\n        }\n        _pages_login_login_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_login_login_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/login/login'\n        _pages_login_login_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_login_login_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsUUFBUSwyRUFBRztBQUNYLGdCQUFnQiwyRUFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9sb2dpbi9sb2dpbi5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgICAgICAgICAgdmFsdWUgPT4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4gdmFsdWUpLFxuICAgICAgICAgICAgICByZWFzb24gPT4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9sb2dpbi9sb2dpbidcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************************************************************************!*\
  !*** /Users/wanglijun/Git/CLShanYan_Hbuild/CLShanYan_Hbuild_demo/main.js?{"type":"appStyle"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************************************************************************************************!*\
  !*** /Users/wanglijun/Git/CLShanYan_Hbuild/CLShanYan_Hbuild_demo/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanglijun/Git/CLShanYan_Hbuild/CLShanYan_Hbuild_demo/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "backgroundColor": "#efeff4",
    "paddingTop": "20upx",
    "paddingRight": "20upx",
    "paddingBottom": "20upx",
    "paddingLeft": "20upx"
  },
  "input-group": {
    "backgroundColor": "#ffffff",
    "marginTop": "40upx",
    "position": "relative",
    "position::before": "absolute",
    "right::before": 0,
    "top::before": 0,
    "left::before": 0,
    "height::before": "1upx",
    "content::before": "''",
    "WebkitTransform::before": "scaleY(.5)",
    "transform::before": "scaleY(.5)",
    "backgroundColor::before": "#c8c7cc",
    "position::after": "absolute",
    "right::after": 0,
    "bottom::after": 0,
    "left::after": 0,
    "height::after": "1upx",
    "content::after": "''",
    "WebkitTransform::after": "scaleY(.5)",
    "transform::after": "scaleY(.5)",
    "backgroundColor::after": "#c8c7cc"
  },
  "input-row": {
    "display": "flex",
    "flexDirection": "row",
    "position": "relative"
  },
  "btn-row": {
    "marginTop": "50upx",
    "paddingTop": "20upx",
    "paddingRight": "20upx",
    "paddingBottom": "20upx",
    "paddingLeft": "20upx"
  }
}

/***/ }),
/* 4 */
/*!******************************************************************************************************!*\
  !*** /Users/wanglijun/Git/CLShanYan_Hbuild/CLShanYan_Hbuild_demo/pages/login/login.nvue?mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_nvue_vue_type_template_id_b4cea458_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.nvue?vue&type=template&id=b4cea458&mpType=page */ 5);\n/* harmony import */ var _login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _login_nvue_vue_type_template_id_b4cea458_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _login_nvue_vue_type_template_id_b4cea458_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"d54fea00\",\n  false,\n  _login_nvue_vue_type_template_id_b4cea458_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/login/login.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDZ047QUFDaE4sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUsdUZBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnR0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2xvZ2luLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjRjZWE0NTgmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xvZ2luLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbG9naW4ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcImQ1NGZlYTAwXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2xvZ2luL2xvZ2luLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!************************************************************************************************************************************!*\
  !*** /Users/wanglijun/Git/CLShanYan_Hbuild/CLShanYan_Hbuild_demo/pages/login/login.nvue?vue&type=template&id=b4cea458&mpType=page ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_template_id_b4cea458_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.nvue?vue&type=template&id=b4cea458&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_template_id_b4cea458_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_template_id_b4cea458_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_template_id_b4cea458_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_template_id_b4cea458_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanglijun/Git/CLShanYan_Hbuild/CLShanYan_Hbuild_demo/pages/login/login.nvue?vue&type=template&id=b4cea458&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "div",
        [
          _c(
            "button",
            { attrs: { type: "primary" }, on: { click: _vm.init } },
            [_vm._v("闪验SDK 初始化")]
          ),
          _c(
            "button",
            { attrs: { type: "primary" }, on: { click: _vm.getPhoneInfo } },
            [_vm._v("闪验SDK 预取号")]
          ),
          _c(
            "button",
            {
              attrs: { type: "primary" },
              on: { click: _vm.setAuthCJSThemeConfig }
            },
            [_vm._v("授权页 沉浸样式")]
          ),
          _c(
            "button",
            { attrs: { type: "primary" }, on: { click: _vm.qulickLogin } },
            [_vm._v("闪验SDK 拉起授权页")]
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!******************************************************************************************************************************!*\
  !*** /Users/wanglijun/Git/CLShanYan_Hbuild/CLShanYan_Hbuild_demo/pages/login/login.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVqQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanglijun/Git/CLShanYan_Hbuild/CLShanYan_Hbuild_demo/pages/login/login.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nvar shanYanSDKModule = __webpack_provided_uni_dot_requireNativePlugin('CLSDK-ShanYanSDKModule'); //调用\nvar _default =\n{\n\n  data: function data() {\n    return {\n      account: '',\n      shanyan_code: '状态码',\n      shanyan_result: '信息描述',\n\n      ios_uiConfigure: {} };\n\n  },\n  methods: {\n    init: function init() {var _this = this;\n      //初始化建议在app启动时调用，即App.vue的onLaunch方法中\n      uni.showLoading({\n        mask: true });\n\n      var platform = uni.getSystemInfoSync().platform;\n      var appid;\n      if (platform == 'android') {\n        appid = '安卓appID'; //appID与包名绑定\n      } else if (platform == 'ios') {\n        appid = 'eWWfA2KJ'; //appID与bundleID绑定\n      }\n      //闪验SDK 初始化\n      shanYanSDKModule.init({\n        appid: appid },\n      function (result) {\n        uni.hideLoading();\n        _this.shanyan_code = JSON.stringify(result.code);\n        _this.shanyan_result = JSON.stringify(result);\n        __f__(\"log\", JSON.stringify(result), \" at pages/login/login.nvue:45\");\n      });\n\n    },\n    getPhoneInfo: function getPhoneInfo() {var _this2 = this;\n      uni.showLoading({\n        mask: true });\n\n\n      //实际预取号建议提前调用，如将要调起授权页的前置页面的onLoad中、个人中心页面的onLoad等可预期会触发一键登录的时机\n      //闪验SDK 预取号\n      shanYanSDKModule.preGetPhonenumber(function (complete) {\n        uni.hideLoading();\n        _this2.shanyan_code = JSON.stringify(complete.code);\n        _this2.shanyan_result = JSON.stringify(complete);\n        __f__(\"log\", JSON.stringify(complete), \" at pages/login/login.nvue:60\");\n      });\n    },\n    setAuthCJSThemeConfig: function setAuthCJSThemeConfig() {var _this3 = this;\n      //iOS 全屏模式\n\n      var screenWidth_Portrait = plus.screen.resolutionWidth; //竖屏宽\n\n      var screenScale = screenWidth_Portrait / 375.0; //相对iphone6屏幕\n      if (screenScale > 1) {\n        screenScale = 1; //大屏的无需放大\n      }\n\n      //竖屏\n      var clLayoutLogoTop_Portrait = screenScale * 60;\n      var clLayoutLogoWidth_Portrait = 60 * screenScale;\n      var clLayoutLogoHeight_Portrait = 60 * screenScale;\n      var clLayoutLogoCenterX_Portrait = 0;\n\n      var clLayoutPhoneCenterY_Portrait = -20 * screenScale;\n      var clLayoutPhoneLeft_Portrait = 50 * screenScale;\n      var clLayoutPhoneRight_Portrait = -50 * screenScale;\n      var clLayoutPhoneHeight_Portrait = 20 * screenScale;\n\n      var clLayoutLoginBtnCenterY_Portrait = clLayoutPhoneCenterY_Portrait + clLayoutPhoneHeight_Portrait * 0.5 *\n      screenScale + 20 * screenScale + 15 * screenScale;\n      var clLayoutLoginBtnHeight_Portrait = 30 * screenScale;\n      var clLayoutLoginBtnLeft_Portrait = 70 * screenScale;\n      var clLayoutLoginBtnRight_Portrait = -70 * screenScale;\n\n      var clLayoutAppPrivacyLeft_Portrait = 40 * screenScale;\n      var clLayoutAppPrivacyRight_Portrait = -40 * screenScale;\n      var clLayoutAppPrivacyBottom_Portrait = 0 * screenScale;\n      var clLayoutAppPrivacyHeight_Portrait = 45 * screenScale;\n\n      var clLayoutSloganLeft_Portrait = 0;\n      var clLayoutSloganRight_Portrait = 0;\n      var clLayoutSloganHeight_Portrait = 15 * screenScale;\n      var clLayoutSloganBottom_Portrait = clLayoutAppPrivacyBottom_Portrait - clLayoutAppPrivacyHeight_Portrait;\n\n      //横屏 （如app本身不支持横屏，可不需设置横屏下UI配置）\n\n      var clLayoutLogoWidth_Landscape = 60 * screenScale;\n      var clLayoutLogoHeight_Landscape = 60 * screenScale;\n      var clLayoutLogoCenterX_Landscape = 0;\n      var clLayoutLogoTop_Landscape = 25 * screenScale;\n\n      var clLayoutPhoneCenterY_Landscape = -20 * screenScale;\n      var clLayoutPhoneLeft_Landscape = 50 * screenScale;\n      var clLayoutPhoneRight_Landscape = -50 * screenScale;\n      var clLayoutPhoneHeight_Landscape = 20 * screenScale;\n\n      var clLayoutLoginBtnCenterY_Landscape = clLayoutPhoneCenterY_Landscape + clLayoutPhoneHeight_Landscape * 0.5 *\n      screenScale + 20 * screenScale + 15 * screenScale;\n      var clLayoutLoginBtnHeight_Landscape = 30 * screenScale;\n      var clLayoutLoginBtnLeft_Landscape = 70 * screenScale;\n      var clLayoutLoginBtnRight_Landscape = -70 * screenScale;\n\n      var clLayoutAppPrivacyLeft_Landscape = 40 * screenScale;\n      var clLayoutAppPrivacyRight_Landscape = -40 * screenScale;\n      var clLayoutAppPrivacyBottom_Landscape = 0 * screenScale;\n      var clLayoutAppPrivacyHeight_Landscape = 45 * screenScale;\n\n      var clLayoutSloganLeft_Landscape = 0;\n      var clLayoutSloganRight_Landscape = 0;\n      var clLayoutSloganHeight_Landscape = 15 * screenScale;\n      var clLayoutSloganBottom_Landscape = clLayoutAppPrivacyBottom_Landscape - clLayoutAppPrivacyHeight_Landscape;\n\n      this.ios_uiConfigure = {\n\n        clBackgroundImg: \"static/eb9a0dae18491990a43fe02832d3cafa.jpg\",\n\n        shouldAutorotate: true,\n        /**支持方向\n                                 * 如支持横竖屏，需同时设置 clOrientationLayOutPortrait 和 clOrientationLayOutLandscape\n                                 * 0:UIInterfaceOrientationMaskPortrait\n                                 * 1:UIInterfaceOrientationMaskLandscapeLeft\n                                 * 2:UIInterfaceOrientationMaskLandscapeRight\n                                 * 3:UIInterfaceOrientationMaskPortraitUpsideDown\n                                 * 4:UIInterfaceOrientationMaskLandscape\n                                 * 5:UIInterfaceOrientationMaskAll\n                                 * 6:UIInterfaceOrientationMaskAllButUpsideDown\n                                 * */\n        supportedInterfaceOrientations: 5,\n\n        /**偏好方向 \n                                            * -1:UIInterfaceOrientationUnknown\n                                            * 0:UIInterfaceOrientationPortrait\n                                            * 1:UIInterfaceOrientationPortraitUpsideDown\n                                            * 2:UIInterfaceOrientationLandscapeLeft\n                                            * 3:UIInterfaceOrientationLandscapeRight\n                                            * */\n        //偏好方向默认Portrait preferredInterfaceOrientationForPresentation: Number(5),\n\n        clNavigationBackgroundClear: true, //导航栏透明\n        clNavigationBackBtnImage: \"static/img/close-white.png\", //返回按钮图片\n        clNavBackBtnAlimentRight: false, //返回按钮居右,设置自定义导航栏返回按钮时，以自定义为准\n\n        clLogoImage: \"static/img/logo_shanyan_text.png\", //logo图片\n\n        clLoginBtnText: \"本机号一键登录\", //一键登录按钮文字\n        clLoginBtnTextColor: [1, 1, 1, 1.0], //rgba\n        clLoginBtnBgColor: [0.2, 0.8, 0.2, 1.0], //rgba\n        clLoginBtnTextFont: 15 * screenScale,\n        clLoginBtnCornerRadius: 10,\n        clLoginBtnBorderWidth: 0.5,\n        clLoginBtnBorderColor: [0.1, 0.8, 0.1, 1.0], //rgba \n\n        clPhoneNumberFont: 20.0 * screenScale,\n\n        clAppPrivacyColor: [\n        [0.6, 0.6, 0.6, 1.0],\n        [0, 1, 0, 1.0]],\n        //2 item,commomTextColor and appPrivacyTextColor\n        clAppPrivacyTextFont: 11 * screenScale,\n        clAppPrivacyTextAlignment: 0, //0: center 1: left 2: right\n        clAppPrivacyFirst: [\"测试连接A\", \"https://www.baidu.com\"], // 2 item, name and url\n        clAppPrivacySecond: [\"测试连接B\", \"https://www.sina.com\"], // 2 item, name and url\n\n        clCheckBoxVerticalAlignmentToAppPrivacyCenterY: true,\n        clCheckBoxSize: [30 * screenScale, 30 * screenScale], //2 item, width and height\n        clCheckBoxImageEdgeInsets: [2 * screenScale, 10 * screenScale, 13 * screenScale, 5 * screenScale], //4 item, top left bottom right\n        clCheckBoxUncheckedImage: \"static/img/checkBoxNor.png\",\n        clCheckBoxCheckedImage: \"static/img/checkBoxSEL.png\",\n\n        clLoadingSize: [50, 50], //2 item, width and height\n        clLoadingTintColor: [0.2, 0.8, 0.2, 1],\n        clLoadingBackgroundColor: [1, 1, 1, 1],\n        clLoadingCornerRadius: 5,\n\n        //竖屏布局对象\n        clOrientationLayOutPortrait: {\n\n          //控件\n          clLayoutLogoWidth: clLayoutLogoWidth_Portrait,\n          clLayoutLogoHeight: clLayoutLogoHeight_Portrait,\n          clLayoutLogoCenterX: clLayoutLogoCenterX_Portrait,\n          clLayoutLogoTop: clLayoutLogoTop_Portrait,\n\n          clLayoutPhoneCenterY: clLayoutPhoneCenterY_Portrait,\n          clLayoutPhoneHeight: clLayoutPhoneHeight_Portrait,\n          clLayoutPhoneLeft: clLayoutPhoneLeft_Portrait,\n          clLayoutPhoneRight: clLayoutPhoneRight_Portrait,\n\n          clLayoutLoginBtnCenterY: clLayoutLoginBtnCenterY_Portrait,\n          clLayoutLoginBtnHeight: clLayoutLoginBtnHeight_Portrait,\n          clLayoutLoginBtnLeft: clLayoutLoginBtnLeft_Portrait,\n          clLayoutLoginBtnRight: clLayoutLoginBtnRight_Portrait,\n\n          clLayoutAppPrivacyLeft: clLayoutAppPrivacyLeft_Portrait,\n          clLayoutAppPrivacyRight: clLayoutAppPrivacyRight_Portrait,\n          clLayoutAppPrivacyBottom: clLayoutAppPrivacyBottom_Portrait,\n          clLayoutAppPrivacyHeight: clLayoutAppPrivacyHeight_Portrait,\n\n          clLayoutSloganLeft: clLayoutSloganLeft_Portrait,\n          clLayoutSloganRight: clLayoutSloganRight_Portrait,\n          clLayoutSloganHeight: clLayoutSloganHeight_Portrait,\n          clLayoutSloganBottom: clLayoutSloganBottom_Portrait },\n\n        //横屏布局对象 （如app本身不支持横屏，可不需设置横屏下UI配置对象）\n        clOrientationLayOutLandscape: {\n\n          //控件\n          clLayoutLogoWidth: clLayoutLogoWidth_Landscape,\n          clLayoutLogoHeight: clLayoutLogoHeight_Landscape,\n          clLayoutLogoCenterX: clLayoutLogoCenterX_Landscape,\n          clLayoutLogoTop: clLayoutLogoTop_Landscape,\n\n          clLayoutPhoneCenterY: clLayoutPhoneCenterY_Landscape,\n          clLayoutPhoneHeight: clLayoutPhoneHeight_Landscape,\n          clLayoutPhoneLeft: clLayoutPhoneLeft_Landscape,\n          clLayoutPhoneRight: clLayoutPhoneRight_Landscape,\n\n          clLayoutLoginBtnCenterY: clLayoutLoginBtnCenterY_Landscape,\n          clLayoutLoginBtnHeight: clLayoutLoginBtnHeight_Landscape,\n          clLayoutLoginBtnLeft: clLayoutLoginBtnLeft_Landscape,\n          clLayoutLoginBtnRight: clLayoutLoginBtnRight_Landscape,\n\n          clLayoutAppPrivacyLeft: clLayoutAppPrivacyLeft_Landscape,\n          clLayoutAppPrivacyRight: clLayoutAppPrivacyRight_Landscape,\n          clLayoutAppPrivacyBottom: clLayoutAppPrivacyBottom_Landscape,\n          clLayoutAppPrivacyHeight: clLayoutAppPrivacyHeight_Landscape,\n\n          clLayoutSloganLeft: clLayoutSloganLeft_Landscape,\n          clLayoutSloganRight: clLayoutSloganRight_Landscape,\n          clLayoutSloganHeight: clLayoutSloganHeight_Landscape,\n          clLayoutSloganBottom: clLayoutSloganBottom_Landscape },\n\n        //自定义控件\n        widgets: {\n          widget0: {\n            widgetId: \"customView_nav_left\", //字符标记\n            type: \"Button\", // 类型：Button：按钮，ImageView:图片 TextView:文本\n            navPosition: \"navleft\", //按钮位置 navleft:导航栏左侧 ，navright:导航栏右侧（不设置默认添加到授权页上）,当设置为导航栏控件时，仅宽高可设置，位置固定\n            textContent: \"自定义左侧返回按钮\", //文字\n            textFont: 11, //字体\n            textColor: [1, 1, 0, 1], //文字颜色[r,g,b,a]\n            // backgroundColor: [0,0,1,1],//控件背景色[r,g,b,a]\n            image: \"static/img/close-black.png\",\n\n\n            // cornerRadius: 10,//圆角，设置圆角时请设置masksToBounds:true\n            // masksToBounds:true,//圆角相关\n\n            isFinish: true, //点击销毁授权页,\n\n            // clLayoutLeft:12,\n            // clLayoutTop:60,\n            // clLayoutRight:-12,\n            // clLayoutBottom:-80,\n            clLayoutWidth: 40,\n            clLayoutHeight: 40\n            // clLayoutCenterX:0,\n            // clLayoutCenterY:0,\n          },\n          widgetnavRight: {\n            widgetId: \"customView_nav_right\", //字符标记\n            type: \"Button\", // 类型：Button：按钮，ImageView:图片 TextView:文本\n            navPosition: \"navright\", //按钮位置 navleft:导航栏左侧 ，navright:导航栏右侧（不设置默认添加到授权页上）,当设置为导航栏控件时，仅宽高可设置，位置固定\n            textContent: \"自定义控件1（点击销毁授权页）\", //文字\n            textFont: 13, //字体\n            textColor: [0, 1, 0, 1], //文字颜色[r,g,b,a]\n            backgroundColor: [0, 0, 1, 1], //控件背景色[r,g,b,a]\n            image: \"static/img/checkbox-multiple-ma.png\",\n\n            cornerRadius: 10, //圆角，设置圆角时请设置masksToBounds:true\n            masksToBounds: true, //圆角相关\n\n            isFinish: true, //点击销毁授权页,\n\n            // clLayoutLeft:12,\n            // clLayoutTop:60,\n            // clLayoutRight:-12,\n            // clLayoutBottom:-80,\n            clLayoutWidth: 60,\n            clLayoutHeight: 40\n            // clLayoutCenterX:0,\n            // clLayoutCenterY:0,\n          },\n          widget1: {\n            widgetId: \"customView_one\", //字符标记\n            type: \"Button\", // 类型：Button：按钮，ImageView:图片 TextView:文本\n            textContent: \"自定义控件34（点击销毁授权页）\", //文字\n            textFont: 13, //字体\n            textColor: [0, 1, 0, 1], //文字颜色[r,g,b,a]\n            backgroundColor: [0, 0, 1, 1], //控件背景色[r,g,b,a]\n            image: \"static/qq.png\",\n\n\n            cornerRadius: 10, //圆角，设置圆角时请设置masksToBounds:true\n            masksToBounds: true, //圆角相关\n\n            // isFinish: true,//点击销毁授权页,\n\n            // clLayoutLeft:12,\n            // clLayoutTop:60,\n            // clLayoutRight:-12,\n            clLayoutBottom: -50,\n            clLayoutWidth: 180,\n            clLayoutHeight: 50,\n            clLayoutCenterX: 0\n            // clLayoutCenterY:0,\n          },\n          widget2: {\n            widgetId: \"customView_two\", //字符标记\n            type: \"TextView\", // 类型：Button：按钮，ImageView:图片 TextView:文本\n            textContent: \"自定义控件文本自定义控件文本自定义控件文本自定义控件文本自定义控件文本自定义控件文本自定义控件文本\", //文字\n            textFont: 10, //字体\n            textColor: [1, 0.5, 0.6, 1], //文字颜色[r,g,b,a]\n            backgroundColor: [0, 1, 0, 1], //控件背景色[r,g,b,a]\n            numberOfLines: 0, //行数：默认单行， 0:无限，自动换行，其他：指定行数\n            textAlignment: 2, //0: center 1: left 2: right //仅TextView有效\n\n            clLayoutLeft: 80,\n            // clLayoutTop:60,\n            clLayoutRight: -80,\n            clLayoutBottom: -120,\n            // clLayoutWidth:150,\n            clLayoutHeight: 60\n            // clLayoutCenterX:0,\n            // // clLayoutCenterY:0,\n          },\n          widget3: {\n            widgetId: \"customView_three_imageView\", //字符标记\n            type: \"ImageView\", // 类型：Button：按钮，ImageView:图片 TextView:文本\n            image: \"static/weixin.png\",\n            backgroundColor: [0, 1, 0, 1], //控件背景色[r,g,b,a]\n\n            cornerRadius: 40, //圆角，设置圆角时请设置masksToBounds:true\n            masksToBounds: true, //圆角相关\n\n            clLayoutLeft: 80,\n            clLayoutTop: 160,\n            clLayoutRight: -80,\n            // clLayoutBottom:-280,\n            // clLayoutWidth:150,\n            clLayoutHeight: 80\n            // clLayoutCenterX:0,\n            // clLayoutCenterY:0,\n          } } };\n\n\n\n      //设置自定义控件点击回调\n      shanYanSDKModule.setCustomInterface(function (customInterface) {\n\n        _this3.shanyan_result = JSON.stringify(customInterface);\n        __f__(\"log\", JSON.stringify(customInterface), \" at pages/login/login.nvue:367\");\n      });\n\n      this.shanyan_code = 1000;\n      this.shanyan_result = \"授权页配置完成\";\n\n    },\n    qulickLogin: function qulickLogin() {var _this4 = this;\n      uni.showLoading({\n        mask: true });\n\n      setTimeout(function () {\n        uni.hideLoading();\n      }, 5000);\n      /*************************iOS*************************/\n      //闪验SDK  拉起授权页方法\n\n      if (this.ios_uiConfigure == null) {\n        //debug_test\n        uni.showToast({\n          icon: \"none\",\n          title: \"请先配置UI\",\n          duration: 3000 });\n\n        return;\n      }\n      //一键登录\n      shanYanSDKModule.quickAuthLoginWithConfigure(this.ios_uiConfigure,\n      function (openLoginAuthListenerResult) {\n        //拉起授权页面回调\n        uni.hideLoading();\n\n        //debug_test\n        uni.showToast({\n          icon: \"none\",\n          title: JSON.stringify(openLoginAuthListenerResult),\n          duration: 3000 });\n\n\n        _this4.shanyan_code = JSON.stringify(openLoginAuthListenerResult.code);\n        _this4.shanyan_result = JSON.stringify(openLoginAuthListenerResult);\n        __f__(\"log\", JSON.stringify(openLoginAuthListenerResult), \" at pages/login/login.nvue:408\");\n      },\n      function (oneKeyLoginListenerResult) {\n        uni.hideLoading();\n        //点一键登录回调\t\n        if (oneKeyLoginListenerResult.errorCode != null) {\n          if (oneKeyLoginListenerResult.code == 1011) {\n            //提示：错误无需提示给用户，可以在用户无感知的状态下直接切换登录方式\n            //用户取消登录（点返回）\n            //处理建议：如无特殊需求可不做处理，仅作为交互状态回调，此时已经回到当前用户自己的页面\n            //点击sdk自带的返回，无论是否设置手动销毁，授权页面都会强制关闭\n          } else {\n            //处理建议：其他错误代码表示闪验通道无法继续，可以统一走开发者自己的其他登录方式，也可以对不同的错误单独处理\n            //关闭授权页\n            shanYanSDKModule.finishAuthControllerCompletion(function (oneKeyLoginListenerResult) {\n\n            });\n          }\n        } else {\n          //SDK获取Token成功\n\n          //此处根据token调用户后台接口获取手机号，获取成功或失败后再调shanYanSDKModule.finishAuthControllerCompletion()关闭页面\n          // //关闭授权页\n          shanYanSDKModule.finishAuthControllerCompletion(function (oneKeyLoginListenerResult) {\n            //如需跳转，code here:\n          });\n\n          //debug_test\n          uni.showToast({\n            icon: \"none\",\n            title: JSON.stringify(oneKeyLoginListenerResult),\n            duration: 3000 });\n\n        }\n\n        _this4.shanyan_code = JSON.stringify(oneKeyLoginListenerResult.code);\n        _this4.shanyan_result = JSON.stringify(oneKeyLoginListenerResult);\n        __f__(\"log\", JSON.stringify(oneKeyLoginListenerResult), \" at pages/login/login.nvue:445\");\n      });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 9)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbG9naW4vbG9naW4ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVdBLGdHLENBQUE7O0FBRUE7O0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSx5QkFGQTtBQUdBLDRCQUhBOztBQUtBLHlCQUxBOztBQU9BLEdBVkE7QUFXQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsMEJBREEsQ0FDQTtBQUNBLE9BRkEsTUFFQTtBQUNBLDJCQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVBBOztBQVNBLEtBdkJBO0FBd0JBLGdCQXhCQSwwQkF3QkE7QUFDQTtBQUNBLGtCQURBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEE7QUFNQSxLQXJDQTtBQXNDQSx5QkF0Q0EsbUNBc0NBO0FBQ0E7O0FBRUEsNkRBSEEsQ0FHQTs7QUFFQSxxREFMQSxDQUtBO0FBQ0E7QUFDQSx3QkFEQSxDQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQURBLEdBQ0EsZ0JBREEsR0FDQSxnQkFEQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQURBLEdBQ0EsZ0JBREEsR0FDQSxnQkFEQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzRUFGQTs7QUFJQSw4QkFKQTtBQUtBOzs7Ozs7Ozs7O0FBVUEseUNBZkE7O0FBaUJBOzs7Ozs7O0FBT0E7O0FBRUEseUNBMUJBLEVBMEJBO0FBQ0EsOERBM0JBLEVBMkJBO0FBQ0EsdUNBNUJBLEVBNEJBOztBQUVBLHVEQTlCQSxFQThCQTs7QUFFQSxpQ0FoQ0EsRUFnQ0E7QUFDQSwyQ0FqQ0EsRUFpQ0E7QUFDQSwrQ0FsQ0EsRUFrQ0E7QUFDQSw0Q0FuQ0E7QUFvQ0Esa0NBcENBO0FBcUNBLGtDQXJDQTtBQXNDQSxtREF0Q0EsRUFzQ0E7O0FBRUEsNkNBeENBOztBQTBDQTtBQUNBLDRCQURBO0FBRUEsc0JBRkEsQ0ExQ0E7QUE2Q0E7QUFDQSw4Q0E5Q0E7QUErQ0Esb0NBL0NBLEVBK0NBO0FBQ0EsNkRBaERBLEVBZ0RBO0FBQ0EsNkRBakRBLEVBaURBOztBQUVBLDREQW5EQTtBQW9EQSw0REFwREEsRUFvREE7QUFDQSx5R0FyREEsRUFxREE7QUFDQSw4REF0REE7QUF1REEsNERBdkRBOztBQXlEQSwrQkF6REEsRUF5REE7QUFDQSw4Q0ExREE7QUEyREEsOENBM0RBO0FBNERBLGdDQTVEQTs7QUE4REE7QUFDQTs7QUFFQTtBQUNBLHVEQUhBO0FBSUEseURBSkE7QUFLQSwyREFMQTtBQU1BLG1EQU5BOztBQVFBLDZEQVJBO0FBU0EsMkRBVEE7QUFVQSx1REFWQTtBQVdBLHlEQVhBOztBQWFBLG1FQWJBO0FBY0EsaUVBZEE7QUFlQSw2REFmQTtBQWdCQSwrREFoQkE7O0FBa0JBLGlFQWxCQTtBQW1CQSxtRUFuQkE7QUFvQkEscUVBcEJBO0FBcUJBLHFFQXJCQTs7QUF1QkEseURBdkJBO0FBd0JBLDJEQXhCQTtBQXlCQSw2REF6QkE7QUEwQkEsNkRBMUJBLEVBL0RBOztBQTJGQTtBQUNBOztBQUVBO0FBQ0Esd0RBSEE7QUFJQSwwREFKQTtBQUtBLDREQUxBO0FBTUEsb0RBTkE7O0FBUUEsOERBUkE7QUFTQSw0REFUQTtBQVVBLHdEQVZBO0FBV0EsMERBWEE7O0FBYUEsb0VBYkE7QUFjQSxrRUFkQTtBQWVBLDhEQWZBO0FBZ0JBLGdFQWhCQTs7QUFrQkEsa0VBbEJBO0FBbUJBLG9FQW5CQTtBQW9CQSxzRUFwQkE7QUFxQkEsc0VBckJBOztBQXVCQSwwREF2QkE7QUF3QkEsNERBeEJBO0FBeUJBLDhEQXpCQTtBQTBCQSw4REExQkEsRUE1RkE7O0FBd0hBO0FBQ0E7QUFDQTtBQUNBLDJDQURBLEVBQ0E7QUFDQSwwQkFGQSxFQUVBO0FBQ0Esa0NBSEEsRUFHQTtBQUNBLG9DQUpBLEVBSUE7QUFDQSx3QkFMQSxFQUtBO0FBQ0EsbUNBTkEsRUFNQTtBQUNBO0FBQ0EsK0NBUkE7OztBQVdBO0FBQ0E7O0FBRUEsMEJBZEEsRUFjQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQXBCQTtBQXFCQTtBQUNBO0FBQ0E7QUF2QkEsV0FEQTtBQTBCQTtBQUNBLDRDQURBLEVBQ0E7QUFDQSwwQkFGQSxFQUVBO0FBQ0EsbUNBSEEsRUFHQTtBQUNBLDBDQUpBLEVBSUE7QUFDQSx3QkFMQSxFQUtBO0FBQ0EsbUNBTkEsRUFNQTtBQUNBLHlDQVBBLEVBT0E7QUFDQSx3REFSQTs7QUFVQSw0QkFWQSxFQVVBO0FBQ0EsK0JBWEEsRUFXQTs7QUFFQSwwQkFiQSxFQWFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBbkJBO0FBb0JBO0FBQ0E7QUFDQTtBQXRCQSxXQTFCQTtBQWtEQTtBQUNBLHNDQURBLEVBQ0E7QUFDQSwwQkFGQSxFQUVBO0FBQ0EsMkNBSEEsRUFHQTtBQUNBLHdCQUpBLEVBSUE7QUFDQSxtQ0FMQSxFQUtBO0FBQ0EseUNBTkEsRUFNQTtBQUNBLGtDQVBBOzs7QUFVQSw0QkFWQSxFQVVBO0FBQ0EsK0JBWEEsRUFXQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFsQkE7QUFtQkEsOEJBbkJBO0FBb0JBLDhCQXBCQTtBQXFCQTtBQUNBO0FBdEJBLFdBbERBO0FBMEVBO0FBQ0Esc0NBREEsRUFDQTtBQUNBLDRCQUZBLEVBRUE7QUFDQSw0RUFIQSxFQUdBO0FBQ0Esd0JBSkEsRUFJQTtBQUNBLHVDQUxBLEVBS0E7QUFDQSx5Q0FOQSxFQU1BO0FBQ0EsNEJBUEEsRUFPQTtBQUNBLDRCQVJBLEVBUUE7O0FBRUEsNEJBVkE7QUFXQTtBQUNBLDhCQVpBO0FBYUEsZ0NBYkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQSxXQTFFQTtBQTZGQTtBQUNBLGtEQURBLEVBQ0E7QUFDQSw2QkFGQSxFQUVBO0FBQ0Esc0NBSEE7QUFJQSx5Q0FKQSxFQUlBOztBQUVBLDRCQU5BLEVBTUE7QUFDQSwrQkFQQSxFQU9BOztBQUVBLDRCQVRBO0FBVUEsNEJBVkE7QUFXQSw4QkFYQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkEsV0E3RkEsRUF6SEE7Ozs7QUEyT0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FKQTs7QUFNQTtBQUNBOztBQUVBLEtBNVZBO0FBNlZBLGVBN1ZBLHlCQTZWQTtBQUNBO0FBQ0Esa0JBREE7O0FBR0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxJQUZBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHlCQUZBO0FBR0Esd0JBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQURBO0FBRUEsNERBRkE7QUFHQSx3QkFIQTs7O0FBTUE7QUFDQTtBQUNBO0FBQ0EsT0FmQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUxBLE1BS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFGQTtBQUdBO0FBQ0EsU0FiQSxNQWFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBOztBQUlBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLDREQUZBO0FBR0EsMEJBSEE7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FwREE7O0FBc0RBLEtBdmFBLEVBWEEsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxkaXY+XHJcblx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwiaW5pdFwiPumXqumqjFNESyDliJ3lp4vljJY8L2J1dHRvbj5cclxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJnZXRQaG9uZUluZm9cIj7pl6rpqoxTREsg6aKE5Y+W5Y+3PC9idXR0b24+XHJcblx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwic2V0QXV0aENKU1RoZW1lQ29uZmlnXCI+5o6I5p2D6aG1IOayiea1uOagt+W8jzwvYnV0dG9uPlxyXG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cInF1bGlja0xvZ2luXCI+6Zeq6aqMU0RLIOaLiei1t+aOiOadg+mhtTwvYnV0dG9uPlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcblx0Y29uc3Qgc2hhbllhblNES01vZHVsZSA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdDTFNESy1TaGFuWWFuU0RLTW9kdWxlJyk7IC8v6LCD55SoXHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGFjY291bnQ6ICcnLFxyXG5cdFx0XHRcdHNoYW55YW5fY29kZTogJ+eKtuaAgeeggScsXHJcblx0XHRcdFx0c2hhbnlhbl9yZXN1bHQ6ICfkv6Hmga/mj4/ov7AnLFxyXG5cclxuXHRcdFx0XHRpb3NfdWlDb25maWd1cmU6IHt9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGluaXQoKSB7XHJcblx0XHRcdFx0Ly/liJ3lp4vljJblu7rorq7lnKhhcHDlkK/liqjml7bosIPnlKjvvIzljbNBcHAudnVl55qEb25MYXVuY2jmlrnms5XkuK1cclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGxldCBwbGF0Zm9ybSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtO1xyXG5cdFx0XHRcdGxldCBhcHBpZDtcclxuXHRcdFx0XHRpZiAocGxhdGZvcm0gPT0gJ2FuZHJvaWQnKSB7XHJcblx0XHRcdFx0XHRhcHBpZCA9ICflronljZNhcHBJRCc7IC8vYXBwSUTkuI7ljIXlkI3nu5HlrppcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHBsYXRmb3JtID09ICdpb3MnKSB7XHJcblx0XHRcdFx0XHRhcHBpZCA9ICdlV1dmQTJLSic7IC8vYXBwSUTkuI5idW5kbGVJROe7keWumlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvL+mXqumqjFNESyDliJ3lp4vljJZcclxuXHRcdFx0XHRzaGFuWWFuU0RLTW9kdWxlLmluaXQoe1xyXG5cdFx0XHRcdFx0YXBwaWQ6IGFwcGlkLFxyXG5cdFx0XHRcdH0sIHJlc3VsdCA9PiB7XHJcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdHRoaXMuc2hhbnlhbl9jb2RlID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LmNvZGUpO1xyXG5cdFx0XHRcdFx0dGhpcy5zaGFueWFuX3Jlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFBob25lSW5mbygpIHtcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHQvL+WunumZhemihOWPluWPt+W7uuiuruaPkOWJjeiwg+eUqO+8jOWmguWwhuimgeiwg+i1t+aOiOadg+mhteeahOWJjee9rumhtemdoueahG9uTG9hZOS4reOAgeS4quS6uuS4reW/g+mhtemdoueahG9uTG9hZOetieWPr+mihOacn+S8muinpuWPkeS4gOmUrueZu+W9leeahOaXtuaculxyXG5cdFx0XHRcdFx0Ly/pl6rpqoxTREsg6aKE5Y+W5Y+3XHJcblx0XHRcdFx0XHRzaGFuWWFuU0RLTW9kdWxlLnByZUdldFBob25lbnVtYmVyKChjb21wbGV0ZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zaGFueWFuX2NvZGUgPSBKU09OLnN0cmluZ2lmeShjb21wbGV0ZS5jb2RlKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zaGFueWFuX3Jlc3VsdCA9IEpTT04uc3RyaW5naWZ5KGNvbXBsZXRlKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY29tcGxldGUpKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRBdXRoQ0pTVGhlbWVDb25maWcoKSB7XHJcblx0XHRcdFx0Ly9pT1Mg5YWo5bGP5qih5byPXHJcblxyXG5cdFx0XHRcdGxldCBzY3JlZW5XaWR0aF9Qb3J0cmFpdCA9IHBsdXMuc2NyZWVuLnJlc29sdXRpb25XaWR0aDsgLy/nq5blsY/lrr1cclxuXHJcblx0XHRcdFx0dmFyIHNjcmVlblNjYWxlID0gc2NyZWVuV2lkdGhfUG9ydHJhaXQgLyAzNzUuMDsgLy/nm7jlr7lpcGhvbmU25bGP5bmVXHJcblx0XHRcdFx0aWYgKHNjcmVlblNjYWxlID4gMSkge1xyXG5cdFx0XHRcdFx0c2NyZWVuU2NhbGUgPSAxOyAvL+Wkp+Wxj+eahOaXoOmcgOaUvuWkp1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly/nq5blsY9cclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRMb2dvVG9wX1BvcnRyYWl0ID0gc2NyZWVuU2NhbGUgKiA2MDtcclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRMb2dvV2lkdGhfUG9ydHJhaXQgPSA2MCAqIHNjcmVlblNjYWxlO1xyXG5cdFx0XHRcdGxldCBjbExheW91dExvZ29IZWlnaHRfUG9ydHJhaXQgPSA2MCAqIHNjcmVlblNjYWxlO1xyXG5cdFx0XHRcdGxldCBjbExheW91dExvZ29DZW50ZXJYX1BvcnRyYWl0ID0gMDtcclxuXHJcblx0XHRcdFx0bGV0IGNsTGF5b3V0UGhvbmVDZW50ZXJZX1BvcnRyYWl0ID0gLTIwICogc2NyZWVuU2NhbGU7XHJcblx0XHRcdFx0bGV0IGNsTGF5b3V0UGhvbmVMZWZ0X1BvcnRyYWl0ID0gNTAgKiBzY3JlZW5TY2FsZTtcclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRQaG9uZVJpZ2h0X1BvcnRyYWl0ID0gLTUwICogc2NyZWVuU2NhbGU7XHJcblx0XHRcdFx0bGV0IGNsTGF5b3V0UGhvbmVIZWlnaHRfUG9ydHJhaXQgPSAyMCAqIHNjcmVlblNjYWxlO1xyXG5cclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRMb2dpbkJ0bkNlbnRlcllfUG9ydHJhaXQgPSBjbExheW91dFBob25lQ2VudGVyWV9Qb3J0cmFpdCArIGNsTGF5b3V0UGhvbmVIZWlnaHRfUG9ydHJhaXQgKiAwLjUgKlxyXG5cdFx0XHRcdFx0c2NyZWVuU2NhbGUgKyAyMCAqIHNjcmVlblNjYWxlICsgMTUgKiBzY3JlZW5TY2FsZTtcclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRMb2dpbkJ0bkhlaWdodF9Qb3J0cmFpdCA9IDMwICogc2NyZWVuU2NhbGU7XHJcblx0XHRcdFx0bGV0IGNsTGF5b3V0TG9naW5CdG5MZWZ0X1BvcnRyYWl0ID0gNzAgKiBzY3JlZW5TY2FsZTtcclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRMb2dpbkJ0blJpZ2h0X1BvcnRyYWl0ID0gLTcwICogc2NyZWVuU2NhbGU7XHJcblxyXG5cdFx0XHRcdGxldCBjbExheW91dEFwcFByaXZhY3lMZWZ0X1BvcnRyYWl0ID0gNDAgKiBzY3JlZW5TY2FsZTtcclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRBcHBQcml2YWN5UmlnaHRfUG9ydHJhaXQgPSAtNDAgKiBzY3JlZW5TY2FsZTtcclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRBcHBQcml2YWN5Qm90dG9tX1BvcnRyYWl0ID0gMCAqIHNjcmVlblNjYWxlO1xyXG5cdFx0XHRcdGxldCBjbExheW91dEFwcFByaXZhY3lIZWlnaHRfUG9ydHJhaXQgPSA0NSAqIHNjcmVlblNjYWxlO1xyXG5cclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRTbG9nYW5MZWZ0X1BvcnRyYWl0ID0gMDtcclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRTbG9nYW5SaWdodF9Qb3J0cmFpdCA9IDA7XHJcblx0XHRcdFx0bGV0IGNsTGF5b3V0U2xvZ2FuSGVpZ2h0X1BvcnRyYWl0ID0gMTUgKiBzY3JlZW5TY2FsZTtcclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRTbG9nYW5Cb3R0b21fUG9ydHJhaXQgPSBjbExheW91dEFwcFByaXZhY3lCb3R0b21fUG9ydHJhaXQgLSBjbExheW91dEFwcFByaXZhY3lIZWlnaHRfUG9ydHJhaXQ7XHJcblxyXG5cdFx0XHRcdC8v5qiq5bGPIO+8iOWmgmFwcOacrOi6q+S4jeaUr+aMgeaoquWxj++8jOWPr+S4jemcgOiuvue9ruaoquWxj+S4i1VJ6YWN572u77yJXHJcblxyXG5cdFx0XHRcdGxldCBjbExheW91dExvZ29XaWR0aF9MYW5kc2NhcGUgPSA2MCAqIHNjcmVlblNjYWxlO1xyXG5cdFx0XHRcdGxldCBjbExheW91dExvZ29IZWlnaHRfTGFuZHNjYXBlID0gNjAgKiBzY3JlZW5TY2FsZTtcclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRMb2dvQ2VudGVyWF9MYW5kc2NhcGUgPSAwO1xyXG5cdFx0XHRcdGxldCBjbExheW91dExvZ29Ub3BfTGFuZHNjYXBlID0gMjUgKiBzY3JlZW5TY2FsZTtcclxuXHJcblx0XHRcdFx0bGV0IGNsTGF5b3V0UGhvbmVDZW50ZXJZX0xhbmRzY2FwZSA9IC0yMCAqIHNjcmVlblNjYWxlO1xyXG5cdFx0XHRcdGxldCBjbExheW91dFBob25lTGVmdF9MYW5kc2NhcGUgPSA1MCAqIHNjcmVlblNjYWxlO1xyXG5cdFx0XHRcdGxldCBjbExheW91dFBob25lUmlnaHRfTGFuZHNjYXBlID0gLTUwICogc2NyZWVuU2NhbGU7XHJcblx0XHRcdFx0bGV0IGNsTGF5b3V0UGhvbmVIZWlnaHRfTGFuZHNjYXBlID0gMjAgKiBzY3JlZW5TY2FsZTtcclxuXHJcblx0XHRcdFx0bGV0IGNsTGF5b3V0TG9naW5CdG5DZW50ZXJZX0xhbmRzY2FwZSA9IGNsTGF5b3V0UGhvbmVDZW50ZXJZX0xhbmRzY2FwZSArIGNsTGF5b3V0UGhvbmVIZWlnaHRfTGFuZHNjYXBlICogMC41ICpcclxuXHRcdFx0XHRcdHNjcmVlblNjYWxlICsgMjAgKiBzY3JlZW5TY2FsZSArIDE1ICogc2NyZWVuU2NhbGU7XHJcblx0XHRcdFx0bGV0IGNsTGF5b3V0TG9naW5CdG5IZWlnaHRfTGFuZHNjYXBlID0gMzAgKiBzY3JlZW5TY2FsZTtcclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRMb2dpbkJ0bkxlZnRfTGFuZHNjYXBlID0gNzAgKiBzY3JlZW5TY2FsZTtcclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRMb2dpbkJ0blJpZ2h0X0xhbmRzY2FwZSA9IC03MCAqIHNjcmVlblNjYWxlO1xyXG5cclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRBcHBQcml2YWN5TGVmdF9MYW5kc2NhcGUgPSA0MCAqIHNjcmVlblNjYWxlO1xyXG5cdFx0XHRcdGxldCBjbExheW91dEFwcFByaXZhY3lSaWdodF9MYW5kc2NhcGUgPSAtNDAgKiBzY3JlZW5TY2FsZTtcclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRBcHBQcml2YWN5Qm90dG9tX0xhbmRzY2FwZSA9IDAgKiBzY3JlZW5TY2FsZTtcclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRBcHBQcml2YWN5SGVpZ2h0X0xhbmRzY2FwZSA9IDQ1ICogc2NyZWVuU2NhbGU7XHJcblxyXG5cdFx0XHRcdGxldCBjbExheW91dFNsb2dhbkxlZnRfTGFuZHNjYXBlID0gMDtcclxuXHRcdFx0XHRsZXQgY2xMYXlvdXRTbG9nYW5SaWdodF9MYW5kc2NhcGUgPSAwO1xyXG5cdFx0XHRcdGxldCBjbExheW91dFNsb2dhbkhlaWdodF9MYW5kc2NhcGUgPSAxNSAqIHNjcmVlblNjYWxlO1xyXG5cdFx0XHRcdGxldCBjbExheW91dFNsb2dhbkJvdHRvbV9MYW5kc2NhcGUgPSBjbExheW91dEFwcFByaXZhY3lCb3R0b21fTGFuZHNjYXBlIC0gY2xMYXlvdXRBcHBQcml2YWN5SGVpZ2h0X0xhbmRzY2FwZTtcclxuXHJcblx0XHRcdFx0dGhpcy5pb3NfdWlDb25maWd1cmUgPSB7XHJcblxyXG5cdFx0XHRcdFx0Y2xCYWNrZ3JvdW5kSW1nOiBcInN0YXRpYy9lYjlhMGRhZTE4NDkxOTkwYTQzZmUwMjgzMmQzY2FmYS5qcGdcIixcclxuXHJcblx0XHRcdFx0XHRzaG91bGRBdXRvcm90YXRlOiB0cnVlLFxyXG5cdFx0XHRcdFx0Lyoq5pSv5oyB5pa55ZCRXHJcblx0XHRcdFx0XHQgKiDlpoLmlK/mjIHmqKrnq5blsY/vvIzpnIDlkIzml7borr7nva4gY2xPcmllbnRhdGlvbkxheU91dFBvcnRyYWl0IOWSjCBjbE9yaWVudGF0aW9uTGF5T3V0TGFuZHNjYXBlXHJcblx0XHRcdFx0XHQgKiAwOlVJSW50ZXJmYWNlT3JpZW50YXRpb25NYXNrUG9ydHJhaXRcclxuXHRcdFx0XHRcdCAqIDE6VUlJbnRlcmZhY2VPcmllbnRhdGlvbk1hc2tMYW5kc2NhcGVMZWZ0XHJcblx0XHRcdFx0XHQgKiAyOlVJSW50ZXJmYWNlT3JpZW50YXRpb25NYXNrTGFuZHNjYXBlUmlnaHRcclxuXHRcdFx0XHRcdCAqIDM6VUlJbnRlcmZhY2VPcmllbnRhdGlvbk1hc2tQb3J0cmFpdFVwc2lkZURvd25cclxuXHRcdFx0XHRcdCAqIDQ6VUlJbnRlcmZhY2VPcmllbnRhdGlvbk1hc2tMYW5kc2NhcGVcclxuXHRcdFx0XHRcdCAqIDU6VUlJbnRlcmZhY2VPcmllbnRhdGlvbk1hc2tBbGxcclxuXHRcdFx0XHRcdCAqIDY6VUlJbnRlcmZhY2VPcmllbnRhdGlvbk1hc2tBbGxCdXRVcHNpZGVEb3duXHJcblx0XHRcdFx0XHQgKiAqL1xyXG5cdFx0XHRcdFx0c3VwcG9ydGVkSW50ZXJmYWNlT3JpZW50YXRpb25zOiA1LFxyXG5cclxuXHRcdFx0XHRcdC8qKuWBj+WlveaWueWQkSBcclxuXHRcdFx0XHRcdCAqIC0xOlVJSW50ZXJmYWNlT3JpZW50YXRpb25Vbmtub3duXHJcblx0XHRcdFx0XHQgKiAwOlVJSW50ZXJmYWNlT3JpZW50YXRpb25Qb3J0cmFpdFxyXG5cdFx0XHRcdFx0ICogMTpVSUludGVyZmFjZU9yaWVudGF0aW9uUG9ydHJhaXRVcHNpZGVEb3duXHJcblx0XHRcdFx0XHQgKiAyOlVJSW50ZXJmYWNlT3JpZW50YXRpb25MYW5kc2NhcGVMZWZ0XHJcblx0XHRcdFx0XHQgKiAzOlVJSW50ZXJmYWNlT3JpZW50YXRpb25MYW5kc2NhcGVSaWdodFxyXG5cdFx0XHRcdFx0ICogKi9cclxuXHRcdFx0XHRcdC8v5YGP5aW95pa55ZCR6buY6K6kUG9ydHJhaXQgcHJlZmVycmVkSW50ZXJmYWNlT3JpZW50YXRpb25Gb3JQcmVzZW50YXRpb246IE51bWJlcig1KSxcclxuXHJcblx0XHRcdFx0XHRjbE5hdmlnYXRpb25CYWNrZ3JvdW5kQ2xlYXI6IHRydWUsIC8v5a+86Iiq5qCP6YCP5piOXHJcblx0XHRcdFx0XHRjbE5hdmlnYXRpb25CYWNrQnRuSW1hZ2U6IFwic3RhdGljL2ltZy9jbG9zZS13aGl0ZS5wbmdcIiwgLy/ov5Tlm57mjInpkq7lm77niYdcclxuXHRcdFx0XHRcdGNsTmF2QmFja0J0bkFsaW1lbnRSaWdodDogZmFsc2UsIC8v6L+U5Zue5oyJ6ZKu5bGF5Y+zLOiuvue9ruiHquWumuS5ieWvvOiIquagj+i/lOWbnuaMiemSruaXtu+8jOS7peiHquWumuS5ieS4uuWHhlxyXG5cclxuXHRcdFx0XHRcdGNsTG9nb0ltYWdlOiBcInN0YXRpYy9pbWcvbG9nb19zaGFueWFuX3RleHQucG5nXCIsIC8vbG9nb+WbvueJh1xyXG5cclxuXHRcdFx0XHRcdGNsTG9naW5CdG5UZXh0OiBcIuacrOacuuWPt+S4gOmUrueZu+W9lVwiLCAvL+S4gOmUrueZu+W9leaMiemSruaWh+Wtl1xyXG5cdFx0XHRcdFx0Y2xMb2dpbkJ0blRleHRDb2xvcjogWzEsIDEsIDEsIDEuMF0sIC8vcmdiYVxyXG5cdFx0XHRcdFx0Y2xMb2dpbkJ0bkJnQ29sb3I6IFswLjIsIDAuOCwgMC4yLCAxLjBdLCAvL3JnYmFcclxuXHRcdFx0XHRcdGNsTG9naW5CdG5UZXh0Rm9udDogMTUgKiBzY3JlZW5TY2FsZSxcclxuXHRcdFx0XHRcdGNsTG9naW5CdG5Db3JuZXJSYWRpdXM6IDEwLFxyXG5cdFx0XHRcdFx0Y2xMb2dpbkJ0bkJvcmRlcldpZHRoOiAwLjUsXHJcblx0XHRcdFx0XHRjbExvZ2luQnRuQm9yZGVyQ29sb3I6IFswLjEsIDAuOCwgMC4xLCAxLjBdLCAvL3JnYmEgXHJcblxyXG5cdFx0XHRcdFx0Y2xQaG9uZU51bWJlckZvbnQ6IDIwLjAgKiBzY3JlZW5TY2FsZSxcclxuXHJcblx0XHRcdFx0XHRjbEFwcFByaXZhY3lDb2xvcjogW1xyXG5cdFx0XHRcdFx0XHRbMC42LCAwLjYsIDAuNiwgMS4wXSxcclxuXHRcdFx0XHRcdFx0WzAsIDEsIDAsIDEuMF1cclxuXHRcdFx0XHRcdF0sIC8vMiBpdGVtLGNvbW1vbVRleHRDb2xvciBhbmQgYXBwUHJpdmFjeVRleHRDb2xvclxyXG5cdFx0XHRcdFx0Y2xBcHBQcml2YWN5VGV4dEZvbnQ6IDExICogc2NyZWVuU2NhbGUsXHJcblx0XHRcdFx0XHRjbEFwcFByaXZhY3lUZXh0QWxpZ25tZW50OiAwLCAvLzA6IGNlbnRlciAxOiBsZWZ0IDI6IHJpZ2h0XHJcblx0XHRcdFx0XHRjbEFwcFByaXZhY3lGaXJzdDogW1wi5rWL6K+V6L+e5o6lQVwiLCBcImh0dHBzOi8vd3d3LmJhaWR1LmNvbVwiXSwgLy8gMiBpdGVtLCBuYW1lIGFuZCB1cmxcclxuXHRcdFx0XHRcdGNsQXBwUHJpdmFjeVNlY29uZDogW1wi5rWL6K+V6L+e5o6lQlwiLCBcImh0dHBzOi8vd3d3LnNpbmEuY29tXCJdLCAvLyAyIGl0ZW0sIG5hbWUgYW5kIHVybFxyXG5cclxuXHRcdFx0XHRcdGNsQ2hlY2tCb3hWZXJ0aWNhbEFsaWdubWVudFRvQXBwUHJpdmFjeUNlbnRlclk6IHRydWUsXHJcblx0XHRcdFx0XHRjbENoZWNrQm94U2l6ZTogWzMwICogc2NyZWVuU2NhbGUsIDMwICogc2NyZWVuU2NhbGVdLCAvLzIgaXRlbSwgd2lkdGggYW5kIGhlaWdodFxyXG5cdFx0XHRcdFx0Y2xDaGVja0JveEltYWdlRWRnZUluc2V0czogWzIgKiBzY3JlZW5TY2FsZSwgMTAgKiBzY3JlZW5TY2FsZSwgMTMgKiBzY3JlZW5TY2FsZSwgNSAqIHNjcmVlblNjYWxlXSwgLy80IGl0ZW0sIHRvcCBsZWZ0IGJvdHRvbSByaWdodFxyXG5cdFx0XHRcdFx0Y2xDaGVja0JveFVuY2hlY2tlZEltYWdlOiBcInN0YXRpYy9pbWcvY2hlY2tCb3hOb3IucG5nXCIsXHJcblx0XHRcdFx0XHRjbENoZWNrQm94Q2hlY2tlZEltYWdlOiBcInN0YXRpYy9pbWcvY2hlY2tCb3hTRUwucG5nXCIsXHJcblxyXG5cdFx0XHRcdFx0Y2xMb2FkaW5nU2l6ZTogWzUwLCA1MF0sIC8vMiBpdGVtLCB3aWR0aCBhbmQgaGVpZ2h0XHJcblx0XHRcdFx0XHRjbExvYWRpbmdUaW50Q29sb3I6IFswLjIsIDAuOCwgMC4yLCAxXSxcclxuXHRcdFx0XHRcdGNsTG9hZGluZ0JhY2tncm91bmRDb2xvcjogWzEsIDEsIDEsIDFdLFxyXG5cdFx0XHRcdFx0Y2xMb2FkaW5nQ29ybmVyUmFkaXVzOiA1LFxyXG5cclxuXHRcdFx0XHRcdC8v56uW5bGP5biD5bGA5a+56LGhXHJcblx0XHRcdFx0XHRjbE9yaWVudGF0aW9uTGF5T3V0UG9ydHJhaXQ6IHtcclxuXHJcblx0XHRcdFx0XHRcdC8v5o6n5Lu2XHJcblx0XHRcdFx0XHRcdGNsTGF5b3V0TG9nb1dpZHRoOiBjbExheW91dExvZ29XaWR0aF9Qb3J0cmFpdCxcclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRMb2dvSGVpZ2h0OiBjbExheW91dExvZ29IZWlnaHRfUG9ydHJhaXQsXHJcblx0XHRcdFx0XHRcdGNsTGF5b3V0TG9nb0NlbnRlclg6IGNsTGF5b3V0TG9nb0NlbnRlclhfUG9ydHJhaXQsXHJcblx0XHRcdFx0XHRcdGNsTGF5b3V0TG9nb1RvcDogY2xMYXlvdXRMb2dvVG9wX1BvcnRyYWl0LFxyXG5cclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRQaG9uZUNlbnRlclk6IGNsTGF5b3V0UGhvbmVDZW50ZXJZX1BvcnRyYWl0LFxyXG5cdFx0XHRcdFx0XHRjbExheW91dFBob25lSGVpZ2h0OiBjbExheW91dFBob25lSGVpZ2h0X1BvcnRyYWl0LFxyXG5cdFx0XHRcdFx0XHRjbExheW91dFBob25lTGVmdDogY2xMYXlvdXRQaG9uZUxlZnRfUG9ydHJhaXQsXHJcblx0XHRcdFx0XHRcdGNsTGF5b3V0UGhvbmVSaWdodDogY2xMYXlvdXRQaG9uZVJpZ2h0X1BvcnRyYWl0LFxyXG5cclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRMb2dpbkJ0bkNlbnRlclk6IGNsTGF5b3V0TG9naW5CdG5DZW50ZXJZX1BvcnRyYWl0LFxyXG5cdFx0XHRcdFx0XHRjbExheW91dExvZ2luQnRuSGVpZ2h0OiBjbExheW91dExvZ2luQnRuSGVpZ2h0X1BvcnRyYWl0LFxyXG5cdFx0XHRcdFx0XHRjbExheW91dExvZ2luQnRuTGVmdDogY2xMYXlvdXRMb2dpbkJ0bkxlZnRfUG9ydHJhaXQsXHJcblx0XHRcdFx0XHRcdGNsTGF5b3V0TG9naW5CdG5SaWdodDogY2xMYXlvdXRMb2dpbkJ0blJpZ2h0X1BvcnRyYWl0LFxyXG5cclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRBcHBQcml2YWN5TGVmdDogY2xMYXlvdXRBcHBQcml2YWN5TGVmdF9Qb3J0cmFpdCxcclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRBcHBQcml2YWN5UmlnaHQ6IGNsTGF5b3V0QXBwUHJpdmFjeVJpZ2h0X1BvcnRyYWl0LFxyXG5cdFx0XHRcdFx0XHRjbExheW91dEFwcFByaXZhY3lCb3R0b206IGNsTGF5b3V0QXBwUHJpdmFjeUJvdHRvbV9Qb3J0cmFpdCxcclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRBcHBQcml2YWN5SGVpZ2h0OiBjbExheW91dEFwcFByaXZhY3lIZWlnaHRfUG9ydHJhaXQsXHJcblxyXG5cdFx0XHRcdFx0XHRjbExheW91dFNsb2dhbkxlZnQ6IGNsTGF5b3V0U2xvZ2FuTGVmdF9Qb3J0cmFpdCxcclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRTbG9nYW5SaWdodDogY2xMYXlvdXRTbG9nYW5SaWdodF9Qb3J0cmFpdCxcclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRTbG9nYW5IZWlnaHQ6IGNsTGF5b3V0U2xvZ2FuSGVpZ2h0X1BvcnRyYWl0LFxyXG5cdFx0XHRcdFx0XHRjbExheW91dFNsb2dhbkJvdHRvbTogY2xMYXlvdXRTbG9nYW5Cb3R0b21fUG9ydHJhaXQsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Ly/mqKrlsY/luIPlsYDlr7nosaEg77yI5aaCYXBw5pys6Lqr5LiN5pSv5oyB5qiq5bGP77yM5Y+v5LiN6ZyA6K6+572u5qiq5bGP5LiLVUnphY3nva7lr7nosaHvvIlcclxuXHRcdFx0XHRcdGNsT3JpZW50YXRpb25MYXlPdXRMYW5kc2NhcGU6IHtcclxuXHJcblx0XHRcdFx0XHRcdC8v5o6n5Lu2XHJcblx0XHRcdFx0XHRcdGNsTGF5b3V0TG9nb1dpZHRoOiBjbExheW91dExvZ29XaWR0aF9MYW5kc2NhcGUsXHJcblx0XHRcdFx0XHRcdGNsTGF5b3V0TG9nb0hlaWdodDogY2xMYXlvdXRMb2dvSGVpZ2h0X0xhbmRzY2FwZSxcclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRMb2dvQ2VudGVyWDogY2xMYXlvdXRMb2dvQ2VudGVyWF9MYW5kc2NhcGUsXHJcblx0XHRcdFx0XHRcdGNsTGF5b3V0TG9nb1RvcDogY2xMYXlvdXRMb2dvVG9wX0xhbmRzY2FwZSxcclxuXHJcblx0XHRcdFx0XHRcdGNsTGF5b3V0UGhvbmVDZW50ZXJZOiBjbExheW91dFBob25lQ2VudGVyWV9MYW5kc2NhcGUsXHJcblx0XHRcdFx0XHRcdGNsTGF5b3V0UGhvbmVIZWlnaHQ6IGNsTGF5b3V0UGhvbmVIZWlnaHRfTGFuZHNjYXBlLFxyXG5cdFx0XHRcdFx0XHRjbExheW91dFBob25lTGVmdDogY2xMYXlvdXRQaG9uZUxlZnRfTGFuZHNjYXBlLFxyXG5cdFx0XHRcdFx0XHRjbExheW91dFBob25lUmlnaHQ6IGNsTGF5b3V0UGhvbmVSaWdodF9MYW5kc2NhcGUsXHJcblxyXG5cdFx0XHRcdFx0XHRjbExheW91dExvZ2luQnRuQ2VudGVyWTogY2xMYXlvdXRMb2dpbkJ0bkNlbnRlcllfTGFuZHNjYXBlLFxyXG5cdFx0XHRcdFx0XHRjbExheW91dExvZ2luQnRuSGVpZ2h0OiBjbExheW91dExvZ2luQnRuSGVpZ2h0X0xhbmRzY2FwZSxcclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRMb2dpbkJ0bkxlZnQ6IGNsTGF5b3V0TG9naW5CdG5MZWZ0X0xhbmRzY2FwZSxcclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRMb2dpbkJ0blJpZ2h0OiBjbExheW91dExvZ2luQnRuUmlnaHRfTGFuZHNjYXBlLFxyXG5cclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRBcHBQcml2YWN5TGVmdDogY2xMYXlvdXRBcHBQcml2YWN5TGVmdF9MYW5kc2NhcGUsXHJcblx0XHRcdFx0XHRcdGNsTGF5b3V0QXBwUHJpdmFjeVJpZ2h0OiBjbExheW91dEFwcFByaXZhY3lSaWdodF9MYW5kc2NhcGUsXHJcblx0XHRcdFx0XHRcdGNsTGF5b3V0QXBwUHJpdmFjeUJvdHRvbTogY2xMYXlvdXRBcHBQcml2YWN5Qm90dG9tX0xhbmRzY2FwZSxcclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRBcHBQcml2YWN5SGVpZ2h0OiBjbExheW91dEFwcFByaXZhY3lIZWlnaHRfTGFuZHNjYXBlLFxyXG5cclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRTbG9nYW5MZWZ0OiBjbExheW91dFNsb2dhbkxlZnRfTGFuZHNjYXBlLFxyXG5cdFx0XHRcdFx0XHRjbExheW91dFNsb2dhblJpZ2h0OiBjbExheW91dFNsb2dhblJpZ2h0X0xhbmRzY2FwZSxcclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRTbG9nYW5IZWlnaHQ6IGNsTGF5b3V0U2xvZ2FuSGVpZ2h0X0xhbmRzY2FwZSxcclxuXHRcdFx0XHRcdFx0Y2xMYXlvdXRTbG9nYW5Cb3R0b206IGNsTGF5b3V0U2xvZ2FuQm90dG9tX0xhbmRzY2FwZSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQvL+iHquWumuS5ieaOp+S7tlxyXG5cdFx0XHRcdFx0d2lkZ2V0czoge1xyXG5cdFx0XHRcdFx0XHR3aWRnZXQwOiB7XHJcblx0XHRcdFx0XHRcdFx0d2lkZ2V0SWQ6IFwiY3VzdG9tVmlld19uYXZfbGVmdFwiLCAvL+Wtl+espuagh+iusFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwiQnV0dG9uXCIsIC8vIOexu+Wei++8mkJ1dHRvbu+8muaMiemSru+8jEltYWdlVmlldzrlm77niYcgVGV4dFZpZXc65paH5pysXHJcblx0XHRcdFx0XHRcdFx0bmF2UG9zaXRpb246IFwibmF2bGVmdFwiLCAvL+aMiemSruS9jee9riBuYXZsZWZ0OuWvvOiIquagj+W3puS+pyDvvIxuYXZyaWdodDrlr7zoiKrmoI/lj7PkvqfvvIjkuI3orr7nva7pu5jorqTmt7vliqDliLDmjojmnYPpobXkuIrvvIks5b2T6K6+572u5Li65a+86Iiq5qCP5o6n5Lu25pe277yM5LuF5a696auY5Y+v6K6+572u77yM5L2N572u5Zu65a6aXHJcblx0XHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IFwi6Ieq5a6a5LmJ5bem5L6n6L+U5Zue5oyJ6ZKuXCIsIC8v5paH5a2XXHJcblx0XHRcdFx0XHRcdFx0dGV4dEZvbnQ6IDExLCAvL+Wtl+S9k1xyXG5cdFx0XHRcdFx0XHRcdHRleHRDb2xvcjogWzEsIDEsIDAsIDFdLCAvL+aWh+Wtl+minOiJsltyLGcsYixhXVxyXG5cdFx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmRDb2xvcjogWzAsMCwxLDFdLC8v5o6n5Lu26IOM5pmv6ImyW3IsZyxiLGFdXHJcblx0XHRcdFx0XHRcdFx0aW1hZ2U6IFwic3RhdGljL2ltZy9jbG9zZS1ibGFjay5wbmdcIixcclxuXHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIGNvcm5lclJhZGl1czogMTAsLy/lnIbop5LvvIzorr7nva7lnIbop5Lml7bor7forr7nva5tYXNrc1RvQm91bmRzOnRydWVcclxuXHRcdFx0XHRcdFx0XHQvLyBtYXNrc1RvQm91bmRzOnRydWUsLy/lnIbop5Lnm7jlhbNcclxuXHJcblx0XHRcdFx0XHRcdFx0aXNGaW5pc2g6IHRydWUsIC8v54K55Ye76ZSA5q+B5o6I5p2D6aG1LFxyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBjbExheW91dExlZnQ6MTIsXHJcblx0XHRcdFx0XHRcdFx0Ly8gY2xMYXlvdXRUb3A6NjAsXHJcblx0XHRcdFx0XHRcdFx0Ly8gY2xMYXlvdXRSaWdodDotMTIsXHJcblx0XHRcdFx0XHRcdFx0Ly8gY2xMYXlvdXRCb3R0b206LTgwLFxyXG5cdFx0XHRcdFx0XHRcdGNsTGF5b3V0V2lkdGg6IDQwLFxyXG5cdFx0XHRcdFx0XHRcdGNsTGF5b3V0SGVpZ2h0OiA0MCxcclxuXHRcdFx0XHRcdFx0XHQvLyBjbExheW91dENlbnRlclg6MCxcclxuXHRcdFx0XHRcdFx0XHQvLyBjbExheW91dENlbnRlclk6MCxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0d2lkZ2V0bmF2UmlnaHQ6IHtcclxuXHRcdFx0XHRcdFx0XHR3aWRnZXRJZDogXCJjdXN0b21WaWV3X25hdl9yaWdodFwiLCAvL+Wtl+espuagh+iusFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwiQnV0dG9uXCIsIC8vIOexu+Wei++8mkJ1dHRvbu+8muaMiemSru+8jEltYWdlVmlldzrlm77niYcgVGV4dFZpZXc65paH5pysXHJcblx0XHRcdFx0XHRcdFx0bmF2UG9zaXRpb246IFwibmF2cmlnaHRcIiwgLy/mjInpkq7kvY3nva4gbmF2bGVmdDrlr7zoiKrmoI/lt6bkvqcg77yMbmF2cmlnaHQ65a+86Iiq5qCP5Y+z5L6n77yI5LiN6K6+572u6buY6K6k5re75Yqg5Yiw5o6I5p2D6aG15LiK77yJLOW9k+iuvue9ruS4uuWvvOiIquagj+aOp+S7tuaXtu+8jOS7heWuvemrmOWPr+iuvue9ru+8jOS9jee9ruWbuuWumlxyXG5cdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBcIuiHquWumuS5ieaOp+S7tjHvvIjngrnlh7vplIDmr4HmjojmnYPpobXvvIlcIiwgLy/mloflrZdcclxuXHRcdFx0XHRcdFx0XHR0ZXh0Rm9udDogMTMsIC8v5a2X5L2TXHJcblx0XHRcdFx0XHRcdFx0dGV4dENvbG9yOiBbMCwgMSwgMCwgMV0sIC8v5paH5a2X6aKc6ImyW3IsZyxiLGFdXHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBbMCwgMCwgMSwgMV0sIC8v5o6n5Lu26IOM5pmv6ImyW3IsZyxiLGFdXHJcblx0XHRcdFx0XHRcdFx0aW1hZ2U6IFwic3RhdGljL2ltZy9jaGVja2JveC1tdWx0aXBsZS1tYS5wbmdcIixcclxuXHJcblx0XHRcdFx0XHRcdFx0Y29ybmVyUmFkaXVzOiAxMCwgLy/lnIbop5LvvIzorr7nva7lnIbop5Lml7bor7forr7nva5tYXNrc1RvQm91bmRzOnRydWVcclxuXHRcdFx0XHRcdFx0XHRtYXNrc1RvQm91bmRzOiB0cnVlLCAvL+WchuinkuebuOWFs1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpc0ZpbmlzaDogdHJ1ZSwgLy/ngrnlh7vplIDmr4HmjojmnYPpobUsXHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIGNsTGF5b3V0TGVmdDoxMixcclxuXHRcdFx0XHRcdFx0XHQvLyBjbExheW91dFRvcDo2MCxcclxuXHRcdFx0XHRcdFx0XHQvLyBjbExheW91dFJpZ2h0Oi0xMixcclxuXHRcdFx0XHRcdFx0XHQvLyBjbExheW91dEJvdHRvbTotODAsXHJcblx0XHRcdFx0XHRcdFx0Y2xMYXlvdXRXaWR0aDogNjAsXHJcblx0XHRcdFx0XHRcdFx0Y2xMYXlvdXRIZWlnaHQ6IDQwLFxyXG5cdFx0XHRcdFx0XHRcdC8vIGNsTGF5b3V0Q2VudGVyWDowLFxyXG5cdFx0XHRcdFx0XHRcdC8vIGNsTGF5b3V0Q2VudGVyWTowLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR3aWRnZXQxOiB7XHJcblx0XHRcdFx0XHRcdFx0d2lkZ2V0SWQ6IFwiY3VzdG9tVmlld19vbmVcIiwgLy/lrZfnrKbmoIforrBcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiBcIkJ1dHRvblwiLCAvLyDnsbvlnovvvJpCdXR0b27vvJrmjInpkq7vvIxJbWFnZVZpZXc65Zu+54mHIFRleHRWaWV3OuaWh+acrFxyXG5cdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBcIuiHquWumuS5ieaOp+S7tjM077yI54K55Ye76ZSA5q+B5o6I5p2D6aG177yJXCIsIC8v5paH5a2XXHJcblx0XHRcdFx0XHRcdFx0dGV4dEZvbnQ6IDEzLCAvL+Wtl+S9k1xyXG5cdFx0XHRcdFx0XHRcdHRleHRDb2xvcjogWzAsIDEsIDAsIDFdLCAvL+aWh+Wtl+minOiJsltyLGcsYixhXVxyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogWzAsIDAsIDEsIDFdLCAvL+aOp+S7tuiDjOaZr+iJsltyLGcsYixhXVxyXG5cdFx0XHRcdFx0XHRcdGltYWdlOiBcInN0YXRpYy9xcS5wbmdcIixcclxuXHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvcm5lclJhZGl1czogMTAsIC8v5ZyG6KeS77yM6K6+572u5ZyG6KeS5pe26K+36K6+572ubWFza3NUb0JvdW5kczp0cnVlXHJcblx0XHRcdFx0XHRcdFx0bWFza3NUb0JvdW5kczogdHJ1ZSwgLy/lnIbop5Lnm7jlhbNcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gaXNGaW5pc2g6IHRydWUsLy/ngrnlh7vplIDmr4HmjojmnYPpobUsXHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIGNsTGF5b3V0TGVmdDoxMixcclxuXHRcdFx0XHRcdFx0XHQvLyBjbExheW91dFRvcDo2MCxcclxuXHRcdFx0XHRcdFx0XHQvLyBjbExheW91dFJpZ2h0Oi0xMixcclxuXHRcdFx0XHRcdFx0XHRjbExheW91dEJvdHRvbTogLTUwLFxyXG5cdFx0XHRcdFx0XHRcdGNsTGF5b3V0V2lkdGg6IDE4MCxcclxuXHRcdFx0XHRcdFx0XHRjbExheW91dEhlaWdodDogNTAsXHJcblx0XHRcdFx0XHRcdFx0Y2xMYXlvdXRDZW50ZXJYOiAwLFxyXG5cdFx0XHRcdFx0XHRcdC8vIGNsTGF5b3V0Q2VudGVyWTowLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR3aWRnZXQyOiB7XHJcblx0XHRcdFx0XHRcdFx0d2lkZ2V0SWQ6IFwiY3VzdG9tVmlld190d29cIiwgLy/lrZfnrKbmoIforrBcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiBcIlRleHRWaWV3XCIsIC8vIOexu+Wei++8mkJ1dHRvbu+8muaMiemSru+8jEltYWdlVmlldzrlm77niYcgVGV4dFZpZXc65paH5pysXHJcblx0XHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IFwi6Ieq5a6a5LmJ5o6n5Lu25paH5pys6Ieq5a6a5LmJ5o6n5Lu25paH5pys6Ieq5a6a5LmJ5o6n5Lu25paH5pys6Ieq5a6a5LmJ5o6n5Lu25paH5pys6Ieq5a6a5LmJ5o6n5Lu25paH5pys6Ieq5a6a5LmJ5o6n5Lu25paH5pys6Ieq5a6a5LmJ5o6n5Lu25paH5pysXCIsIC8v5paH5a2XXHJcblx0XHRcdFx0XHRcdFx0dGV4dEZvbnQ6IDEwLCAvL+Wtl+S9k1xyXG5cdFx0XHRcdFx0XHRcdHRleHRDb2xvcjogWzEsIDAuNSwgMC42LCAxXSwgLy/mloflrZfpopzoibJbcixnLGIsYV1cclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFswLCAxLCAwLCAxXSwgLy/mjqfku7bog4zmma/oibJbcixnLGIsYV1cclxuXHRcdFx0XHRcdFx0XHRudW1iZXJPZkxpbmVzOiAwLCAvL+ihjOaVsO+8mum7mOiupOWNleihjO+8jCAwOuaXoOmZkO+8jOiHquWKqOaNouihjO+8jOWFtuS7lu+8muaMh+WumuihjOaVsFxyXG5cdFx0XHRcdFx0XHRcdHRleHRBbGlnbm1lbnQ6IDIsIC8vMDogY2VudGVyIDE6IGxlZnQgMjogcmlnaHQgLy/ku4VUZXh0Vmlld+acieaViFxyXG5cclxuXHRcdFx0XHRcdFx0XHRjbExheW91dExlZnQ6IDgwLFxyXG5cdFx0XHRcdFx0XHRcdC8vIGNsTGF5b3V0VG9wOjYwLFxyXG5cdFx0XHRcdFx0XHRcdGNsTGF5b3V0UmlnaHQ6IC04MCxcclxuXHRcdFx0XHRcdFx0XHRjbExheW91dEJvdHRvbTogLTEyMCxcclxuXHRcdFx0XHRcdFx0XHQvLyBjbExheW91dFdpZHRoOjE1MCxcclxuXHRcdFx0XHRcdFx0XHRjbExheW91dEhlaWdodDogNjAsXHJcblx0XHRcdFx0XHRcdFx0Ly8gY2xMYXlvdXRDZW50ZXJYOjAsXHJcblx0XHRcdFx0XHRcdFx0Ly8gLy8gY2xMYXlvdXRDZW50ZXJZOjAsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHdpZGdldDM6IHtcclxuXHRcdFx0XHRcdFx0XHR3aWRnZXRJZDogXCJjdXN0b21WaWV3X3RocmVlX2ltYWdlVmlld1wiLCAvL+Wtl+espuagh+iusFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwiSW1hZ2VWaWV3XCIsIC8vIOexu+Wei++8mkJ1dHRvbu+8muaMiemSru+8jEltYWdlVmlldzrlm77niYcgVGV4dFZpZXc65paH5pysXHJcblx0XHRcdFx0XHRcdFx0aW1hZ2U6IFwic3RhdGljL3dlaXhpbi5wbmdcIixcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFswLCAxLCAwLCAxXSwgLy/mjqfku7bog4zmma/oibJbcixnLGIsYV1cclxuXHJcblx0XHRcdFx0XHRcdFx0Y29ybmVyUmFkaXVzOiA0MCwgLy/lnIbop5LvvIzorr7nva7lnIbop5Lml7bor7forr7nva5tYXNrc1RvQm91bmRzOnRydWVcclxuXHRcdFx0XHRcdFx0XHRtYXNrc1RvQm91bmRzOiB0cnVlLCAvL+WchuinkuebuOWFs1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjbExheW91dExlZnQ6IDgwLFxyXG5cdFx0XHRcdFx0XHRcdGNsTGF5b3V0VG9wOiAxNjAsXHJcblx0XHRcdFx0XHRcdFx0Y2xMYXlvdXRSaWdodDogLTgwLFxyXG5cdFx0XHRcdFx0XHRcdC8vIGNsTGF5b3V0Qm90dG9tOi0yODAsXHJcblx0XHRcdFx0XHRcdFx0Ly8gY2xMYXlvdXRXaWR0aDoxNTAsXHJcblx0XHRcdFx0XHRcdFx0Y2xMYXlvdXRIZWlnaHQ6IDgwLFxyXG5cdFx0XHRcdFx0XHRcdC8vIGNsTGF5b3V0Q2VudGVyWDowLFxyXG5cdFx0XHRcdFx0XHRcdC8vIGNsTGF5b3V0Q2VudGVyWTowLFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly/orr7nva7oh6rlrprkuYnmjqfku7bngrnlh7vlm57osINcclxuXHRcdFx0XHRzaGFuWWFuU0RLTW9kdWxlLnNldEN1c3RvbUludGVyZmFjZSgoY3VzdG9tSW50ZXJmYWNlKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5zaGFueWFuX3Jlc3VsdCA9IEpTT04uc3RyaW5naWZ5KGN1c3RvbUludGVyZmFjZSk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjdXN0b21JbnRlcmZhY2UpKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dGhpcy5zaGFueWFuX2NvZGUgPSAxMDAwO1xyXG5cdFx0XHRcdHRoaXMuc2hhbnlhbl9yZXN1bHQgPSBcIuaOiOadg+mhtemFjee9ruWujOaIkFwiO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0cXVsaWNrTG9naW4oKSB7XHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0fSwgNTAwMCk7XHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKippT1MqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdC8v6Zeq6aqMU0RLICDmi4notbfmjojmnYPpobXmlrnms5VcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuaW9zX3VpQ29uZmlndXJlID09IG51bGwpIHtcclxuXHRcdFx0XHRcdC8vZGVidWdfdGVzdFxyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCLor7flhYjphY3nva5VSVwiLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxuXHRcdFx0XHQvL+S4gOmUrueZu+W9lVxuXHRcdFx0XHRzaGFuWWFuU0RLTW9kdWxlLnF1aWNrQXV0aExvZ2luV2l0aENvbmZpZ3VyZSh0aGlzLmlvc191aUNvbmZpZ3VyZSxcblx0XHRcdFx0XHRvcGVuTG9naW5BdXRoTGlzdGVuZXJSZXN1bHQgPT4ge1xuXHRcdFx0XHRcdFx0Ly/mi4notbfmjojmnYPpobXpnaLlm57osINcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xuXHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vZGVidWdfdGVzdFxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogSlNPTi5zdHJpbmdpZnkob3BlbkxvZ2luQXV0aExpc3RlbmVyUmVzdWx0KSxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdFx0XHRcdHRoaXMuc2hhbnlhbl9jb2RlID0gSlNPTi5zdHJpbmdpZnkob3BlbkxvZ2luQXV0aExpc3RlbmVyUmVzdWx0LmNvZGUpO1xuXHRcdFx0XHRcdFx0dGhpcy5zaGFueWFuX3Jlc3VsdCA9IEpTT04uc3RyaW5naWZ5KG9wZW5Mb2dpbkF1dGhMaXN0ZW5lclJlc3VsdCk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcGVuTG9naW5BdXRoTGlzdGVuZXJSZXN1bHQpKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG9uZUtleUxvZ2luTGlzdGVuZXJSZXN1bHQgPT4ge1xuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRcdFx0XHQvL+eCueS4gOmUrueZu+W9leWbnuiwg1x0XG5cdFx0XHRcdFx0XHRpZiAob25lS2V5TG9naW5MaXN0ZW5lclJlc3VsdC5lcnJvckNvZGUgIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRpZiAob25lS2V5TG9naW5MaXN0ZW5lclJlc3VsdC5jb2RlID09IDEwMTEpIHtcblx0XHRcdFx0XHRcdFx0XHQvL+aPkOekuu+8mumUmeivr+aXoOmcgOaPkOekuue7meeUqOaIt++8jOWPr+S7peWcqOeUqOaIt+aXoOaEn+efpeeahOeKtuaAgeS4i+ebtOaOpeWIh+aNoueZu+W9leaWueW8j1xuXHRcdFx0XHRcdFx0XHRcdC8v55So5oi35Y+W5raI55m75b2V77yI54K56L+U5Zue77yJXG5cdFx0XHRcdFx0XHRcdFx0Ly/lpITnkIblu7rorq7vvJrlpoLml6DnibnmrorpnIDmsYLlj6/kuI3lgZrlpITnkIbvvIzku4XkvZzkuLrkuqTkupLnirbmgIHlm57osIPvvIzmraTml7blt7Lnu4/lm57liLDlvZPliY3nlKjmiLfoh6rlt7HnmoTpobXpnaJcblx0XHRcdFx0XHRcdFx0XHQvL+eCueWHu3Nka+iHquW4pueahOi/lOWbnu+8jOaXoOiuuuaYr+WQpuiuvue9ruaJi+WKqOmUgOavge+8jOaOiOadg+mhtemdoumDveS8muW8uuWItuWFs+mXrVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdC8v5aSE55CG5bu66K6u77ya5YW25LuW6ZSZ6K+v5Luj56CB6KGo56S66Zeq6aqM6YCa6YGT5peg5rOV57un57ut77yM5Y+v5Lul57uf5LiA6LWw5byA5Y+R6ICF6Ieq5bex55qE5YW25LuW55m75b2V5pa55byP77yM5Lmf5Y+v5Lul5a+55LiN5ZCM55qE6ZSZ6K+v5Y2V54us5aSE55CGXG5cdFx0XHRcdFx0XHRcdFx0Ly/lhbPpl63mjojmnYPpobVcblx0XHRcdFx0XHRcdFx0XHRzaGFuWWFuU0RLTW9kdWxlLmZpbmlzaEF1dGhDb250cm9sbGVyQ29tcGxldGlvbihvbmVLZXlMb2dpbkxpc3RlbmVyUmVzdWx0ID0+IHtcblx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vU0RL6I635Y+WVG9rZW7miJDlip9cblx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdC8v5q2k5aSE5qC55o2udG9rZW7osIPnlKjmiLflkI7lj7DmjqXlj6Pojrflj5bmiYvmnLrlj7fvvIzojrflj5bmiJDlip/miJblpLHotKXlkI7lho3osINzaGFuWWFuU0RLTW9kdWxlLmZpbmlzaEF1dGhDb250cm9sbGVyQ29tcGxldGlvbigp5YWz6Zet6aG16Z2iXG5cdFx0XHRcdFx0XHRcdC8vIC8v5YWz6Zet5o6I5p2D6aG1XG5cdFx0XHRcdFx0XHRcdHNoYW5ZYW5TREtNb2R1bGUuZmluaXNoQXV0aENvbnRyb2xsZXJDb21wbGV0aW9uKG9uZUtleUxvZ2luTGlzdGVuZXJSZXN1bHQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdC8v5aaC6ZyA6Lez6L2s77yMY29kZSBoZXJlOlxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdC8vZGVidWdfdGVzdFxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogSlNPTi5zdHJpbmdpZnkob25lS2V5TG9naW5MaXN0ZW5lclJlc3VsdCksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRcdFx0dGhpcy5zaGFueWFuX2NvZGUgPSBKU09OLnN0cmluZ2lmeShvbmVLZXlMb2dpbkxpc3RlbmVyUmVzdWx0LmNvZGUpO1xuXHRcdFx0XHRcdFx0dGhpcy5zaGFueWFuX3Jlc3VsdCA9IEpTT04uc3RyaW5naWZ5KG9uZUtleUxvZ2luTGlzdGVuZXJSZXN1bHQpO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkob25lS2V5TG9naW5MaXN0ZW5lclJlc3VsdCkpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPlxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 11 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);