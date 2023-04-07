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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: linear-gradient(360deg, hsla(197, 14%, 57%, 1) 0%, hsla(192, 17%, 94%, 1) 100%);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height: 98vh;\r\n  overflow: hidden;\r\n}\r\n\r\n#title {\r\n  margin-top: 3rem;\r\n}\r\n\r\n.listCont {\r\n  background-color: white;\r\n  width: 50%;\r\n  box-shadow: -8px 10px 26px -8px rgba(0, 0, 0, 0.75);\r\n  border-radius: 10px;\r\n  border: 2px solid rgb(0, 0, 0);\r\n}\r\n\r\n#listTitle {\r\n  padding: 0 1rem;\r\n  margin: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  -webkit-text-stroke: 0.3px;\r\n  color: rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n.addCont {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-right: 0.2rem;\r\n}\r\n\r\n#addIcon {\r\n  color: rgba(0, 0, 0, 0.3);\r\n  transition: 300ms all ease-in-out;\r\n}\r\n\r\n.addIconEnter {\r\n  transform: scale(1.3) !important;\r\n  color: rgb(7, 205, 7) !important;\r\n}\r\n\r\n.addIconError {\r\n  transform: scale(1.3) rotate(45deg) !important;\r\n  color: rgb(0, 0, 0, 0.5) !important;\r\n}\r\n\r\n#addIcon:hover {\r\n  transform: scale(1.4);\r\n  color: rgb(7, 205, 7);\r\n}\r\n\r\n#addIcon:active {\r\n  transform: scale(1);\r\n  transition: 50ms all ease-in-out;\r\n  color: rgb(0, 160, 0);\r\n}\r\n\r\n.addToInput {\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  padding: 0 1rem;\r\n  font-style: italic;\r\n  display: flex;\r\n}\r\n\r\n.addToInput:active,\r\n.addToInput:focus-visible {\r\n  outline: none;\r\n}\r\n\r\n.toDoList {\r\n  list-style: none;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#toDo {\r\n  width: 100%;\r\n  display: flex;\r\n  height: 100%;\r\n}\r\n\r\n.listItem {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.listItemJs {\r\n  background-color: red;\r\n}\r\n\r\n.listItem:hover {\r\n  background-color: rgba(255, 232, 128, 0.25);\r\n}\r\n\r\n.toDoTask {\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 1rem;\r\n  background-color: transparent;\r\n  transition: 300ms all ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.checkBox {\r\n  cursor: pointer;\r\n}\r\n\r\n.checked {\r\n  background-color: rgba(0, 0, 0, 0.05) !important;\r\n}\r\n\r\n.taskChecked {\r\n  color: rgba(0, 0, 0, 0.25);\r\n  text-decoration: line-through;\r\n}\r\n\r\n.clear {\r\n  height: 3rem;\r\n  width: 100%;\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: 200ms all ease-in-out;\r\n  font-size: 1rem;\r\n  -webkit-text-stroke: 0.3px;\r\n  border-radius: 0 0 5px 5px;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n  color: white;\r\n}\r\n\r\n.clear:hover {\r\n  background-color: rgba(0, 0, 0, 0.753);\r\n}\r\n\r\n.clear:active {\r\n  background-color: rgba(0, 0, 0, 0.493);\r\n  transition: 30ms all ease-in-out;\r\n}\r\n\r\n.icon {\r\n  cursor: pointer;\r\n  padding: 1rem;\r\n}\r\n\r\n.removeIcon {\r\n  cursor: pointer;\r\n  padding: 1rem 0.5rem;\r\n  transition: 300ms all ease-in-out;\r\n  color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.listItem:hover .removeIcon {\r\n  color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.listItem:hover .removeIcon:hover {\r\n  color: red;\r\n}\r\n\r\n.listItem:hover .removeIcon:active {\r\n  color: rgb(142, 0, 0);\r\n  transition: 50ms all ease-in-out;\r\n}\r\n\r\n.showRemove {\r\n  display: block;\r\n}\r\n\r\n.moveIcon {\r\n  cursor: grab;\r\n  padding: 1rem 0.5rem;\r\n  transition: 300ms all ease-in-out;\r\n  color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.moveIcon:hover {\r\n  color: rgb(0, 110, 255);\r\n}\r\n\r\n.moveIcon:active {\r\n  transform: scale(1.3);\r\n}\r\n\r\n.listElement {\r\n  height: 3rem;\r\n  border-bottom: 2px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0 0 10% 10%;\r\n  transition: 300ms all ease-in-out;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qCAAqC;EACrC,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2FAA2F;EAC3F,4BAA4B;EAC5B,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,UAAU;EACV,mDAAmD;EACnD,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,iCAAiC;AACnC;;AAEA;EACE,gCAAgC;EAChC,gCAAgC;AAClC;;AAEA;EACE,8CAA8C;EAC9C,mCAAmC;AACrC;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,gCAAgC;EAChC,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,aAAa;AACf;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,UAAU;EACV,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,eAAe;EACf,6BAA6B;EAC7B,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gDAAgD;AAClD;;AAEA;EACE,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iCAAiC;EACjC,eAAe;EACf,0BAA0B;EAC1B,0BAA0B;EAC1B,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;EACtC,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,2CAA2C;EAC3C,0BAA0B;EAC1B,iCAAiC;AACnC","sourcesContent":["* {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: linear-gradient(360deg, hsla(197, 14%, 57%, 1) 0%, hsla(192, 17%, 94%, 1) 100%);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height: 98vh;\r\n  overflow: hidden;\r\n}\r\n\r\n#title {\r\n  margin-top: 3rem;\r\n}\r\n\r\n.listCont {\r\n  background-color: white;\r\n  width: 50%;\r\n  box-shadow: -8px 10px 26px -8px rgba(0, 0, 0, 0.75);\r\n  border-radius: 10px;\r\n  border: 2px solid rgb(0, 0, 0);\r\n}\r\n\r\n#listTitle {\r\n  padding: 0 1rem;\r\n  margin: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  -webkit-text-stroke: 0.3px;\r\n  color: rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n.addCont {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-right: 0.2rem;\r\n}\r\n\r\n#addIcon {\r\n  color: rgba(0, 0, 0, 0.3);\r\n  transition: 300ms all ease-in-out;\r\n}\r\n\r\n.addIconEnter {\r\n  transform: scale(1.3) !important;\r\n  color: rgb(7, 205, 7) !important;\r\n}\r\n\r\n.addIconError {\r\n  transform: scale(1.3) rotate(45deg) !important;\r\n  color: rgb(0, 0, 0, 0.5) !important;\r\n}\r\n\r\n#addIcon:hover {\r\n  transform: scale(1.4);\r\n  color: rgb(7, 205, 7);\r\n}\r\n\r\n#addIcon:active {\r\n  transform: scale(1);\r\n  transition: 50ms all ease-in-out;\r\n  color: rgb(0, 160, 0);\r\n}\r\n\r\n.addToInput {\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  padding: 0 1rem;\r\n  font-style: italic;\r\n  display: flex;\r\n}\r\n\r\n.addToInput:active,\r\n.addToInput:focus-visible {\r\n  outline: none;\r\n}\r\n\r\n.toDoList {\r\n  list-style: none;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#toDo {\r\n  width: 100%;\r\n  display: flex;\r\n  height: 100%;\r\n}\r\n\r\n.listItem {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.listItemJs {\r\n  background-color: red;\r\n}\r\n\r\n.listItem:hover {\r\n  background-color: rgba(255, 232, 128, 0.25);\r\n}\r\n\r\n.toDoTask {\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 1rem;\r\n  background-color: transparent;\r\n  transition: 300ms all ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.checkBox {\r\n  cursor: pointer;\r\n}\r\n\r\n.checked {\r\n  background-color: rgba(0, 0, 0, 0.05) !important;\r\n}\r\n\r\n.taskChecked {\r\n  color: rgba(0, 0, 0, 0.25);\r\n  text-decoration: line-through;\r\n}\r\n\r\n.clear {\r\n  height: 3rem;\r\n  width: 100%;\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: 200ms all ease-in-out;\r\n  font-size: 1rem;\r\n  -webkit-text-stroke: 0.3px;\r\n  border-radius: 0 0 5px 5px;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n  color: white;\r\n}\r\n\r\n.clear:hover {\r\n  background-color: rgba(0, 0, 0, 0.753);\r\n}\r\n\r\n.clear:active {\r\n  background-color: rgba(0, 0, 0, 0.493);\r\n  transition: 30ms all ease-in-out;\r\n}\r\n\r\n.icon {\r\n  cursor: pointer;\r\n  padding: 1rem;\r\n}\r\n\r\n.removeIcon {\r\n  cursor: pointer;\r\n  padding: 1rem 0.5rem;\r\n  transition: 300ms all ease-in-out;\r\n  color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.listItem:hover .removeIcon {\r\n  color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.listItem:hover .removeIcon:hover {\r\n  color: red;\r\n}\r\n\r\n.listItem:hover .removeIcon:active {\r\n  color: rgb(142, 0, 0);\r\n  transition: 50ms all ease-in-out;\r\n}\r\n\r\n.showRemove {\r\n  display: block;\r\n}\r\n\r\n.moveIcon {\r\n  cursor: grab;\r\n  padding: 1rem 0.5rem;\r\n  transition: 300ms all ease-in-out;\r\n  color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.moveIcon:hover {\r\n  color: rgb(0, 110, 255);\r\n}\r\n\r\n.moveIcon:active {\r\n  transform: scale(1.3);\r\n}\r\n\r\n.listElement {\r\n  height: 3rem;\r\n  border-bottom: 2px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0 0 10% 10%;\r\n  transition: 300ms all ease-in-out;\r\n}\r\n"],"sourceRoot":""}]);
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
    const storedList = localStorage.getItem('list');
    if (storedList) {
      const parsedList = JSON.parse(storedList);
      this.length = parsedList[parsedList.length - 1].index;
    }
  }

  // Add a new task to the List constructor
  addTask() {
    const addTask = document.querySelector('#toDo');
    const addInput = document.querySelector('.addToInput');
    const addTaskIcon = document.querySelector('#addIcon');

    // Saved when pressed "Enter" Key
    addTask.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const inputValue = addInput.value;
        if (inputValue !== '') {
          const description = inputValue;
          const completed = false;
          const index = this.list.length > 0
            ? this.list[this.list.length - 1].index + 1
            : 1;
          /* console.log(this.list); */
          this.saveTask(description, completed, index);
          e.preventDefault();
          this.showList();

          // Animate the icon when clicking
          const addTaskIcon = document.querySelector('#addIcon');
          addTaskIcon.classList.add('addIconEnter');
          setTimeout(() => {
            addTaskIcon.classList.remove('addIconEnter');
          }, 500);

          addInput.value = '';
        } else {
          e.preventDefault();
          const addTaskIcon = document.querySelector('#addIcon');
          addTaskIcon.classList.add('addIconError');
          setTimeout(() => {
            addTaskIcon.classList.remove('addIconError');
          }, 500);
        }
      }
    });

    // Saved wen pressed "+" Icon
    addTaskIcon.addEventListener('click', () => {
      const inputValue = addInput.value;
      if (inputValue !== '') {
        const description = inputValue;
        const completed = false;
        const index = this.list.length > 0 ? this.list[this.list.length - 1].index + 1 : 1;
        /* console.log(this.list); */
        this.saveTask(description, completed, index);
        this.showList();
        addInput.value = '';
      }
    });
  }

  removeTask() {
    const listGroup = document.querySelector('.toDoList');
    listGroup.addEventListener('click', (event) => {
      const removeIcon = event.target.closest('.removeIcon');
      if (removeIcon) {
        const listItem = removeIcon.closest('.listItem');
        const indexToRemove = parseInt(listItem.id, 10);
        this.removeItem(indexToRemove);

        // Check if list is empty and delete it
        if (this.list.length === 0) {
          localStorage.removeItem('list');
        } else {
          // Update the index of the remaining tasks
          this.list.forEach((task, i) => {
            task.index = i + 1;
          });
          // Update the local storage
          localStorage.setItem('list', JSON.stringify(this.list));
        }
        // Update the list
        this.showList();
      }
    });
  }

  removeItem(indexToRemove) {
    const filteredList = this.list.filter(
      (task) => task.index !== indexToRemove,
    );
    this.list = filteredList;
  }

  // Edit Task
  editTask(indexToEdit, updatedDescription) {
    this.updateTaskDescription(indexToEdit, updatedDescription);
    localStorage.setItem('list', JSON.stringify(this.list));
    this.showList();
  }
  

  // Update edited Task
  updateTaskDescription(editInputId) {
    const editInput = document.getElementById(editInputId);
    const listItem = editInput.closest('.listItem');
    const indexToEdit = this.list.findIndex(
      function(task) {
        return task.index === parseInt(listItem.id, 10);
      }
    );
    const updatedDescription = editInput.value;
    const updatedTask = this.list[indexToEdit];
    updatedTask.description = updatedDescription;
    localStorage.setItem('list', JSON.stringify(this.list));
    this.showList();
  }
  

  // Checkbox completed
  checkBoxChanger(listTask, task) {
    // Checkbox function to change the status of "completed"
    const checkbox = listTask.querySelector('.checkBox');
    const actualTask = listTask.querySelector('.toDoTask');
    if (checkbox.checked) {
      listTask.classList.add('checked');
      actualTask.classList.add('taskChecked');
    }
    checkbox.addEventListener('click', () => {
      task.completed = checkbox.checked;
      if (checkbox.checked) {
        listTask.classList.add('checked');
        actualTask.classList.add('taskChecked');
        /* console.log(task); */
      } else {
        listTask.classList.remove('checked');
        actualTask.classList.remove('taskChecked');
        /* console.log(task); */
      }
      localStorage.setItem('list', JSON.stringify(this.list));
    });
  }

  // Clear all checked task
  clearCompleted() {
    const originalLength = this.list.length;
    this.list = this.list.filter((task) => !task.completed);
    if (this.list.length < originalLength) {
      // Update task indices
      for (let i = 0; i < this.list.length; i += 1) {
        this.list[i].index = i + 1;
      }
      localStorage.setItem('list', JSON.stringify(this.list));
      if (this.list.length === 0) {
        localStorage.removeItem('list');
      }
      // Call showList to update the UI
      this.showList();
    }
  }

  // Save the task on the local storage
  saveTask(description, completed, index) {
    const newTask = { description, completed, index };
    this.list.push(newTask);
    if (!localStorage.getItem('list')) {
      localStorage.setItem('list', JSON.stringify(this.list));
    } else {
      const savedList = JSON.parse(localStorage.getItem('list'));
      savedList.push(newTask);
      localStorage.setItem('list', JSON.stringify(savedList));
    }
  }

  // Save the List of task on the Local storage
  loadTask() {
    if (localStorage.getItem('list')) {
      const savedList = JSON.parse(localStorage.getItem('list'));
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
    const listGroup = document.querySelector('.toDoList');
    listGroup.innerHTML = '';
    this.list.forEach((task) => {
      const listTask = document.createElement('li');
      listTask.classList = 'listItem listElement dragListLi';
      listTask.id = `${task.index}`;
      listTask.innerHTML = `
        <input type="checkbox" class="checkBox" ${task.completed ? 'checked' : ''}>
        <input type="text" class="toDoTask" value="${task.description}">
        <i class="fa-regular fa-trash-can removeIcon"></i>
        <i class="fa-solid fa-ellipsis-vertical moveIcon draggable"></i>
      `;

      this.checkBoxChanger(listTask, task);

      //  Clear Button
      const clearButton = document.querySelector('.clear');
      clearButton.addEventListener('click', () => {
        this.clearCompleted();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixRQUFRO0FBQ1I7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRixxREFBcUQsaUJBQWlCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUMvTnBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dCOztBQUVyQyxpQkFBaUIsd0RBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9saXN0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgaHNsYSgxOTcsIDE0JSwgNTclLCAxKSAwJSwgaHNsYSgxOTIsIDE3JSwgOTQlLCAxKSAxMDAlKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgaGVpZ2h0OiA5OHZoO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0Q29udCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBib3gtc2hhZG93OiAtOHB4IDEwcHggMjZweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlzdFRpdGxlIHtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC4zcHg7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZENvbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkSWNvbiB7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgdHJhbnNpdGlvbjogMzAwbXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkSWNvbkVudGVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKSAhaW1wb3J0YW50O1xcclxcbiAgY29sb3I6IHJnYig3LCAyMDUsIDcpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5hZGRJY29uRXJyb3Ige1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpIHJvdGF0ZSg0NWRlZykgIWltcG9ydGFudDtcXHJcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkSWNvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxyXFxuICBjb2xvcjogcmdiKDcsIDIwNSwgNyk7XFxyXFxufVxcclxcblxcclxcbiNhZGRJY29uOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgdHJhbnNpdGlvbjogNTBtcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuICBjb2xvcjogcmdiKDAsIDE2MCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5hZGRUb0lucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5hZGRUb0lucHV0OmFjdGl2ZSxcXHJcXG4uYWRkVG9JbnB1dDpmb2N1cy12aXNpYmxlIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b0RvTGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0b0RvIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RJdGVtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RJdGVtSnMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdEl0ZW06aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzMiwgMTI4LCAwLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvRG9UYXNrIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdHJhbnNpdGlvbjogMzAwbXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tCb3gge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ2hlY2tlZCB7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXIge1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAyMDBtcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjNweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1Myk7XFxyXFxufVxcclxcblxcclxcbi5jbGVhcjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ5Myk7XFxyXFxuICB0cmFuc2l0aW9uOiAzMG1zIGFsbCBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZUljb24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RJdGVtOmhvdmVyIC5yZW1vdmVJY29uIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5saXN0SXRlbTpob3ZlciAucmVtb3ZlSWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdEl0ZW06aG92ZXIgLnJlbW92ZUljb246YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTQyLCAwLCAwKTtcXHJcXG4gIHRyYW5zaXRpb246IDUwbXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd1JlbW92ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmVJY29uIHtcXHJcXG4gIGN1cnNvcjogZ3JhYjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMzAwbXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmVJY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMCwgMTEwLCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92ZUljb246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RFbGVtZW50IHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTAlIDEwJTtcXHJcXG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbCBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFDQUFxQztFQUNyQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwyRkFBMkY7RUFDM0YsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixtREFBbUQ7RUFDbkQsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGlDQUFpQztFQUNqQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQ0FBMkM7RUFDM0MsMEJBQTBCO0VBQzFCLGlDQUFpQztBQUNuQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsIGhzbGEoMTk3LCAxNCUsIDU3JSwgMSkgMCUsIGhzbGEoMTkyLCAxNyUsIDk0JSwgMSkgMTAwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGhlaWdodDogOTh2aDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdENvbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYm94LXNoYWRvdzogLThweCAxMHB4IDI2cHggLThweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2xpc3RUaXRsZSB7XFxyXFxuICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuM3B4O1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxufVxcclxcblxcclxcbi5hZGRDb250IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZEljb24ge1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbCBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEljb25FbnRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMykgIWltcG9ydGFudDtcXHJcXG4gIGNvbG9yOiByZ2IoNywgMjA1LCA3KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkSWNvbkVycm9yIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKSByb3RhdGUoNDVkZWcpICFpbXBvcnRhbnQ7XFxyXFxuICBjb2xvcjogcmdiKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZEljb246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcclxcbiAgY29sb3I6IHJnYig3LCAyMDUsIDcpO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkSWNvbjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIHRyYW5zaXRpb246IDUwbXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbiAgY29sb3I6IHJnYigwLCAxNjAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9JbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9JbnB1dDphY3RpdmUsXFxyXFxuLmFkZFRvSW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9Eb0xpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9EbyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5saXN0SXRlbSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0SXRlbUpzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RJdGVtOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzIsIDEyOCwgMC4yNSk7XFxyXFxufVxcclxcblxcclxcbi50b0RvVGFzayB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbCBlYXNlLWluLW91dDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrQm94IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NoZWNrZWQge1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyIHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMjAwbXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC4zcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NTMpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXI6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40OTMpO1xcclxcbiAgdHJhbnNpdGlvbjogMzBtcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmVJY29uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMzAwbXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5saXN0SXRlbTpob3ZlciAucmVtb3ZlSWNvbiB7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdEl0ZW06aG92ZXIgLnJlbW92ZUljb246aG92ZXIge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RJdGVtOmhvdmVyIC5yZW1vdmVJY29uOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiKDE0MiwgMCwgMCk7XFxyXFxuICB0cmFuc2l0aW9uOiA1MG1zIGFsbCBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3dSZW1vdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5tb3ZlSWNvbiB7XFxyXFxuICBjdXJzb3I6IGdyYWI7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbCBlYXNlLWluLW91dDtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5tb3ZlSWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDAsIDExMCwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmVJY29uOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxyXFxufVxcclxcblxcclxcbi5saXN0RWxlbWVudCB7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwJSAxMCU7XFxyXFxuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBMaXN0IHtcbiAgLy8gRXN0YWJsaXNoIGhvdyB0aGUgdGFzayBhcmUgZ29pbmcgdG8gYmUgY3JlYXRlZCBpbnNpZGUgdGhlIGxpc3RcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ID0gW107XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIGNvbnN0IHN0b3JlZExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdCcpO1xuICAgIGlmIChzdG9yZWRMaXN0KSB7XG4gICAgICBjb25zdCBwYXJzZWRMaXN0ID0gSlNPTi5wYXJzZShzdG9yZWRMaXN0KTtcbiAgICAgIHRoaXMubGVuZ3RoID0gcGFyc2VkTGlzdFtwYXJzZWRMaXN0Lmxlbmd0aCAtIDFdLmluZGV4O1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBhIG5ldyB0YXNrIHRvIHRoZSBMaXN0IGNvbnN0cnVjdG9yXG4gIGFkZFRhc2soKSB7XG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b0RvJyk7XG4gICAgY29uc3QgYWRkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVG9JbnB1dCcpO1xuICAgIGNvbnN0IGFkZFRhc2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEljb24nKTtcblxuICAgIC8vIFNhdmVkIHdoZW4gcHJlc3NlZCBcIkVudGVyXCIgS2V5XG4gICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gYWRkSW5wdXQudmFsdWU7XG4gICAgICAgIGlmIChpbnB1dFZhbHVlICE9PSAnJykge1xuICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXRWYWx1ZTtcbiAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdC5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHRoaXMubGlzdFt0aGlzLmxpc3QubGVuZ3RoIC0gMV0uaW5kZXggKyAxXG4gICAgICAgICAgICA6IDE7XG4gICAgICAgICAgLyogY29uc29sZS5sb2codGhpcy5saXN0KTsgKi9cbiAgICAgICAgICB0aGlzLnNhdmVUYXNrKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5zaG93TGlzdCgpO1xuXG4gICAgICAgICAgLy8gQW5pbWF0ZSB0aGUgaWNvbiB3aGVuIGNsaWNraW5nXG4gICAgICAgICAgY29uc3QgYWRkVGFza0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkSWNvbicpO1xuICAgICAgICAgIGFkZFRhc2tJY29uLmNsYXNzTGlzdC5hZGQoJ2FkZEljb25FbnRlcicpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWRkVGFza0ljb24uY2xhc3NMaXN0LnJlbW92ZSgnYWRkSWNvbkVudGVyJyk7XG4gICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgIGFkZElucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IGFkZFRhc2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEljb24nKTtcbiAgICAgICAgICBhZGRUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKCdhZGRJY29uRXJyb3InKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFkZFRhc2tJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2FkZEljb25FcnJvcicpO1xuICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFNhdmVkIHdlbiBwcmVzc2VkIFwiK1wiIEljb25cbiAgICBhZGRUYXNrSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBhZGRJbnB1dC52YWx1ZTtcbiAgICAgIGlmIChpbnB1dFZhbHVlICE9PSAnJykge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0VmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdC5sZW5ndGggPiAwID8gdGhpcy5saXN0W3RoaXMubGlzdC5sZW5ndGggLSAxXS5pbmRleCArIDEgOiAxO1xuICAgICAgICAvKiBjb25zb2xlLmxvZyh0aGlzLmxpc3QpOyAqL1xuICAgICAgICB0aGlzLnNhdmVUYXNrKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KTtcbiAgICAgICAgdGhpcy5zaG93TGlzdCgpO1xuICAgICAgICBhZGRJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlVGFzaygpIHtcbiAgICBjb25zdCBsaXN0R3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb0xpc3QnKTtcbiAgICBsaXN0R3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlbW92ZUljb24gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnJlbW92ZUljb24nKTtcbiAgICAgIGlmIChyZW1vdmVJY29uKSB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gcmVtb3ZlSWNvbi5jbG9zZXN0KCcubGlzdEl0ZW0nKTtcbiAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHBhcnNlSW50KGxpc3RJdGVtLmlkLCAxMCk7XG4gICAgICAgIHRoaXMucmVtb3ZlSXRlbShpbmRleFRvUmVtb3ZlKTtcblxuICAgICAgICAvLyBDaGVjayBpZiBsaXN0IGlzIGVtcHR5IGFuZCBkZWxldGUgaXRcbiAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGlzdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgaW5kZXggb2YgdGhlIHJlbWFpbmluZyB0YXNrc1xuICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgICAgICAgICB0YXNrLmluZGV4ID0gaSArIDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3QnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxpc3QpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGUgdGhlIGxpc3RcbiAgICAgICAgdGhpcy5zaG93TGlzdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpbmRleFRvUmVtb3ZlKSB7XG4gICAgY29uc3QgZmlsdGVyZWRMaXN0ID0gdGhpcy5saXN0LmZpbHRlcihcbiAgICAgICh0YXNrKSA9PiB0YXNrLmluZGV4ICE9PSBpbmRleFRvUmVtb3ZlLFxuICAgICk7XG4gICAgdGhpcy5saXN0ID0gZmlsdGVyZWRMaXN0O1xuICB9XG5cbiAgLy8gRWRpdCBUYXNrXG4gIGVkaXRUYXNrKGluZGV4VG9FZGl0LCB1cGRhdGVkRGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLnVwZGF0ZVRhc2tEZXNjcmlwdGlvbihpbmRleFRvRWRpdCwgdXBkYXRlZERlc2NyaXB0aW9uKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRoaXMubGlzdCkpO1xuICAgIHRoaXMuc2hvd0xpc3QoKTtcbiAgfVxuICBcblxuICAvLyBVcGRhdGUgZWRpdGVkIFRhc2tcbiAgdXBkYXRlVGFza0Rlc2NyaXB0aW9uKGVkaXRJbnB1dElkKSB7XG4gICAgY29uc3QgZWRpdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWRpdElucHV0SWQpO1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZWRpdElucHV0LmNsb3Nlc3QoJy5saXN0SXRlbScpO1xuICAgIGNvbnN0IGluZGV4VG9FZGl0ID0gdGhpcy5saXN0LmZpbmRJbmRleChcbiAgICAgIGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgcmV0dXJuIHRhc2suaW5kZXggPT09IHBhcnNlSW50KGxpc3RJdGVtLmlkLCAxMCk7XG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCB1cGRhdGVkRGVzY3JpcHRpb24gPSBlZGl0SW5wdXQudmFsdWU7XG4gICAgY29uc3QgdXBkYXRlZFRhc2sgPSB0aGlzLmxpc3RbaW5kZXhUb0VkaXRdO1xuICAgIHVwZGF0ZWRUYXNrLmRlc2NyaXB0aW9uID0gdXBkYXRlZERlc2NyaXB0aW9uO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkodGhpcy5saXN0KSk7XG4gICAgdGhpcy5zaG93TGlzdCgpO1xuICB9XG4gIFxuXG4gIC8vIENoZWNrYm94IGNvbXBsZXRlZFxuICBjaGVja0JveENoYW5nZXIobGlzdFRhc2ssIHRhc2spIHtcbiAgICAvLyBDaGVja2JveCBmdW5jdGlvbiB0byBjaGFuZ2UgdGhlIHN0YXR1cyBvZiBcImNvbXBsZXRlZFwiXG4gICAgY29uc3QgY2hlY2tib3ggPSBsaXN0VGFzay5xdWVyeVNlbGVjdG9yKCcuY2hlY2tCb3gnKTtcbiAgICBjb25zdCBhY3R1YWxUYXNrID0gbGlzdFRhc2sucXVlcnlTZWxlY3RvcignLnRvRG9UYXNrJyk7XG4gICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgIGxpc3RUYXNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgIGFjdHVhbFRhc2suY2xhc3NMaXN0LmFkZCgndGFza0NoZWNrZWQnKTtcbiAgICB9XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0YXNrLmNvbXBsZXRlZCA9IGNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICBsaXN0VGFzay5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgICAgIGFjdHVhbFRhc2suY2xhc3NMaXN0LmFkZCgndGFza0NoZWNrZWQnKTtcbiAgICAgICAgLyogY29uc29sZS5sb2codGFzayk7ICovXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0VGFzay5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XG4gICAgICAgIGFjdHVhbFRhc2suY2xhc3NMaXN0LnJlbW92ZSgndGFza0NoZWNrZWQnKTtcbiAgICAgICAgLyogY29uc29sZS5sb2codGFzayk7ICovXG4gICAgICB9XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRoaXMubGlzdCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQ2xlYXIgYWxsIGNoZWNrZWQgdGFza1xuICBjbGVhckNvbXBsZXRlZCgpIHtcbiAgICBjb25zdCBvcmlnaW5hbExlbmd0aCA9IHRoaXMubGlzdC5sZW5ndGg7XG4gICAgdGhpcy5saXN0ID0gdGhpcy5saXN0LmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKTtcbiAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA8IG9yaWdpbmFsTGVuZ3RoKSB7XG4gICAgICAvLyBVcGRhdGUgdGFzayBpbmRpY2VzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmxpc3RbaV0uaW5kZXggPSBpICsgMTtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkodGhpcy5saXN0KSk7XG4gICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGlzdCcpO1xuICAgICAgfVxuICAgICAgLy8gQ2FsbCBzaG93TGlzdCB0byB1cGRhdGUgdGhlIFVJXG4gICAgICB0aGlzLnNob3dMaXN0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2F2ZSB0aGUgdGFzayBvbiB0aGUgbG9jYWwgc3RvcmFnZVxuICBzYXZlVGFzayhkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB7IGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4IH07XG4gICAgdGhpcy5saXN0LnB1c2gobmV3VGFzayk7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdCcpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRoaXMubGlzdCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzYXZlZExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0JykpO1xuICAgICAgc2F2ZWRMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KHNhdmVkTGlzdCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNhdmUgdGhlIExpc3Qgb2YgdGFzayBvbiB0aGUgTG9jYWwgc3RvcmFnZVxuICBsb2FkVGFzaygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3QnKSkge1xuICAgICAgY29uc3Qgc2F2ZWRMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdCcpKTtcbiAgICAgIHNhdmVkTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIHRoaXMubGlzdC5wdXNoKHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgICBjb21wbGV0ZWQ6IHRhc2suY29tcGxldGVkLFxuICAgICAgICAgIGluZGV4OiB0YXNrLmluZGV4LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNob3cgTGlzdFxuICBzaG93TGlzdCgpIHtcbiAgICAvLyBBZGQgdGhlIGxpc3QgdG8gdGhlIEhUTUxcbiAgICBjb25zdCBsaXN0R3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb0xpc3QnKTtcbiAgICBsaXN0R3JvdXAuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5saXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IGxpc3RUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpc3RUYXNrLmNsYXNzTGlzdCA9ICdsaXN0SXRlbSBsaXN0RWxlbWVudCBkcmFnTGlzdExpJztcbiAgICAgIGxpc3RUYXNrLmlkID0gYCR7dGFzay5pbmRleH1gO1xuICAgICAgbGlzdFRhc2suaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja0JveFwiICR7dGFzay5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJ30+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidG9Eb1Rhc2tcIiB2YWx1ZT1cIiR7dGFzay5kZXNjcmlwdGlvbn1cIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXRyYXNoLWNhbiByZW1vdmVJY29uXCI+PC9pPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsIG1vdmVJY29uIGRyYWdnYWJsZVwiPjwvaT5cbiAgICAgIGA7XG5cbiAgICAgIHRoaXMuY2hlY2tCb3hDaGFuZ2VyKGxpc3RUYXNrLCB0YXNrKTtcblxuICAgICAgLy8gIENsZWFyIEJ1dHRvblxuICAgICAgY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXInKTtcbiAgICAgIGNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNsZWFyQ29tcGxldGVkKCk7XG4gICAgICB9KTtcblxuICAgICAgbGlzdEdyb3VwLmFwcGVuZENoaWxkKGxpc3RUYXNrKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgTGlzdCBmcm9tICcuL21vZHVsZXMvbGlzdC5qcyc7XG5cbmNvbnN0IGxpc3QgPSBuZXcgTGlzdCgpO1xubGlzdC5sb2FkVGFzaygpO1xubGlzdC5hZGRUYXNrKCk7XG5saXN0LnJlbW92ZVRhc2soKTtcbmxpc3QuZWRpdFRhc2soKTtcbmxpc3Quc2hvd0xpc3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=