"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/evServices/page",{

/***/ "(app-pages-browser)/./src/app/Services.tsx":
/*!******************************!*\
  !*** ./src/app/Services.tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav */ \"(app-pages-browser)/./src/app/components/nav.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ContactPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ContactPopup */ \"(app-pages-browser)/./src/app/components/ContactPopup.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Services = (param)=>{\n    let { backgroundImage, spanText, headerText, bgClass, text, endpoint } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isEvServices, setIsEvServices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isStaffing, setIsStaffing] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    console.log(\"Logging end point\", endpoint);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Services.useEffect\": ()=>{\n            setIsEvServices(window.location.pathname === \"/evServices\");\n        }\n    }[\"Services.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Services.useEffect\": ()=>{\n            setIsStaffing(window.location.pathname === \"/eventAndStaffing\");\n        }\n    }[\"Services.useEffect\"], []);\n    const togglePopup = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/Services.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overlay\"\n            }, void 0, false, {\n                fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/Services.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"header-bg \".concat(bgClass, \" relative !h-[80vh]\"),\n                style: {\n                    backgroundImage: \"url(\".concat(backgroundImage, \") !important\")\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"overlay\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/Services.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" !text-white px-4 md:px-28 flex flex-col gap-[20px] items-start justify-start text-left relative z-10 mr-auto max-w-[1080px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: spanText\n                            }, void 0, false, {\n                                fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/Services.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"!text-left !text-white\",\n                                children: headerText\n                            }, void 0, false, {\n                                fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/Services.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: text\n                            }, void 0, false, {\n                                fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/Services.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined),\n                            isStaffing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Our staffing personanel are vetted & background-checked prior to assignment\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/Services.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"If you have a staffing need, contact us and let us provide a solution.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/Services.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true),\n                            isEvServices && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                                    fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/Services.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/Services.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"global-btn\",\n                                onClick: ()=>{\n                                    setIsOpen(!isOpen);\n                                },\n                                children: \"CONTACT US\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/Services.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/Services.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContactPopup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        isOpen: isOpen,\n                        togglePopup: togglePopup\n                    }, void 0, false, {\n                        fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/Services.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/Services.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/Services.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Services, \"Lq3tQoIRBahTlPa6XdJwJjtUAa8=\");\n_c = Services;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);\nvar _c;\n$RefreshReg$(_c, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvU2VydmljZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTBDO0FBQ0U7QUFHUztBQVdyRCxNQUFNSSxXQUE2QjtRQUFDLEVBQ2xDQyxlQUFlLEVBQ2ZDLFFBQVEsRUFDUkMsVUFBVSxFQUNWQyxPQUFPLEVBQ1BDLElBQUksRUFDSkMsUUFBUSxFQUNUOztJQUNDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNZLGNBQWNDLGdCQUFnQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNjLFlBQVlDLGNBQWMsR0FBR2YsK0NBQVFBLENBQUM7SUFDN0NnQixRQUFRQyxHQUFHLENBQUMscUJBQXFCUjtJQUVqQ1IsZ0RBQVNBOzhCQUFDO1lBQ1JZLGdCQUFnQkssT0FBT0MsUUFBUSxDQUFDQyxRQUFRLEtBQUs7UUFDL0M7NkJBQUcsRUFBRTtJQUNMbkIsZ0RBQVNBOzhCQUFDO1lBQ1JjLGNBQWNHLE9BQU9DLFFBQVEsQ0FBQ0MsUUFBUSxLQUFLO1FBQzdDOzZCQUFHLEVBQUU7SUFFTCxNQUFNQyxjQUFjO1FBQ2xCVixVQUFVLENBQUNEO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ1k7OzBCQUNDLDhEQUFDdkIsdURBQVVBOzs7OzswQkFDWCw4REFBQ3VCO2dCQUFJQyxXQUFVOzs7Ozs7MEJBRWYsOERBQUNDO2dCQUNDRCxXQUFXLGFBQXFCLE9BQVJoQixTQUFRO2dCQUNoQ2tCLE9BQU87b0JBQUVyQixpQkFBaUIsT0FBdUIsT0FBaEJBLGlCQUFnQjtnQkFBYzs7a0NBRS9ELDhEQUFDa0I7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRzswQ0FBTXJCOzs7Ozs7MENBQ1AsOERBQUNzQjtnQ0FBR0osV0FBVTswQ0FBMEJqQjs7Ozs7OzBDQUN4Qyw4REFBQ3NCOzBDQUFHcEI7Ozs7Ozs0QkFFSE0sNEJBQ0M7O2tEQUNFLDhEQUFDYztrREFBRTs7Ozs7O2tEQUlILDhEQUFDQTtrREFBRTs7Ozs7Ozs7NEJBU05oQiw4QkFDQyw4REFBQ2lCOzBDQWVDLDRFQUFDRDs7Ozs7Ozs7OzswQ0FHTCw4REFBQ0U7Z0NBQ0NQLFdBQVU7Z0NBQ1ZRLFNBQVM7b0NBQ1BwQixVQUFVLENBQUNEO2dDQUNiOzBDQUNEOzs7Ozs7Ozs7Ozs7a0NBS0gsOERBQUNSLGdFQUFZQTt3QkFBQ1EsUUFBUUE7d0JBQVFXLGFBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkQ7R0F2Rk1sQjtLQUFBQTtBQXlGTixpRUFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3N5ZG5leXNhbmRlcnMvRGVza3RvcC9QTVNpdGUvbXktYXBwL3NyYy9hcHAvU2VydmljZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL25hdlwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBDaGVja0JveCBmcm9tIFwiLi9jb21wb25lbnRzL2NoZWNrYm94XCI7XG5pbXBvcnQgQ29udGFjdFBvcHVwIGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGFjdFBvcHVwXCI7XG5cbmludGVyZmFjZSBTZXJ2Y2Uge1xuICBiYWNrZ3JvdW5kSW1hZ2U6IHN0cmluZztcbiAgc3BhblRleHQ6IHN0cmluZztcbiAgaGVhZGVyVGV4dDogc3RyaW5nO1xuICBiZ0NsYXNzOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgZW5kcG9pbnQ/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFNlcnZpY2VzOiBSZWFjdC5GQzxTZXJ2Y2U+ID0gKHtcbiAgYmFja2dyb3VuZEltYWdlLFxuICBzcGFuVGV4dCxcbiAgaGVhZGVyVGV4dCxcbiAgYmdDbGFzcyxcbiAgdGV4dCxcbiAgZW5kcG9pbnQsXG59KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0V2U2VydmljZXMsIHNldElzRXZTZXJ2aWNlc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N0YWZmaW5nLCBzZXRJc1N0YWZmaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc29sZS5sb2coXCJMb2dnaW5nIGVuZCBwb2ludFwiLCBlbmRwb2ludCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0V2U2VydmljZXMod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9ldlNlcnZpY2VzXCIpO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNTdGFmZmluZyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2V2ZW50QW5kU3RhZmZpbmdcIik7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2dnbGVQb3B1cCA9ICgpID0+IHtcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxuXG4gICAgICA8aGVhZGVyXG4gICAgICAgIGNsYXNzTmFtZT17YGhlYWRlci1iZyAke2JnQ2xhc3N9IHJlbGF0aXZlICFoLVs4MHZoXWB9XG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWFnZX0pICFpbXBvcnRhbnRgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiAhdGV4dC13aGl0ZSBweC00IG1kOnB4LTI4IGZsZXggZmxleC1jb2wgZ2FwLVsyMHB4XSBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0IHRleHQtbGVmdCByZWxhdGl2ZSB6LTEwIG1yLWF1dG8gbWF4LXctWzEwODBweF1cIj5cbiAgICAgICAgICA8c3Bhbj57c3BhblRleHR9PC9zcGFuPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIhdGV4dC1sZWZ0ICF0ZXh0LXdoaXRlXCI+e2hlYWRlclRleHR9PC9oMT5cbiAgICAgICAgICA8cD57dGV4dH08L3A+XG5cbiAgICAgICAgICB7aXNTdGFmZmluZyAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBPdXIgc3RhZmZpbmcgcGVyc29uYW5lbCBhcmUgdmV0dGVkICYgYmFja2dyb3VuZC1jaGVja2VkIHByaW9yIHRvXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIElmIHlvdSBoYXZlIGEgc3RhZmZpbmcgbmVlZCwgY29udGFjdCB1cyBhbmQgbGV0IHVzIHByb3ZpZGUgYVxuICAgICAgICAgICAgICAgIHNvbHV0aW9uLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtpc0V2U2VydmljZXMgJiYgKFxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7LyogPGxpPkFkdmlzb3J5L0NvbnN1bHRhdGlvbjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TaXRlIERlc2lnbjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TaXRlIFByZXA8L2xpPlxuICAgICAgICAgICAgICA8bGk+SW5zdGFsbGF0aW9uPC9saT5cbiAgICAgICAgICAgICAgPGxpPkNvbW1pc3Npb25pbmc8L2xpPlxuICAgICAgICAgICAgICA8bGk+TWFpbnRlbmFuY2U8L2xpPiAqL31cbiAgICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICAgIFdlIGhhdmUgcHJvZmVzc2lvbmFsIHJlbGF0aW9uc2hpcHMgd2l0aCBSZWFkeUNoYXJnZSBTZXJ2aWNlc1xuICAgICAgICAgICAgICAgIEluYywgRkxPIE5ldHdvcmssIEVWIENvbm5lY3QsXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgYW5kIEJsaW5rIE5ldHdvcmsuIFdlIGFsc28gaGF2ZSB0aGUgYWJpbGl0eSB0byBoZWxwIGNsaWVudHNcbiAgICAgICAgICAgICAgICBmaW5hbmNlIGFuZCBwcm9jdXJlIEluZnJhc3RydWN0dXJlIGVxdWlwbWVudC5cbiAgICAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdsb2JhbC1idG5cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENPTlRBQ1QgVVNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPENvbnRhY3RQb3B1cCBpc09wZW49e2lzT3Blbn0gdG9nZ2xlUG9wdXA9e3RvZ2dsZVBvcHVwfSAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlcztcbiJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250YWN0UG9wdXAiLCJTZXJ2aWNlcyIsImJhY2tncm91bmRJbWFnZSIsInNwYW5UZXh0IiwiaGVhZGVyVGV4dCIsImJnQ2xhc3MiLCJ0ZXh0IiwiZW5kcG9pbnQiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJpc0V2U2VydmljZXMiLCJzZXRJc0V2U2VydmljZXMiLCJpc1N0YWZmaW5nIiwic2V0SXNTdGFmZmluZyIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidG9nZ2xlUG9wdXAiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJzdHlsZSIsInNwYW4iLCJoMSIsInAiLCJ1bCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Services.tsx\n"));

/***/ })

});