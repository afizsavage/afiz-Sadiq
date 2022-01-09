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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/003-heart-3.png */ "./src/assets/003-heart-3.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/003-heart-2.png */ "./src/assets/003-heart-2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/001-close.png */ "./src/assets/001-close.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: 'Lato', sans-serif;\n  position: relative;\n  font-size: 16px;\n  width: 100vw;\n  min-height: 100vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\nbody.disScroll {\n  overflow-y: hidden;\n}\n\nheader {\n  display: flex;\n  font-family: 'Noto Serif', serif;\n  font-size: 1.5rem;\n  align-items: center;\n  background: #f5f1da;\n  padding: 0;\n  color: black;\n}\n\n#logo-link {\n  display: inline-block;\n  width: auto;\n  height: auto;\n  padding-right: 7rem;\n}\n\n.top-sec img {\n  width: 100%;\n  height: 30rem;\n}\n\n#logo-link img {\n  width: 100px;\n  height: 100px;\n}\n\nul {\n  list-style: none;\n}\n\nnav li {\n  display: inline;\n  margin-right: 2rem;\n}\n\nnav a {\n  color: black;\n  display: inline;\n  font-weight: 600;\n}\n\n/* nav ul {\n  display: flex;\n  flex-direction: row;\n} */\n\nnav a.nt-meals {\n  display: none;\n  text-decoration: none;\n  font-weight: 400;\n}\n\n.footer {\n  background: #e4c6b4;\n  text-align: center;\n  width: 100%;\n  padding: 1.3rem 0;\n  position: absolute;\n  bottom: 0;\n}\n\nmain {\n  height: auto;\n  padding: 0 1rem;\n  padding-bottom: 10rem;\n}\n\n#items-list {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n}\n\n.card {\n  width: 100%;\n  border: none;\n  border-radius: 0.28571429rem;\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n  margin-top: 2rem;\n  cursor: pointer;\n  transition:\n    box-shadow 0.1s ease,\n    transform 0.1s ease,\n    -webkit-box-shadow 0.1s ease,\n    -webkit-transform 0.1s ease;\n}\n\n.card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 1px 3px 0 #bcbdbd, 0 0 0 1px #d4d4d5;\n}\n\n.meal-name {\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: rgba(0, 0, 0, 0.85);\n}\n\n.card-image {\n  width: 100%;\n  height: auto;\n}\n\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  background-color: orange;\n}\n\n.cmtbtn-sec {\n  display: flex;\n  justify-content: center;\n  padding: 1rem 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.button {\n  background-color: orange;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  font-weight: 500;\n  border: #fff 2px solid;\n  color: white;\n  font-size: 1.2rem;\n  border-radius: 5px;\n}\n\n.button:hover {\n  background-color: white;\n  border: orange 2px solid;\n  color: orange;\n  transition: background-color 0.5s ease;\n}\n\n.like-icon {\n  width: 1.4rem;\n  height: 1.4rem;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center center no-repeat;\n  background-size: 1.4rem 1.4rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n\n.like-icon:hover {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center center no-repeat;\n  background-size: 1.4rem 1.4rem;\n}\n\n.like-icon:active {\n  transform: translate(10px, -10px);\n}\n\n.like-cont {\n  padding: 0.5rem 1rem;\n  text-align: right;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: rgba(0, 0, 0, 0.85);\n}\n\n#modal {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 2rem 4rem;\n  background:\n    linear-gradient(\n      0deg,\n      rgba(228, 198, 180, 0.95),\n      rgba(228, 198, 180, 0.95)\n    );\n  backdrop-filter: blur(24px);\n  box-sizing: border-box;\n  z-index: 100;\n  display: block;\n  justify-content: center;\n  min-height: 100vh;\n  overflow-y: scroll;\n}\n\n#modal-icon {\n  width: 2rem;\n  height: 2rem;\n  background: #fff url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") center center no-repeat;\n  background-size: 2rem 2rem;\n  position: absolute;\n  right: 4rem;\n  top: 4rem;\n  border: none;\n  cursor: pointer;\n}\n\narticle {\n  position: relative;\n  background: #fff;\n  height: auto;\n  padding: 3rem 3rem;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 85%;\n  margin: 4rem auto;\n}\n\n.top-sec {\n  width: 65%;\n  height: auto;\n}\n\nh3,\nh2,\nh4 {\n  text-align: center;\n  margin-top: 2rem;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 700;\n  font-size: 2rem;\n}\n\n.bottom-sec h3,\nh4 {\n  font-weight: 600;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n\n.cat,\n.ori {\n  padding: 2rem 5rem;\n  font-weight: 500;\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.85);\n  display: flex;\n  justify-content: space-between;\n}\n\nfooter span {\n  padding: 0 10px;\n  font-size: 1.2rem;\n}\n\n#comments {\n  margin-bottom: 1.5rem;\n}\n\n#comments li {\n  color: rgba(0, 0, 0, 0.85);\n  padding: 1rem 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\n#comments li span {\n  margin-right: 1rem;\n}\n\nfieldset {\n  border: none;\n}\n\n.input-container {\n  margin: 2rem 0;\n}\n\n.input-container input,\ntextarea {\n  font-size: 1.2rem;\n  font-family: 'Lato', sans-serif;\n  padding: 0.5rem 0.3rem;\n  border-radius: 5px;\n  border: none;\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n}\n\n#message {\n  width: 20rem;\n  height: 10rem;\n}\n\n#submit-btn {\n  margin-top: 2rem;\n}\n\nfooter a {\n  color: black;\n  text-decoration: none;\n}\n\nfooter h2 {\n  font-family: 'Noto Serif', serif;\n  font-size: 1.3rem;\n  font-weight: 500;\n  color: teal;\n  margin-bottom: 0.5rem;\n}\n\n@media (min-width: 992px) {\n  header {\n    padding: 0 15rem;\n  }\n\n  nav a.nt-meals {\n    display: inline;\n    text-decoration: none;\n    font-weight: 400;\n  }\n\n  main {\n    padding: 5rem 14rem;\n    padding-bottom: 10rem;\n  }\n\n  #items-list {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n\n  .card {\n    width: 420px;\n    margin-top: 2rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: 'Lato', sans-serif;\n  position: relative;\n  font-size: 16px;\n  width: 100vw;\n  min-height: 100vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\nbody.disScroll {\n  overflow-y: hidden;\n}\n\nheader {\n  display: flex;\n  font-family: 'Noto Serif', serif;\n  font-size: 1.5rem;\n  align-items: center;\n  background: #f5f1da;\n  padding: 0;\n  color: black;\n}\n\n#logo-link {\n  display: inline-block;\n  width: auto;\n  height: auto;\n  padding-right: 7rem;\n}\n\n.top-sec img {\n  width: 100%;\n  height: 30rem;\n}\n\n#logo-link img {\n  width: 100px;\n  height: 100px;\n}\n\nul {\n  list-style: none;\n}\n\nnav li {\n  display: inline;\n  margin-right: 2rem;\n}\n\nnav a {\n  color: black;\n  display: inline;\n  font-weight: 600;\n}\n\n/* nav ul {\n  display: flex;\n  flex-direction: row;\n} */\n\nnav a.nt-meals {\n  display: none;\n  text-decoration: none;\n  font-weight: 400;\n}\n\n.footer {\n  background: #e4c6b4;\n  text-align: center;\n  width: 100%;\n  padding: 1.3rem 0;\n  position: absolute;\n  bottom: 0;\n}\n\nmain {\n  height: auto;\n  padding: 0 1rem;\n  padding-bottom: 10rem;\n}\n\n#items-list {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n}\n\n.card {\n  width: 100%;\n  border: none;\n  border-radius: 0.28571429rem;\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n  margin-top: 2rem;\n  cursor: pointer;\n  transition:\n    box-shadow 0.1s ease,\n    transform 0.1s ease,\n    -webkit-box-shadow 0.1s ease,\n    -webkit-transform 0.1s ease;\n}\n\n.card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 1px 3px 0 #bcbdbd, 0 0 0 1px #d4d4d5;\n}\n\n.meal-name {\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: rgba(0, 0, 0, 0.85);\n}\n\n.card-image {\n  width: 100%;\n  height: auto;\n}\n\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  background-color: orange;\n}\n\n.cmtbtn-sec {\n  display: flex;\n  justify-content: center;\n  padding: 1rem 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.button {\n  background-color: orange;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  font-weight: 500;\n  border: #fff 2px solid;\n  color: white;\n  font-size: 1.2rem;\n  border-radius: 5px;\n}\n\n.button:hover {\n  background-color: white;\n  border: orange 2px solid;\n  color: orange;\n  transition: background-color 0.5s ease;\n}\n\n.like-icon {\n  width: 1.4rem;\n  height: 1.4rem;\n  background: url('./assets/003-heart-3.png') center center no-repeat;\n  background-size: 1.4rem 1.4rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n\n.like-icon:hover {\n  background: url('./assets/003-heart-2.png') center center no-repeat;\n  background-size: 1.4rem 1.4rem;\n}\n\n.like-icon:active {\n  transform: translate(10px, -10px);\n}\n\n.like-cont {\n  padding: 0.5rem 1rem;\n  text-align: right;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: rgba(0, 0, 0, 0.85);\n}\n\n#modal {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 2rem 4rem;\n  background:\n    linear-gradient(\n      0deg,\n      rgba(228, 198, 180, 0.95),\n      rgba(228, 198, 180, 0.95)\n    );\n  backdrop-filter: blur(24px);\n  box-sizing: border-box;\n  z-index: 100;\n  display: block;\n  justify-content: center;\n  min-height: 100vh;\n  overflow-y: scroll;\n}\n\n#modal-icon {\n  width: 2rem;\n  height: 2rem;\n  background: #fff url('../src/assets/001-close.png') center center no-repeat;\n  background-size: 2rem 2rem;\n  position: absolute;\n  right: 4rem;\n  top: 4rem;\n  border: none;\n  cursor: pointer;\n}\n\narticle {\n  position: relative;\n  background: #fff;\n  height: auto;\n  padding: 3rem 3rem;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 85%;\n  margin: 4rem auto;\n}\n\n.top-sec {\n  width: 65%;\n  height: auto;\n}\n\nh3,\nh2,\nh4 {\n  text-align: center;\n  margin-top: 2rem;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 700;\n  font-size: 2rem;\n}\n\n.bottom-sec h3,\nh4 {\n  font-weight: 600;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n\n.cat,\n.ori {\n  padding: 2rem 5rem;\n  font-weight: 500;\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.85);\n  display: flex;\n  justify-content: space-between;\n}\n\nfooter span {\n  padding: 0 10px;\n  font-size: 1.2rem;\n}\n\n#comments {\n  margin-bottom: 1.5rem;\n}\n\n#comments li {\n  color: rgba(0, 0, 0, 0.85);\n  padding: 1rem 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\n#comments li span {\n  margin-right: 1rem;\n}\n\nfieldset {\n  border: none;\n}\n\n.input-container {\n  margin: 2rem 0;\n}\n\n.input-container input,\ntextarea {\n  font-size: 1.2rem;\n  font-family: 'Lato', sans-serif;\n  padding: 0.5rem 0.3rem;\n  border-radius: 5px;\n  border: none;\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n}\n\n#message {\n  width: 20rem;\n  height: 10rem;\n}\n\n#submit-btn {\n  margin-top: 2rem;\n}\n\nfooter a {\n  color: black;\n  text-decoration: none;\n}\n\nfooter h2 {\n  font-family: 'Noto Serif', serif;\n  font-size: 1.3rem;\n  font-weight: 500;\n  color: teal;\n  margin-bottom: 0.5rem;\n}\n\n@media (min-width: 992px) {\n  header {\n    padding: 0 15rem;\n  }\n\n  nav a.nt-meals {\n    display: inline;\n    text-decoration: none;\n    font-weight: 400;\n  }\n\n  main {\n    padding: 5rem 14rem;\n    padding-bottom: 10rem;\n  }\n\n  #items-list {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n\n  .card {\n    width: 420px;\n    margin-top: 2rem;\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/javascript/comments.js":
/*!************************************!*\
  !*** ./src/javascript/comments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComment": () => (/* binding */ addComment)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/javascript/utils.js");

