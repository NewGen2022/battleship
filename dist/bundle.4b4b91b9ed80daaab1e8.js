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

/***/ "./src/appearance/startScreen.js":
/*!***************************************!*\
  !*** ./src/appearance/startScreen.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_cruise_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/cruise.png */ \"./src/assets/cruise.png\");\n/* harmony import */ var _assets_sword_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/sword.png */ \"./src/assets/sword.png\");\n/* harmony import */ var _assets_right_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/right-arrow.png */ \"./src/assets/right-arrow.png\");\n/* harmony import */ var _assets_left_arrow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/left-arrow.png */ \"./src/assets/left-arrow.png\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\nfunction _assertClassBrand(e, t, n) { if (\"function\" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError(\"Private element is not present on this object\"); }\n\n\n\n\nvar _StartScreen_brand = /*#__PURE__*/new WeakSet();\nvar StartScreen = /*#__PURE__*/function () {\n  function StartScreen() {\n    _classCallCheck(this, StartScreen);\n    // create options of WhoVSWho according to the \n    // passed attributes for first page\n    _classPrivateMethodInitSpec(this, _StartScreen_brand);\n    this.body = document.querySelector(\"body\");\n    this.startMain = document.createElement('div');\n    this.startHeader = document.createElement('div');\n    this.startMain.setAttribute('id', 'start-screen-container');\n    this.startHeader.setAttribute('id', 'start-header');\n    this.generateFirstStartPage();\n    this.generateSecondStartPage();\n  }\n\n  // creates first start screen page with\n  // choice between PlayerVSPlayer and PlayerVSBot\n  return _createClass(StartScreen, [{\n    key: \"generateFirstStartPage\",\n    value: function generateFirstStartPage() {\n      this.body.appendChild(this.startMain);\n      this.createHeader();\n      this.generatePlayerOrBotChoice();\n      this.createBackOrNextButton(_assets_right_arrow_png__WEBPACK_IMPORTED_MODULE_2__);\n      this.handlePlayerOrBotChange();\n    }\n  }, {\n    key: \"generateSecondStartPage\",\n    value: function generateSecondStartPage() {\n      var secondPage = document.createElement('h1');\n      secondPage.textContent = 'SECOND PAGE';\n      secondPage.style.display = 'none';\n      this.startMain.appendChild(secondPage);\n      this.createBackOrNextButton(_assets_left_arrow_png__WEBPACK_IMPORTED_MODULE_3__);\n      var back = document.getElementById('back');\n      back.style.display = 'none';\n    }\n\n    //  creates start screen header (BATTLESHIP)\n  }, {\n    key: \"createHeader\",\n    value: function createHeader() {\n      var startImg = document.createElement('img');\n      var startText = document.createTextNode('BATTLESHIP');\n      var startImg2 = document.createElement('img');\n      startImg.src = _assets_cruise_png__WEBPACK_IMPORTED_MODULE_0__;\n      startImg2.src = _assets_cruise_png__WEBPACK_IMPORTED_MODULE_0__;\n      this.startHeader.appendChild(startImg);\n      this.startHeader.appendChild(startText);\n      this.startHeader.appendChild(startImg2);\n      this.startMain.appendChild(this.startHeader);\n    }\n\n    // creates PlayerVSPlayer and PlayerVSBot containers\n    // for first page\n  }, {\n    key: \"generatePlayerOrBotChoice\",\n    value: function generatePlayerOrBotChoice() {\n      var playerOrBotContainer = document.createElement('div');\n      var playerVsPlayer = _assertClassBrand(_StartScreen_brand, this, _createPlayerOption).call(this, 'Player', 'Player');\n      var or = document.createElement('div');\n      var playerVsRobot = _assertClassBrand(_StartScreen_brand, this, _createPlayerOption).call(this, 'Player', 'Bot');\n      playerOrBotContainer.setAttribute('id', 'player-or-bot-container');\n      playerVsPlayer.classList.add('active-player-vs-bot');\n      or.textContent = 'OR';\n      or.setAttribute('id', 'or');\n      playerOrBotContainer.appendChild(playerVsPlayer);\n      playerOrBotContainer.appendChild(or);\n      playerOrBotContainer.appendChild(playerVsRobot);\n      this.startMain.appendChild(playerOrBotContainer);\n    }\n  }, {\n    key: \"handlePlayerOrBotChange\",\n    value:\n    // adds event listeners to PlayerVSPlayer and PlayerVSBot \n    // to change the class of the active one for first page\n    function handlePlayerOrBotChange() {\n      var playerVsPlayer = document.getElementById('player-vs-player');\n      var playerVsBot = document.getElementById('player-vs-bot');\n      playerVsPlayer.addEventListener('click', function () {\n        if (playerVsPlayer[\"class\"] === undefined) {\n          playerVsBot.classList.remove('active-player-vs-bot');\n          playerVsPlayer.classList.add('active-player-vs-bot');\n        }\n      });\n      playerVsBot.addEventListener('click', function () {\n        if (playerVsBot[\"class\"] === undefined) {\n          playerVsPlayer.classList.remove('active-player-vs-bot');\n          playerVsBot.classList.add('active-player-vs-bot');\n        }\n      });\n    }\n\n    // creates button back (to go back of the start screen choice) OR\n    // creates button next (to go to the next start screen choice)\n    // for first page\n  }, {\n    key: \"createBackOrNextButton\",\n    value: function createBackOrNextButton(arrowDirection) {\n      var _this = this;\n      var backOrNextArrow = document.createElement('button');\n      var arrow = document.createElement('img');\n      arrow.src = arrowDirection;\n      if (arrowDirection === _assets_left_arrow_png__WEBPACK_IMPORTED_MODULE_3__) {\n        backOrNextArrow.setAttribute('id', 'back');\n        backOrNextArrow.addEventListener('click', function () {\n          return _this.handleFirstPageDisplaying();\n        });\n      } else if (arrowDirection === _assets_right_arrow_png__WEBPACK_IMPORTED_MODULE_2__) {\n        backOrNextArrow.setAttribute('id', 'next');\n        backOrNextArrow.addEventListener('click', function () {\n          return _this.handleSecondPageGeneration();\n        });\n      }\n      backOrNextArrow.appendChild(arrow);\n      this.startMain.appendChild(backOrNextArrow);\n    }\n  }, {\n    key: \"handleFirstPageDisplaying\",\n    value: function handleFirstPageDisplaying() {\n      this.displayFirstPageElements();\n      this.hideSecondPageElements();\n    }\n  }, {\n    key: \"handleSecondPageGeneration\",\n    value: function handleSecondPageGeneration() {\n      this.hideFirstPageElements();\n      this.displaySecondPageElements();\n    }\n\n    // sets display style of all 'first start page' elements to FLEX\n  }, {\n    key: \"displayFirstPageElements\",\n    value: function displayFirstPageElements() {\n      var playerOrBotContainer = document.getElementById('player-or-bot-container');\n      var next = document.getElementById('next');\n      playerOrBotContainer.style.display = 'flex';\n      next.style.display = 'flex';\n    }\n\n    // sets display style of all 'second start page' elements to FLEX\n  }, {\n    key: \"displaySecondPageElements\",\n    value: function displaySecondPageElements() {\n      var secondPage = document.querySelector('h1');\n      var back = document.getElementById('back');\n      secondPage.style.display = 'flex';\n      back.style.display = 'flex';\n    }\n\n    // sets display style of all 'first start page' elements to NONE\n  }, {\n    key: \"hideFirstPageElements\",\n    value: function hideFirstPageElements() {\n      var playerOrBotContainer = document.getElementById('player-or-bot-container');\n      var next = document.getElementById('next');\n      playerOrBotContainer.style.display = 'none';\n      next.style.display = 'none';\n    }\n\n    // sets display style of all 'second start page' elements to NONE\n  }, {\n    key: \"hideSecondPageElements\",\n    value: function hideSecondPageElements() {\n      var secondPage = document.querySelector('h1');\n      var back = document.getElementById('back');\n      secondPage.style.display = 'none';\n      back.style.display = 'none';\n    }\n  }]);\n}();\nfunction _createPlayerOption(player1, player2) {\n  var playerOption = document.createElement('div');\n  var playerText1 = document.createTextNode(player1);\n  var playerText2 = document.createTextNode(player2);\n  var vsImg = document.createElement('img');\n  playerOption.setAttribute('id', \"\".concat(player1.toLowerCase(), \"-vs-\").concat(player2.toLowerCase()));\n  vsImg.src = _assets_sword_png__WEBPACK_IMPORTED_MODULE_1__;\n  playerOption.appendChild(playerText1);\n  playerOption.appendChild(vsImg);\n  playerOption.appendChild(playerText2);\n  return playerOption;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartScreen);\n\n//# sourceURL=webpack://battleship/./src/appearance/startScreen.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _appearance_startScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appearance/startScreen */ \"./src/appearance/startScreen.js\");\n\n\nnew _appearance_startScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack://battleship/./src/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@100..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    color: aliceblue;\r\n    font-family: 'Big Shoulders Stencil Text', 'Times New Roman', Times, serif;\r\n}\r\n\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: #000d28;\r\n    height: 100vh;\r\n    box-sizing: border-box;\r\n\r\n    /* disable text selection */\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\n/* STYLES OF START SCREEN */\r\n#start-screen-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#start-header {\r\n    display: flex;\r\n    font-size: clamp(44px, 7vw, 64px);\r\n    font-weight: 900;\r\n    letter-spacing: 2px;\r\n    align-items: center;\r\n    margin-top: 8vh;\r\n}\r\n#start-header img {\r\n    width: clamp(70px, 9vw, 95px);\r\n}\r\n\r\n#player-or-bot-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n    justify-content: center;\r\n    margin: 40px 0;\r\n}\r\n\r\n.active-player-vs-bot {\r\n    border: 3px solid rgb(0, 170, 255);\r\n    border-radius: 10px;\r\n    background-color: rgb(190, 225, 255);\r\n    box-shadow:  0px 5px rgb(0, 170, 255);\r\n    color: rgb(42, 42, 42);\r\n}\r\n\r\n#player-vs-player, #player-vs-bot {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: 700;\r\n    font-size: clamp(34px, 6vw, 50px);\r\n    cursor: pointer;\r\n    margin: 30px 0;\r\n    padding: 20px 30px;\r\n}\r\n#player-vs-player:hover, #player-vs-bot:hover {\r\n    border: 2px solid rgb(0, 170, 255);\r\n    border-radius: 10px;\r\n    background-color: rgb(190, 225, 255);\r\n    box-shadow:  0px 10px 10px rgb(0, 170, 255);\r\n    color: rgb(42, 42, 42);\r\n}\r\n#player-vs-player:active, #player-vs-bot:active {\r\n    transform: scale(0.97);\r\n    border: 3px solid rgb(0, 135, 202);\r\n    border-radius: 10px;\r\n    background-color: rgb(136, 161, 184);\r\n    box-shadow:  0px 5px rgb(0, 142, 213);\r\n    color: rgb(31, 31, 31);\r\n}\r\n\r\n#player-vs-bot {\r\n    padding-right: 75px;\r\n}\r\n\r\n#player-vs-player img, #player-vs-bot img {\r\n    padding: 0 25px;\r\n    width: clamp(50px, 7vw, 65px);\r\n}\r\n\r\n#or {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    font-size: clamp(24px, 4vw, 30px);\r\n}\r\n\r\n#back-next-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 15px;\r\n    padding: 0px 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\n#back {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0px 10px;\r\n    background-color: aliceblue;\r\n    border: 2px solid aliceblue;\r\n    border-radius: 10px;\r\n}\r\n#back:hover {\r\n    transform: scale(1.07);\r\n    box-shadow: 0px 0px 10px aliceblue;\r\n}\r\n#back:active {\r\n    transform: scale(1);\r\n    box-shadow: 0px 0px 10px rgb(185, 191, 197);\r\n    background-color: rgb(185, 191, 197);\r\n    border: 2px solid rgb(185, 191, 197);\r\n}\r\n#back img {\r\n    width: clamp(70px, 9vw, 80px);\r\n}\r\n\r\n#next {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0px 10px;\r\n    background-color: aliceblue;\r\n    border: 2px solid aliceblue;\r\n    border-radius: 10px;\r\n}\r\n#next:hover {\r\n    transform: scale(1.07);\r\n    box-shadow: 0px 0px 10px aliceblue;\r\n}\r\n#next:active {\r\n    transform: scale(1);\r\n    box-shadow: 0px 0px 10px rgb(185, 191, 197);\r\n    background-color: rgb(185, 191, 197);\r\n    border: 2px solid rgb(185, 191, 197);\r\n}\r\n#next img {\r\n    width: clamp(70px, 9vw, 80px);\r\n}\r\n/* STYLES OF START SCREEN */\r\n\r\n\r\n@media screen and (max-width: 801px){\r\n    #player-vs-player, #player-vs-bot {\r\n        font-size: clamp(32px, 6vw, 40px);\r\n    }\r\n    \r\n    #player-vs-bot {\r\n        padding-right: 55px;\r\n    }\r\n    \r\n    #or {\r\n        font-size: clamp(20px, 4vw, 26px);\r\n    }\r\n\r\n    #start-header img {\r\n        width: clamp(65px, 9vw, 80px);\r\n    }\r\n\r\n    #player-vs-player img, #player-vs-bot img {\r\n        width: clamp(50px, 7vw, 50px);\r\n    }\r\n\r\n    #next img {\r\n        width: clamp(60px, 9vw, 70px);\r\n    }\r\n\r\n    #back img {\r\n        width: clamp(60px, 9vw, 70px);\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/cruise.png":
/*!*******************************!*\
  !*** ./src/assets/cruise.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cruise.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/cruise.png?");

/***/ }),

/***/ "./src/assets/left-arrow.png":
/*!***********************************!*\
  !*** ./src/assets/left-arrow.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"left-arrow.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/left-arrow.png?");

/***/ }),

/***/ "./src/assets/right-arrow.png":
/*!************************************!*\
  !*** ./src/assets/right-arrow.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"right-arrow.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/right-arrow.png?");

/***/ }),

/***/ "./src/assets/sword.png":
/*!******************************!*\
  !*** ./src/assets/sword.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"sword.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/sword.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;