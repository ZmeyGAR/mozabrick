/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../#mozabrick/#DevSource/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../#mozabrick/#DevSource/scripts/main.js":
/*!************************************************!*\
  !*** ../#mozabrick/#DevSource/scripts/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction DynamicAdapt(type) {\n  this.type = type;\n}\n\nDynamicAdapt.prototype.init = function () {\n  var _this2 = this;\n\n  var _this = this; // массив объектов\n\n\n  this.оbjects = [];\n  this.daClassname = \"_dynamic_adapt_\"; // массив DOM-элементов\n\n  this.nodes = document.querySelectorAll(\"[data-da]\"); // наполнение оbjects объктами\n\n  for (var i = 0; i < this.nodes.length; i++) {\n    var node = this.nodes[i];\n    var data = node.dataset.da.trim();\n    var dataArray = data.split(\",\");\n    var оbject = {};\n    оbject.element = node;\n    оbject.parent = node.parentNode;\n    оbject.destination = document.querySelector(dataArray[0].trim());\n    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : \"767\";\n    оbject.place = dataArray[2] ? dataArray[2].trim() : \"last\";\n    оbject.index = this.indexInParent(оbject.parent, оbject.element);\n    this.оbjects.push(оbject);\n  }\n\n  this.arraySort(this.оbjects); // массив уникальных медиа-запросов\n\n  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {\n    return '(' + this.type + \"-width: \" + item.breakpoint + \"px),\" + item.breakpoint;\n  }, this);\n  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {\n    return Array.prototype.indexOf.call(self, item) === index;\n  }); // навешивание слушателя на медиа-запрос\n  // и вызов обработчика при первом запуске\n\n  var _loop = function _loop(_i) {\n    var media = _this2.mediaQueries[_i];\n    var mediaSplit = String.prototype.split.call(media, ',');\n    var matchMedia = window.matchMedia(mediaSplit[0]);\n    var mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом\n\n    var оbjectsFilter = Array.prototype.filter.call(_this2.оbjects, function (item) {\n      return item.breakpoint === mediaBreakpoint;\n    });\n    matchMedia.addListener(function () {\n      _this.mediaHandler(matchMedia, оbjectsFilter);\n    });\n\n    _this2.mediaHandler(matchMedia, оbjectsFilter);\n  };\n\n  for (var _i = 0; _i < this.mediaQueries.length; _i++) {\n    _loop(_i);\n  }\n};\n\nDynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {\n  if (matchMedia.matches) {\n    for (var i = 0; i < оbjects.length; i++) {\n      var оbject = оbjects[i];\n      оbject.index = this.indexInParent(оbject.parent, оbject.element);\n      this.moveTo(оbject.place, оbject.element, оbject.destination);\n    }\n  } else {\n    for (var _i2 = 0; _i2 < оbjects.length; _i2++) {\n      var _оbject = оbjects[_i2];\n\n      if (_оbject.element.classList.contains(this.daClassname)) {\n        this.moveBack(_оbject.parent, _оbject.element, _оbject.index);\n      }\n    }\n  }\n}; // Функция перемещения\n\n\nDynamicAdapt.prototype.moveTo = function (place, element, destination) {\n  element.classList.add(this.daClassname);\n\n  if (place === 'last' || place >= destination.children.length) {\n    destination.insertAdjacentElement('beforeend', element);\n    return;\n  }\n\n  if (place === 'first') {\n    destination.insertAdjacentElement('afterbegin', element);\n    return;\n  }\n\n  destination.children[place].insertAdjacentElement('beforebegin', element);\n}; // Функция возврата\n\n\nDynamicAdapt.prototype.moveBack = function (parent, element, index) {\n  element.classList.remove(this.daClassname);\n\n  if (parent.children[index] !== undefined) {\n    parent.children[index].insertAdjacentElement('beforebegin', element);\n  } else {\n    parent.insertAdjacentElement('beforeend', element);\n  }\n}; // Функция получения индекса внутри родителя\n\n\nDynamicAdapt.prototype.indexInParent = function (parent, element) {\n  var array = Array.prototype.slice.call(parent.children);\n  return Array.prototype.indexOf.call(array, element);\n}; // Функция сортировки массива по breakpoint и place \n// по возрастанию для this.type = min\n// по убыванию для this.type = max\n\n\nDynamicAdapt.prototype.arraySort = function (arr) {\n  if (this.type === \"min\") {\n    Array.prototype.sort.call(arr, function (a, b) {\n      if (a.breakpoint === b.breakpoint) {\n        if (a.place === b.place) {\n          return 0;\n        }\n\n        if (a.place === \"first\" || b.place === \"last\") {\n          return -1;\n        }\n\n        if (a.place === \"last\" || b.place === \"first\") {\n          return 1;\n        }\n\n        return a.place - b.place;\n      }\n\n      return a.breakpoint - b.breakpoint;\n    });\n  } else {\n    Array.prototype.sort.call(arr, function (a, b) {\n      if (a.breakpoint === b.breakpoint) {\n        if (a.place === b.place) {\n          return 0;\n        }\n\n        if (a.place === \"first\" || b.place === \"last\") {\n          return 1;\n        }\n\n        if (a.place === \"last\" || b.place === \"first\") {\n          return -1;\n        }\n\n        return b.place - a.place;\n      }\n\n      return b.breakpoint - a.breakpoint;\n    });\n    return;\n  }\n};\n\nnew DynamicAdapt('min').init(); ////////////////////////////////////////////////////////////////////////////////////////////////////\n\nvar computedStyle = document.createElement('style');\nvar headerHeight = getComputedStyle(document.querySelector('header.header')).height;\ncomputedStyle.textContent = \"\\n    :root{\\n        --header-height: \".concat(headerHeight, \"\\n    }\");\ndocument.head.appendChild(computedStyle); ////////////////////////////////////////////////////////////////////////////////////////////////////\n// burger\n\nvar BurgerMenu = /*#__PURE__*/function () {\n  function BurgerMenu(selector, options) {\n    _classCallCheck(this, BurgerMenu);\n\n    this._burgerSelector = selector;\n    this._btnSelector = options.btn;\n    this._menuSelector = options.menu;\n    this.$burger = this.getElement(selector);\n    this.$btn = this.getElement(options.btn);\n    this.$menu = this.getElement(options.menu);\n    this.body = document.body;\n\n    this.body.fixed = function () {\n      var triger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      if (triger) return document.body.classList.add('fixed');\n      return document.body.classList.remove('fixed');\n    };\n  }\n\n  _createClass(BurgerMenu, [{\n    key: \"getElement\",\n    value: function getElement(selector) {\n      if (!selector) return;\n      var $element = document.querySelector(selector);\n      if (!$element) return;\n      return $element;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      document.addEventListener('click', this.clickHandler.bind(this));\n    }\n  }, {\n    key: \"clickHandler\",\n    value: function clickHandler(e) {\n      if (e.target.closest(this._btnSelector) === this.$btn) {\n        return this.getStatus() ? this.close() : this.open();\n      }\n\n      if (e.target.closest(this._menuSelector) !== this.$menu) {\n        return this.close();\n      }\n    }\n  }, {\n    key: \"getStatus\",\n    value: function getStatus() {\n      return this.$burger.classList.contains('open');\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      this.body.fixed(true);\n      this.$burger.classList.add('open');\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this.body.fixed(false);\n      this.$burger.classList.remove('open');\n    }\n  }]);\n\n  return BurgerMenu;\n}();\n\nvar Tabs = /*#__PURE__*/function () {\n  function Tabs(selector) {\n    _classCallCheck(this, Tabs);\n\n    this.$parent = this.getElement(selector);\n    this.$tabs = this.$parent ? this.getElements('[data-tabs]') : null;\n    this.$content = this.$parent ? this.getElements('[data-tabs-contents]') : null;\n    this.tabsCollection = this.$tabs ? this.getElements('[data-tab-content]') : null;\n    this.contentCollection = [];\n    this.init();\n  }\n\n  _createClass(Tabs, [{\n    key: \"getElement\",\n    value: function getElement(selector) {\n      if (!selector.trim()) return;\n      var element = document.querySelector(selector);\n      if (!element) return;\n      return element;\n    }\n  }, {\n    key: \"getElements\",\n    value: function getElements(selector) {\n      var element = _toConsumableArray(this.$parent.querySelectorAll(selector));\n\n      if (!element.length) return;\n      if (element.length === 1) element = element[0];\n      return element;\n    }\n  }, {\n    key: \"resetActiveTab\",\n    value: function resetActiveTab() {\n      this.tabsCollection.map(function (tab) {\n        return tab.classList.remove('active');\n      });\n    }\n  }, {\n    key: \"resetActiveContent\",\n    value: function resetActiveContent() {\n      this.contentCollection.map(function (content) {\n        return content.classList.remove('active');\n      });\n    }\n  }, {\n    key: \"setDefaultTab\",\n    value: function setDefaultTab() {\n      var activeTab = this.$tabs.querySelector('.active[data-tab-content]');\n      if (activeTab) return this.showContent(activeTab.dataset.tabContent);\n\n      if (!activeTab) {\n        this.resetActiveTab();\n        this.setActiveTab(this.tabsCollection[0]);\n      }\n    }\n  }, {\n    key: \"setActiveTab\",\n    value: function setActiveTab(element) {\n      if (!this.tabsCollection.includes(element)) return;\n      this.resetActiveTab();\n      element.classList.add('active');\n      this.showContent(element.dataset.tabContent);\n    }\n  }, {\n    key: \"showContent\",\n    value: function showContent(target) {\n      this.resetActiveContent();\n      this.$content.querySelector(\"\".concat(target)).classList.add('active');\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this3 = this;\n\n      if (!this.$parent) return;\n      this.setDefaultTab();\n      this.tabsCollection.forEach(function (tab) {\n        _this3.contentCollection.push(_this3.$content.querySelector(tab.dataset.tabContent));\n\n        tab.addEventListener('click', function (e) {\n          var target = e.target.closest('[data-tab-content]');\n          if (!target) return;\n          e.preventDefault();\n          e.stopPropagation();\n\n          _this3.setActiveTab(target);\n        });\n      });\n    }\n  }]);\n\n  return Tabs;\n}();\n\nvar Spoiler = /*#__PURE__*/function () {\n  function Spoiler(selector) {\n    _classCallCheck(this, Spoiler);\n\n    this.$elemCollection = this.getElemCollection(selector);\n    this.spoilers;\n    this.mediaQueries = [];\n    this.mediaQueriesWidth = [];\n  }\n\n  _createClass(Spoiler, [{\n    key: \"getElemCollection\",\n    value: function getElemCollection(selector) {\n      if (!selector) return;\n      return _toConsumableArray(document.querySelectorAll(selector));\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this4 = this;\n\n      this.$elemCollection.forEach(function (elem) {\n        if (!_this4.mediaQueries.includes(elem.dataset.spoilers)) _this4.mediaQueries.push(elem.dataset.spoilers);\n\n        _this4.checkSpoilerStatus(elem);\n\n        elem.addEventListener('click', _this4.clickHandler);\n      }, {\n        passive: true\n      });\n\n      if (this.mediaQueries.length) {\n        window.addEventListener('resize', function (e) {\n          _this4.mediaQueries.forEach(function (media) {\n            var value = media.split(',')[0];\n            var prop = media.split(',')[1];\n\n            if (prop === 'min') {\n              window.innerWidth < value ? _this4.changeSpoilerStatus('', media, true) : _this4.changeSpoilerStatus('', media, false);\n            }\n\n            if (prop === 'max') {\n              window.innerWidth > value ? _this4.changeSpoilerStatus('', media, true) : _this4.changeSpoilerStatus('', media, false);\n            }\n          });\n        }, {\n          passive: true\n        });\n      }\n    }\n  }, {\n    key: \"clickHandler\",\n    value: function clickHandler(e) {\n      if (e.target.closest('[data-spoiler-button]')) this.classList.toggle('expanded');\n\n      if (e.target.closest('.category-list') && e.target.closest('.category-list').querySelector('.expanded')) {\n        e.target.closest('.category-list').classList.add('no-sticky');\n        e.target.closest('section').scrollIntoView({\n          behavior: 'smooth'\n        });\n      }\n\n      if (e.target.closest('.category-list') && !e.target.closest('.category-list').querySelector('.expanded')) e.target.closest('.category-list').classList.remove('no-sticky');\n    }\n  }, {\n    key: \"changeSpoilerStatus\",\n    value: function changeSpoilerStatus() {\n      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n      var media = arguments.length > 1 ? arguments[1] : undefined;\n      var enable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n      if (element) {\n        enable ? element.classList.add('spoiler') : element.classList.remove('spoiler');\n        return;\n      }\n\n      this.$elemCollection.forEach(function (elem) {\n        if (elem.dataset.spoilers === media) {\n          enable ? elem.classList.add('spoiler') : elem.classList.remove('spoiler');\n        }\n      });\n    }\n  }, {\n    key: \"checkSpoilerStatus\",\n    value: function checkSpoilerStatus(spoiler) {\n      var value = spoiler.dataset.spoilers.split(',')[0];\n      var prop = spoiler.dataset.spoilers.split(',')[1];\n\n      if (prop === 'min') {\n        window.innerWidth < value ? this.changeSpoilerStatus(spoiler, value, true) : this.changeSpoilerStatus(spoiler, value, false);\n      }\n    }\n  }]);\n\n  return Spoiler;\n}(); // Скрипт IBG(устанавливает дочернее изображение в качестве собственного бекграунда)\n// дочернее изображение в последствии скрывается (см. \"assets/sass,scss/_ibg.js\")\n// этот скрипт необходим как костыль для IE, обеспечивает корректное отображение изображений с неподдерживаемыми свойствами object-fit\n\n\nfunction ibg() {\n  var ibg = document.querySelectorAll(\".ibg\");\n\n  for (var i = 0; i < ibg.length; i++) {\n    if (ibg[i].querySelector('img')) {\n      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';\n    }\n  }\n} // Скрипт IBG\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  VanillaTilt.init(document.querySelectorAll(\"*[data-tilt]\"), {\n    // reverse: true, // reverse the tilt direction\n    max: 10,\n    // max tilt rotation (degrees)\n    perspective: 1000,\n    // Transform perspective, the lower the more extreme the tilt gets.\n    scale: 1,\n    // 2 = 200%, 1.5 = 150%, etc..\n    speed: 300,\n    // Speed of the enter/exit transition\n    transition: true,\n    // Set a transition on enter/exit.\n    axis: null,\n    // What axis should be disabled. Can be X or Y.\n    easing: \"cubic-bezier(.03,.98,.52,.99)\",\n    // Easing on enter/exit.\n    gyroscope: true,\n    // Boolean to enable/disable device orientation detection,\n    gyroscopeMinAngleX: -45,\n    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;\n    gyroscopeMaxAngleX: 45,\n    // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;\n    gyroscopeMinAngleY: -45,\n    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;\n    gyroscopeMaxAngleY: 45\n  });\n  var $burger = new BurgerMenu('.burger', {\n    btn: '.burger__btn',\n    menu: 'burger__menu'\n  }).init();\n  var tabsExample = new Tabs('.examples-work');\n  var faq = new Spoiler('[data-spoilers]').init();\n  ibg();\n\n  var examplesSlider = _toConsumableArray(document.querySelectorAll('.examples-slider'));\n\n  examplesSlider.forEach(function (slider) {\n    return new Swiper(slider, {\n      speed: 400,\n      slidesPerView: 1,\n      spaceBetween: 40,\n      noSwiping: false,\n      pagination: {\n        el: '.swiper-pagination',\n        type: 'bullets',\n        clickable: true,\n        dynamicBullets: true\n      },\n      breakpoints: {\n        425: {\n          slidesPerView: 1.5\n        },\n        578: {\n          slidesPerView: 2\n        },\n        768: {\n          slidesPerView: 3\n        },\n        1024: {\n          slidesPerView: 4\n        }\n      }\n    });\n  });\n  var reviewSlider = new Swiper('.reviews__slider', {\n    speed: 400,\n    allowTouchMove: false,\n    slidesPerView: 1,\n    pagination: {\n      el: '.swiper-pagination',\n      type: 'bullets',\n      clickable: true,\n      dynamicBullets: true\n    },\n    effect: 'coverflow',\n    coverflowEffect: {\n      rotate: 30,\n      slideShadows: false\n    }\n  });\n  var productThumbSlider = new Swiper('.swiper.thumb-slider__slider', {\n    speed: 400,\n    spaceBetween: 8,\n    slidesPerView: 3,\n    grabCursor: true,\n    breakpoints: {\n      578: {\n        spaceBetween: 16\n      }\n    }\n  });\n  var productMainGalery = new Swiper('.swiper.product-galery__main-slider', {\n    speed: 400,\n    spaceBetween: 100,\n    slidesPerView: 1,\n    loop: true,\n    effect: 'coverflow',\n    coverflowEffect: {\n      rotate: 30,\n      slideShadows: false\n    },\n    thumbs: {\n      swiper: productThumbSlider\n    }\n  });\n});\n\n//# sourceURL=webpack:///../#mozabrick/#DevSource/scripts/main.js?");

/***/ })

/******/ });