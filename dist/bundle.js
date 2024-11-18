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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\n// import 'bootstrap/dist/css/bootstrap.min.css';\n// import 'bootstrap/dist/js/bootstrap.bundle.min.js';\n// import './styles.css';\n//\n// document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\n//     anchor.addEventListener('click', function (event) {\n//         event.preventDefault();\n//         const targetId = (this as HTMLAnchorElement).getAttribute('href');\n//         if (targetId) {\n//             const targetElement = document.querySelector(targetId);\n//             if (targetElement) {\n//                 targetElement.scrollIntoView({\n//                     behavior: 'smooth',\n//                     block: 'start',\n//                 });\n//             }\n//         }\n//     });\n// });\ndocument.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\n    anchor.addEventListener('click', (event) => {\n        event.preventDefault();\n        const targetId = anchor.getAttribute('href');\n        if (targetId) {\n            const targetElement = document.querySelector(targetId);\n            if (targetElement) {\n                targetElement.scrollIntoView({\n                    behavior: 'smooth',\n                    block: 'start',\n                });\n            }\n        }\n    });\n});\n\n\n//# sourceURL=webpack://new_site_construction/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;