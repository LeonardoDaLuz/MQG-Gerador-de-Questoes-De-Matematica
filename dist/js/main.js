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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/geradorDeQuestoes.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/geradorDeQuestoes.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n* {\\r\\n   /* border: 1px solid white;*/\\r\\n}\\r\\n#Questao {\\r\\n    font-family: 'Quicksand', Courier, monospace;\\r\\n    font-weight: bold;\\r\\n    font-size: 20px;\\r\\n    border-radius: 20px;\\r\\n    padding: 20px;\\r\\n    background-color: rgb(250, 250, 250);\\r\\n    overflow: hidden;\\r\\n    box-shadow: 0px 3px 20px rgb(8, 42, 70);\\r\\n    margin-bottom: 20px;\\r\\n\\r\\n}\\r\\n\\r\\n#Questao form label {\\r\\n    position: relative;\\r\\n    display: block;\\r\\n    padding: 5px 0px 5px 40px;\\r\\n    cursor: pointer;\\r\\n    color: white;\\r\\n    background-color: rgb(54, 83, 138);\\r\\n    background-image: linear-gradient(to right, rgb(92, 129, 204) , rgb(164, 194, 250));\\r\\n    border-radius: 10px;\\r\\n    margin: 20px 0px;\\r\\n}\\r\\n#Questao form label.selected {\\r\\n    position: relative;\\r\\n    display: block;\\r\\n    padding: 5px 0px 5px 40px;\\r\\n    cursor: pointer;\\r\\n    color: white;\\r\\n    background-color: rgb(54, 83, 138);\\r\\n    background-image: linear-gradient(to right, rgb(18, 27, 46) , rgb(93, 125, 184));\\r\\n    border-radius: 10px;\\r\\n    margin: 20px 0px;\\r\\n}\\r\\n\\r\\n#Questao form input {\\r\\nmargin-right: 10px;\\r\\ndisplay: none;\\r\\n}\\r\\n\\r\\n\\r\\n.questHeader {\\r\\n    color: white;\\r\\n    width: 120%;\\r\\n    margin: -20px -20px 15px -25px;\\r\\n    padding: 10px 10px 10px 30px;\\r\\n    background-image: linear-gradient(to right, rgb(92, 129, 204) , rgb(30, 65, 129));\\r\\n}\\r\\n.alternativaLetra\\r\\n{\\r\\n    display: block;\\r\\n    background-color: white;\\r\\n    color: rgb(92, 129, 204);\\r\\n    border: 3px solid rgb(92, 129, 204);\\r\\n    height:1.5em;\\r\\n    width: 1.5em;\\r\\n    line-height: 1.5em;\\r\\n    text-align: center;\\r\\n    border-radius: 1em;\\r\\n    position: absolute;\\r\\n    font-size: 25px;\\r\\n    left: -5px;\\r\\n    top: -4px;\\r\\n}\\r\\n\\r\\n#Questao form label.selected .alternativaLetra\\r\\n{\\r\\n    color: black;\\r\\n    border: 3px solid black;\\r\\n}\\r\\n#Questao .correta {\\r\\n    background-image: linear-gradient(to right, green , green)!important;\\r\\n\\r\\n}\\r\\n#Questao form label.correta .alternativaLetra\\r\\n{\\r\\n    color: green;\\r\\n    border: 3px solid green;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://memorefresh/./src/geradorDeQuestoes.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://memorefresh/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/geradorDeQuestoes.css":
/*!***********************************!*\
  !*** ./src/geradorDeQuestoes.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_geradorDeQuestoes_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./geradorDeQuestoes.css */ \"./node_modules/css-loader/dist/cjs.js!./src/geradorDeQuestoes.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_geradorDeQuestoes_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_geradorDeQuestoes_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://memorefresh/./src/geradorDeQuestoes.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://memorefresh/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Mathf.js":
