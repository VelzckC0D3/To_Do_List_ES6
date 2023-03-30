/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.listCont {\r\n  background-color: white;\r\n  width: 50%;\r\n  box-shadow: -8px 10px 26px -8px rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n#listTitle {\r\n  padding: 0 1rem;\r\n  margin: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  -webkit-text-stroke: 0.3px;\r\n  color: rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n.addCont {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-right: 0.2rem;\r\n}\r\n\r\n#addIcon {\r\n  color: rgba(0, 0, 0, 0.3);\r\n  transform:;\r\n  transition: 300ms all ease-in-out;\r\n}\r\n\r\n.addIconEnter {\r\n  transform: scale(1.4) rotate(180deg)!important;\r\n  color: rgb(7, 205, 7) !important;\r\n}\r\n\r\n.addIconError {\r\n/*   transform: scale(0.7) !important; */\r\n  color: rgb(255, 0, 0) !important;\r\n}\r\n\r\n#addIcon:hover {\r\n  transform: scale(1.4);\r\n  color: rgb(7, 205, 7);\r\n}\r\n\r\n#addIcon:active {\r\n  transform: scale(1);\r\n  transition: 50ms all ease-in-out;\r\n  color: rgb(0, 160, 0);\r\n}\r\n\r\n.addToInput {\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  padding: 0 1rem;\r\n  font-style: italic;\r\n  display: flex;\r\n}\r\n\r\n.addToInput:active,\r\n.addToInput:focus-visible {\r\n  outline: none;\r\n}\r\n\r\n.toDoList {\r\n  list-style: none;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#toDo {\r\n  width: 100%;\r\n  display: flex;\r\n  height: 100%;\r\n}\r\n\r\n.listItem {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.listItemJs {\r\n  background-color: red;\r\n}\r\n\r\n.listItem:hover {\r\n  background-color: rgba(255, 232, 128, 0.25);\r\n}\r\n\r\n.listItem:hover  .removeIcon {\r\n  color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.listItem:hover .removeIcon:hover {\r\n  color: rgb(142, 0, 0);\r\n}\r\n\r\n.listItem:hover .removeIcon:active {\r\n  color: red;\r\n  transition: 50ms all ease-in-out;\r\n}\r\n\r\n.toDoTask {\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 1rem;\r\n  background-color: transparent;\r\n  transition: 300ms all ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.checkBox {\r\n  cursor: pointer;\r\n}\r\n\r\n.checked {\r\n  background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.taskChecked {\r\n  color: rgba(0, 0, 0, 0.25);\r\n  text-decoration: line-through;\r\n}\r\n\r\n.clear {\r\n  height: 3rem;\r\n  width: 100%;\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: 200ms all ease-in-out;\r\n  font-size: 1rem;\r\n  -webkit-text-stroke: 0.3px;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.clear:hover {\r\n  background-color: rgb(168, 160, 255);\r\n}\r\n\r\n.clear:active {\r\n  background-color: rgb(113, 100, 255);\r\n  transition: 30ms all ease-in-out;\r\n}\r\n\r\n.icon {\r\n  cursor: pointer;\r\n  padding: 1rem;\r\n}\r\n\r\n.removeIcon {\r\n  cursor: pointer;\r\n  padding: 1rem 0.5rem;\r\n  transition: 300ms all ease-in-out;\r\n  color: rgba(0, 0, 0, 0.0);\r\n}\r\n\r\n.showRemove {\r\n  display: block;\r\n}\r\n\r\n.moveIcon {\r\n  cursor: grab;\r\n  padding: 1rem 0.5rem;\r\n  transition: 300ms all ease-in-out;\r\n  color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.moveIcon:hover {\r\n  color: rgb(0, 110, 255);\r\n}\r\n\r\n.moveIcon:active {\r\n  transform: scale(1.3);\r\n}\r\n\r\n.listElement {\r\n  height: 3rem;\r\n  border-bottom: 2px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0 0 10% 10%;\r\n  transition: 300ms all ease-in-out;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qCAAqC;EACrC,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,UAAU;EACV,mDAAmD;AACrD;;AAEA;EACE,eAAe;EACf,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,8CAA8C;EAC9C,gCAAgC;AAClC;;AAEA;AACA,wCAAwC;EACtC,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,gCAAgC;EAChC,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,aAAa;AACf;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,UAAU;EACV,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,eAAe;EACf,6BAA6B;EAC7B,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iCAAiC;EACjC,eAAe;EACf,0BAA0B;EAC1B,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,2CAA2C;EAC3C,0BAA0B;EAC1B,iCAAiC;AACnC","sourcesContent":["* {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.listCont {\r\n  background-color: white;\r\n  width: 50%;\r\n  box-shadow: -8px 10px 26px -8px rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n#listTitle {\r\n  padding: 0 1rem;\r\n  margin: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  -webkit-text-stroke: 0.3px;\r\n  color: rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n.addCont {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-right: 0.2rem;\r\n}\r\n\r\n#addIcon {\r\n  color: rgba(0, 0, 0, 0.3);\r\n  transform:;\r\n  transition: 300ms all ease-in-out;\r\n}\r\n\r\n.addIconEnter {\r\n  transform: scale(1.4) rotate(180deg)!important;\r\n  color: rgb(7, 205, 7) !important;\r\n}\r\n\r\n.addIconError {\r\n/*   transform: scale(0.7) !important; */\r\n  color: rgb(255, 0, 0) !important;\r\n}\r\n\r\n#addIcon:hover {\r\n  transform: scale(1.4);\r\n  color: rgb(7, 205, 7);\r\n}\r\n\r\n#addIcon:active {\r\n  transform: scale(1);\r\n  transition: 50ms all ease-in-out;\r\n  color: rgb(0, 160, 0);\r\n}\r\n\r\n.addToInput {\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  padding: 0 1rem;\r\n  font-style: italic;\r\n  display: flex;\r\n}\r\n\r\n.addToInput:active,\r\n.addToInput:focus-visible {\r\n  outline: none;\r\n}\r\n\r\n.toDoList {\r\n  list-style: none;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#toDo {\r\n  width: 100%;\r\n  display: flex;\r\n  height: 100%;\r\n}\r\n\r\n.listItem {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.listItemJs {\r\n  background-color: red;\r\n}\r\n\r\n.listItem:hover {\r\n  background-color: rgba(255, 232, 128, 0.25);\r\n}\r\n\r\n.listItem:hover  .removeIcon {\r\n  color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.listItem:hover .removeIcon:hover {\r\n  color: rgb(142, 0, 0);\r\n}\r\n\r\n.listItem:hover .removeIcon:active {\r\n  color: red;\r\n  transition: 50ms all ease-in-out;\r\n}\r\n\r\n.toDoTask {\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 1rem;\r\n  background-color: transparent;\r\n  transition: 300ms all ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.checkBox {\r\n  cursor: pointer;\r\n}\r\n\r\n.checked {\r\n  background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.taskChecked {\r\n  color: rgba(0, 0, 0, 0.25);\r\n  text-decoration: line-through;\r\n}\r\n\r\n.clear {\r\n  height: 3rem;\r\n  width: 100%;\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: 200ms all ease-in-out;\r\n  font-size: 1rem;\r\n  -webkit-text-stroke: 0.3px;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.clear:hover {\r\n  background-color: rgb(168, 160, 255);\r\n}\r\n\r\n.clear:active {\r\n  background-color: rgb(113, 100, 255);\r\n  transition: 30ms all ease-in-out;\r\n}\r\n\r\n.icon {\r\n  cursor: pointer;\r\n  padding: 1rem;\r\n}\r\n\r\n.removeIcon {\r\n  cursor: pointer;\r\n  padding: 1rem 0.5rem;\r\n  transition: 300ms all ease-in-out;\r\n  color: rgba(0, 0, 0, 0.0);\r\n}\r\n\r\n.showRemove {\r\n  display: block;\r\n}\r\n\r\n.moveIcon {\r\n  cursor: grab;\r\n  padding: 1rem 0.5rem;\r\n  transition: 300ms all ease-in-out;\r\n  color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.moveIcon:hover {\r\n  color: rgb(0, 110, 255);\r\n}\r\n\r\n.moveIcon:active {\r\n  transform: scale(1.3);\r\n}\r\n\r\n.listElement {\r\n  height: 3rem;\r\n  border-bottom: 2px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0 0 10% 10%;\r\n  transition: 300ms all ease-in-out;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class List {
  // Establish how the task are going to be created inside the list
  constructor() {
    this.list = [];
    this.length = 0;
    const storedList = localStorage.getItem("list");
    if (storedList) {
      const parsedList = JSON.parse(storedList);
      this.length = parsedList[parsedList.length - 1].index;
    }
  }

  // Add a new task to the List constructor
  addTask() {
    const addTask = document.querySelector("#toDo");
    const addInput = document.querySelector(".addToInput");
    const addTaskIcon = document.querySelector("#addIcon");

    // Saved when pressed "Enter" Key
    addTask.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const inputValue = addInput.value;
        if (inputValue !== "") {
          const description = inputValue;
          const completed = false;
          const index =
            this.list.length > 0
              ? this.list[this.list.length - 1].index + 1
              : 1;
          console.log(this.list);
          this.saveTask(description, completed, index);
          e.preventDefault();
          this.showList();

          // Animate the icon when clicking
          const addTaskIcon = document.querySelector("#addIcon");
          addTaskIcon.classList.add("addIconEnter");
          setTimeout(() => {
            addTaskIcon.classList.remove("addIconEnter");
          }, 500);

          addInput.value = "";
        } else {
          e.preventDefault();
          const addTaskIcon = document.querySelector("#addIcon");
          addTaskIcon.classList.add("addIconError");
          setTimeout(() => {
            addTaskIcon.classList.remove("addIconError");
          }, 500);
        }
      }
    });

    // Saved wen pressed "+" Icon
    addTaskIcon.addEventListener("click", () => {
      const inputValue = addInput.value;
      if (inputValue !== "") {
        const description = inputValue;
        const completed = false;
        const index =
          this.list.length > 0 ? this.list[this.list.length - 1].index + 1 : 1;
        console.log(this.list);
        this.saveTask(description, completed, index);
        this.showList();
        addInput.value = "";
      }
    });
  }

  // Remove a Task after clicking the remove icon
  removeTask() {
    const listGroup = document.querySelector(".toDoList");
    listGroup.addEventListener("click", (event) => {
      const removeIcon = event.target.closest(".removeIcon");
      if (removeIcon) {
        const listItem = removeIcon.closest(".listItem");
        const indexToRemove = parseInt(listItem.id);
        const filteredList = this.list.filter(
          (task) => task.index !== indexToRemove
        );
        this.list = filteredList;

        // Check if list is empty and delete it
        if (this.list.length === 0) {
          localStorage.removeItem("list");
        } else {
          // Update the index of the remaining tasks
          this.list.forEach((task, i) => {
            task.index = i + 1;
          });
          // Update the local storage
          localStorage.setItem("list", JSON.stringify(this.list));
        }
        // Update the list
        this.showList();
      }
    });
  }

  // Edit Task
  editTask() {
    const listGroup = document.querySelector(".toDoList");
    listGroup.addEventListener("keydown", (event) => {
      const listItem = document.querySelectorAll('listItem');
      listItem.forEach((list, i) => {
        index = i +1;
        list.addEventListener('keydown', (e) => {
          if (e.key === "Enter") {
            console.log('testing the shit #: ' + index)
          }
        })
      })

      const editInput = event.target.closest(".toDoTask");
      if (editInput && event.key === "Enter") {
        const listItem = editInput.closest(".listItem");
        const indexToEdit = parseInt(listItem.id);
        const updatedDescription = editInput.value;
        const updatedTask = this.list.find(
          (task) => task.index === indexToEdit
        );
        updatedTask.description = updatedDescription;
        localStorage.setItem("list", JSON.stringify(this.list));
        this.showList();
      }
    });
  }

  // Save the task on the local storage
  saveTask(description, completed, index) {
    const newTask = { description, completed, index };
    this.list.push(newTask);
    if (!localStorage.getItem("list")) {
      localStorage.setItem("list", JSON.stringify(this.list));
    } else {
      const savedList = JSON.parse(localStorage.getItem("list"));
      savedList.push(newTask);
      localStorage.setItem("list", JSON.stringify(savedList));
    }
  }

  // Save the List of task on the Local storage
  loadTask() {
    if (localStorage.getItem("list")) {
      const savedList = JSON.parse(localStorage.getItem("list"));
      savedList.forEach((task) => {
        this.list.push({
          description: task.description,
          completed: task.completed,
          index: task.index,
        });
      });
    }
  }

  // Show List
  showList() {
    // Add the list to the HTML
    const listGroup = document.querySelector(".toDoList");
    listGroup.innerHTML = "";
    this.list.forEach((task) => {
      const listTask = document.createElement("li");
      listTask.classList = "listItem listElement";
      listTask.id = `${task.index}`;
      listTask.innerHTML = `
        <input type="checkbox" class="checkBox" ${
          task.completed ? "checked" : ""
        }>
        <input type="text" class="toDoTask" value="${task.description}">
        <i class="fa-regular fa-trash-can removeIcon"></i>
        <i class="fa-solid fa-ellipsis-vertical moveIcon"></i>
      `;

      // Checkbox function to change the status of "completed"
      const checkbox = listTask.querySelector(".checkBox");
      const actualTask = listTask.querySelector(".toDoTask");
      if (checkbox.checked) {
        listTask.classList.add("checked");
        actualTask.classList.add("taskChecked");
      }
      checkbox.addEventListener("click", () => {
        task.completed = checkbox.checked;
        if (checkbox.checked) {
          listTask.classList.add("checked");
          actualTask.classList.add("taskChecked");
          console.log(task);
        } else {
          listTask.classList.remove("checked");
          actualTask.classList.remove("taskChecked");
          console.log(task);
        }
        localStorage.setItem("list", JSON.stringify(this.list));
      });

      listGroup.appendChild(listTask);
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/list.js */ "./src/modules/list.js");



const list = new _modules_list_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
list.loadTask();
list.addTask();
list.removeTask();
list.editTask();
list.showList();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxREFBcUQsaUJBQWlCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ3ZNcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZ0I7O0FBRXJDLGlCQUFpQix3REFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RDb250IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJveC1zaGFkb3c6IC04cHggMTBweCAyNnB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXHJcXG59XFxyXFxuXFxyXFxuI2xpc3RUaXRsZSB7XFxyXFxuICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuM3B4O1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxufVxcclxcblxcclxcbi5hZGRDb250IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZEljb24ge1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIHRyYW5zZm9ybTo7XFxyXFxuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5hZGRJY29uRW50ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpIHJvdGF0ZSgxODBkZWcpIWltcG9ydGFudDtcXHJcXG4gIGNvbG9yOiByZ2IoNywgMjA1LCA3KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkSWNvbkVycm9yIHtcXHJcXG4vKiAgIHRyYW5zZm9ybTogc2NhbGUoMC43KSAhaW1wb3J0YW50OyAqL1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNhZGRJY29uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXHJcXG4gIGNvbG9yOiByZ2IoNywgMjA1LCA3KTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZEljb246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICB0cmFuc2l0aW9uOiA1MG1zIGFsbCBlYXNlLWluLW91dDtcXHJcXG4gIGNvbG9yOiByZ2IoMCwgMTYwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvSW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvSW5wdXQ6YWN0aXZlLFxcclxcbi5hZGRUb0lucHV0OmZvY3VzLXZpc2libGUge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvRG9MaXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RvRG8ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdEl0ZW0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdEl0ZW1KcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5saXN0SXRlbTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjMyLCAxMjgsIDAuMjUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdEl0ZW06aG92ZXIgIC5yZW1vdmVJY29uIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5saXN0SXRlbTpob3ZlciAucmVtb3ZlSWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDE0MiwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5saXN0SXRlbTpob3ZlciAucmVtb3ZlSWNvbjphY3RpdmUge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIHRyYW5zaXRpb246IDUwbXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9Eb1Rhc2sge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jaGVja0JveCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ2hlY2tlZCB7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXIge1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAyMDBtcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDE2MCwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEzLCAxMDAsIDI1NSk7XFxyXFxuICB0cmFuc2l0aW9uOiAzMG1zIGFsbCBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZUljb24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjApO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd1JlbW92ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmVJY29uIHtcXHJcXG4gIGN1cnNvcjogZ3JhYjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMzAwbXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmVJY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMCwgMTEwLCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92ZUljb246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RFbGVtZW50IHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTAlIDEwJTtcXHJcXG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbCBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFDQUFxQztFQUNyQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLGdDQUFnQztBQUNsQzs7QUFFQTtBQUNBLHdDQUF3QztFQUN0QyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGlDQUFpQztFQUNqQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJDQUEyQztFQUMzQywwQkFBMEI7RUFDMUIsaUNBQWlDO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0Q29udCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBib3gtc2hhZG93OiAtOHB4IDEwcHggMjZweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxufVxcclxcblxcclxcbiNsaXN0VGl0bGUge1xcclxcbiAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjNweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQ29udCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGRJY29uIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICB0cmFuc2Zvcm06O1xcclxcbiAgdHJhbnNpdGlvbjogMzAwbXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkSWNvbkVudGVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KSByb3RhdGUoMTgwZGVnKSFpbXBvcnRhbnQ7XFxyXFxuICBjb2xvcjogcmdiKDcsIDIwNSwgNykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEljb25FcnJvciB7XFxyXFxuLyogICB0cmFuc2Zvcm06IHNjYWxlKDAuNykgIWltcG9ydGFudDsgKi9cXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkSWNvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxyXFxuICBjb2xvcjogcmdiKDcsIDIwNSwgNyk7XFxyXFxufVxcclxcblxcclxcbiNhZGRJY29uOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgdHJhbnNpdGlvbjogNTBtcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuICBjb2xvcjogcmdiKDAsIDE2MCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5hZGRUb0lucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5hZGRUb0lucHV0OmFjdGl2ZSxcXHJcXG4uYWRkVG9JbnB1dDpmb2N1cy12aXNpYmxlIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b0RvTGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0b0RvIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RJdGVtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RJdGVtSnMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdEl0ZW06aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzMiwgMTI4LCAwLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RJdGVtOmhvdmVyICAucmVtb3ZlSWNvbiB7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdEl0ZW06aG92ZXIgLnJlbW92ZUljb246aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYigxNDIsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdEl0ZW06aG92ZXIgLnJlbW92ZUljb246YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0cmFuc2l0aW9uOiA1MG1zIGFsbCBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvRG9UYXNrIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdHJhbnNpdGlvbjogMzAwbXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tCb3gge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NoZWNrZWQge1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyIHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMjAwbXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC4zcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5jbGVhcjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAxNjAsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5jbGVhcjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMywgMTAwLCAyNTUpO1xcclxcbiAgdHJhbnNpdGlvbjogMzBtcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmVJY29uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMzAwbXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3dSZW1vdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5tb3ZlSWNvbiB7XFxyXFxuICBjdXJzb3I6IGdyYWI7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbCBlYXNlLWluLW91dDtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5tb3ZlSWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDAsIDExMCwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmVJY29uOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxyXFxufVxcclxcblxcclxcbi5saXN0RWxlbWVudCB7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwJSAxMCU7XFxyXFxuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBMaXN0IHtcbiAgLy8gRXN0YWJsaXNoIGhvdyB0aGUgdGFzayBhcmUgZ29pbmcgdG8gYmUgY3JlYXRlZCBpbnNpZGUgdGhlIGxpc3RcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ID0gW107XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIGNvbnN0IHN0b3JlZExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RcIik7XG4gICAgaWYgKHN0b3JlZExpc3QpIHtcbiAgICAgIGNvbnN0IHBhcnNlZExpc3QgPSBKU09OLnBhcnNlKHN0b3JlZExpc3QpO1xuICAgICAgdGhpcy5sZW5ndGggPSBwYXJzZWRMaXN0W3BhcnNlZExpc3QubGVuZ3RoIC0gMV0uaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGEgbmV3IHRhc2sgdG8gdGhlIExpc3QgY29uc3RydWN0b3JcbiAgYWRkVGFzaygpIHtcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvXCIpO1xuICAgIGNvbnN0IGFkZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUb0lucHV0XCIpO1xuICAgIGNvbnN0IGFkZFRhc2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRJY29uXCIpO1xuXG4gICAgLy8gU2F2ZWQgd2hlbiBwcmVzc2VkIFwiRW50ZXJcIiBLZXlcbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gYWRkSW5wdXQudmFsdWU7XG4gICAgICAgIGlmIChpbnB1dFZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dFZhbHVlO1xuICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgIGNvbnN0IGluZGV4ID1cbiAgICAgICAgICAgIHRoaXMubGlzdC5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gdGhpcy5saXN0W3RoaXMubGlzdC5sZW5ndGggLSAxXS5pbmRleCArIDFcbiAgICAgICAgICAgICAgOiAxO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdCk7XG4gICAgICAgICAgdGhpcy5zYXZlVGFzayhkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2hvd0xpc3QoKTtcblxuICAgICAgICAgIC8vIEFuaW1hdGUgdGhlIGljb24gd2hlbiBjbGlja2luZ1xuICAgICAgICAgIGNvbnN0IGFkZFRhc2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRJY29uXCIpO1xuICAgICAgICAgIGFkZFRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJhZGRJY29uRW50ZXJcIik7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhZGRUYXNrSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkSWNvbkVudGVyXCIpO1xuICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICBhZGRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IGFkZFRhc2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRJY29uXCIpO1xuICAgICAgICAgIGFkZFRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJhZGRJY29uRXJyb3JcIik7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhZGRUYXNrSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkSWNvbkVycm9yXCIpO1xuICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFNhdmVkIHdlbiBwcmVzc2VkIFwiK1wiIEljb25cbiAgICBhZGRUYXNrSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGFkZElucHV0LnZhbHVlO1xuICAgICAgaWYgKGlucHV0VmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dFZhbHVlO1xuICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgaW5kZXggPVxuICAgICAgICAgIHRoaXMubGlzdC5sZW5ndGggPiAwID8gdGhpcy5saXN0W3RoaXMubGlzdC5sZW5ndGggLSAxXS5pbmRleCArIDEgOiAxO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3QpO1xuICAgICAgICB0aGlzLnNhdmVUYXNrKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KTtcbiAgICAgICAgdGhpcy5zaG93TGlzdCgpO1xuICAgICAgICBhZGRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBSZW1vdmUgYSBUYXNrIGFmdGVyIGNsaWNraW5nIHRoZSByZW1vdmUgaWNvblxuICByZW1vdmVUYXNrKCkge1xuICAgIGNvbnN0IGxpc3RHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9Eb0xpc3RcIik7XG4gICAgbGlzdEdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlbW92ZUljb24gPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5yZW1vdmVJY29uXCIpO1xuICAgICAgaWYgKHJlbW92ZUljb24pIHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSByZW1vdmVJY29uLmNsb3Nlc3QoXCIubGlzdEl0ZW1cIik7XG4gICAgICAgIGNvbnN0IGluZGV4VG9SZW1vdmUgPSBwYXJzZUludChsaXN0SXRlbS5pZCk7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkTGlzdCA9IHRoaXMubGlzdC5maWx0ZXIoXG4gICAgICAgICAgKHRhc2spID0+IHRhc2suaW5kZXggIT09IGluZGV4VG9SZW1vdmVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5saXN0ID0gZmlsdGVyZWRMaXN0O1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGxpc3QgaXMgZW1wdHkgYW5kIGRlbGV0ZSBpdFxuICAgICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibGlzdFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIGluZGV4IG9mIHRoZSByZW1haW5pbmcgdGFza3NcbiAgICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xuICAgICAgICAgICAgdGFzay5pbmRleCA9IGkgKyAxO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxpc3QpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGUgdGhlIGxpc3RcbiAgICAgICAgdGhpcy5zaG93TGlzdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gRWRpdCBUYXNrXG4gIGVkaXRUYXNrKCkge1xuICAgIGNvbnN0IGxpc3RHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9Eb0xpc3RcIik7XG4gICAgbGlzdEdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaXN0SXRlbScpO1xuICAgICAgbGlzdEl0ZW0uZm9yRWFjaCgobGlzdCwgaSkgPT4ge1xuICAgICAgICBpbmRleCA9IGkgKzE7XG4gICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0aW5nIHRoZSBzaGl0ICM6ICcgKyBpbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBlZGl0SW5wdXQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi50b0RvVGFza1wiKTtcbiAgICAgIGlmIChlZGl0SW5wdXQgJiYgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBlZGl0SW5wdXQuY2xvc2VzdChcIi5saXN0SXRlbVwiKTtcbiAgICAgICAgY29uc3QgaW5kZXhUb0VkaXQgPSBwYXJzZUludChsaXN0SXRlbS5pZCk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWREZXNjcmlwdGlvbiA9IGVkaXRJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2sgPSB0aGlzLmxpc3QuZmluZChcbiAgICAgICAgICAodGFzaykgPT4gdGFzay5pbmRleCA9PT0gaW5kZXhUb0VkaXRcbiAgICAgICAgKTtcbiAgICAgICAgdXBkYXRlZFRhc2suZGVzY3JpcHRpb24gPSB1cGRhdGVkRGVzY3JpcHRpb247XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxpc3QpKTtcbiAgICAgICAgdGhpcy5zaG93TGlzdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gU2F2ZSB0aGUgdGFzayBvbiB0aGUgbG9jYWwgc3RvcmFnZVxuICBzYXZlVGFzayhkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB7IGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4IH07XG4gICAgdGhpcy5saXN0LnB1c2gobmV3VGFzayk7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RcIikpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxpc3QpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2F2ZWRMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RcIikpO1xuICAgICAgc2F2ZWRMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RcIiwgSlNPTi5zdHJpbmdpZnkoc2F2ZWRMaXN0KSk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2F2ZSB0aGUgTGlzdCBvZiB0YXNrIG9uIHRoZSBMb2NhbCBzdG9yYWdlXG4gIGxvYWRUYXNrKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RcIikpIHtcbiAgICAgIGNvbnN0IHNhdmVkTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0XCIpKTtcbiAgICAgIHNhdmVkTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIHRoaXMubGlzdC5wdXNoKHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgICBjb21wbGV0ZWQ6IHRhc2suY29tcGxldGVkLFxuICAgICAgICAgIGluZGV4OiB0YXNrLmluZGV4LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNob3cgTGlzdFxuICBzaG93TGlzdCgpIHtcbiAgICAvLyBBZGQgdGhlIGxpc3QgdG8gdGhlIEhUTUxcbiAgICBjb25zdCBsaXN0R3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvRG9MaXN0XCIpO1xuICAgIGxpc3RHcm91cC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRoaXMubGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBsaXN0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGxpc3RUYXNrLmNsYXNzTGlzdCA9IFwibGlzdEl0ZW0gbGlzdEVsZW1lbnRcIjtcbiAgICAgIGxpc3RUYXNrLmlkID0gYCR7dGFzay5pbmRleH1gO1xuICAgICAgbGlzdFRhc2suaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja0JveFwiICR7XG4gICAgICAgICAgdGFzay5jb21wbGV0ZWQgPyBcImNoZWNrZWRcIiA6IFwiXCJcbiAgICAgICAgfT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0b0RvVGFza1wiIHZhbHVlPVwiJHt0YXNrLmRlc2NyaXB0aW9ufVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtdHJhc2gtY2FuIHJlbW92ZUljb25cIj48L2k+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWwgbW92ZUljb25cIj48L2k+XG4gICAgICBgO1xuXG4gICAgICAvLyBDaGVja2JveCBmdW5jdGlvbiB0byBjaGFuZ2UgdGhlIHN0YXR1cyBvZiBcImNvbXBsZXRlZFwiXG4gICAgICBjb25zdCBjaGVja2JveCA9IGxpc3RUYXNrLnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tCb3hcIik7XG4gICAgICBjb25zdCBhY3R1YWxUYXNrID0gbGlzdFRhc2sucXVlcnlTZWxlY3RvcihcIi50b0RvVGFza1wiKTtcbiAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgIGxpc3RUYXNrLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICBhY3R1YWxUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ2hlY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2suY29tcGxldGVkID0gY2hlY2tib3guY2hlY2tlZDtcbiAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICBsaXN0VGFzay5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICBhY3R1YWxUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ2hlY2tlZFwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXN0VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICBhY3R1YWxUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrQ2hlY2tlZFwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5saXN0KSk7XG4gICAgICB9KTtcblxuICAgICAgbGlzdEdyb3VwLmFwcGVuZENoaWxkKGxpc3RUYXNrKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL21vZHVsZXMvbGlzdC5qc1wiO1xuXG5jb25zdCBsaXN0ID0gbmV3IExpc3QoKTtcbmxpc3QubG9hZFRhc2soKTtcbmxpc3QuYWRkVGFzaygpO1xubGlzdC5yZW1vdmVUYXNrKCk7XG5saXN0LmVkaXRUYXNrKCk7XG5saXN0LnNob3dMaXN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9