/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --text-light: rgb(220, 220, 220);\n    --text-subtle: rgb(163, 163, 163);\n    --text-muted: rgb(79, 79, 83);\n    --text-white: rgb(255, 255, 255);\n  \n    --bg-main: rgb(11, 11, 11);\n    --bg-header: rgba(8, 8, 8, 0.6);\n    --bg-glass-hover: rgba(255, 255, 255, 0.058);\n    --bg-input: rgb(8, 8, 8);\n  \n    --border-light: rgb(36, 36, 36);\n    --border-header: rgb(35, 35, 36);\n  \n    --shadow-glass: 0 2px 20px rgba(0, 0, 0, 0.2);\n    --blur: blur(12px);\n  }\n  \n  * {\n    list-style: none;\n    text-decoration: none;\n    font-family: \"Inter\", sans-serif;\n    font-weight: 330;\n    color: var(--text-light);\n    box-sizing: border-box;\n  }\n\n  html, body {\n    height: 100%;\n  }\n  \n  body {\n    background-attachment: fixed;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    margin: 0;\n    padding: 0;\n  }\n  \n  *:focus {\n    outline: none;\n  }\n  \n  .main {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    animation: fadeInSlide 1s ease-out;\n  }\n  \n@keyframes fadeInSlide {\n    from {\n      transform: translateY(-8px);\n    }\n    to {\n      transform: translateY(0);\n    }\n}\n\n.fulldiv {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 9999;\n    display: none;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n\n.loading {\n    width: 100px;\n    height: 100px;\n    border: 3px solid rgb(255, 255, 255);\n    border-left: 3px solid rgba(85, 154, 191, 0);\n    border-radius: 50%;\n    animation: loadingSpin 1s linear infinite;\n}\n\n@keyframes loadingSpin {\n    to {\n        transform: rotate(360deg);\n    }\n}\n  \n  header {\n    animation: fadeInSlide 1s ease-out;\n    transition: background-color 0.3s ease, backdrop-filter 0.3s ease;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    background-color: var(--bg-header);\n    backdrop-filter: var(--blur);\n    -webkit-backdrop-filter: var(--blur);\n    box-shadow: var(--shadow-glass);\n    gap: 20px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.173);\n  }\n  \n  .title {\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    color: var(--text-white);\n  }\n  \n  .title-link {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    font-weight: 400;\n    cursor: pointer;\n  }\n  \n  .raincasticon {\n    width: 20px;\n    height: 20px;\n  }\n  \n  #how {\n    font-size: 20px;\n    background-color: transparent;\n    color: var(--text-subtle);\n    border-radius: 50%;\n    cursor: pointer;\n    width: 32.5px;\n    height: 32.5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: background-color 0.2s ease, color 0.2s ease;\n  }\n  \n  #how:hover {\n    background-color: var(--bg-glass-hover);\n    color: var(--text-white);\n  }\n  \n  #searchform {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n  }\n  \n  #searchlabel {\n    font-size: 17px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n  }\n  \n  #weathersearch {\n    padding: 5px;\n    background-color: rgba(0, 0, 0, 0.2);\n    border: 1px solid rgba(255, 255, 255, 0.292);\n    border-radius: 10px;\n    font-size: 17px;\n    width: 100%;\n    transition: border 0.2s;\n  }\n  #weathersearch:focus {\n    border: 1px solid rgba(255, 255, 255, 0.495);\n  }\n  \n  #searchbutton {\n    background-color: transparent;\n    color: var(--text-light);\n    border-radius: 10px;\n    cursor: pointer;\n    height: 32.5px;\n    border: 1px solid rgba(255, 255, 255, 0.292);\n    transition: background-color 0.2s ease, color 0.2s ease, border 0.2s;\n  }\n\n  #searchbutton {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n    padding: 10px;\n  }\n  \n  .search-icon {\n    stroke: var(--text-light);\n    transition: stroke 0.2s ease;\n    width: 17px;\n    height: 17px;\n\n  }\n  \n  #searchbutton:hover .search-icon {\n    stroke: var(--text-white);\n  }\n  \n  #searchbutton:hover {\n    background-color: var(--bg-glass-hover);\n    color: var(--text-white);\n    border: 1px solid rgba(255, 255, 255, 0.495);\n  }\n  \n  .footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    border-top: 1px solid rgba(255, 255, 255, 0.173);;\n    background-color: var(--bg-header);\n    backdrop-filter: var(--blur);\n    -webkit-backdrop-filter: var(--blur);\n    box-shadow: var(--shadow-glass);\n  }\n  \n  .credit {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    color: rgba(255, 255, 255, 0.512);\n    font-size: 16px;\n  }\n  \n  .github-link {\n    display: inline-flex;\n    align-items: center;\n  }\n  \n  .github-icon {\n    width: 20px;\n    height: 20px;\n    fill: rgba(255, 255, 255, 0.512);\n    transition: fill 0.3s ease;\n  }\n  \n  .github-link:hover .github-icon {\n    fill: #ffffff;\n  }\n\n.display {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 30px;\n}\n\n.topcontainer {\n    background-color: rgb(12, 12, 12);\n    border: 1px solid rgb(22, 22, 22);\n    border-radius: 20px;\n    display: flex;\n    align-items: center;\n    padding: 10px;\n}\n\n.top-inside {\n    transition: 0.5s ease;\n    width: 100%;\n    height: 100%;\n    border: 1px solid rgb(28, 28, 28);\n    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.625);\n    border-radius: 15px;\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.bottomcontainer {\n    width: 100%;\n    height: 100%;\n    background-color: rgb(12, 12, 12);\n    border: 1px solid rgb(22, 22, 22);\n    border-radius: 20px;\n    display: flex;\n    align-items: center;\n    padding: 10px;\n}\n\n.bottom-inside {\n    transition: 0.5s ease;\n\n    width: 100%;\n    height: 100%;\n    border: 1px solid rgb(28, 28, 28);\n    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.625);\n    border-radius: 15px;\n    display: flex;\n    align-items: center;\n    padding: 20px;\n}\n\n.container {\n    flex: 1;\n    display: none;\n    flex-direction: column;\n    gap: 30px;\n    min-height: 0;\n  }\n\n.top-left {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    padding-bottom: 20px;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.106);\n}\n\n.top-bleft {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    padding-top: 20px;\n}\n\n#temp {\n    font-size: 90px;\n}\n\n#conditions {\n    font-size: 25px;\n}\n\n#uv {\n    font-size: 25px;\n}\n\n#wind {\n    font-size: 25px;\n}\n\n#location {\n    font-size: 25px;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n#locationsvg {\n    min-width: 24px;\n    min-height: 24px;\n}\n\n.bottom-in {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.lazy {\n  font-size: 25px;\n}\n\n\n.top-inside, .bottom-inside {\n  background-color: rgba(20, 20, 20, 0.169);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);\n}\n\n.topcontainer, .bottomcontainer {\n    background-color: rgba(20, 20, 20, 0.108);\n    backdrop-filter: blur(10px);\n    -webkit-backdrop-filter: blur(10px);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.255);\n}\n\n\n\n\n\n  \n  @media (max-width: 700px) {\n    header {\n      align-items: stretch;\n      padding: 16px;\n      gap: 12px;\n    }\n\n\n  }\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\n\nconst searchform = document.querySelector('#searchform')\nconst weathersearch = document.querySelector('#weathersearch')\nconst temptext = document.querySelector('#temp')\nconst conditiontext = document.querySelector('#conditions')\nconst container = document.querySelector('.container')\nconst location = document.querySelector('#locationtitle')\nconst loading = document.querySelector('.fulldiv')\nconst uv = document.querySelector('#uv')\nconst wind = document.querySelector('#wind')\nconst body = document.querySelector('body')\n\nasync function startWeather() {\n    const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.weatherData)('Chicago')\n    if (data) {\n        updateUI(data)\n        weatherBG(data.condition)\n        console.log(data)\n    }\n    else {\n        weathersearch.value = ''\n        weathersearch.style.border = '1px solid rgb(227, 66, 66)'\n        loading.style.display = 'none'\n    }\n}\nstartWeather()\n\naddEventListener('input', () => {\n    weathersearch.style.border = ''\n    weathersearch.placeholder = 'Search any location'\n})\n\nfunction weatherBG(condition) {\n    console.log(condition)\n  let image = 'default.jpg';\n\n  if (condition.includes(\"Clear\")) image = 'sunnyday.jpg';\n  else if (condition.includes(\"Rain\")) image = 'rainyday.jpg';\n  else if (condition.includes(\"Overcast\")) image = 'rainyday.jpg'\n  else if (condition.includes(\"Snow\")) image = 'snowyday.jpg';\n  else if (condition.includes(\"Partially cloudy\")) image = 'cloudyday.jpg';\n  else if (condition.includes(\"Thunder\")) image = 'rainynight.jpg';\n\n  body.style.backgroundImage = `url('images/${image}')`;\n}\n\n\n\n\nsearchform.addEventListener('submit', async (event) => {\n    event.preventDefault()\n    loading.style.display = 'flex'\n    if (weathersearch.value === '') {\n        console.log('Invalid search.')\n    }\n    const formsearch = weathersearch.value\n    const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.weatherData)(formsearch)\n    if (data) {\n        updateUI(data)\n        weatherBG(data.condition)\n        console.log(data)   \n    }\n    else {\n        weathersearch.value = ''\n        weathersearch.placeholder = 'Location not found!'\n        weathersearch.style.border = '1px solid rgb(227, 66, 66)'\n        loading.style.display = 'none'\n    }\n    \n})\n\nfunction updateUI(data) {\n    container.style.display = 'flex'\n    weathersearch.value = ''\n    weathersearch.style.border = ''\n    loading.style.display = 'none'\n    temptext.textContent = `${Math.round(data.temperature)}°F`\n    conditiontext.textContent = data.condition\n    location.textContent = data.location\n    uv.textContent = `UV Index: ${data.uvindex}`\n    wind.textContent = `Wind Speed: ${data.wind} mph`\n}\n\n//# sourceURL=webpack://weatherapp/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.js */ \"./src/weather.js\");\n\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weatherapp/./src/style.css?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   myData: () => (/* binding */ myData),\n/* harmony export */   weatherData: () => (/* binding */ weatherData)\n/* harmony export */ });\nfunction myData(data) {\n    return {\n        location: data.resolvedAddress,\n        temperature: data.currentConditions.temp,\n        uvindex: data.currentConditions.uvindex,\n        condition: data.currentConditions.conditions,\n        icon: data.currentConditions.icon,\n        wind: data.currentConditions.windspeed,\n    }\n}\n\nasync function weatherData(search) {\n    try {\n        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?unitGroup=us&key=BDH93GK7EJBZUC4QNBKK6FPTP&contentType=json`)\n        const data = await response.json()\n        console.log(data)\n        return myData(data)\n    }\n    catch(error) {\n        console.log('An error occurred: ', error)\n    }\n}\n\n//# sourceURL=webpack://weatherapp/./src/weather.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;