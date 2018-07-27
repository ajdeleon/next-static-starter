webpackHotUpdate(4,{

/***/ "./components/Component.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/adeleon/coding/next/static-site/components/Component.js: Unexpected token (1:15)\n\n> 1 | export default = () =>\n    |                ^\n  2 |   <div>\n  3 |     <p>Component</p>\n  4 |     <style jsx>{`\n    at _class.raise (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:2063:16)\n    at _class.parseExprAtom (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:3125:20)\n    at _class.parseExprAtom (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprSubscripts (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:2725:21)\n    at _class.parseMaybeUnary (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseExportDefaultExpression (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:4971:22)\n    at _class.parseExport (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:4931:31)\n    at _class.parseStatementContent (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:4013:27)\n    at _class.parseStatement (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/adeleon/coding/next/static-site/node_modules/babylon/lib/index.js:4470:23)");

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Component__ = __webpack_require__("./components/Component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Component__);
var _jsxFileName = "/Users/adeleon/coding/next/static-site/pages/index.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-3821483815"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-3821483815"
  }, "Main App"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3821483815",
    css: "h1.jsx-3821483815{color:mediumPurple;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtnQixBQUc0QixtQkFDckIiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FkZWxlb24vY29kaW5nL25leHQvc3RhdGljLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGgxPk1haW4gQXBwPC9oMT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSB7XG4gICAgICAgIGNvbG9yOiBtZWRpdW1QdXJwbGU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.1170bf8136b0009ad777.hot-update.js.map