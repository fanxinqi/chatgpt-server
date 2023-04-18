"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./modules/utils/index.ts":
/*!********************************!*\
  !*** ./modules/utils/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: \"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\"\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n// ChatGPT模型的实现\nconst chatGPT = async (context = [], input)=>{\n    if (!Array.isArray(input)) return {\n        context,\n        ouput: \"我不知道你在说什么\"\n    };\n    // 调用openai的接口\n    const completion = await openai.createChatCompletion({\n        model: \"gpt-3.5-turbo\",\n        messages: context.concat(input)\n    });\n    if (!completion.data?.choices) return {\n        context,\n        ouput: \"我不知道你在说什么\"\n    };\n    // 把当前的输入和输出都加入到context中,供下一次调用\n    const ouput = completion.data?.choices.map((item)=>item?.message?.content)[0];\n    context.push({\n        role: \"assistant\",\n        content: ouput\n    });\n    return {\n        context,\n        ouput\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chatGPT);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2R1bGVzL3V0aWxzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDtBQUNsRCxNQUFNRSxnQkFBZ0IsSUFBSUYsaURBQWFBLENBQUM7SUFDdENHLFFBQVE7QUFDVjtBQUNBLE1BQU1DLFNBQVMsSUFBSUgsNkNBQVNBLENBQUNDO0FBRTdCLGVBQWU7QUFDZixNQUFNRyxVQUFVLE9BQU9DLFVBQVUsRUFBRSxFQUFFQyxRQUFVO0lBQzdDLElBQUksQ0FBQ0MsTUFBTUMsT0FBTyxDQUFDRixRQUNqQixPQUFPO1FBQ0xEO1FBQ0FJLE9BQU87SUFDVDtJQUVGLGNBQWM7SUFDZCxNQUFNQyxhQUFhLE1BQU1QLE9BQU9RLG9CQUFvQixDQUFDO1FBQ25EQyxPQUFPO1FBQ1BDLFVBQVVSLFFBQVFTLE1BQU0sQ0FBQ1I7SUFDM0I7SUFFQSxJQUFJLENBQUNJLFdBQVdLLElBQUksRUFBRUMsU0FDcEIsT0FBTztRQUNMWDtRQUNBSSxPQUFPO0lBQ1Q7SUFFRiwrQkFBK0I7SUFDL0IsTUFBTUEsUUFBUUMsV0FBV0ssSUFBSSxFQUFFQyxRQUFRQyxHQUFHLENBQ3hDLENBQUNDLE9BQVNBLE1BQU1DLFNBQVNDLFFBQzFCLENBQUMsRUFBRTtJQUNKZixRQUFRZ0IsSUFBSSxDQUFDO1FBQUVDLE1BQU07UUFBYUYsU0FBU1g7SUFBTTtJQUNqRCxPQUFPO1FBQUVKO1FBQVNJO0lBQU07QUFDMUI7QUFFQSxpRUFBZUwsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRncHQtbm9kZS8uL21vZHVsZXMvdXRpbHMvaW5kZXgudHM/YjZlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IFwic2stbmVrN3JJYmJORk56RHZZdFNMSURUM0JsYmtGSlo5QlJrRDR6UUN5dERHbjk2OEhCXCIsXG59KTtcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5cbi8vIENoYXRHUFTmqKHlnovnmoTlrp7njrBcbmNvbnN0IGNoYXRHUFQgPSBhc3luYyAoY29udGV4dCA9IFtdLCBpbnB1dCkgPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKVxuICAgIHJldHVybiB7XG4gICAgICBjb250ZXh0LFxuICAgICAgb3VwdXQ6IFwi5oiR5LiN55+l6YGT5L2g5Zyo6K+05LuA5LmIXCIsXG4gICAgfTtcblxuICAvLyDosIPnlKhvcGVuYWnnmoTmjqXlj6NcbiAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDaGF0Q29tcGxldGlvbih7XG4gICAgbW9kZWw6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgIG1lc3NhZ2VzOiBjb250ZXh0LmNvbmNhdChpbnB1dCksXG4gIH0pO1xuXG4gIGlmICghY29tcGxldGlvbi5kYXRhPy5jaG9pY2VzKVxuICAgIHJldHVybiB7XG4gICAgICBjb250ZXh0LFxuICAgICAgb3VwdXQ6IFwi5oiR5LiN55+l6YGT5L2g5Zyo6K+05LuA5LmIXCIsXG4gICAgfTtcblxuICAvLyDmiorlvZPliY3nmoTovpPlhaXlkozovpPlh7rpg73liqDlhaXliLBjb250ZXh05LitLOS+m+S4i+S4gOasoeiwg+eUqFxuICBjb25zdCBvdXB1dCA9IGNvbXBsZXRpb24uZGF0YT8uY2hvaWNlcy5tYXAoXG4gICAgKGl0ZW0pID0+IGl0ZW0/Lm1lc3NhZ2U/LmNvbnRlbnRcbiAgKVswXTtcbiAgY29udGV4dC5wdXNoKHsgcm9sZTogXCJhc3Npc3RhbnRcIiwgY29udGVudDogb3VwdXQgfSk7XG4gIHJldHVybiB7IGNvbnRleHQsIG91cHV0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGF0R1BUO1xuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5Iiwib3BlbmFpIiwiY2hhdEdQVCIsImNvbnRleHQiLCJpbnB1dCIsIkFycmF5IiwiaXNBcnJheSIsIm91cHV0IiwiY29tcGxldGlvbiIsImNyZWF0ZUNoYXRDb21wbGV0aW9uIiwibW9kZWwiLCJtZXNzYWdlcyIsImNvbmNhdCIsImRhdGEiLCJjaG9pY2VzIiwibWFwIiwiaXRlbSIsIm1lc3NhZ2UiLCJjb250ZW50IiwicHVzaCIsInJvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./modules/utils/index.ts\n");

/***/ }),

