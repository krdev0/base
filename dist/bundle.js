/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./css/style.scss */ \"./src/css/style.scss\");\n\n__webpack_require__(/*! ./js/components/_1_main-header */ \"./src/js/components/_1_main-header.js\");\n\n__webpack_require__(/*! ./js/components/_1_menu */ \"./src/js/components/_1_menu.js\");\n\n//# sourceURL=webpack://starter/./src/index.js?");

/***/ }),

/***/ "./src/js/components/_1_main-header.js":
/*!*********************************************!*\
  !*** ./src/js/components/_1_main-header.js ***!
  \*********************************************/
/***/ (() => {

eval("// File#: _1_main-header\n// Usage: codyhouse.co/license\n(function () {\n  var mainHeader = document.getElementsByClassName('js-header');\n\n  if (mainHeader.length > 0) {\n    var doneResizing = function doneResizing() {\n      if (!isVisible(trigger) && Util.hasClass(mainHeader[0], 'header--expanded')) toggleNavigation(false);\n    };\n\n    var trigger = mainHeader[0].getElementsByClassName('js-header__trigger')[0],\n        nav = mainHeader[0].getElementsByClassName('js-header__nav')[0]; // we'll use these to store the node that needs to receive focus when the mobile menu is closed\n\n    var focusMenu = false; //detect click on nav trigger\n\n    trigger.addEventListener(\"click\", function (event) {\n      event.preventDefault();\n      toggleNavigation(!Util.hasClass(nav, 'header__nav--is-visible'));\n    }); // listen for key events\n\n    window.addEventListener('keyup', function (event) {\n      // listen for esc key\n      if (event.keyCode && event.keyCode == 27 || event.key && event.key.toLowerCase() == 'escape') {\n        // close navigation on mobile if open\n        if (trigger.getAttribute('aria-expanded') == 'true' && isVisible(trigger)) {\n          focusMenu = trigger; // move focus to menu trigger when menu is close\n\n          trigger.click();\n        }\n      } // listen for tab key\n\n\n      if (event.keyCode && event.keyCode == 9 || event.key && event.key.toLowerCase() == 'tab') {\n        // close navigation on mobile if open when nav loses focus\n        if (trigger.getAttribute('aria-expanded') == 'true' && isVisible(trigger) && !document.activeElement.closest('.js-header')) trigger.click();\n      }\n    }); // listen for resize\n\n    var resizingId = false;\n    window.addEventListener('resize', function () {\n      clearTimeout(resizingId);\n      resizingId = setTimeout(doneResizing, 500);\n    });\n    ;\n  }\n\n  function isVisible(element) {\n    return element.offsetWidth || element.offsetHeight || element.getClientRects().length;\n  }\n\n  ;\n\n  function toggleNavigation(bool) {\n    // toggle navigation visibility on small device\n    Util.toggleClass(nav, 'header__nav--is-visible', bool);\n    Util.toggleClass(mainHeader[0], 'header--expanded', bool);\n    trigger.setAttribute('aria-expanded', bool);\n\n    if (bool) {\n      //opening menu -> move focus to first element inside nav\n      nav.querySelectorAll('[href], input:not([disabled]), button:not([disabled])')[0].focus();\n    } else if (focusMenu) {\n      focusMenu.focus();\n      focusMenu = false;\n    }\n  }\n\n  ;\n})();\n\n//# sourceURL=webpack://starter/./src/js/components/_1_main-header.js?");

/***/ }),

/***/ "./src/js/components/_1_menu.js":
/*!**************************************!*\
  !*** ./src/js/components/_1_menu.js ***!
  \**************************************/
