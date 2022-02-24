/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "D:\\ace\\demo\\entry\\src\\main\\js\\default\\pages\\index\\index.hml?entry":
/*!*************************************************************************!*\
  !*** D:\ace\demo\entry\src\main\js\default\pages\index\index.hml?entry ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !!./lib/json.js!./lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!D:\\ace\\demo\\entry\\src\\main\\js\\default\\pages\\index\\index.hml")
var $app_style$ = __webpack_require__(/*! !!./lib/json.js!./lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!D:\\ace\\demo\\entry\\src\\main\\js\\default\\pages\\index\\index.css")
var $app_script$ = __webpack_require__(/*! !!./lib/script.js!./node_modules/babel-loader?presets[]=C:\Users\wen_fei\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=C:\Users\wen_fei\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\wen_fei\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\wen_fei\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!D:\\ace\\demo\\entry\\src\\main\\js\\default\\pages\\index\\index.js")
var options=$app_script$
 if ($app_script$.__esModule) {

      options = $app_script$.default;
 }
options.styleSheet=$app_style$
options.render=$app_template$;
module.exports=new ViewModel(options);

/***/ }),

/***/ "./lib/json.js!./lib/style.js!D:\\ace\\demo\\entry\\src\\main\\js\\default\\pages\\index\\index.css":
/*!************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!D:\ace\demo\entry\src\main\js\default\pages\index\index.css ***!
  \************************************************************************************************/
/***/ (function(module) {

module.exports = {"classSelectors":{"titleContainerStyle":{"width":454,"height":70},"titleTextStyle":{"width":454,"height":50,"marginLeft":170,"marginTop":0}}}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!D:\\ace\\demo\\entry\\src\\main\\js\\default\\pages\\index\\index.hml":
/*!***************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!D:\ace\demo\entry\src\main\js\default\pages\index\index.hml ***!
  \***************************************************************************************************/
/***/ (function(module) {

module.exports = function (vm) { var _vm = vm || this; return _c('list', {'staticStyle' : {'left' : 0,'top' : 0,'flexDirection' : "column",'width' : 454,'height' : 454}, } , [_c('list-item', {'staticStyle' : {'height' : 40,'width' : 454}, } ),_c('list-item', {'staticClass' : ["titleContainerStyle"]} , [_c('text', {'attrs' : {'value' : "Hello World"},'staticClass' : ["titleTextStyle"]} )] )] ) }

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

function requireModule(moduleName) {
  return requireNative(moduleName.slice(1));
}


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\wen_fei\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\wen_fei\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!D:\\ace\\demo\\entry\\src\\main\\js\\default\\pages\\index\\index.js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\Users\wen_fei\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=C:\Users\wen_fei\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!D:\ace\demo\entry\src\main\js\default\pages\index\index.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _system = _interopRequireDefault(requireModule("@system.app"));

var _system2 = _interopRequireDefault(requireModule("@system.file"));

var _default = {
  onShow: function onShow() {
    _system2["default"].writeText({
      uri: 'internal://app/test.txt',
      text: 'Hello World',
      append: false,
      success: function success() {
        console.log('set text success');
      },
      fail: function fail(data, code) {
        console.log('set text failed' + JSON.stringify(data));
        console.log('set text failed' + JSON.stringify(code));
      }
    });
  },
  exit: function exit() {
    _system["default"].terminate();
  }
};
exports.default = _default;

function requireModule(moduleName) {
  return requireNative(moduleName.slice(1));
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("D:\\ace\\demo\\entry\\src\\main\\js\\default\\pages\\index\\index.hml?entry");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map