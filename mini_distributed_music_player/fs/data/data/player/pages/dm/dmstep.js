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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/dm/dmstep.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/dm/dmstep.hml?entry":
/*!*****************************************************************************************************!*\
  !*** C:/Users/long_/DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/dm/dmstep.hml?entry ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/template.js!./dmstep.hml */ "./lib/json.js!./lib/template.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/dm/dmstep.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/style.js!./dmstep.css */ "./lib/json.js!./lib/style.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/dm/dmstep.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/script.js!../../../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/babel-loader?presets[]=C:/Users/long_/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/long_/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/resource-reference-script.js!./dmstep.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\long_\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\long_\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/dm/dmstep.js")
var options=$app_script$
 if ($app_script$.__esModule) {

      options = $app_script$.default;
 }
options.styleSheet=$app_style$
options.render=$app_template$;
module.exports=new ViewModel(options);

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/dm/dmstep.css":
/*!****************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!C:/Users/long_/DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/dm/dmstep.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"classSelectors":{"container":{"width":454,"flexDirection":"column","height":454,"backgroundColor":15794175},"navigator":{"flexDirection":"row","justifyContent":"space-between","width":"100%","height":60,"backgroundColor":16747520},"navigator-title":{"fontSize":35},"title":{"fontSize":50,"color":0},"title1":{"fontSize":50,"color":0,"paddingTop":30},"title-wrap":{"width":"100%","height":454,"display":"flex","flexDirection":"column","alignItems":"center","color":"#a6fcfcfc"},"title-wrap1":{"width":"100%","height":454,"display":"flex","flexDirection":"column","alignItems":"center","color":"#a6fcfcfc"},"content-wrap":{"width":320,"height":40,"flexDirection":"row","color":0,"marginTop":15},"main-pin":{"width":"100%","height":"100%","color":0},"title-tip":{"fontSize":30,"color":0,"paddingTop":30},"pin-numb":{"width":250,"height":60,"flexDirection":"row","justifyContent":"space-around","alignItems":"center"},"pin-numb-item":{"fontSize":30,"height":40,"paddingBottom":5,"width":30,"textAlign":"center","color":0},"pin-numb-line":{"width":240,"borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1,"borderTopColor":11119017,"borderRightColor":11119017,"borderBottomColor":11119017,"borderLeftColor":11119017},"numb":{"fontSize":30,"height":40,"width":80,"textAlign":"center","color":0,"backgroundColor":16777215,"borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1,"borderTopColor":0,"borderRightColor":0,"borderBottomColor":0,"borderLeftColor":0,"borderRadius":25},"input":{"flexDirection":"row","justifyContent":"space-around","alignItems":"center"},"join-pin > .pin":{"fontSize":50,"color":0},"join-authorize":{"width":"100%","height":"100%","paddingTop":50},"join-title":{"fontSize":30,"color":0},"join-auth-title":{"fontSize":25,"color":0,"paddingBottom":20},"button-wrap":{"width":400,"height":180,"flexDirection":"row","color":0,"marginTop":-10},"button-cancel":{"width":200,"marginTop":100,"fontSize":26,"marginLeft":40,"height":50,"color":2003199},"button-ok":{"borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1,"borderTopColor":0,"borderRightColor":0,"borderBottomColor":0,"borderLeftColor":0,"textAlign":"center","borderRadius":25,"marginLeft":-40,"backgroundColor":2003199,"width":200,"marginTop":100,"fontSize":26,"height":50,"color":16777215},"Test-ok":{"borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1,"borderTopColor":0,"borderRightColor":0,"borderBottomColor":0,"borderLeftColor":0,"textAlign":"center","borderRadius":25,"marginLeft":-100,"backgroundColor":2003199,"width":200,"marginTop":100,"fontSize":26,"height":50,"color":16777215},"join-auth":{"width":"100%","height":"100%","paddingTop":30,"color":16260863},"join-auth-image":{"width":"100%","height":"100%","paddingTop":30,"color":16260863},"join-pin":{"width":"100%","height":"100%","paddingTop":30,"color":16260863},"joinPinCancel":{"width":200,"marginTop":80,"fontSize":50,"marginLeft":150,"height":100,"color":2003199},"Heading":{"width":"100%","height":50,"textAlign":"center","marginTop":10,"justifyContent":"space-around"},"block-wrapper":{"width":"50%","justifyContent":"center","alignItems":"center"},"body":{"flexDirection":"column","width":"100%","height":"80%"},"swiper":{"width":"100%","height":"100%"},"swiper-item":{"width":"100%","height":"100%"},"row2":{"width":"100%","height":"50%"},"grid":{"flexDirection":"row","flexWrap":"wrap","width":"100%","height":"100%"}}}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/dm/dmstep.hml":
/*!*******************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!C:/Users/long_/DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/dm/dmstep.hml ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (vm) { var _vm = vm || this; return _c('div', {'staticClass' : ["container"]} , [_c('div', {'staticClass' : ["navigator"]} , [_c('text', {'attrs' : {'value' : "返回"},'staticClass' : ["back"],'onBubbleEvents' : {'click' : _vm.back}} ),_c('text', {'attrs' : {'value' : function () {return _vm.date}}} ),_c('text', {'attrs' : {'value' : function () {return _vm.week}}} )] ),_c('div', {'staticClass' : ["body"]} , [_i((function () {return _vm.status=='start'}),function(){return _c('div', {'staticClass' : ["main-pin"]} , [_c('div', {'staticClass' : ["title-wrap"]} , [_c('div', {'staticClass' : ["button-wrap"]} , [_c('text', {'attrs' : {'value' : "发现设备"},'staticClass' : ["button-cancel"],'onBubbleEvents' : {'click' : _vm. startDevice}} ),_c('text', {'attrs' : {'value' : "发起认证"},'staticClass' : ["button-cancel"],'onBubbleEvents' : {'click' : _vm.AuthenticateDevice}} )] ),_c('div', {'staticClass' : ["button-wrap"]} , [_c('text', {'attrs' : {'value' : "允许认证"},'staticClass' : ["button-cancel"],'onBubbleEvents' : {'click' : _vm.joinAuthOk}} ),_c('text', {'attrs' : {'value' : "输入PIN码"},'staticClass' : ["button-cancel"],'onBubbleEvents' : {'click' : _vm.MymainInputPin}} )] )] )] )}),_i((function () {return _vm.status=='main-pin'}),function(){return _c('div', {'staticClass' : ["main-pin"]} , [_c('div', {'staticClass' : ["title-wrap"]} , [_c('text', {'attrs' : {'value' : "PIN码连接"},'staticClass' : ["title"]} ),_c('text', {'attrs' : {'value' : "请输入平板上显示的PIN码"},'staticClass' : ["title-tip"]} ),_c('div', {'staticClass' : ["pin-numb"]} , [_c('text', {'attrs' : {'value' : function () {return _vm.pin[0]}},'staticClass' : ["pin-numb-item"]} ),_c('text', {'attrs' : {'value' : function () {return _vm.pin[1]}},'staticClass' : ["pin-numb-item"]} ),_c('text', {'attrs' : {'value' : function () {return _vm.pin[2]}},'staticClass' : ["pin-numb-item"]} ),_c('text', {'attrs' : {'value' : function () {return _vm.pin[3]}},'staticClass' : ["pin-numb-item"]} ),_c('text', {'attrs' : {'value' : function () {return _vm.pin[4]}},'staticClass' : ["pin-numb-item"]} ),_c('text', {'attrs' : {'value' : function () {return _vm.pin[5]}},'staticClass' : ["pin-numb-item"]} )] ),_c('div', {'staticClass' : ["pin-numb-line"]} ),_c('div', {'staticClass' : ["content-wrap"]} , [_c('text', {'attrs' : {'value' : "1"},'staticClass' : ["numb"],'onBubbleEvents' : {'click' : function (evt) {_vm.mainInputPin(1,evt)}}} ),_c('text', {'attrs' : {'value' : "2"},'staticClass' : ["numb"],'onBubbleEvents' : {'click' : function (evt) {_vm.mainInputPin(2,evt)}}} ),_c('text', {'attrs' : {'value' : "3"},'staticClass' : ["numb"],'onBubbleEvents' : {'click' : function (evt) {_vm.mainInputPin(3,evt)}}} ),_c('text', {'attrs' : {'value' : "4"},'staticClass' : ["numb"],'onBubbleEvents' : {'click' : function (evt) {_vm.mainInputPin(4,evt)}}} )] ),_c('div', {'staticClass' : ["content-wrap"]} , [_c('text', {'attrs' : {'value' : "5"},'staticClass' : ["numb"],'onBubbleEvents' : {'click' : function (evt) {_vm.mainInputPin(5,evt)}}} ),_c('text', {'attrs' : {'value' : "6"},'staticClass' : ["numb"],'onBubbleEvents' : {'click' : function (evt) {_vm.mainInputPin(6,evt)}}} ),_c('text', {'attrs' : {'value' : "7"},'staticClass' : ["numb"],'onBubbleEvents' : {'click' : function (evt) {_vm.mainInputPin(7,evt)}}} ),_c('text', {'attrs' : {'value' : "8"},'staticClass' : ["numb"],'onBubbleEvents' : {'click' : function (evt) {_vm.mainInputPin(8,evt)}}} )] ),_c('div', {'staticClass' : ["content-wrap"]} , [_c('text', {'attrs' : {'value' : "9"},'staticClass' : ["numb"],'onBubbleEvents' : {'click' : function (evt) {_vm.mainInputPin(9,evt)}}} ),_c('text', {'attrs' : {'value' : "0"},'staticClass' : ["numb"],'onBubbleEvents' : {'click' : function (evt) {_vm.mainInputPin(0,evt)}}} ),_c('text', {'attrs' : {'value' : "删除"},'staticClass' : ["numb"],'onBubbleEvents' : {'click' : _vm.mainInputPinBack}} ),_c('text', {'attrs' : {'value' : "取消"},'staticClass' : ["numb"],'onBubbleEvents' : {'click' : _vm.mainInputPinCancel}} )] )] )] )}),_i((function () {return _vm.status=='join-authorize'}),function(){return _c('div', {'staticClass' : ["join-authorize"]} , [_c('div', {'staticClass' : ["title-wrap"]} , [_c('text', {'attrs' : {'value' : function () {return decodeURI('22%E6%98%AF%E5%90%A6%E5%85%81%E8%AE%B8') + (_vm.statusInfo.deviceName) + decodeURI('%E8%BF%9E%E6%8E%A5%E6%9C%AC%E6%9C%BA')}},'staticClass' : ["join-title"]} ),_c('text', {'attrs' : {'value' : "用于资源访问"},'staticClass' : ["title-tip"]} ),_c('div', {'staticClass' : ["button-wrap"]} , [_c('text', {'attrs' : {'value' : function () {return decodeURI('%E5%8F%96%E6%B6%88%EF%BC%88') + (_vm.timeRemaining) + decodeURI('%EF%BC%89')}},'staticClass' : ["button-cancel"],'onBubbleEvents' : {'click' : _vm.joinAuthorizeCancel}} ),_c('text', {'attrs' : {'value' : "允许"},'staticClass' : ["button-ok"],'onBubbleEvents' : {'click' : _vm.joinAuthorizeOk}} )] )] )] )}),_i((function () {return _vm.status=='join-auth'}),function(){return _c('div', {'staticClass' : ["join-auth"]} , [_c('div', {'staticClass' : ["title-wrap"]} , [_c('text', {'attrs' : {'value' : function () {return decodeURI('11%E6%98%AF%E5%90%A6%E5%85%81%E8%AE%B8') + (_vm.statusInfo.appName)}},'staticClass' : ["join-auth-title"]} ),_c('text', {'attrs' : {'value' : "是否允许打开apply auth?"},'staticClass' : ["title-tip"]} ),_c('text', {'attrs' : {'value' : function () {return decodeURI('%E6%9D%A5%E8%87%AA') + (_vm.statusInfo.deviceName)}},'staticClass' : ["title-tip"]} ),_c('div', {'staticClass' : ["button-wrap"]} , [_c('text', {'attrs' : {'value' : function () {return decodeURI('%E5%8F%96%E6%B6%88%EF%BC%88') + (_vm.timeRemaining) + decodeURI('%EF%BC%89')}},'staticClass' : ["button-cancel"],'onBubbleEvents' : {'click' : _vm.joinAuthCancel}} ),_c('text', {'attrs' : {'value' : "允许"},'staticClass' : ["button-ok"],'onBubbleEvents' : {'click' : _vm.joinAuthOk}} )] )] )] )}),_i((function () {return _vm.status=='join-auth-image'}),function(){return _c('div', {'staticClass' : ["join-auth-image"]} , [_c('div', {'staticClass' : ["title-wrap"]} , [_c('image', {'attrs' : {'src' : function () {return _vm.statusInfo.appIcon}}} ),_c('text', {'attrs' : {'value' : function () {return _vm.statusInfo.appName}},'staticClass' : ["join-auth-title"]} ),_c('text', {'attrs' : {'value' : "是否允许打开apply auth?"},'staticClass' : ["title-tip"]} ),_c('text', {'attrs' : {'value' : function () {return decodeURI('%E6%9D%A5%E8%87%AA') + (_vm.statusInfo.deviceName)}},'staticClass' : ["title-tip"]} ),_c('div', {'staticClass' : ["button-wrap"]} , [_c('text', {'attrs' : {'value' : function () {return decodeURI('%E5%8F%96%E6%B6%88%EF%BC%88') + (_vm.timeRemaining) + decodeURI('%EF%BC%89')}},'staticClass' : ["button-cancel"],'onBubbleEvents' : {'click' : _vm.joinAuthImageCancel}} ),_c('text', {'attrs' : {'value' : "允许"},'staticClass' : ["button-ok"],'onBubbleEvents' : {'click' : _vm.joinAuthImageOk}} )] )] )] )}),_i((function () {return _vm.status=='join-pin'}),function(){return _c('div', {'staticClass' : ["join-pin"]} , [_c('div', {'staticClass' : ["title-wrap"]} , [_c('text', {'attrs' : {'value' : "PIN码连接"},'staticClass' : ["title"]} ),_c('text', {'attrs' : {'value' : "请在主控端输入连接码进行验证"},'staticClass' : ["title-tip"]} ),_c('text', {'attrs' : {'value' : function () {return _vm.StatInfo.pinCode.split('').join(' ')}},'staticClass' : ["title"]} ),_c('div', {'staticClass' : ["button-wrap"]} , [_c('text', {'attrs' : {'value' : "取消"},'staticClass' : ["joinPinCancel"],'onBubbleEvents' : {'click' : _vm.joinPinCancel}} )] )] )] )}),_i((function () {return _vm.choiceDev=='DeviceType'}),function(){return _c('div', {'staticClass' : ["join-pin"]} , [_c('div', {'staticClass' : ["title-wrap"]} , [_c('text', {'attrs' : {'value' : "选择设备"},'staticClass' : ["dialog-title"]} ),_c('text', {'attrs' : {'value' : "本机"},'staticClass' : ["dialog-item"],'onBubbleEvents' : {'click' : _vm.btnClick}} ),_c('text', {'attrs' : {'value' : function () {return _vm.showdeviceID.deviceID1}},'staticClass' : ["dialog-item"],'onBubbleEvents' : {'click' : _vm.InAuthentication}} ),_c('text', {'attrs' : {'value' : function () {return _vm.showdeviceID.deviceID2}},'staticClass' : ["dialog-item"],'onBubbleEvents' : {'click' : function (evt) {_vm.btnClick(2,evt)}}} ),_c('text', {'attrs' : {'value' : function () {return _vm.showdeviceID.deviceID2}},'staticClass' : ["dialog-item"],'onBubbleEvents' : {'click' : function (evt) {_vm.btnClick(3,evt)}}} ),_c('text', {'attrs' : {'value' : "取消"},'staticClass' : ["dialog-button"],'onBubbleEvents' : {'click' : _vm.btnClick}} )] )] )})] )] ) }

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\long_\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\long_\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/dm/dmstep.js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=C:/Users/long_/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/long_/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:/Users/long_/DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/dm/dmstep.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _system = _interopRequireDefault(requireModule("@system.router"));

var _system2 = _interopRequireDefault(requireModule("@system.devicemanager"));

var TAG = "DeviceManagerUI:";
var _default = {
  data: {
    status: '',
    subscribeId: 0,
    pinToken: 0,
    statusInfo: {
      deviceId: "",
      deviceName: '',
      deviceTypeId: 0
    },
    Devcinfo: {
      deviceId: '',
      pinTone: ''
    },
    StatInfo: {
      deviceName: "",
      appName: '',
      appIcon: null,
      pinCode: '',
      pinToken: '0'
    },
    pinNumb: 0,
    count: 0,
    pin: ['', '', '', '', '', '']
  },
  onShow: function onShow() {
    var _this2 = this;

    this.log('createDeviceManager');
    this.status = 'start';

    _system2["default"].createDeviceManager('com.ohos.devicemanagerui');

    _system2["default"].on('deviceFound', function (data0, data1) {
      (0, _newArrowCheck2["default"])(this, _this2);

      if (data1 == null) {
        this.log("deviceFound error data=null");
        return;
      }

      var FondData = data1;
      this.log("deviceFound:" + JSON.stringify(data0));
      this.log("deviceFound:" + JSON.stringify(FondData));
      this.statusInfo = {
        deviceId: data1.deviceId,
        deviceName: data1.deviceName,
        deviceTypeId: data1.deviceTypeId
      };
    }.bind(this));

    _system2["default"].on('discoverFail', function (data, data1) {
      (0, _newArrowCheck2["default"])(this, _this2);
      this.log('on discoverFail in');
      this.log("discoverFail on:" + JSON.stringify(data));
      this.log("discoverFail on:" + JSON.stringify(data1));
    }.bind(this));
  },
  startDevice: function startDevice() {
    console.info("Start Device discovery");
    this.subscribeId = Math.floor(Math.random() * 10000 + 1000);
    this.log('Start subscribeId' + JSON.stringify(this.subscribeId));
    var info = {
      "subscribeId": this.subscribeId,
      "mode": 0xAA,
      "medium": 0,
      "freq": 2,
      "isSameAccount": false,
      "isWakeRemote": false,
      "capability": 0
    };

    _system2["default"].startDeviceDiscovery(info);
  },
  stopDevice: function stopDevice(info) {
    console.log(this.subscribeId);

    _system2["default"].stopDeviceDiscovery(this.subscribeId);
  },
  AuthenticateDevice: function AuthenticateDevice() {
    console.log('AuthenticateDevice' + this.statusInfo.deviceId);
    console.log('AuthenticateDevice' + this.statusInfo.deviceName);
    console.log('AuthenticateDevice' + this.statusInfo.deviceTypeId);
    console.info("start AuthenticateDevice");
    var extraInfo = {
      targetPkgName: 'test',
      appName: "Nwename",
      appDescription: "testAPP",
      business: '0',
      displayOwner: 0
    };
    var AuthParam = {
      authType: 1,
      appIcon: null,
      appThumbnail: null,
      extraInfo: extraInfo
    };
    console.info("deviceInfo:Assignment");

    var _this = this;

    _system2["default"].authenticateDevice(this.statusInfo, AuthParam, {
      success: function success(data0, data1) {
        console.log("in authenticateDevice success:");
        console.log(JSON.stringify(data0));
        console.log(JSON.stringify(data1));
        _this.Devcinfo = {
          deviceId: data0.deviceId,
          pinTone: data1.pinTone
        };
        console.log('this.Devcinfo.deviceId' + this.Devcinfo.deviceId);
        console.log('this.Devcinfo.pinTone' + this.Devcinfo.pinTone);
      },
      fail: function fail(err0, err1) {
        console.log("in authenticateDevice fail:");
        console.log(JSON.stringify(err0));
        console.log(JSON.stringify(err1));
      }
    });
  },
  joinAuthOk: function joinAuthOk() {
    this.joinPin();
    this.initStatue();

    _system2["default"].setUserOperation(0);
  },
  mainInputPin: function mainInputPin(s) {
    if (this.pinNumb == 6) return;

    if (this.pinNumb < 6) {
      this.pin[this.pinNumb] = s;
      ++this.pinNumb;
    }

    if (this.pinNumb == 6) {
      console.log("verifyAuthInfo ok");
      this.verifyAuthInfo(this.pin.join(''));
    }
  },
  verifyAuthInfo: function verifyAuthInfo(pinCode) {
    var _this3 = this;

    this.log("in verifyAuthInfo:" + pinCode);
    this.log("verifyAuthInfo :" + JSON.stringify(this.Devcinfo));

    _system2["default"].verifyAuthInfo({
      "authType": 1,
      "token": this.Devcinfo.pinTone,
      "extraInfo": {
        "pinCode": +pinCode
      }
    }, function (data) {
      (0, _newArrowCheck2["default"])(this, _this3);
      this.log("verifyAuthInfo result:" + JSON.stringify(data));

      _system["default"].back();
    }.bind(this));
  },
  mainInputPinBack: function mainInputPinBack() {
    if (this.pinNumb > 0) {
      --this.pinNumb;
      this.pin[this.pinNumb] = '';
    }
  },
  mainInputPinCancel: function mainInputPinCancel() {
    this.setUserOperation(4);

    _system["default"].replace({
      uri: 'pages/index/index'
    });
  },
  initStatue: function initStatue() {
    this.log('initStatue');

    var data = _system2["default"].getAuthenticationParam();

    this.log('getAuthenticationParam:' + JSON.stringify(data));

    if (data && data.authType == 1) {
      console.log(data.extraInfo.pincode);
      this.StatInfo = {
        deviceName: data.extraInfo.packageName,
        appName: data.extraInfo.appName,
        appIcon: null,
        pinCode: data.extraInfo.pincode + '',
        pinToken: data.extraInfo.pinToken
      };
    }
  },
  MymainInputPin: function MymainInputPin() {
    this.status = 'main-pin';
  },
  joinPin: function joinPin() {
    this.status = 'join-pin';
  },
  back: function back() {
    _system["default"].replace({
      uri: 'pages/index/index'
    });
  },
  log: function log(m) {
    console.info(TAG + m);
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  return requireNative(moduleName.slice(1));
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

function requireModule(moduleName) {
  return requireNative(moduleName.slice(1));
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/newArrowCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/newArrowCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

module.exports = _newArrowCheck;

function requireModule(moduleName) {
  return requireNative(moduleName.slice(1));
}


/***/ })

/******/ });