/***/ (() => {

eval("// File#: _1_menu\n// Usage: codyhouse.co/license\n(function () {\n  var Menu = function Menu(element) {\n    this.element = element;\n    this.elementId = this.element.getAttribute('id');\n    this.menuItems = this.element.getElementsByClassName('js-menu__content');\n    this.trigger = document.querySelectorAll('[aria-controls=\"' + this.elementId + '\"]');\n    this.selectedTrigger = false;\n    this.menuIsOpen = false;\n    this.initMenu();\n    this.initMenuEvents();\n  };\n\n  Menu.prototype.initMenu = function () {\n    // init aria-labels\n    for (var i = 0; i < this.trigger.length; i++) {\n      Util.setAttributes(this.trigger[i], {\n        'aria-expanded': 'false',\n        'aria-haspopup': 'true'\n      });\n    } // init tabindex\n\n\n    for (var i = 0; i < this.menuItems.length; i++) {\n      this.menuItems[i].setAttribute('tabindex', '0');\n    }\n  };\n\n  Menu.prototype.initMenuEvents = function () {\n    var self = this;\n\n    for (var i = 0; i < this.trigger.length; i++) {\n      (function (i) {\n        self.trigger[i].addEventListener('click', function (event) {\n          event.preventDefault(); // if the menu had been previously opened by another trigger element -> close it first and reopen in the right position\n\n          if (Util.hasClass(self.element, 'menu--is-visible') && self.selectedTrigger != self.trigger[i]) {\n            self.toggleMenu(false, false); // close menu\n          } // toggle menu\n\n\n          self.selectedTrigger = self.trigger[i];\n          self.toggleMenu(!Util.hasClass(self.element, 'menu--is-visible'), true);\n        });\n      })(i);\n    } // keyboard events\n\n\n    this.element.addEventListener('keydown', function (event) {\n      // use up/down arrow to navigate list of menu items\n      if (!Util.hasClass(event.target, 'js-menu__content')) return;\n\n      if (event.keyCode && event.keyCode == 40 || event.key && event.key.toLowerCase() == 'arrowdown') {\n        self.navigateItems(event, 'next');\n      } else if (event.keyCode && event.keyCode == 38 || event.key && event.key.toLowerCase() == 'arrowup') {\n        self.navigateItems(event, 'prev');\n      }\n    });\n  };\n\n  Menu.prototype.toggleMenu = function (bool, moveFocus) {\n    var self = this; // toggle menu visibility\n\n    Util.toggleClass(this.element, 'menu--is-visible', bool);\n    this.menuIsOpen = bool;\n\n    if (bool) {\n      this.selectedTrigger.setAttribute('aria-expanded', 'true');\n      Util.moveFocus(this.menuItems[0]);\n      this.element.addEventListener(\"transitionend\", function (event) {\n        Util.moveFocus(self.menuItems[0]);\n      }, {\n        once: true\n      }); // position the menu element\n\n      this.positionMenu(); // add class to menu trigger\n\n      Util.addClass(this.selectedTrigger, 'menu-control--active');\n    } else if (this.selectedTrigger) {\n      this.selectedTrigger.setAttribute('aria-expanded', 'false');\n      if (moveFocus) Util.moveFocus(this.selectedTrigger); // remove class from menu trigger\n\n      Util.removeClass(this.selectedTrigger, 'menu-control--active');\n      this.selectedTrigger = false;\n    }\n  };\n\n  Menu.prototype.positionMenu = function (event, direction) {\n    var selectedTriggerPosition = this.selectedTrigger.getBoundingClientRect(),\n        menuOnTop = window.innerHeight - selectedTriggerPosition.bottom < selectedTriggerPosition.top; // menuOnTop = window.innerHeight < selectedTriggerPosition.bottom + this.element.offsetHeight;\n\n    var left = selectedTriggerPosition.left,\n        right = window.innerWidth - selectedTriggerPosition.right,\n        isRight = window.innerWidth < selectedTriggerPosition.left + this.element.offsetWidth;\n    var horizontal = isRight ? 'right: ' + right + 'px;' : 'left: ' + left + 'px;',\n        vertical = menuOnTop ? 'bottom: ' + (window.innerHeight - selectedTriggerPosition.top) + 'px;' : 'top: ' + selectedTriggerPosition.bottom + 'px;'; // check right position is correct -> otherwise set left to 0\n\n    if (isRight && right + this.element.offsetWidth > window.innerWidth) horizontal = 'left: ' + parseInt((window.innerWidth - this.element.offsetWidth) / 2) + 'px;';\n    var maxHeight = menuOnTop ? selectedTriggerPosition.top - 20 : window.innerHeight - selectedTriggerPosition.bottom - 20;\n    this.element.setAttribute('style', horizontal + vertical + 'max-height:' + Math.floor(maxHeight) + 'px;');\n  };\n\n  Menu.prototype.navigateItems = function (event, direction) {\n    event.preventDefault();\n    var index = Util.getIndexInArray(this.menuItems, event.target),\n        nextIndex = direction == 'next' ? index + 1 : index - 1;\n    if (nextIndex < 0) nextIndex = this.menuItems.length - 1;\n    if (nextIndex > this.menuItems.length - 1) nextIndex = 0;\n    Util.moveFocus(this.menuItems[nextIndex]);\n  };\n\n  Menu.prototype.checkMenuFocus = function () {\n    var menuParent = document.activeElement.closest('.js-menu');\n    if (!menuParent || !this.element.contains(menuParent)) this.toggleMenu(false, false);\n  };\n\n  Menu.prototype.checkMenuClick = function (target) {\n    if (!this.element.contains(target) && !target.closest('[aria-controls=\"' + this.elementId + '\"]')) this.toggleMenu(false);\n  };\n\n  window.Menu = Menu; //initialize the Menu objects\n\n  var menus = document.getElementsByClassName('js-menu');\n\n  if (menus.length > 0) {\n    var menusArray = [];\n    var scrollingContainers = [];\n\n    for (var i = 0; i < menus.length; i++) {\n      (function (i) {\n        menusArray.push(new Menu(menus[i]));\n        var scrollableElement = menus[i].getAttribute('data-scrollable-element');\n        if (scrollableElement && !scrollingContainers.includes(scrollableElement)) scrollingContainers.push(scrollableElement);\n      })(i);\n    } // listen for key events\n\n\n    window.addEventListener('keyup', function (event) {\n      if (event.keyCode && event.keyCode == 9 || event.key && event.key.toLowerCase() == 'tab') {\n        //close menu if focus is outside menu element\n        menusArray.forEach(function (element) {\n          element.checkMenuFocus();\n        });\n      } else if (event.keyCode && event.keyCode == 27 || event.key && event.key.toLowerCase() == 'escape') {\n        // close menu on 'Esc'\n        menusArray.forEach(function (element) {\n          element.toggleMenu(false, false);\n        });\n      }\n    }); // close menu when clicking outside it\n\n    window.addEventListener('click', function (event) {\n      menusArray.forEach(function (element) {\n        element.checkMenuClick(event.target);\n      });\n    }); // on resize -> close all menu elements\n\n    window.addEventListener('resize', function (event) {\n      menusArray.forEach(function (element) {\n        element.toggleMenu(false, false);\n      });\n    }); // on scroll -> close all menu elements\n\n    window.addEventListener('scroll', function (event) {\n      menusArray.forEach(function (element) {\n        if (element.menuIsOpen) element.toggleMenu(false, false);\n      });\n    }); // take into account additinal scrollable containers\n\n    for (var j = 0; j < scrollingContainers.length; j++) {\n      var scrollingContainer = document.querySelector(scrollingContainers[j]);\n\n      if (scrollingContainer) {\n        scrollingContainer.addEventListener('scroll', function (event) {\n          menusArray.forEach(function (element) {\n            if (element.menuIsOpen) element.toggleMenu(false, false);\n          });\n        });\n      }\n    }\n  }\n})();\n\n//# sourceURL=webpack://starter/./src/js/components/_1_menu.js?");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://starter/./src/css/style.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;