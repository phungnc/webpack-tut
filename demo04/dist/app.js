/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var html = __webpack_require__(1);
	document.body.innerHTML = html;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <header>\n        <h1>title</h1>\n        <nav>\n            <ul>\n                <li><a href=\"\">a</a></li>\n                <li><a href=\"\">b</a></li>\n                <li><a href=\"\">c</a></li>\n                <li><a href=\"\">d</a></li>\n                <li><a href=\"\">e</a></li>\n            </ul>\n        </nav>\n    </header>\n    <section>\n        <h2>sub title</h2>\n        <p>content</p>\n    </section>\n    <footer>\n        copyright\n    </footer>\n</div>";

/***/ }
/******/ ]);