/*!**********************!*\
  !*** ./src/Mathf.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mathf)\n/* harmony export */ });\n    class Mathf {\r\n        static RandomRange(min, max) {\r\n        var diff = max - min;\r\n        return Math.random() * diff + min;\r\n        }\r\n    }\n\n//# sourceURL=webpack://memorefresh/./src/Mathf.js?");

/***/ }),

/***/ "./src/QuestionController.js":
/*!***********************************!*\
  !*** ./src/QuestionController.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QuestionController)\n/* harmony export */ });\n/* harmony import */ var _Mathf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mathf */ \"./src/Mathf.js\");\n/* harmony import */ var _QuestionView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionView */ \"./src/QuestionView.js\");\n/* harmony import */ var _QuestionData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionData */ \"./src/QuestionData.js\");\n\r\n\r\n\r\n\r\nclass QuestionController {\r\n\r\n    constructor(template, name) {\r\n        this.data = new _QuestionData__WEBPACK_IMPORTED_MODULE_2__.default(template(), name)\r\n    }\r\n\r\n    gerar() {\r\n        this.data.alternativas = this.randomizeArray(this.data.alternativas);\r\n        this.view = new _QuestionView__WEBPACK_IMPORTED_MODULE_1__.default(this.data);\r\n        this.data.alternativas.forEach(item => {\r\n            item.element.onclick = (event) => {\r\n                this.selecionaAlternativa.bind(this)(event, item);\r\n            }\r\n        })\r\n\r\n        return this.view.container;\r\n    }\r\n\r\n    selecionaAlternativa(event, item) {\r\n        if (event.target != item.element)\r\n            return;\r\n\r\n        this.view.AtualizaSelecionar(this.data, item.element);\r\n        this.data.alternativaSelecionada = item;\r\n        this.validar();\r\n    }\r\n\r\n    validar() {\r\n        this.view.AtualizaValidacao(this.data.alternativaCerta.element);\r\n        if (this.data.alternativaSelecionada == this.data.alternativaCerta) {\r\n\r\n        }\r\n    }\r\n\r\n    randomizeArray(array) {\r\n        var oldArray = array;\r\n\r\n        var length = array.length;\r\n        var newArray = [];\r\n        for (var i = 0; i < length; i++) {\r\n            var random = Math.round(_Mathf__WEBPACK_IMPORTED_MODULE_0__.default.RandomRange(0, oldArray.length - 1));\r\n            newArray.push(oldArray[random]);\r\n            oldArray.splice(random, 1);\r\n        }\r\n        return newArray;\r\n    }\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://memorefresh/./src/QuestionController.js?");

/***/ }),

/***/ "./src/QuestionData.js":
/*!*****************************!*\
  !*** ./src/QuestionData.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QuestionData)\n/* harmony export */ });\nclass QuestionData {\r\n    constructor(_questaoDataCrua, name) {\r\n\r\n        _questaoDataCrua.alternativas = this.removeDoubles(_questaoDataCrua);\r\n\r\n        this.name=name;\r\n        this.enunciado = _questaoDataCrua.enunciado;\r\n        this.alternativas = [];\r\n        _questaoDataCrua.alternativas.forEach(item => this.alternativas.push({ element: null, text: item }));\r\n        this.alternativaCerta = this.alternativas[_questaoDataCrua.alternativaCerta];\r\n        this.alternativaSelecionada = null;\r\n    }\r\n\r\n    removeDoubles(data) {\r\n        let listaDosDuplicados = [];\r\n        for(let i=0; i<data.alternativas.length; i++) {\r\n            for(let ib=0; ib<data.alternativas.length; ib++) {\r\n                if(i!=ib){\r\n                    if(data.alternativas[i]==data.alternativas[ib]){\r\n                        if(ib!=data.alternativaCerta){\r\n                            listaDosDuplicados.push(ib)\r\n                        } else{\r\n                            listaDosDuplicados.push(i);\r\n                        }\r\n                    }\r\n                }            \r\n            }\r\n        }\r\n        let novaData = data.alternativas.filter((value, index, arr)=> {\r\n            return !listaDosDuplicados.includes(index);\r\n        });\r\n\r\n        return novaData;\r\n    }\r\n}\n\n//# sourceURL=webpack://memorefresh/./src/QuestionData.js?");