/***/ "(api)/./pages/api/chat.js":
/*!***************************!*\
  !*** ./pages/api/chat.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/utils */ \"(api)/./modules/utils/index.ts\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        // Process a POST request\n        const { input =\"\" , context =[]  } = {\n            ...req.body,\n            ...req.query\n        };\n        console.log(context);\n        if (!input) {\n            return res.status(400).json({\n                error: \"No input provided\"\n            });\n        }\n        const result = await (0,_modules_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(context, [\n            {\n                role: \"user\",\n                content: input\n            }\n        ]);\n        res.status(200).json(result);\n    } else {\n        // Handle any other HTTP method\n        res.status(400).json({\n            error: \"Only POST method is allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQztBQUUzQixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6Qix5QkFBeUI7UUFDekIsTUFBTSxFQUFFQyxPQUFRLEdBQUUsRUFBRUMsU0FBVSxFQUFFLEdBQUUsR0FBRztZQUFFLEdBQUdKLElBQUlLLElBQUk7WUFBRSxHQUFHTCxJQUFJTSxLQUFLO1FBQUM7UUFDakVDLFFBQVFDLEdBQUcsQ0FBQ0o7UUFDWixJQUFJLENBQUNELE9BQU87WUFDVixPQUFPRixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQW9CO1FBQzNELENBQUM7UUFDRCxNQUFNQyxTQUFTLE1BQU1kLDBEQUFPQSxDQUFDTSxTQUFTO1lBQUM7Z0JBQUVTLE1BQU07Z0JBQVFDLFNBQVNYO1lBQU07U0FBRTtRQUN4RUYsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0U7SUFDdkIsT0FBTztRQUNMLCtCQUErQjtRQUMvQlgsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQThCO0lBQzlELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdGdwdC1ub2RlLy4vcGFnZXMvYXBpL2NoYXQuanM/MWM0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhdEdQVCBmcm9tIFwiLi4vLi4vbW9kdWxlcy91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIC8vIFByb2Nlc3MgYSBQT1NUIHJlcXVlc3RcbiAgICBjb25zdCB7IGlucHV0ID0gXCJcIiwgY29udGV4dCA9IFtdIH0gPSB7IC4uLnJlcS5ib2R5LCAuLi5yZXEucXVlcnkgfTtcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJObyBpbnB1dCBwcm92aWRlZFwiIH0pO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaGF0R1BUKGNvbnRleHQsIFt7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiBpbnB1dCB9XSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBIYW5kbGUgYW55IG90aGVyIEhUVFAgbWV0aG9kXG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJPbmx5IFBPU1QgbWV0aG9kIGlzIGFsbG93ZWRcIiB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNoYXRHUFQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaW5wdXQiLCJjb250ZXh0IiwiYm9keSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInJlc3VsdCIsInJvbGUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/chat.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chat.js"));
module.exports = __webpack_exports__;

})();