const addComment = (itemId, name, comment) => {
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.writeToAPI)(
    {
      item_id: itemId,
      username: name,
      comment: comment,
    },
    'comments'
  );
};

/***/ }),

/***/ "./src/javascript/likes.js":
/*!*********************************!*\
  !*** ./src/javascript/likes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateLikeDyn": () => (/* binding */ updateLikeDyn)
/* harmony export */ });
const updateLikeDyn = (meals, button, event) => {
  const result = meals.filter((meal) => meal.idMeal === button);
  result[0].likes++;
  const totalLikes = result[0].likes;
  event.target.parentElement.parentElement.nextElementSibling.innerHTML = `${totalLikes} Likes`;
};


/***/ }),

/***/ "./src/javascript/utils.js":
/*!*********************************!*\
  !*** ./src/javascript/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "involvementBaseApi": () => (/* binding */ involvementBaseApi),
/* harmony export */   "mealsAPI": () => (/* binding */ mealsAPI),
/* harmony export */   "fetcher": () => (/* binding */ fetcher),
/* harmony export */   "writeToAPI": () => (/* binding */ writeToAPI),
/* harmony export */   "sumNumberOfMeals": () => (/* binding */ sumNumberOfMeals),
/* harmony export */   "sumNumberOfComments": () => (/* binding */ sumNumberOfComments)
/* harmony export */ });
const involvementBaseApi =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PkMZGTl9u9KsKd12uG0G/';

