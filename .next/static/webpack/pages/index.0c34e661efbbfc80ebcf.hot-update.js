webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
false,

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Countdown\", function() { return Countdown; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_juajxavier_upme_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ \"./src/styles/components/Countdown.module.css\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/home/juajxavier/upme/src/components/Countdown.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar countdownTimeout; // variável global do js\n\nfunction Countdown() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__[\"ChallengesContext\"]),\n      startNewChallenge = _useContext.startNewChallenge;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0.05 * 60),\n      time = _useState[0],\n      setTime = _useState[1]; // 25 * 60 pra passar 25 minutos pra segundos.\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1]; // estado que armazena a atividade ou não do timer.\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      finished = _useState3[0],\n      setFinished = _useState3[1];\n\n  var minutes = Math.floor(time / 60); // Math.floor para arredondar o número pra baixo, 24.3 pra 24, por exemplo.\n\n  var seconds = time % 60; // resto da divisão pra ver quantos segundos faltam.\n\n  var _String$padStart$spli = String(minutes).padStart(2, \"0\").split(\"\"),\n      _String$padStart$spli2 = Object(_home_juajxavier_upme_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli, 2),\n      minuteLeft = _String$padStart$spli2[0],\n      minuteRight = _String$padStart$spli2[1]; //padStart = se a string não tiver 2 caracteres, vai adicionar um 0 no início. Split('') para criar um array separando os números por espaço.\n\n\n  var _String$padStart$spli3 = String(seconds).padStart(2, \"0\").split(\"\"),\n      _String$padStart$spli4 = Object(_home_juajxavier_upme_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli3, 2),\n      secondLeft = _String$padStart$spli4[0],\n      secondRight = _String$padStart$spli4[1]; //minutos e segundso dividos entre esquerda e direita em [] = desestruturação js.\n\n\n  function startCountdown() {\n    setIsActive(true);\n  }\n\n  function resetCountdown() {\n    clearTimeout(countdownTimeout); // para cortar o timeout atual.\n\n    setIsActive(false);\n    setTime(25 * 60);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (isActive && time > 0) {\n      countdownTimeout = setTimeout(function () {\n        // setTimeout = pra algo acontecer depois de x tempo.\n        setTime(time - 1);\n      }, 1000); // função executada depois de 1segundo.\n    } else if (isActive && time === 0) {\n      setFinished(true);\n      setIsActive(false);\n    }\n  }, [isActive, time]); // disparado quando o active for atualizado pelo valor armazenado em setActive e time em setTime.\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \":\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), finished ?\n    /*#__PURE__*/\n    // \"finished && ()\" = if -> then, dessa forma faz uma condicional que pula o \"else\".\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      disabled: true,\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton // Concatenando estilos.\n      ,\n      children: \"Ciclo finalizado\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        className: \"\".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton, \" \").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButtonActive) // Concatenando estilos.\n        ,\n        onClick: resetCountdown,\n        children: \"Abandonar ciclo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 13\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,\n        onClick: startCountdown,\n        children: \"Iniciar um ciclo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 13\n      }, this)\n    }, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Countdown, \"w5a6jlFNf33AVlyjrbw7EskCAvg=\");\n\n_c = Countdown;\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeD82MzY2Il0sIm5hbWVzIjpbImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd24iLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJzdGFydE5ld0NoYWxsZW5nZSIsInVzZVN0YXRlIiwidGltZSIsInNldFRpbWUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiZmluaXNoZWQiLCJzZXRGaW5pc2hlZCIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJzcGxpdCIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWdodCIsInNlY29uZExlZnQiLCJzZWNvbmRSaWdodCIsInN0YXJ0Q291bnRkb3duIiwicmVzZXRDb3VudGRvd24iLCJjbGVhclRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Iiwic3R5bGVzIiwiY291bnRkb3duQ29udGFpbmVyIiwiY291bnRkb3duQnV0dG9uIiwiY291bnRkb3duQnV0dG9uQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGdCQUFKLEMsQ0FBc0M7O0FBRS9CLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxvQkFDSUMsd0RBQVUsQ0FBQ0MsNkVBQUQsQ0FEZDtBQUFBLE1BQ2xCQyxpQkFEa0IsZUFDbEJBLGlCQURrQjs7QUFBQSxrQkFHRkMsc0RBQVEsQ0FBQyxPQUFPLEVBQVIsQ0FITjtBQUFBLE1BR25CQyxJQUhtQjtBQUFBLE1BR2JDLE9BSGEsaUJBR21COzs7QUFIbkIsbUJBSU1GLHNEQUFRLENBQUMsS0FBRCxDQUpkO0FBQUEsTUFJbkJHLFFBSm1CO0FBQUEsTUFJVEMsV0FKUyxrQkFJdUI7OztBQUp2QixtQkFLTUosc0RBQVEsQ0FBQyxLQUFELENBTGQ7QUFBQSxNQUtuQkssUUFMbUI7QUFBQSxNQUtU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O0FBQUE7QUFBQTtBQVZKLHFCQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRDRDs7R0EvRWV0QixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9Db3VudGRvd24ubW9kdWxlLmNzc1wiO1xuXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7IC8vIHZhcmnDoXZlbCBnbG9iYWwgZG8ganNcblxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93bigpIHtcbiAgY29uc3QgeyBzdGFydE5ld0NoYWxsZW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XG5cbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMC4wNSAqIDYwKTsgLy8gMjUgKiA2MCBwcmEgcGFzc2FyIDI1IG1pbnV0b3MgcHJhIHNlZ3VuZG9zLlxuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZXN0YWRvIHF1ZSBhcm1hemVuYSBhIGF0aXZpZGFkZSBvdSBuw6NvIGRvIHRpbWVyLlxuICBjb25zdCBbZmluaXNoZWQsIHNldEZpbmlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApOyAvLyBNYXRoLmZsb29yIHBhcmEgYXJyZWRvbmRhciBvIG7Dum1lcm8gcHJhIGJhaXhvLCAyNC4zIHByYSAyNCwgcG9yIGV4ZW1wbG8uXG4gIGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjA7IC8vIHJlc3RvIGRhIGRpdmlzw6NvIHByYSB2ZXIgcXVhbnRvcyBzZWd1bmRvcyBmYWx0YW0uXG5cbiAgY29uc3QgW21pbnV0ZUxlZnQsIG1pbnV0ZVJpZ2h0XSA9IFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCBcIjBcIikuc3BsaXQoXCJcIik7IC8vcGFkU3RhcnQgPSBzZSBhIHN0cmluZyBuw6NvIHRpdmVyIDIgY2FyYWN0ZXJlcywgdmFpIGFkaWNpb25hciB1bSAwIG5vIGluw61jaW8uIFNwbGl0KCcnKSBwYXJhIGNyaWFyIHVtIGFycmF5IHNlcGFyYW5kbyBvcyBuw7ptZXJvcyBwb3IgZXNwYcOnby5cbiAgY29uc3QgW3NlY29uZExlZnQsIHNlY29uZFJpZ2h0XSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCBcIjBcIikuc3BsaXQoXCJcIik7IC8vbWludXRvcyBlIHNlZ3VuZHNvIGRpdmlkb3MgZW50cmUgZXNxdWVyZGEgZSBkaXJlaXRhIGVtIFtdID0gZGVzZXN0cnV0dXJhw6fDo28ganMuXG5cbiAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKSB7XG4gICAgc2V0SXNBY3RpdmUodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpIHtcbiAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7IC8vIHBhcmEgY29ydGFyIG8gdGltZW91dCBhdHVhbC5cbiAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XG4gICAgc2V0VGltZSgyNSAqIDYwKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQWN0aXZlICYmIHRpbWUgPiAwKSB7XG4gICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIHNldFRpbWVvdXQgPSBwcmEgYWxnbyBhY29udGVjZXIgZGVwb2lzIGRlIHggdGVtcG8uXG4gICAgICAgIHNldFRpbWUodGltZSAtIDEpO1xuICAgICAgfSwgMTAwMCk7IC8vIGZ1bsOnw6NvIGV4ZWN1dGFkYSBkZXBvaXMgZGUgMXNlZ3VuZG8uXG4gICAgfSBlbHNlIGlmIChpc0FjdGl2ZSAmJiB0aW1lID09PSAwKSB7XG4gICAgICBzZXRGaW5pc2hlZCh0cnVlKTtcbiAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtpc0FjdGl2ZSwgdGltZV0pOyAvLyBkaXNwYXJhZG8gcXVhbmRvIG8gYWN0aXZlIGZvciBhdHVhbGl6YWRvIHBlbG8gdmFsb3IgYXJtYXplbmFkbyBlbSBzZXRBY3RpdmUgZSB0aW1lIGVtIHNldFRpbWUuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250YWluZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuPnttaW51dGVMZWZ0fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57bWludXRlUmlnaHR9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e3NlY29uZFJpZ2h0fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2ZpbmlzaGVkID8gKCAvLyBcImZpbmlzaGVkICYmICgpXCIgPSBpZiAtPiB0aGVuLCBkZXNzYSBmb3JtYSBmYXogdW1hIGNvbmRpY2lvbmFsIHF1ZSBwdWxhIG8gXCJlbHNlXCIuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0gLy8gQ29uY2F0ZW5hbmRvIGVzdGlsb3MuXG4gICAgICAgID5cbiAgICAgICAgICBDaWNsbyBmaW5hbGl6YWRvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7aXNBY3RpdmUgPyAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3VudGRvd25CdXR0b259ICR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbkFjdGl2ZX1gfSAvLyBDb25jYXRlbmFuZG8gZXN0aWxvcy5cbiAgICAgICAgICAgICAgb25DbGljaz17cmVzZXRDb3VudGRvd259XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFiYW5kb25hciBjaWNsb1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRDb3VudGRvd259XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEluaWNpYXIgdW0gY2ljbG9cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n");

/***/ })

})