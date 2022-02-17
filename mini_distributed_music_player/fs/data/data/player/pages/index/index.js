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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/index/index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/index/index.hml?entry":
/*!*******************************************************************************************************!*\
  !*** C:/Users/long_/DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/script.js!../../../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/babel-loader?presets[]=C:/Users/long_/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/long_/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\long_\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\long_\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/index/index.js")
var options=$app_script$
 if ($app_script$.__esModule) {

      options = $app_script$.default;
 }
options.styleSheet=$app_style$
options.render=$app_template$;
module.exports=new ViewModel(options);

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/index/index.css":
/*!******************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!C:/Users/long_/DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/index/index.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"@keyframes":{"disc":[{"transform":{"rotate":"0deg"},"time":0},{"transform":{"rotate":"360deg"},"time":100}]},"classSelectors":{"container":{"height":"100%","width":"100%"},"main":{"width":"100%","height":"100%","flexDirection":"column","justifyContent":"space-between","alignItems":"center"},"header":{"width":"100%","height":"12%","alignItems":"center","justifyContent":"center","color":16770244},"title":{"width":"100%","textAlign":"center","color":15132390},"body":{"width":"100%","height":"60%","flexDirection":"column","justifyContent":"center","alignItems":"center"},"music":{"width":"100%","height":"85%","flexDirection":"column","justifyContent":"space-around","alignItems":"flex-start"},"disc-wrapper":{"width":204,"height":204,"borderRadius":102,"borderTopWidth":2,"borderRightWidth":2,"borderBottomWidth":2,"borderLeftWidth":2,"borderTopColor":16747520,"borderRightColor":16747520,"borderBottomColor":16747520,"borderLeftColor":16747520},"disc":{"width":200,"height":200,"justifyContent":"center","alignItems":"center","animationName":"disc","animationDuration":"10s","animationIterationCount":"infinite"},"footer":{"width":"100%","height":"25%"},"musicWrapper":{"width":"100%","height":"85%","flexDirection":"row","justifyContent":"space-around","alignItems":"center"},"musicName":{"width":"100%","height":55,"fontSize":30,"color":16777215,"textAlign":"center"},"singer":{"width":"100%","height":42,"fontSize":25,"color":12566463,"textAlign":"center"},"progress-Wrapper":{"width":"100%","height":"15%","flexDirection":"row","justifyContent":"center"},"playTime":{"width":"25%","textAlign":"right","color":10658466},"allTime":{"width":"25%","textAlign":"left","marginLeft":18,"color":10658466},"progressBar":{"width":"50%","height":32,"selectedColor":16777215,"blockColor":16777215,"color":4210752,"marginLeft":18,"marginTop":8},"controlBar":{"width":"100%","height":"100%","flexDirection":"row","justifyContent":"center","alignItems":"center","backgroundColor":16770229},"modeBtn":{"width":36,"height":36,"marginLeft":10,"color":16777200},"previousBtn":{"width":56,"height":56,"marginLeft":30,"color":65535},"nextBtn":{"width":56,"height":56,"marginLeft":30},"playBtn":{"width":98,"height":98,"marginLeft":30},"listBtn":{"width":36,"height":36,"marginLeft":30},"list-Wrapper":{"width":"100%","height":"60%","top":"15%","flexDirection":"column","backgroundColor":"#e6333333"},"listText":{"width":"50%","fontSize":30,"textAlign":"center","color":"#e9fcfffa"},"musicList":{"width":"100%","height":"100%","backgroundColor":3355443,"color":9109504},"listItem":{"width":"100%","height":"15%","color":16775388,"backgroundColor":4210752},"itemWrapper":{"width":"100%","height":"100%","textAlign":"center","alignItems":"center","marginTop":8,"borderRadius":10,"borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1,"borderTopColor":"#22000000","borderRightColor":"#22000000","borderBottomColor":"#22000000","borderLeftColor":"#22000000","backgroundColor":35723},"space-Wrapper":{"width":"100%","height":"100%","textAlign":"center","alignItems":"center","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1,"borderTopColor":"#22000000","borderRightColor":"#22000000","borderBottomColor":"#22000000","borderLeftColor":"#22000000","backgroundColor":16775388},"itemName":{"width":"50%","height":"100%","color":16766720,"textAlign":"center"},"itemSinger":{"width":"50%","height":"100%","color":16766720,"textAlign":"center"},"MDBtn":{"width":56,"height":56,"marginLeft":-30}}}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/index/index.hml":
/*!*********************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!C:/Users/long_/DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/index/index.hml ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (vm) { var _vm = vm || this; return _c('stack', {'staticClass' : ["container"],'onBubbleEvents' : {'swipe' : _vm.swipeEvent}} , [_c('div', {'staticClass' : ["main"]} , [_c('div', {'staticClass' : ["header"]} , [_c('image', {'attrs' : {'src' : "common/ic_back.png"},'staticClass' : ["back"],'onBubbleEvents' : {'click' : _vm.exitApp}} ),_c('text', {'attrs' : {'value' : "分布式音乐播放器"},'staticClass' : ["title"]} )] ),_c('div', {'staticClass' : ["body"]} , [_c('div', {'staticClass' : ["musicWrapper"]} , [_c('div', {'staticClass' : ["music"]} , [_c('marquee', {'attrs' : {'scrollamount' : 15,'value' : function () {return _vm.curMusic.curMusicName}},'staticClass' : ["musicName"]} ),_c('marquee', {'attrs' : {'scrollamount' : 15,'value' : function () {return _vm.curMusic.singer}},'staticClass' : ["singer"]} )] )] ),_c('div', {'staticClass' : ["progress-Wrapper"]} , [_c('text', {'attrs' : {'value' : function () {return _vm.curMusic.playTime}},'staticClass' : ["playTime"]} ),_c('slider', {'attrs' : {'min' : 0,'max' : 100,'value' : function () {return _vm.playProgress}},'staticClass' : ["progressBar"],'onBubbleEvents' : {'change' : _vm.changeProgress}} ),_c('text', {'attrs' : {'value' : function () {return _vm.curMusic.allTime}},'staticClass' : ["allTime"]} )] )] ),_c('div', {'staticClass' : ["footer"]} , [_c('div', {'staticClass' : ["controlBar"]} , [_c('image', {'attrs' : {'src' : "common/pincode.png"},'staticClass' : ["playBtn"],'onBubbleEvents' : {'click' : _vm.openDailog}} ),_c('image', {'attrs' : {'src' : function () {return _vm.playImage}},'staticClass' : ["playBtn"],'onBubbleEvents' : {'click' : _vm.playMusic}} ),_c('image', {'attrs' : {'src' : "common/ic_music_share.png"},'staticClass' : ["playBtn"],'onBubbleEvents' : {'click' : _vm.playRemote}} )] )] )] ),_c('div', {'attrs' : {'show' : function () {return _vm.showMusicList}},'staticClass' : ["list-Wrapper"]} , [_c('text', {'attrs' : {'value' : "播放列表"},'staticClass' : ["listText"]} ),_c('list', {'attrs' : {'ref' : "musicList"},'staticClass' : ["musicList"]} , [_l((function () {return _vm.musicList}),function($item,$idx){return _c('list-item', {'attrs' : {'value' : ">"},'staticClass' : ["listItem"],'onBubbleEvents' : {'click' : function (evt) {_vm.clickListItem($idx,evt)}}} , [_c('div', {'staticClass' : ["space-Wrapper"]} , [_c('div', {'staticClass' : ["itemWrapper"]} , [_c('text', {'attrs' : {'value' : function () {return $item.name}},'staticClass' : ["itemName"]} ),_c('text', {'attrs' : {'value' : function () {return $item.singer}},'staticClass' : ["itemSinger"]} )] )] )] )})] )] )] ) }

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\long_\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\long_\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/index/index.js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=C:/Users/long_/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/long_/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:/Users/long_/DevEcoStudioProjects/Hello/entry/src/main/js/default/pages/index/index.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var _system2 = _interopRequireDefault(requireModule("@system.audio"));

var _system3 = _interopRequireDefault(requireModule("@system.file"));

var _system4 = _interopRequireDefault(requireModule("@system.app"));

var modeImages = ['common/ic_music_listorder.png', 'common/ic_music_listcycle.png', 'common/ic_music_shuffle.png', 'common/ic_music_singlecycle.png'];
var _default = {
  data: {
    showMusicList: false,
    playMode: 1,
    modeImage: 'common/ic_music_listcycle.png',
    playImage: 'common/ic_music_play.png',
    disImage: 'common/dis.png',
    playProgress: 0,
    curMusicIndex: 0,
    playStatus: 2,
    curMusic: {
      curMusicName: "",
      singer: "",
      playTime: "00:00",
      allTime: "00:00"
    },
    musicList: []
  },
  onInit: function onInit() {
    var _this = this;

    _system2["default"].onplay = function () {
      (0, _newArrowCheck2["default"])(this, _this);
      console.log("onplay start");
      this.curMusic.allTime = this.timeChange(_system2["default"].duration);
      this.playStatus = 0;
    }.bind(this);

    _system2["default"].onCallback(function (data) {
      (0, _newArrowCheck2["default"])(this, _this);
      console.log(JSON.stringify(data));
      this.playStatus = 2;
      this.playMusic();
      this.playStatus = 0;
      this.changeProgress(data);
    }.bind(this));

    _system2["default"].ontimeupdate = function () {
      (0, _newArrowCheck2["default"])(this, _this);

      if (_system2["default"].duration == null || _system2["default"].duration <= 0) {
        return;
      }

      console.log("ontime update:");
      this.curMusic.playTime = this.timeChange(_system2["default"].currentTime);
      console.log("ontime update:" + this.curMusic.playTime);
      this.playProgress = Math.floor(_system2["default"].currentTime * 100 / _system2["default"].duration);
      console.log("ontime update progress:" + this.playProgress + ",duration:" + _system2["default"].duration);
    }.bind(this);

    _system2["default"].onerror = function () {
      (0, _newArrowCheck2["default"])(this, _this);
      console.log("onerror");
      this.changeSong();
    }.bind(this);

    _system2["default"].onended = function () {
      (0, _newArrowCheck2["default"])(this, _this);
      console.log("onend");
      this.playStatus = 2;

      if (this.playMode == 0 && this.curMusicIndex == this.musicList.length - 1) {
        this.playStatus = 2;
        this.playImage = "common/ic_music_play.png";
        console.log("played the last song in sequential mode");
        return;
      }

      var mode = "";

      if (this.playMode == 2) {
        console.log("random");
        mode = "random";
      }

      this.changeSong(mode);
    }.bind(this);

    this.getMusicList();
  },
  onDestroy: function onDestroy() {
    this.stopPlay();
  },
  clickListItem: function clickListItem(index) {
    console.log("listItemClick:start:" + index);

    if (index == undefined || index == null) {
      index = 0;
    }

    this.curMusicIndex = index;
    this.playStatus = 2;
    this.playMusic();
    this.showMusicList = false;
    console.log("listItemClick:end");
  },
  changeProgress: function changeProgress(value) {
    console.log("changeProgress start:" + value.progress);

    if (value == null || value.progress == null) {
      return;
    }

    if (this.playStatus == 2) {
      return;
    }

    var val = Math.floor(value.progress / 100 * _system2["default"].duration);
    console.log("changeProgress change:" + val);
    _system2["default"].currentTime = val;
    console.log("changeProgress end:");
  },
  playMusic: function playMusic() {
    console.log("playMusic:start");
    this.playImage = "common/ic_music_pause.png";

    if (this.playStatus == 1) {
      _system2["default"].play();

      this.playStatus = 0;
      console.log("playMusic:play");
      return;
    } else if (this.playStatus == 0) {
      this.playImage = "common/ic_music_play.png";

      _system2["default"].pause();

      this.playStatus = 1;
      console.log("playMusic:pause");
      return;
    }

    if (this.curMusicIndex == null) {
      this.curMusicIndex = 0;
    }

    var music = this.musicList[this.curMusicIndex];

    if (music != null) {
      this.playProgress = 0;
      this.curMusic.curMusicName = music.name;
      this.curMusic.singer = music.singer;
      _system2["default"].src = music.src;
      console.log("playMusic:src:" + music.src);

      _system2["default"].play();

      if (this.playMode == 3) {
        _system2["default"].loop = true;
      } else {
        _system2["default"].loop = false;
      }

      console.log("playMusic:end");
    }
  },
  stopPlay: function stopPlay() {
    console.log("stopPlay");
    _system2["default"].src = null;
    _system2["default"].onstop = null;
    _system2["default"].onplay = null;
    _system2["default"].ontimeupdate = null;
    _system2["default"].onerror = null;
  },
  changeMode: function changeMode() {
    console.log("changeMode start");

    if (this.playMode == 3) {
      this.playMode = 0;
    } else {
      this.playMode++;
    }

    if (this.playMode == 3) {
      _system2["default"].loop = true;
    } else {
      _system2["default"].loop = false;
    }

    console.log("changeMode:" + this.playMode);
    this.modeImage = modeImages[this.playMode];
  },
  changeSong: function changeSong(mode) {
    console.log("ChangeSong:start");

    if (this.playStatus == 0 || this.playStatus == 1) {
      this.playStatus = 2;
    }

    if (this.playMode == 2) {
      mode = "random";
    }

    if (mode == "previous") {
      this.curMusicIndex == 0 ? this.curMusicIndex = this.musicList.length - 1 : this.curMusicIndex--;
      console.log("ChangeSong:previous:" + this.curMusicIndex);
    } else if (mode == "random") {
      this.curMusicIndex = parseInt(Math.random() * this.musicList.length, 10);
      console.log("ChangeSong:random:" + this.curMusicIndex);
    } else {
      this.curMusicIndex == this.musicList.length - 1 ? this.curMusicIndex = 0 : this.curMusicIndex++;
      console.log("ChangeSong:next" + this.curMusicIndex);
    }

    this.curMusic.curMusicName = this.musicList[this.curMusicIndex].name;
    this.curMusic.singer = this.musicList[this.curMusicIndex].singer;
    this.playMusic();

    if (this.showMusicList) {
      this.$refs.musicList.scrollTo({
        index: this.curMusicIndex == 0 ? 0 : this.curMusicIndex - 1
      });
    }

    console.log("ChangeSong:end");
  },
  timeChange: function timeChange(seconds) {
    console.log("timeChange:start:" + seconds);

    if (seconds == null || seconds < 0) {
      return "00:00";
    }

    var minute,
        second = 0;
    minute = Math.floor(seconds / 60);
    second = Math.floor(seconds % 60);
    var result = (minute > 9 ? minute : "0" + minute) + ":" + (second > 9 ? second : "0" + second);
    console.log("timeChange:end:" + result);
    return result;
  },
  playRemote: function playRemote(progress) {
    if (this.playStatus == 0) {
      this.playImage = "common/ic_music_play.png";

      _system2["default"].pause();

      this.playStatus = 1;
      console.log("playMusic:pause");
    } else if (this.playStatus == 1) {} else {
      this.playProgress = 0;
    }

    console.log("play remote progress: " + this.playProgress);

    _system2["default"].playRemote(this.playProgress);
  },
  changePage: function changePage(operation) {
    console.log("changePage:start");

    if (operation != null && operation == "close") {
      console.log("operation != null && operation == close");
      this.showMusicList = false;
      return;
    }

    '';
    this.showMusicList = !this.showMusicList;
    console.log("changePage: showMusicList " + this.showMusicList);

    if (this.showMusicList) {
      console.log("changePage: showMusicList index " + this.curMusicIndex);
      this.$refs.musicList.scrollTo({
        index: this.curMusicIndex == 0 ? 0 : this.curMusicIndex - 1
      });
    }
  },
  exitApp: function exitApp() {
    console.log("start exit");

    _system4["default"].terminate();

    console.log("end exit");
  },
  swipeEvent: function swipeEvent(e) {
    if (e.direction == "right") {
      console.log("start exit");
      this.exitApp();
    }
  },
  getMusicList: function getMusicList() {
    var that = this;

    _system3["default"].readText({
      uri: "internal://app/musicList.txt",
      success: function success(data) {
        console.log(data.text);
        var music = JSON.parse(data.text);
        console.log("---------" + music);

        if (music != null) {
          that.musicList = music;
        }
      },
      fail: function fail(data, code) {
        console.log("get music list failed :" + code);
      }
    });
  },
  openDailog: function openDailog() {
    _system["default"].replace({
      uri: "pages/dm/dmstep"
    });
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