const mealsAPI = 'https://themealdb.com/api/json/v1/1/search.php?f=f';

const fetcher = async (endpoint) => {
  const response = await fetch(`${involvementBaseApi}${endpoint}`);
  const data = await response.json();
  return data;
};

const writeToAPI = async (reqBody, endpoint) => {
  const response = await fetch(`${involvementBaseApi}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(reqBody),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const sumNumberOfMeals = (meals, counterText) => {
  counterText.innerHTML = `Meals(${meals.length})`;
};

const sumNumberOfComments = (comments, counterText) => {
  counterText.innerHTML = `Comments(${comments.length})`;
};

/***/ }),

/***/ "./src/assets/001-close.png":
/*!**********************************!*\
  !*** ./src/assets/001-close.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01156d535c9b054c8ae4.png";

/***/ }),

/***/ "./src/assets/003-heart-2.png":
/*!************************************!*\
  !*** ./src/assets/003-heart-2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f66ae2f19a5cae07913b.png";

/***/ }),

/***/ "./src/assets/003-heart-3.png":
/*!************************************!*\
  !*** ./src/assets/003-heart-3.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7e0876f6d3e2bc734d8.png";

/***/ }),

/***/ "./src/assets/A & S-logos_transparent.png":
/*!************************************************!*\
  !*** ./src/assets/A & S-logos_transparent.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9dde721f07785aef843c.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _assets_A_S_logos_transparent_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/A & S-logos_transparent.png */ "./src/assets/A & S-logos_transparent.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/javascript/utils.js");
/* harmony import */ var _likes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes */ "./src/javascript/likes.js");
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments */ "./src/javascript/comments.js");






const logo = document.querySelector('img');
const counterText = document.getElementById('count');
const body = document.querySelector('body');
logo.src = _assets_A_S_logos_transparent_png__WEBPACK_IMPORTED_MODULE_1__;
const mainSection = document.querySelector('main');
let likeBtns;
const mealsArray = [];
const fetchMeals = async () => {
  const response = await fetch(_utils__WEBPACK_IMPORTED_MODULE_2__.mealsAPI);
  const meals = await response.json();
  return meals;
};
const appendMealToMealsArray = (meals) => {
  meals.meals.forEach((meal) => {
    mealsArray.push(meal);
  });
};

const displayComments = (comments, parentEle) => {
  let listItems = '';
  comments.forEach((comment) => {
    listItems += `<li><span>${comment.creation_date}<span>
    <span>${comment.username}:</span> <span>${comment.comment}</span></li>`;
    parentEle.innerHTML = listItems;
  });
};

const createDetailsPopup = (object) => {
  let sessionComments;
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  body.classList.add('disScroll');
  const modal = document.createElement('div');
  modal.id = 'modal';
  const modalContent = `  <article>
  <button id='modal-icon'></button>
    <div class='top-sec'>
    <img src=${object.strMealThumb} />
    <h2>${object.strMeal}</h2>
    <div class='cat'><span>Category</span> <span>${object.strCategory}</span></div>
    <div class='ori'><span>Origin</span> <span>${object.strArea}</span></div>
    </div>
    <div class='bottom-sec'>
    <h3>Comments</h3>
    <ul id='comments'></ul>
    <h4>Add a comment</h4>
    </div>
    <form>
  <fieldset>
    <div class="input-container">
      <input id="name" type="text" name="name" placeholder="Your name" required />
    </div>
    <textarea
      id="message"
      name="message"
      placeholder="Your Insight"
      maxlength="500"
      required
    ></textarea>
    <div class="submit-container">
      <span></span>
      <button id="submit-btn" class="button" type="submit">
        Comment
      </button>
    </div>
  </fieldset>
</form>
    </div>
  </article>`;
  modal.innerHTML = modalContent;
  mainSection.appendChild(modal);
  const submitButton = document.getElementById('submit-btn');
  const name = document.getElementById('name');
  const comment = document.getElementById('message');
  const listElement = document.getElementById('comments');
  const commentHeading = document.querySelector('.bottom-sec h3');
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.fetcher)(`comments?item_id=${object.idMeal}`).then((comments) => {
    sessionComments = comments.length;
    displayComments(comments, listElement);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.sumNumberOfComments)(comments, commentHeading);
  });
  const closeButton = document.getElementById('modal-icon');
  closeButton.addEventListener('click', () => {
    body.classList.remove('disScroll');
    modal.remove();
  });
  submitButton.addEventListener('click', (event) => {
    sessionComments = sessionComments + 1;
    const today = `${mm}-${dd}-${yyyy}`;
    event.preventDefault();
    (0,_comments__WEBPACK_IMPORTED_MODULE_4__.addComment)(object.idMeal, name.value, comment.value);
    listElement.innerHTML += `<li><span>${today}<span>
    <span>${name.value}:</span><span>${comment.value}</span></li>`;
    commentHeading.innerHTML = `Comments(${sessionComments})`;
  });
};
const displayMeals = (likes, meals) => {
  const listContainer = document.getElementById('items-list');
  let listItems = '';
  let commentButtons;
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.sumNumberOfMeals)(meals, counterText);
  meals.forEach((meal, index) => {
    meal.likes = likes[index].likes;
  });
  meals.forEach((meal) => {
    listItems += `<li><div class="card"> <img class='card-image' src=${meal.strMealThumb} alt=${meal.strMeal}/>
    <div class='card-header'><span class='meal-name'>${meal.strMeal}</span> <span><button id=${meal.idMeal} class='like-icon' type='button'></button></span></div>
    <div class='like-cont'> <span>${meal.likes} Likes</span></div>
    <div class='cmtbtn-sec'><button class='button' id=${meal.idMeal} type='button'>Comments</button></div> </div></li>`;
    listContainer.innerHTML = listItems;
  });
  likeBtns = document.querySelectorAll('.like-icon');
  commentButtons = document.querySelectorAll('.cmtbtn-sec button');
  commentButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      createDetailsPopup(meals[index]);
    });
  });
  console.log(commentButtons);
  likeBtns.forEach((button) => {
    button.addEventListener('click', (event) => {
      (0,_likes__WEBPACK_IMPORTED_MODULE_3__.updateLikeDyn)(meals, button.id, event);
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.writeToAPI)({ item_id: button.id }, 'likes');
    });
  });
  console.log(meals[0]);
};
const load = () => {
  fetchMeals().then((meals) => {
    appendMealToMealsArray(meals);
  });
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.fetcher)('likes').then((likes) => {
    displayMeals(likes, mealsArray);
  });
};
window.onload = load;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsK0NBQU87QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBLHFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2phdmFzY3JpcHQvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9qYXZhc2NyaXB0L2xpa2VzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvamF2YXNjcmlwdC91dGlscy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvamF2YXNjcmlwdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvMDAzLWhlYXJ0LTMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvMDAzLWhlYXJ0LTIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy8wMDEtY2xvc2UucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuYm9keS5kaXNTY3JvbGwge1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtZmFtaWx5OiAnTm90byBTZXJpZicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2Y1ZjFkYTtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNsb2dvLWxpbmsge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nLXJpZ2h0OiA3cmVtO1xcbn1cXG5cXG4udG9wLXNlYyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwcmVtO1xcbn1cXG5cXG4jbG9nby1saW5rIGltZyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5uYXYgbGkge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG5uYXYgYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4vKiBuYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufSAqL1xcblxcbm5hdiBhLm50LW1lYWxzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQ6ICNlNGM2YjQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEuM3JlbSAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcXG59XFxuXFxuI2l0ZW1zLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yODU3MTQyOXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNkNGQ0ZDUsIDAgMCAwIDFweCAjZDRkNGQ1O1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246XFxuICAgIGJveC1zaGFkb3cgMC4xcyBlYXNlLFxcbiAgICB0cmFuc2Zvcm0gMC4xcyBlYXNlLFxcbiAgICAtd2Via2l0LWJveC1zaGFkb3cgMC4xcyBlYXNlLFxcbiAgICAtd2Via2l0LXRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi5jYXJkOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNiY2JkYmQsIDAgMCAwIDFweCAjZDRkNGQ1O1xcbn1cXG5cXG4ubWVhbC1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbn1cXG5cXG4uY2FyZC1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5jbXRidG4tc2VjIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJvcmRlcjogI2ZmZiAycHggc29saWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogb3JhbmdlIDJweCBzb2xpZDtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcXG59XFxuXFxuLmxpa2UtaWNvbiB7XFxuICB3aWR0aDogMS40cmVtO1xcbiAgaGVpZ2h0OiAxLjRyZW07XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxLjRyZW0gMS40cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLmxpa2UtaWNvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxLjRyZW0gMS40cmVtO1xcbn1cXG5cXG4ubGlrZS1pY29uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtMTBweCk7XFxufVxcblxcbi5saWtlLWNvbnQge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbn1cXG5cXG4jbW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMnJlbSA0cmVtO1xcbiAgYmFja2dyb3VuZDpcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDBkZWcsXFxuICAgICAgcmdiYSgyMjgsIDE5OCwgMTgwLCAwLjk1KSxcXG4gICAgICByZ2JhKDIyOCwgMTk4LCAxODAsIDAuOTUpXFxuICAgICk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjRweCk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgei1pbmRleDogMTAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4jbW9kYWwtaWNvbiB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmYgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMnJlbSAycmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDRyZW07XFxuICB0b3A6IDRyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmFydGljbGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDNyZW0gM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogODUlO1xcbiAgbWFyZ2luOiA0cmVtIGF1dG87XFxufVxcblxcbi50b3Atc2VjIHtcXG4gIHdpZHRoOiA2NSU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmgzLFxcbmgyLFxcbmg0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5ib3R0b20tc2VjIGgzLFxcbmg0IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5jYXQsXFxuLm9yaSB7XFxuICBwYWRkaW5nOiAycmVtIDVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmZvb3RlciBzcGFuIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4jY29tbWVudHMge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4jY29tbWVudHMgbGkge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNjb21tZW50cyBsaSBzcGFuIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMnJlbSAwO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIGlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjZDRkNGQ1LCAwIDAgMCAxcHggI2Q0ZDRkNTtcXG59XFxuXFxuI21lc3NhZ2Uge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG59XFxuXFxuI3N1Ym1pdC1idG4ge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5mb290ZXIgaDIge1xcbiAgZm9udC1mYW1pbHk6ICdOb3RvIFNlcmlmJywgc2VyaWY7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogdGVhbDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAwIDE1cmVtO1xcbiAgfVxcblxcbiAgbmF2IGEubnQtbWVhbHMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBwYWRkaW5nOiA1cmVtIDE0cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTByZW07XFxuICB9XFxuXFxuICAjaXRlbXMtbGlzdCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLmNhcmQge1xcbiAgICB3aWR0aDogNDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFB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Q0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbmJvZHkuZGlzU2Nyb2xsIHtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogJ05vdG8gU2VyaWYnLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNmNWYxZGE7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jbG9nby1saW5rIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogN3JlbTtcXG59XFxuXFxuLnRvcC1zZWMgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG59XFxuXFxuI2xvZ28tbGluayBpbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubmF2IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxubmF2IGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLyogbmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn0gKi9cXG5cXG5uYXYgYS5udC1tZWFscyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kOiAjZTRjNmI0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxLjNyZW0gMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxubWFpbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMTByZW07XFxufVxcblxcbiNpdGVtcy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW07XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjZDRkNGQ1LCAwIDAgMCAxcHggI2Q0ZDRkNTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOlxcbiAgICBib3gtc2hhZG93IDAuMXMgZWFzZSxcXG4gICAgdHJhbnNmb3JtIDAuMXMgZWFzZSxcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93IDAuMXMgZWFzZSxcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjYmNiZGJkLCAwIDAgMCAxcHggI2Q0ZDRkNTtcXG59XFxuXFxuLm1lYWwtbmFtZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG59XFxuXFxuLmNhcmQtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5jYXJkLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uY210YnRuLXNlYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBib3JkZXI6ICNmZmYgMnB4IHNvbGlkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG9yYW5nZSAycHggc29saWQ7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XFxufVxcblxcbi5saWtlLWljb24ge1xcbiAgd2lkdGg6IDEuNHJlbTtcXG4gIGhlaWdodDogMS40cmVtO1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy8wMDMtaGVhcnQtMy5wbmcnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMS40cmVtIDEuNHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5saWtlLWljb246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy8wMDMtaGVhcnQtMi5wbmcnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMS40cmVtIDEuNHJlbTtcXG59XFxuXFxuLmxpa2UtaWNvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgLTEwcHgpO1xcbn1cXG5cXG4ubGlrZS1jb250IHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG59XFxuXFxuI21vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG4gIGJhY2tncm91bmQ6XFxuICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAwZGVnLFxcbiAgICAgIHJnYmEoMjI4LCAxOTgsIDE4MCwgMC45NSksXFxuICAgICAgcmdiYSgyMjgsIDE5OCwgMTgwLCAwLjk1KVxcbiAgICApO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI0cHgpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuI21vZGFsLWljb24ge1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmZmIHVybCgnLi4vc3JjL2Fzc2V0cy8wMDEtY2xvc2UucG5nJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDJyZW0gMnJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA0cmVtO1xcbiAgdG9wOiA0cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5hcnRpY2xlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiAzcmVtIDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDg1JTtcXG4gIG1hcmdpbjogNHJlbSBhdXRvO1xcbn1cXG5cXG4udG9wLXNlYyB7XFxuICB3aWR0aDogNjUlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5oMyxcXG5oMixcXG5oNCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uYm90dG9tLXNlYyBoMyxcXG5oNCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uY2F0LFxcbi5vcmkge1xcbiAgcGFkZGluZzogMnJlbSA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5mb290ZXIgc3BhbiB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuI2NvbW1lbnRzIHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuI2NvbW1lbnRzIGxpIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jY29tbWVudHMgbGkgc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDJyZW0gMDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciBpbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC4zcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2Q0ZDRkNSwgMCAwIDAgMXB4ICNkNGQ0ZDU7XFxufVxcblxcbiNtZXNzYWdlIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogMTByZW07XFxufVxcblxcbiNzdWJtaXQtYnRuIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIGgyIHtcXG4gIGZvbnQtZmFtaWx5OiAnTm90byBTZXJpZicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6IHRlYWw7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMCAxNXJlbTtcXG4gIH1cXG5cXG4gIG5hdiBhLm50LW1lYWxzIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgcGFkZGluZzogNXJlbSAxNHJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xcbiAgfVxcblxcbiAgI2l0ZW1zLWxpc3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5jYXJkIHtcXG4gICAgd2lkdGg6IDQyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgd3JpdGVUb0FQSSB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoaXRlbUlkLCBuYW1lLCBjb21tZW50KSA9PiB7XG4gIHdyaXRlVG9BUEkoXG4gICAge1xuICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgICBjb21tZW50OiBjb21tZW50LFxuICAgIH0sXG4gICAgJ2NvbW1lbnRzJ1xuICApO1xufTsiLCJleHBvcnQgY29uc3QgdXBkYXRlTGlrZUR5biA9IChtZWFscywgYnV0dG9uLCBldmVudCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBtZWFscy5maWx0ZXIoKG1lYWwpID0+IG1lYWwuaWRNZWFsID09PSBidXR0b24pO1xuICByZXN1bHRbMF0ubGlrZXMrKztcbiAgY29uc3QgdG90YWxMaWtlcyA9IHJlc3VsdFswXS5saWtlcztcbiAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gYCR7dG90YWxMaWtlc30gTGlrZXNgO1xufTtcbiIsImV4cG9ydCBjb25zdCBpbnZvbHZlbWVudEJhc2VBcGkgPVxuICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvUGtNWkdUbDl1OUtzS2QxMnVHMEcvJztcblxuZXhwb3J0IGNvbnN0IG1lYWxzQVBJID0gJ2h0dHBzOi8vdGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3NlYXJjaC5waHA/Zj1mJztcblxuZXhwb3J0IGNvbnN0IGZldGNoZXIgPSBhc3luYyAoZW5kcG9pbnQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZlbWVudEJhc2VBcGl9JHtlbmRwb2ludH1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3Qgd3JpdGVUb0FQSSA9IGFzeW5jIChyZXFCb2R5LCBlbmRwb2ludCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2ludm9sdmVtZW50QmFzZUFwaX0ke2VuZHBvaW50fWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXFCb2R5KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHN1bU51bWJlck9mTWVhbHMgPSAobWVhbHMsIGNvdW50ZXJUZXh0KSA9PiB7XG4gIGNvdW50ZXJUZXh0LmlubmVySFRNTCA9IGBNZWFscygke21lYWxzLmxlbmd0aH0pYDtcbn07XG5cbmV4cG9ydCBjb25zdCBzdW1OdW1iZXJPZkNvbW1lbnRzID0gKGNvbW1lbnRzLCBjb3VudGVyVGV4dCkgPT4ge1xuICBjb3VudGVyVGV4dC5pbm5lckhUTUwgPSBgQ29tbWVudHMoJHtjb21tZW50cy5sZW5ndGh9KWA7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vYXNzZXRzL0EgJiBTLWxvZ29zX3RyYW5zcGFyZW50LnBuZyc7XG5pbXBvcnQgeyBtZWFsc0FQSSwgc3VtTnVtYmVyT2ZNZWFscywgZmV0Y2hlciwgd3JpdGVUb0FQSSwgc3VtTnVtYmVyT2ZDb21tZW50cyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgdXBkYXRlTGlrZUR5biB9IGZyb20gJy4vbGlrZXMnO1xuaW1wb3J0IHsgYWRkQ29tbWVudCB9IGZyb20gJy4vY29tbWVudHMnO1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG5jb25zdCBjb3VudGVyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmxvZ28uc3JjID0gTG9nbztcbmNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xubGV0IGxpa2VCdG5zO1xuY29uc3QgbWVhbHNBcnJheSA9IFtdO1xuY29uc3QgZmV0Y2hNZWFscyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChtZWFsc0FQSSk7XG4gIGNvbnN0IG1lYWxzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gbWVhbHM7XG59O1xuY29uc3QgYXBwZW5kTWVhbFRvTWVhbHNBcnJheSA9IChtZWFscykgPT4ge1xuICBtZWFscy5tZWFscy5mb3JFYWNoKChtZWFsKSA9PiB7XG4gICAgbWVhbHNBcnJheS5wdXNoKG1lYWwpO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlDb21tZW50cyA9IChjb21tZW50cywgcGFyZW50RWxlKSA9PiB7XG4gIGxldCBsaXN0SXRlbXMgPSAnJztcbiAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgIGxpc3RJdGVtcyArPSBgPGxpPjxzcGFuPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTxzcGFuPlxuICAgIDxzcGFuPiR7Y29tbWVudC51c2VybmFtZX06PC9zcGFuPiA8c3Bhbj4ke2NvbW1lbnQuY29tbWVudH08L3NwYW4+PC9saT5gO1xuICAgIHBhcmVudEVsZS5pbm5lckhUTUwgPSBsaXN0SXRlbXM7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlRGV0YWlsc1BvcHVwID0gKG9iamVjdCkgPT4ge1xuICBsZXQgc2Vzc2lvbkNvbW1lbnRzO1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICBib2R5LmNsYXNzTGlzdC5hZGQoJ2Rpc1Njcm9sbCcpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbC5pZCA9ICdtb2RhbCc7XG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGAgIDxhcnRpY2xlPlxuICA8YnV0dG9uIGlkPSdtb2RhbC1pY29uJz48L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPSd0b3Atc2VjJz5cbiAgICA8aW1nIHNyYz0ke29iamVjdC5zdHJNZWFsVGh1bWJ9IC8+XG4gICAgPGgyPiR7b2JqZWN0LnN0ck1lYWx9PC9oMj5cbiAgICA8ZGl2IGNsYXNzPSdjYXQnPjxzcGFuPkNhdGVnb3J5PC9zcGFuPiA8c3Bhbj4ke29iamVjdC5zdHJDYXRlZ29yeX08L3NwYW4+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nb3JpJz48c3Bhbj5PcmlnaW48L3NwYW4+IDxzcGFuPiR7b2JqZWN0LnN0ckFyZWF9PC9zcGFuPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J2JvdHRvbS1zZWMnPlxuICAgIDxoMz5Db21tZW50czwvaDM+XG4gICAgPHVsIGlkPSdjb21tZW50cyc+PC91bD5cbiAgICA8aDQ+QWRkIGEgY29tbWVudDwvaDQ+XG4gICAgPC9kaXY+XG4gICAgPGZvcm0+XG4gIDxmaWVsZHNldD5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQgLz5cbiAgICA8L2Rpdj5cbiAgICA8dGV4dGFyZWFcbiAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICBwbGFjZWhvbGRlcj1cIllvdXIgSW5zaWdodFwiXG4gICAgICBtYXhsZW5ndGg9XCI1MDBcIlxuICAgICAgcmVxdWlyZWRcbiAgICA+PC90ZXh0YXJlYT5cbiAgICA8ZGl2IGNsYXNzPVwic3VibWl0LWNvbnRhaW5lclwiPlxuICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdC1idG5cIiBjbGFzcz1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgQ29tbWVudFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZmllbGRzZXQ+XG48L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvYXJ0aWNsZT5gO1xuICBtb2RhbC5pbm5lckhUTUwgPSBtb2RhbENvbnRlbnQ7XG4gIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idG4nKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpO1xuICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cycpO1xuICBjb25zdCBjb21tZW50SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20tc2VjIGgzJyk7XG4gIGZldGNoZXIoYGNvbW1lbnRzP2l0ZW1faWQ9JHtvYmplY3QuaWRNZWFsfWApLnRoZW4oKGNvbW1lbnRzKSA9PiB7XG4gICAgc2Vzc2lvbkNvbW1lbnRzID0gY29tbWVudHMubGVuZ3RoO1xuICAgIGRpc3BsYXlDb21tZW50cyhjb21tZW50cywgbGlzdEVsZW1lbnQpO1xuICAgIHN1bU51bWJlck9mQ29tbWVudHMoY29tbWVudHMsIGNvbW1lbnRIZWFkaW5nKTtcbiAgfSk7XG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWljb24nKTtcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNTY3JvbGwnKTtcbiAgICBtb2RhbC5yZW1vdmUoKTtcbiAgfSk7XG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIHNlc3Npb25Db21tZW50cyA9IHNlc3Npb25Db21tZW50cyArIDE7XG4gICAgY29uc3QgdG9kYXkgPSBgJHttbX0tJHtkZH0tJHt5eXl5fWA7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRDb21tZW50KG9iamVjdC5pZE1lYWwsIG5hbWUudmFsdWUsIGNvbW1lbnQudmFsdWUpO1xuICAgIGxpc3RFbGVtZW50LmlubmVySFRNTCArPSBgPGxpPjxzcGFuPiR7dG9kYXl9PHNwYW4+XG4gICAgPHNwYW4+JHtuYW1lLnZhbHVlfTo8L3NwYW4+PHNwYW4+JHtjb21tZW50LnZhbHVlfTwvc3Bhbj48L2xpPmA7XG4gICAgY29tbWVudEhlYWRpbmcuaW5uZXJIVE1MID0gYENvbW1lbnRzKCR7c2Vzc2lvbkNvbW1lbnRzfSlgO1xuICB9KTtcbn07XG5jb25zdCBkaXNwbGF5TWVhbHMgPSAobGlrZXMsIG1lYWxzKSA9PiB7XG4gIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMtbGlzdCcpO1xuICBsZXQgbGlzdEl0ZW1zID0gJyc7XG4gIGxldCBjb21tZW50QnV0dG9ucztcbiAgc3VtTnVtYmVyT2ZNZWFscyhtZWFscywgY291bnRlclRleHQpO1xuICBtZWFscy5mb3JFYWNoKChtZWFsLCBpbmRleCkgPT4ge1xuICAgIG1lYWwubGlrZXMgPSBsaWtlc1tpbmRleF0ubGlrZXM7XG4gIH0pO1xuICBtZWFscy5mb3JFYWNoKChtZWFsKSA9PiB7XG4gICAgbGlzdEl0ZW1zICs9IGA8bGk+PGRpdiBjbGFzcz1cImNhcmRcIj4gPGltZyBjbGFzcz0nY2FyZC1pbWFnZScgc3JjPSR7bWVhbC5zdHJNZWFsVGh1bWJ9IGFsdD0ke21lYWwuc3RyTWVhbH0vPlxuICAgIDxkaXYgY2xhc3M9J2NhcmQtaGVhZGVyJz48c3BhbiBjbGFzcz0nbWVhbC1uYW1lJz4ke21lYWwuc3RyTWVhbH08L3NwYW4+IDxzcGFuPjxidXR0b24gaWQ9JHttZWFsLmlkTWVhbH0gY2xhc3M9J2xpa2UtaWNvbicgdHlwZT0nYnV0dG9uJz48L2J1dHRvbj48L3NwYW4+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nbGlrZS1jb250Jz4gPHNwYW4+JHttZWFsLmxpa2VzfSBMaWtlczwvc3Bhbj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdjbXRidG4tc2VjJz48YnV0dG9uIGNsYXNzPSdidXR0b24nIGlkPSR7bWVhbC5pZE1lYWx9IHR5cGU9J2J1dHRvbic+Q29tbWVudHM8L2J1dHRvbj48L2Rpdj4gPC9kaXY+PC9saT5gO1xuICAgIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gbGlzdEl0ZW1zO1xuICB9KTtcbiAgbGlrZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS1pY29uJyk7XG4gIGNvbW1lbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNtdGJ0bi1zZWMgYnV0dG9uJyk7XG4gIGNvbW1lbnRCdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjcmVhdGVEZXRhaWxzUG9wdXAobWVhbHNbaW5kZXhdKTtcbiAgICB9KTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKGNvbW1lbnRCdXR0b25zKTtcbiAgbGlrZUJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICB1cGRhdGVMaWtlRHluKG1lYWxzLCBidXR0b24uaWQsIGV2ZW50KTtcbiAgICAgIHdyaXRlVG9BUEkoeyBpdGVtX2lkOiBidXR0b24uaWQgfSwgJ2xpa2VzJyk7XG4gICAgfSk7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhtZWFsc1swXSk7XG59O1xuY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgZmV0Y2hNZWFscygpLnRoZW4oKG1lYWxzKSA9PiB7XG4gICAgYXBwZW5kTWVhbFRvTWVhbHNBcnJheShtZWFscyk7XG4gIH0pO1xuICBmZXRjaGVyKCdsaWtlcycpLnRoZW4oKGxpa2VzKSA9PiB7XG4gICAgZGlzcGxheU1lYWxzKGxpa2VzLCBtZWFsc0FycmF5KTtcbiAgfSk7XG59O1xud2luZG93Lm9ubG9hZCA9IGxvYWQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9