/***/ }),

/***/ "./src/QuestionManager.js":
/*!********************************!*\
  !*** ./src/QuestionManager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QuestionManager)\n/* harmony export */ });\n/* harmony import */ var _QuestionController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionController */ \"./src/QuestionController.js\");\n/* harmony import */ var _Mathf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mathf */ \"./src/Mathf.js\");\n/* harmony import */ var _templates_regraDeTres__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/regraDeTres */ \"./src/templates/regraDeTres.js\");\n/* harmony import */ var _geradorDeQuestoes_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geradorDeQuestoes.css */ \"./src/geradorDeQuestoes.css\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst templatesKeys = {\r\n    \"regra de tres\": _templates_regraDeTres__WEBPACK_IMPORTED_MODULE_2__.default,\r\n    \r\n};\r\n\r\nclass QuestionManager {\r\n\r\n\r\n    gerar(containerElementId, templateNames, quantidade = 10) {\r\n\r\n        let container = document.getElementById(containerElementId);\r\n\r\n\r\n        let length = Object.keys(templatesKeys).length;\r\n        console.log();\r\n\r\n        while (container.firstChild) {\r\n            container.removeChild(container.lastChild);\r\n        }\r\n\r\n        for (let i = 0; i < quantidade; i++) {\r\n            let topicoSorteadoIndex = Math.round(_Mathf__WEBPACK_IMPORTED_MODULE_1__.default.RandomRange(-0.45, templateNames.length - 1+0.45));\r\n            let topicoSorteadoObj = templatesKeys[templateNames[topicoSorteadoIndex]];\r\n            let templateSorteadoIndex = Math.round(_Mathf__WEBPACK_IMPORTED_MODULE_1__.default.RandomRange(0, topicoSorteadoObj.length - 1));\r\n            var questController = new _QuestionController__WEBPACK_IMPORTED_MODULE_0__.default(topicoSorteadoObj[templateSorteadoIndex], \"Questão \" + (i + 1));\r\n            container.append(questController.gerar());\r\n        }\r\n    }\r\n\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://memorefresh/./src/QuestionManager.js?");

/***/ }),

