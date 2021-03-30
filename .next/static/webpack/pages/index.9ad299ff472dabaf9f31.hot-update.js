webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Countdown\", function() { return Countdown; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_juajxavier_upme_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CountdownContext */ \"./src/contexts/CountdownContext.tsx\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ \"./src/styles/components/Countdown.module.css\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/home/juajxavier/upme/src/components/Countdown.tsx\",\n    _s = $RefreshSig$();\n\n\n\n // let countdownTimeout: NodeJS.Timeout; // variável global do js\n\nfunction Countdown() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__[\"CountdownContext\"]),\n      minutes = _useContext.minutes,\n      seconds = _useContext.seconds,\n      finished = _useContext.finished,\n      isActive = _useContext.isActive,\n      startCountdown = _useContext.startCountdown,\n      resetCountdown = _useContext.resetCountdown; // const { startNewChallenge } = useContext(ChallengesContext);\n\n  /* const [time, setTime] = useState(0.05 * 60); // 25 * 60 pra passar 25 minutos pra segundos.\n  const [isActive, setIsActive] = useState(false); // estado que armazena a atividade ou não do timer.\n  const [finished, setFinished] = useState(false);\n   const minutes = Math.floor(time / 60); // Math.floor para arredondar o número pra baixo, 24.3 pra 24, por exemplo.\n  const seconds = time % 60; // resto da divisão pra ver quantos segundos faltam. */\n\n\n  var _String$padStart$spli = String(minutes).padStart(2, \"0\").split(\"\"),\n      _String$padStart$spli2 = Object(_home_juajxavier_upme_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli, 2),\n      minuteLeft = _String$padStart$spli2[0],\n      minuteRight = _String$padStart$spli2[1]; //padStart = se a string não tiver 2 caracteres, vai adicionar um 0 no início. Split('') para criar um array separando os números por espaço.\n\n\n  var _String$padStart$spli3 = String(seconds).padStart(2, \"0\").split(\"\"),\n      _String$padStart$spli4 = Object(_home_juajxavier_upme_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli3, 2),\n      secondLeft = _String$padStart$spli4[0],\n      secondRight = _String$padStart$spli4[1]; //minutos e segundso dividos entre esquerda e direita em [] = desestruturação js.\n\n  /* function startCountdown() {\n    setIsActive(true);\n  }\n   function resetCountdown() {\n    clearTimeout(countdownTimeout); // para cortar o timeout atual.\n    setIsActive(false);\n    setTime(25 * 60);\n  }\n   useEffect(() => {\n    if (isActive && time > 0) {\n      countdownTimeout = setTimeout(() => {\n        // setTimeout = pra algo acontecer depois de x tempo.\n        setTime(time - 1);\n      }, 1000); // função executada depois de 1segundo.\n    } else if (isActive && time === 0) {\n      setFinished(true);\n      setIsActive(false);\n      startNewChallenge();\n    }\n  }, [isActive, time]); // disparado quando o active for atualizado pelo valor armazenado em setActive e time em setTime. */\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \":\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this), finished ?\n    /*#__PURE__*/\n    // \"finished && ()\" = if -> then, dessa forma faz uma condicional que pula o \"else\".\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      disabled: true,\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton // Concatenando estilos.\n      ,\n      children: \"Ciclo finalizado\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        className: \"\".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton, \" \").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButtonActive) // Concatenando estilos.\n        ,\n        onClick: resetCountdown,\n        children: \"Abandonar ciclo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 13\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,\n        onClick: startCountdown,\n        children: \"Iniciar um ciclo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 13\n      }, this)\n    }, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Countdown, \"GGhHXja6gkkwhLaKSDYEsE0wGhA=\");\n\n_c = Countdown;\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeD82MzY2Il0sIm5hbWVzIjpbIkNvdW50ZG93biIsInVzZUNvbnRleHQiLCJDb3VudGRvd25Db250ZXh0IiwibWludXRlcyIsInNlY29uZHMiLCJmaW5pc2hlZCIsImlzQWN0aXZlIiwic3RhcnRDb3VudGRvd24iLCJyZXNldENvdW50ZG93biIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCJzdHlsZXMiLCJjb3VudGRvd25Db250YWluZXIiLCJjb3VudGRvd25CdXR0b24iLCJjb3VudGRvd25CdXR0b25BY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUVPLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxvQkFRdEJDLHdEQUFVLENBQUNDLDJFQUFELENBUlk7QUFBQSxNQUV4QkMsT0FGd0IsZUFFeEJBLE9BRndCO0FBQUEsTUFHeEJDLE9BSHdCLGVBR3hCQSxPQUh3QjtBQUFBLE1BSXhCQyxRQUp3QixlQUl4QkEsUUFKd0I7QUFBQSxNQUt4QkMsUUFMd0IsZUFLeEJBLFFBTHdCO0FBQUEsTUFNeEJDLGNBTndCLGVBTXhCQSxjQU53QjtBQUFBLE1BT3hCQyxjQVB3QixlQU94QkEsY0FQd0IsRUFTMUI7O0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBZjRCLDhCQWtCUUMsTUFBTSxDQUFDTixPQUFELENBQU4sQ0FBZ0JPLFFBQWhCLENBQXlCLENBQXpCLEVBQTRCLEdBQTVCLEVBQWlDQyxLQUFqQyxDQUF1QyxFQUF2QyxDQWxCUjtBQUFBO0FBQUEsTUFrQm5CQyxVQWxCbUI7QUFBQSxNQWtCUEMsV0FsQk8sOEJBa0JvRDs7O0FBbEJwRCwrQkFtQlFKLE1BQU0sQ0FBQ0wsT0FBRCxDQUFOLENBQWdCTSxRQUFoQixDQUF5QixDQUF6QixFQUE0QixHQUE1QixFQUFpQ0MsS0FBakMsQ0FBdUMsRUFBdkMsQ0FuQlI7QUFBQTtBQUFBLE1BbUJuQkcsVUFuQm1CO0FBQUEsTUFtQlBDLFdBbkJPLDhCQW1Cb0Q7O0FBRTlFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUlFLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVDLDhFQUFNLENBQUNDLGtCQUF2QjtBQUFBLDhCQUNFO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBT0w7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxvQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxvQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBYUdWLFFBQVE7QUFBQTtBQUFLO0FBQ1o7QUFDRSxjQUFRLE1BRFY7QUFFRSxlQUFTLEVBQUVXLDhFQUFNLENBQUNFLGVBRnBCLENBRXFDO0FBRnJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE8sZ0JBUVA7QUFBQSxnQkFDR1osUUFBUSxnQkFDUDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsWUFBS1UsOEVBQU0sQ0FBQ0UsZUFBWixjQUErQkYsOEVBQU0sQ0FBQ0cscUJBQXRDLENBRlgsQ0FFMEU7QUFGMUU7QUFHRSxlQUFPLEVBQUVYLGNBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETyxnQkFTUDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBRVEsOEVBQU0sQ0FBQ0UsZUFGcEI7QUFHRSxlQUFPLEVBQUVYLGNBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWSixxQkFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0Q0Q7O0dBeEZlUCxTOztLQUFBQSxTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvdW50ZG93bkNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQ291bnRkb3duQ29udGV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3NcIjtcblxuLy8gbGV0IGNvdW50ZG93blRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0OyAvLyB2YXJpw6F2ZWwgZ2xvYmFsIGRvIGpzXG5cbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd24oKSB7XG4gIGNvbnN0IHtcbiAgICBtaW51dGVzLFxuICAgIHNlY29uZHMsXG4gICAgZmluaXNoZWQsXG4gICAgaXNBY3RpdmUsXG4gICAgc3RhcnRDb3VudGRvd24sXG4gICAgcmVzZXRDb3VudGRvd24sXG4gIH0gPSB1c2VDb250ZXh0KENvdW50ZG93bkNvbnRleHQpO1xuICAvLyBjb25zdCB7IHN0YXJ0TmV3Q2hhbGxlbmdlIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcblxuICAvKiBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwLjA1ICogNjApOyAvLyAyNSAqIDYwIHByYSBwYXNzYXIgMjUgbWludXRvcyBwcmEgc2VndW5kb3MuXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBlc3RhZG8gcXVlIGFybWF6ZW5hIGEgYXRpdmlkYWRlIG91IG7Do28gZG8gdGltZXIuXG4gIGNvbnN0IFtmaW5pc2hlZCwgc2V0RmluaXNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7IC8vIE1hdGguZmxvb3IgcGFyYSBhcnJlZG9uZGFyIG8gbsO6bWVybyBwcmEgYmFpeG8sIDI0LjMgcHJhIDI0LCBwb3IgZXhlbXBsby5cbiAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDsgLy8gcmVzdG8gZGEgZGl2aXPDo28gcHJhIHZlciBxdWFudG9zIHNlZ3VuZG9zIGZhbHRhbS4gKi9cblxuICBjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsIFwiMFwiKS5zcGxpdChcIlwiKTsgLy9wYWRTdGFydCA9IHNlIGEgc3RyaW5nIG7Do28gdGl2ZXIgMiBjYXJhY3RlcmVzLCB2YWkgYWRpY2lvbmFyIHVtIDAgbm8gaW7DrWNpby4gU3BsaXQoJycpIHBhcmEgY3JpYXIgdW0gYXJyYXkgc2VwYXJhbmRvIG9zIG7Dum1lcm9zIHBvciBlc3Bhw6dvLlxuICBjb25zdCBbc2Vjb25kTGVmdCwgc2Vjb25kUmlnaHRdID0gU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsIFwiMFwiKS5zcGxpdChcIlwiKTsgLy9taW51dG9zIGUgc2VndW5kc28gZGl2aWRvcyBlbnRyZSBlc3F1ZXJkYSBlIGRpcmVpdGEgZW0gW10gPSBkZXNlc3RydXR1cmHDp8OjbyBqcy5cblxuICAvKiBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpIHtcbiAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Q291bnRkb3duKCkge1xuICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KTsgLy8gcGFyYSBjb3J0YXIgbyB0aW1lb3V0IGF0dWFsLlxuICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICBzZXRUaW1lKDI1ICogNjApO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNBY3RpdmUgJiYgdGltZSA+IDApIHtcbiAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gc2V0VGltZW91dCA9IHByYSBhbGdvIGFjb250ZWNlciBkZXBvaXMgZGUgeCB0ZW1wby5cbiAgICAgICAgc2V0VGltZSh0aW1lIC0gMSk7XG4gICAgICB9LCAxMDAwKTsgLy8gZnVuw6fDo28gZXhlY3V0YWRhIGRlcG9pcyBkZSAxc2VndW5kby5cbiAgICB9IGVsc2UgaWYgKGlzQWN0aXZlICYmIHRpbWUgPT09IDApIHtcbiAgICAgIHNldEZpbmlzaGVkKHRydWUpO1xuICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xuICAgICAgc3RhcnROZXdDaGFsbGVuZ2UoKTtcbiAgICB9XG4gIH0sIFtpc0FjdGl2ZSwgdGltZV0pOyAvLyBkaXNwYXJhZG8gcXVhbmRvIG8gYWN0aXZlIGZvciBhdHVhbGl6YWRvIHBlbG8gdmFsb3IgYXJtYXplbmFkbyBlbSBzZXRBY3RpdmUgZSB0aW1lIGVtIHNldFRpbWUuICovXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250YWluZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuPnttaW51dGVMZWZ0fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57bWludXRlUmlnaHR9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e3NlY29uZFJpZ2h0fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2ZpbmlzaGVkID8gKCAvLyBcImZpbmlzaGVkICYmICgpXCIgPSBpZiAtPiB0aGVuLCBkZXNzYSBmb3JtYSBmYXogdW1hIGNvbmRpY2lvbmFsIHF1ZSBwdWxhIG8gXCJlbHNlXCIuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0gLy8gQ29uY2F0ZW5hbmRvIGVzdGlsb3MuXG4gICAgICAgID5cbiAgICAgICAgICBDaWNsbyBmaW5hbGl6YWRvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7aXNBY3RpdmUgPyAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3VudGRvd25CdXR0b259ICR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbkFjdGl2ZX1gfSAvLyBDb25jYXRlbmFuZG8gZXN0aWxvcy5cbiAgICAgICAgICAgICAgb25DbGljaz17cmVzZXRDb3VudGRvd259XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFiYW5kb25hciBjaWNsb1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRDb3VudGRvd259XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEluaWNpYXIgdW0gY2ljbG9cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n");

/***/ })

})