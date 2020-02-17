webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Characters/index.tsx":
/*!*****************************************!*\
  !*** ./components/Characters/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/juan.marval/projects/nextjs/rick-and-morty/components/Characters/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var StyledCharacterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Characters__StyledCharacterContainer",
  componentId: "vo688u-0"
})(["display:flex;"]);
var StyledCharacterImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Characters__StyledCharacterImg",
  componentId: "vo688u-1"
})(["width:100%;height:100px"]);
var StyledCharacterInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Characters__StyledCharacterInfo",
  componentId: "vo688u-2"
})(["display:flex;flex-direction:column;width:150px;"]);

var Characters = function Characters(props) {
  var character = props.character;
  return __jsx(StyledCharacterContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(StyledCharacterInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Name: ", character.name), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Status: ", character.status), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Gender: ", character.gender)), __jsx(StyledCharacterImg, {
    src: character.image,
    alt: character.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Characters);

/***/ })

})
//# sourceMappingURL=index.js.dd674c03c08bf8591ff9.hot-update.js.map