/***/ "./src/QuestionView.js":
/*!*****************************!*\
  !*** ./src/QuestionView.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QuestionView)\n/* harmony export */ });\nclass QuestionView {\r\n    constructor(data) {\r\n        this.container = document.createElement(\"div\");\r\n        this.container.id = \"Questao\";\r\n        let header = document.createElement(\"div\");\r\n        header.innerHTML = data.name;\r\n        header.classList.add(\"questHeader\");\r\n        this.container.appendChild(header);\r\n        let enunciado = document.createElement(\"div\");\r\n        enunciado.classList.add(\"enunciado\");\r\n        enunciado.innerHTML = data.enunciado;\r\n        this.container.appendChild(enunciado);\r\n        let form = document.createElement(\"form\");\r\n        this.container.appendChild(form);\r\n        this.container.form = form;\r\n        form.elementosDasAlternativas = this.geraAlternativas(form, data);\r\n    }\r\n\r\n    geraAlternativas(form, data) {\r\n        let elementosDasAlternativas = [];\r\n\r\n        for (let i = 0; i < data.alternativas.length; i++) {\r\n            let alternativaElement = this.geraAlternativaElements(data.alternativas[i].text, i);\r\n            data.alternativas[i].element = alternativaElement;\r\n            form.appendChild(alternativaElement);\r\n            elementosDasAlternativas.push(alternativaElement);\r\n\r\n        }\r\n\r\n        return elementosDasAlternativas;\r\n    }\r\n\r\n    geraAlternativaElements(alternativa, id) {\r\n        const letras = ['A', 'B', 'C', 'D', 'E', 'F']\r\n        let InputAlternativa = document.createElement(\"input\");\r\n        InputAlternativa.type = \"radio\";\r\n        InputAlternativa.id = \"alternativa-\" + id;\r\n        InputAlternativa.value = InputAlternativa.id;\r\n        InputAlternativa.name = \"alt\";\r\n        let label = document.createElement(\"label\");\r\n        label.htmlFor = InputAlternativa.id;\r\n        label.innerHTML = alternativa;\r\n        label.prepend(InputAlternativa);\r\n        let AltLetra = document.createElement(\"div\");\r\n        AltLetra.classList.add(\"alternativaLetra\");\r\n        AltLetra.innerHTML = letras[id];\r\n        label.prepend(AltLetra);\r\n        return label;\r\n    }\r\n\r\n    AtualizaSelecionar(data, element) {\r\n\r\n        data.alternativas.forEach(item => {\r\n            item.element.classList.remove('selected');\r\n        })\r\n\r\n        element.classList.add(\"selected\");\r\n    }\r\n\r\n    AtualizaValidacao(element) {\r\n        console.log(\"PQP\");\r\n        console.log(element);\r\n        element.classList.add(\"correta\");\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://memorefresh/./src/QuestionView.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _QuestionController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionController */ \"./src/QuestionController.js\");\n/* harmony import */ var _QuestionManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionManager */ \"./src/QuestionManager.js\");\n\r\n\r\n\r\n\r\nvar geradorContainer = document.getElementById(\"geradorContainer\");\r\n\r\nlet questionManager = new _QuestionManager__WEBPACK_IMPORTED_MODULE_1__.default();\r\nwindow.questionManager = questionManager;\r\n//questionManager.gerar(geradorContainer, [ regraDeTres ]);\r\nquestionManager.gerar(\"geradorContainer\", [ \"regra de tres\" ]);\r\n\r\n \r\n\r\n\n\n//# sourceURL=webpack://memorefresh/./src/index.js?");

/***/ }),

