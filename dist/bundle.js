/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/
(() => { // webpackBootstrap
    /******/
    "use strict";
    /******/
    var __webpack_modules__ = ({

        /***/ "./src/styles.css":
        /*!************************!*\
          !*** ./src/styles.css ***!
          \************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://new_site_construction/./src/styles.css?");

            /***/
        }),

        /***/ "./src/index.ts":
        /*!**********************!*\
          !*** ./src/index.ts ***!
          \**********************/
        /***/ (function (__unused_webpack_module, exports, __webpack_require__) {

            eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./styles.css */ \"./src/styles.css\"); // Ensure the CSS file is imported here\nconst loading_corgi_gif_1 = __importDefault(__webpack_require__(/*! ./assets/image/loading-corgi.gif */ \"./src/assets/image/loading-corgi.gif\"));\nconst gifElement = document.getElementById('corgi-gif');\nif (gifElement)\n    gifElement.src = loading_corgi_gif_1.default;\nconsole.log('Resolved GIF Path:', loading_corgi_gif_1.default);\n// Smooth scrolling for anchor links with offset for fixed navbar\ndocument.querySelectorAll('a[href^=\"#\"]').forEach((anchor) => {\n    anchor.addEventListener('click', (event) => {\n        event.preventDefault();\n        const targetId = anchor.getAttribute('href');\n        if (targetId) {\n            const targetElement = document.querySelector(targetId);\n            if (targetElement) {\n                const offset = 60; // Adjust to match the fixed navbar height\n                const elementPosition = targetElement.getBoundingClientRect().top;\n                const offsetPosition = elementPosition + window.pageYOffset - offset;\n                window.scrollTo({\n                    top: offsetPosition,\n                    behavior: 'smooth',\n                });\n            }\n        }\n    });\n});\nconst menuItems = document.querySelectorAll('.menu-item');\n// const lavaLamp = document.querySelector('.lava-lamp') as HTMLElement;\nfunction updateLavaLampPosition(activeItem) {\n    // const rect = activeItem.getBoundingClientRect();\n    // const parentRect = activeItem.parentElement?.getBoundingClientRect(); // Get parent offset\n    //\n    // // Adjust the left position relative to the parent container\n    // lavaLamp.style.left = `${rect.left - (parentRect?.left || 0)}px`;\n    // lavaLamp.style.width = `${rect.width}px`;\n    // console.log(`Updated Lava Lamp -> Left: ${lavaLamp.style.left}, Width: ${lavaLamp.style.width}`);\n}\n// Add event listeners for menu clicks\nmenuItems.forEach((item) => {\n    item.addEventListener('click', (event) => {\n        event.preventDefault();\n        menuItems.forEach((i) => i.classList.remove('active'));\n        item.classList.add('active');\n        // updateLavaLampPosition(item);\n    });\n});\n// Initialize Lava Lamp on page load\ndocument.addEventListener('DOMContentLoaded', () => {\n    const activeItem = document.querySelector('.menu-item.active');\n    if (activeItem) {\n        updateLavaLampPosition(activeItem);\n    }\n});\nwindow.addEventListener('load', () => {\n    const loadingScreen = document.getElementById('loading-screen');\n    const progressElement = document.getElementById('progress-loading');\n    let progress = 0;\n    let interval;\n    // Function to update the progress bar\n    function updateProgress(increment) {\n        progress = Math.min(progress + increment, 100); // Cap at 100%\n        if (progressElement) {\n            progressElement.textContent = `${progress}%`;\n            // Trigger animation on progress update\n            progressElement.classList.add('animated');\n            setTimeout(() => {\n                progressElement.classList.remove('animated');\n            }, 300); // Match the CSS animation duration\n        }\n        // When loading reaches 100%, fade out the screen\n        if (progress === 100) {\n            clearInterval(interval);\n            fadeOutLoadingScreen();\n        }\n    }\n    // Function to fade out the loading screen\n    function fadeOutLoadingScreen() {\n        if (loadingScreen) {\n            loadingScreen.classList.add('fade-out');\n            setTimeout(() => {\n                window.location.href = 'homepage.html'; // Redirect to homepage\n            }, 1000);\n        }\n    }\n    // Automatically increment progress every 1 second\n    interval = window.setInterval(() => {\n        updateProgress(25); // Increase progress by 25% every second\n    }, 1000);\n    // Allow visitors to click anywhere to speed up loading\n    if (loadingScreen) {\n        loadingScreen.addEventListener('click', () => {\n            updateProgress(25); // Increase progress by 25% per click\n        });\n    }\n});\n// // Code structure for under construction page\n// import { gsap } from 'gsap';\n//\n// window.addEventListener('DOMContentLoaded', () => {\n//     // Animate the heading with a bounce effect\n//     gsap.fromTo(\n//         \"#loading-screen h1\",\n//         { opacity: 0, y: -50 },\n//         { opacity: 1, y: 0, duration: 1.5, ease: \"bounce.out\", repeat: -1, yoyo: true }\n//     );\n//\n//     // Keep the paragraph static (optional fade-in effect)\n//     gsap.from(\"#loading-screen p\", {\n//         opacity: 0,\n//         duration: 1,\n//         delay: 0.5,\n//         ease: \"power2.inOut\",\n//     });\n// });\n\n\n//# sourceURL=webpack://new_site_construction/./src/index.ts?");

            /***/
        }),

        /***/ "./src/assets/image/loading-corgi.gif":
        /*!********************************************!*\
          !*** ./src/assets/image/loading-corgi.gif ***!
          \********************************************/
        /***/ ((module, __unused_webpack_exports, __webpack_require__) => {

            eval("module.exports = __webpack_require__.p + \"assets/loading-corgi.gif\";\n\n//# sourceURL=webpack://new_site_construction/./src/assets/image/loading-corgi.gif?");

            /***/
        })

        /******/
    });
    /************************************************************************/
    /******/ 	// The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/ 		// Check if module is in cache
        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
            /******/
            return cachedModule.exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/ 			// no module.id needed
            /******/ 			// no module.loaded needed
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /************************************************************************/
    /******/ 	/* webpack/runtime/global */
    /******/
    (() => {
        /******/
        __webpack_require__.g = (function () {
            /******/
            if (typeof globalThis === 'object') return globalThis;
            /******/
            try {
                /******/
                return this || new Function('return this')();
                /******/
            } catch (e) {
                /******/
                if (typeof window === 'object') return window;
                /******/
            }
            /******/
        })();
        /******/
    })();
    /******/
    /******/ 	/* webpack/runtime/make namespace object */
    /******/
    (() => {
        /******/ 		// define __esModule on exports
        /******/
        __webpack_require__.r = (exports) => {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {value: true});
            /******/
        };
        /******/
    })();
    /******/
    /******/ 	/* webpack/runtime/publicPath */
    /******/
    (() => {
        /******/
        var scriptUrl;
        /******/
        if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
        /******/
        var document = __webpack_require__.g.document;
        /******/
        if (!scriptUrl && document) {
            /******/
            if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
                /******/                scriptUrl = document.currentScript.src;
            /******/
            if (!scriptUrl) {
                /******/
                var scripts = document.getElementsByTagName("script");
                /******/
                if (scripts.length) {
                    /******/
                    var i = scripts.length - 1;
                    /******/
                    while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
                    /******/
                }
                /******/
            }
            /******/
        }
        /******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
        /******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
        /******/
        if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
        /******/
        scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
        /******/
        __webpack_require__.p = scriptUrl;
        /******/
    })();
    /******/
    /************************************************************************/
    /******/
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module is referenced by other modules so it can't be inlined
    /******/
    var __webpack_exports__ = __webpack_require__("./src/index.ts");
    /******/
    /******/
})()
;