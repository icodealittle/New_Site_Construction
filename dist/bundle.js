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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./styles.css */ \"./src/styles.css\"); // Ensure the CSS file is imported here\n// Smooth scrolling for anchor links with offset for fixed navbar\ndocument.querySelectorAll('a[href^=\"#\"]').forEach((anchor) => {\n    anchor.addEventListener('click', (event) => {\n        event.preventDefault();\n        const targetId = anchor.getAttribute('href');\n        if (targetId) {\n            const targetElement = document.querySelector(targetId);\n            if (targetElement) {\n                const offset = 60; // Adjust to match the fixed navbar height\n                const elementPosition = targetElement.getBoundingClientRect().top;\n                const offsetPosition = elementPosition + window.pageYOffset - offset;\n                window.scrollTo({\n                    top: offsetPosition,\n                    behavior: 'smooth',\n                });\n            }\n        }\n    });\n});\n// Add active class to the current menu item based on scroll position\nconst sections = document.querySelectorAll('section'); // All page sections\nconst menuItems = document.querySelectorAll('.menu-item'); // All navigation links\nwindow.addEventListener('scroll', () => {\n    let currentSection = '';\n    // Determine the current section in view\n    sections.forEach((section) => {\n        const sectionTop = section.offsetTop;\n        const sectionHeight = section.offsetHeight;\n        if (window.scrollY >= sectionTop - sectionHeight / 3) {\n            currentSection = section.getAttribute('id') || '';\n        }\n    });\n    // Update active class on menu items\n    menuItems.forEach((item) => {\n        item.classList.remove('active');\n        if (item.getAttribute('href') === `#${currentSection}`) {\n            item.classList.add('active');\n        }\n    });\n});\n// Handle loading screen functionality\nwindow.addEventListener('load', () => {\n    const loadingScreen = document.getElementById('loading-screen');\n    if (loadingScreen) {\n        // Keep loading screen visible for 5 seconds\n        setTimeout(() => {\n            loadingScreen.classList.add('fade-out'); // Trigger fade-out animation\n            // Wait for the fade-out animation to complete, then redirect to homepage.html\n            setTimeout(() => {\n                window.location.href = 'homepage.html'; // Redirect to homepage\n            }, 1000); // Match fade-out duration\n        }, 5000); // Adjust timeout to control how long the loading screen is visible\n    }\n});\n\n\n//# sourceURL=webpack://new_site_construction/./src/index.ts?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://new_site_construction/./src/styles.css?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;