/***/ "./src/templates/regraDeTres.js":
/*!**************************************!*\
  !*** ./src/templates/regraDeTres.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Mathf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mathf */ \"./src/Mathf.js\");\n\r\n\r\nvar templatesDeQuestoes = [Questao1, Questao2, Questao3];\r\n\r\nfunction Questao1() {\r\n\r\n    let numerDeMaquinas = _Mathf__WEBPACK_IMPORTED_MODULE_0__.default.RandomRange(2, 90).toFixed();\r\n    let producaoPorMaquina = _Mathf__WEBPACK_IMPORTED_MODULE_0__.default.RandomRange(50, 500).toFixed();\r\n    let producaoDeFolasCom40Maquinas = numerDeMaquinas * producaoPorMaquina;\r\n    let percentualDeMaquinasQuePararaPraManutencao = _Mathf__WEBPACK_IMPORTED_MODULE_0__.default.RandomRange(2, 95).toFixed() * 0.01;\r\n\r\n    let enunciado = `\r\n    Na linha de produção de um fábrica de papel, há ${numerDeMaquinas} máquinas, que, quando trabalhando juntas, produzem ${producaoDeFolasCom40Maquinas} folhas de papel por dia. \r\n\r\nNa semana passada, ${(percentualDeMaquinasQuePararaPraManutencao * 100).toFixed()}% das máquinas pararam para manutenção e não funcionaram. Então, a produção semanal, ou seja, dos sete dias desta semana foi de: `;\r\n\r\n    return {\r\n        enunciado: enunciado,\r\n        alternativas: [\r\n            (producaoDeFolasCom40Maquinas * 6 * (1 - percentualDeMaquinasQuePararaPraManutencao)).toFixed() + \" folhas\",\r\n            (producaoDeFolasCom40Maquinas * 7 * (1 - percentualDeMaquinasQuePararaPraManutencao)).toFixed() + \" folhas\",\r\n            (producaoDeFolasCom40Maquinas * 7 * (1 - percentualDeMaquinasQuePararaPraManutencao) * 1.1).toFixed() + \" folhas\",\r\n            (producaoDeFolasCom40Maquinas * 7 * (1 - percentualDeMaquinasQuePararaPraManutencao) * 1.01).toFixed() + \" folhas\",\r\n            (producaoDeFolasCom40Maquinas * 7 * (1 - percentualDeMaquinasQuePararaPraManutencao) * 0.7).toFixed() + \" folhas\"\r\n\r\n        ],\r\n        alternativaCerta: 1\r\n    };\r\n}\r\n\r\nfunction Questao2() {\r\n\r\n    let minutosNecessarios = _Mathf__WEBPACK_IMPORTED_MODULE_0__.default.RandomRange(5, 60).toFixed();\r\n    let quantidadeMangueiras = _Mathf__WEBPACK_IMPORTED_MODULE_0__.default.RandomRange(1, 20).toFixed();\r\n    let minutosAlmejados = _Mathf__WEBPACK_IMPORTED_MODULE_0__.default.RandomRange(10, 50).toFixed();\r\n\r\n    let a = quantidadeMangueiras * minutosNecessarios;\r\n    let x = a / minutosAlmejados;\r\n    let calculoErrado = Math.ceil((quantidadeMangueiras * minutosAlmejados) / minutosNecessarios);\r\n\r\n    var enunciado = `Considerando-se que são necessários ${minutosNecessarios}min para encher um recipiente com ${quantidadeMangueiras} mangueiras, que possuem a mesma vazão de água, ao todo, quantas mangueiras iguais às anteriores são necessárias para que se encha esse recipiente em ${minutosAlmejados}min?`;\r\n\r\n    return {\r\n        enunciado: enunciado,\r\n        alternativas: [\r\n            Math.ceil(x) + \" mangueiras\",\r\n            Math.ceil(calculoErrado) + \" mangueiras\",\r\n            Math.ceil(x * 1.1) + \" mangueiras\",\r\n            Math.ceil(calculoErrado * 1.5) + \" mangueiras\"\r\n        ],\r\n        alternativaCerta: 0\r\n    };\r\n}\r\n\r\nfunction Questao3() {\r\n\r\n    let fishBurguersPorDia = Math.round(_Mathf__WEBPACK_IMPORTED_MODULE_0__.default.RandomRange(50, 2500));\r\n    let dias = Math.round(_Mathf__WEBPACK_IMPORTED_MODULE_0__.default.RandomRange(2, 25));\r\n    let estoquePescado = Math.round(_Mathf__WEBPACK_IMPORTED_MODULE_0__.default.RandomRange(1000, 10000));;\r\n\r\n    let fishBurguersPorDiaProposta = 1200;\r\n    let estoquePescadoProposta = 1260;    \r\n    let diasResultado = (fishBurguersPorDia*dias*estoquePescadoProposta)/(fishBurguersPorDiaProposta*estoquePescado);\r\n    let diasResultadoEerrado1 = (fishBurguersPorDia*dias*estoquePescado)/(fishBurguersPorDiaProposta*estoquePescadoProposta);\r\n    let diasResultadoEerrado2 = (fishBurguersPorDiaProposta*dias*estoquePescadoProposta)/(fishBurguersPorDia*estoquePescado);\r\n\r\n    var enunciado = `Numa indústria de processamento de pescado faz-se ${fishBurguersPorDia} fishburgers por dia durante ${dias} dias a partir de ${estoquePescado} kg de pescado.\r\n \r\n    Nessas condições, com 1.260 kg de pescado, por quantos dias será possível manter uma produção de 1.200 unidades de fishburgers?`;\r\n\r\n    return {\r\n        enunciado: enunciado,\r\n        alternativas: [\r\n            Math.ceil(diasResultado) + \" dias\",\r\n            Math.ceil(diasResultadoEerrado2)+\" dias\",\r\n            Math.ceil(diasResultadoEerrado1)+\" dias\",\r\n            Math.ceil(diasResultado * 1.5) +\" dias\",\r\n        ],\r\n        alternativaCerta: 0\r\n    };\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (templatesDeQuestoes);\n\n//# sourceURL=webpack://memorefresh/./src/templates/regraDeTres.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;