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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/action.js":
/*!***********************!*\
  !*** ./src/action.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card_page */ "./src/card_page.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories */ "./src/categories.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./src/card.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Action = /*#__PURE__*/function () {
  function Action(array) {
    _classCallCheck(this, Action);

    this.array = array;
    this.click = 'click';
    this.currentCat = null;
    this.menuLeft = '';
    this.shuffle = [];
    this.currentCard = null;
    this.src = './src/';
  }

  _createClass(Action, [{
    key: "buttMenuClick",
    value: function buttMenuClick() {
      var _this = this;

      document.querySelector('.butt_menu').addEventListener(this.click, function () {
        var menuLeft = document.querySelector('.nav_bar').style.left;
        var menuBack = document.querySelector('.menu-back').style.display;

        _this.transformButtMenu();

        document.querySelector('.nav_bar').style.left = menuLeft === '0px' ? '-400px' : '0px';
        document.querySelector('.menu-back').style.display = menuBack === 'none' ? 'block' : 'none';
      });
    }
  }, {
    key: "elementClick",
    value: function elementClick() {
      var _this2 = this;

      document.querySelector('.main-container').addEventListener(this.click, function (event) {
        if (event.target.className === 'main-container') return;

        if (document.querySelector('.main-container').className === 'main-container') {
          document.querySelectorAll('.category').forEach(function (el) {
            el.remove();
          });
          document.querySelector('.main-container').classList.add('cards');
          var cardPage = new _card_page__WEBPACK_IMPORTED_MODULE_0__["default"]('main-container', 'category', _this2.array, event.target.id);
          cardPage.renderCard();
          document.querySelectorAll('.nav_bar-item').forEach(function (el) {
            el.classList.remove('active');
          });
          document.querySelectorAll('.nav_bar-item')[event.target.id].classList.add('active');
          _this2.currentCat = event.target.id;
          return;
        }

        if (event.target.className === 'rotate') {
          document.querySelectorAll('.category')[event.target.parentElement.id].style.transform = 'rotateY(180deg)';
          document.querySelectorAll('.category')[event.target.parentElement.id].addEventListener('mouseleave', function () {
            document.querySelectorAll('.category')[event.target.parentElement.id].style.transform = 'rotateY(0deg)';
          });
        }

        if (event.target.className.endsWith('card') && document.querySelector('.mode').innerHTML === 'TRAIN') {
          var audio = new Audio();
          audio.src = "./src/".concat(_this2.array[_this2.currentCat][event.target.parentElement.id].audioSrc);
          audio.play();
        }

        if (document.querySelector('.mode').innerHTML === 'PLAY' && document.querySelector('.start')) {
          _this2.startGame(event);
        }
      });
    }
  }, {
    key: "menuClick",
    value: function menuClick() {
      var _this3 = this;

      document.querySelector('.nav_bar').addEventListener(this.click, function (event) {
        if (event.target.className === 'nav_bar') return;

        _this3.transformButtMenu();

        document.querySelector('.nav_bar').style.left = '-400px';
        document.querySelector('.menu-back').style.display = 'none';
        document.querySelectorAll('.nav_bar-item').forEach(function (el) {
          el.classList.remove('active');
        });
        document.querySelectorAll('.nav_bar-item')[event.target.id].classList.add('active');
        document.querySelectorAll('.category').forEach(function (el) {
          el.remove();
        });

        if (document.querySelector('.start')) {
          document.querySelector('.start').remove();
        }

        if (event.target.id === '0') {
          document.querySelector('.main-container').classList.remove('cards');
          document.querySelector('.main-container').id = 0;
          var categories = new _categories__WEBPACK_IMPORTED_MODULE_1__["default"]('main-container', 'category', _card__WEBPACK_IMPORTED_MODULE_2__["default"]);
          categories.renderCat();
          return;
        }

        document.querySelector('.main-container').classList.add('cards');
        var cardPage = new _card_page__WEBPACK_IMPORTED_MODULE_0__["default"]('main-container', 'category', _this3.array, event.target.id);
        cardPage.renderCard();
        _this3.currentCat = event.target.id;
      });
      document.querySelector('.menu-back').addEventListener(this.click, function () {
        _this3.transformButtMenu();

        document.querySelector('.nav_bar').style.left = '-400px';
        document.querySelector('.menu-back').style.display = 'none';
      });
    }
  }, {
    key: "transformButtMenu",
    value: function transformButtMenu() {
      this.menuLeft = document.querySelector('.nav_bar').style.left;

      if (this.menuLeft === '-400px') {
        document.querySelector('.line1').style.opacity = '0';
        document.querySelector('.line0').style.transform = 'rotate(45deg)';
        document.querySelector('.line0').style.top = '-4px';
        document.querySelector('.line2').style.transform = 'rotate(-45deg)';
      } else {
        document.querySelector('.line1').style.opacity = '1';
        document.querySelector('.line0').style.transform = 'rotate(0deg)';
        document.querySelector('.line0').style.top = '0px';
        document.querySelector('.line2').style.transform = 'rotate(0deg)';
      }
    }
  }, {
    key: "switchClick",
    value: function switchClick() {
      document.querySelector('.switch').addEventListener(this.click, function () {
        if (document.querySelector('.mode').innerHTML === 'TRAIN') {
          document.querySelector('.mode').style.left = '50px';
          document.querySelector('.mode').innerHTML = 'PLAY';
          document.querySelector('.handle').style.left = '-80px';
          document.querySelector('.switch').className = 'switch play';
          document.querySelectorAll('.category').forEach(function (el) {
            el.classList.add('cat-play');
          });
          document.querySelectorAll('.rotate').forEach(function (el) {
            el.classList.add('hide');
          });
          document.querySelectorAll('.descrip-card').forEach(function (el) {
            el.classList.add('hide');
          });
          document.querySelectorAll('.img-card').forEach(function (el) {
            el.classList.add('img-play');
          });

          if (document.querySelector('.name-category').innerHTML !== 'Main Page') {
            var start = document.createElement('div');
            start.className = 'start';
            start.innerHTML = 'Start Game';
            document.querySelector('.main-container').append(start);
          }
        } else {
          document.querySelector('.mode').style.left = '0px';
          document.querySelector('.mode').innerHTML = 'TRAIN';
          document.querySelector('.handle').style.left = '0px';
          document.querySelector('.switch').className = 'switch train';
          document.querySelectorAll('.category').forEach(function (el) {
            el.classList.remove('cat-play');
          });
          document.querySelectorAll('.rotate').forEach(function (el) {
            el.classList.remove('hide');
          });
          document.querySelectorAll('.descrip-card').forEach(function (el) {
            el.classList.remove('hide');
          });
          document.querySelectorAll('.img-card').forEach(function (el) {
            el.classList.remove('img-play');
          });

          if (document.querySelector('.name-category').innerHTML !== 'Main Page') {
            document.querySelector('.start').remove();
          }
        }
      });
    }
  }, {
    key: "startGame",
    value: function startGame(event) {
      var _this4 = this;

      if (event.target.className === 'main-container cards') return;

      if (event.target.className === 'start') {
        document.querySelector('.start').classList.add('start-push');
        document.querySelector('.start').innerHTML = 'Repeat';

        var shuffle = function shuffle(array) {
          return array.sort(function () {
            return Math.random() - 0.5;
          });
        };

        var arr = [0, 1, 2, 3, 4, 5, 6, 7];
        this.shuffle = shuffle(arr);
      }

      if (event.target.style.opacity === '0.5') return;

      if (event.target.className.includes('card') && document.querySelector('.start').innerHTML === 'Repeat' && event.target.style.opacity === '1') {
        if (parseInt(event.target.parentElement.id, 10) === this.currentCard) {
          var starWin = document.createElement('img');
          starWin.src = './src/img/star-win.svg';
          starWin.className = 'correctly';
          document.querySelector('.rating').prepend(starWin);
          var audio = new Audio();
          audio.src = './src/audio/correct.mp3';
          audio.play();
          event.target.style.opacity = '0.5';
          event.target.style.cursor = 'default';
        } else {
          var star = document.createElement('img');
          star.src = './src/img/star.svg';
          star.className = 'wrong';
          document.querySelector('.rating').prepend(star);

          var _audio = new Audio();

          _audio.src = './src/audio/error.mp3';

          _audio.play();

          return;
        }
      }

      if (this.shuffle.length === 0) {
        setTimeout(function () {
          document.querySelectorAll('.category').forEach(function (el) {
            el.remove();
          });

          _this4.resultGame();
        }, 1000);
        document.querySelector('.main-container').classList.remove('cards');
        setTimeout(function () {
          document.querySelector('.main-container').style.flexDirection = '';
          document.querySelector('.res-rating').remove();
          var categories = new _categories__WEBPACK_IMPORTED_MODULE_1__["default"]('main-container', 'category', _card__WEBPACK_IMPORTED_MODULE_2__["default"]);
          categories.renderCat();
        }, 4000);
        return;
      }

      if (document.querySelector('.start').innerHTML === 'Repeat') {
        if (event.target.className.includes('game-run')) {
          var _audio2 = new Audio();

          _audio2.src = "./src/".concat(this.array[this.currentCat][this.currentCard].audioSrc);

          _audio2.play();

          return;
        }

        document.querySelector('.start').classList.add('game-run');
        this.currentCard = this.shuffle.shift();
        setTimeout(function () {
          var audio = new Audio();
          audio.src = "./src/".concat(_this4.array[_this4.currentCat][_this4.currentCard].audioSrc);
          audio.play();
        }, 1000);
      }
    }
  }, {
    key: "resultGame",
    value: function resultGame() {
      var _document$querySelect = document.querySelectorAll('.wrong'),
          length = _document$querySelect.length;

      if (length > 0) {
        document.querySelector('.start').remove();
        document.querySelector('.rating').remove();
        var audio = new Audio();
        audio.src = "".concat(this.src, "audio/failure.mp3");
        audio.play();
        var fail = document.createElement('img');
        fail.className = 'result-img';
        fail.src = "".concat(this.src, "img/failure.jpg");
        document.querySelector('.main-container').append(fail);
        var resultRating = document.createElement('p');
        resultRating.className = 'res-rating';
        resultRating.innerHTML = length > 1 ? "".concat(length, " Errors") : "".concat(length, " Error");
        document.querySelector('.main-container').append(resultRating);
        document.querySelector('.main-container').style.flexDirection = 'column';
      } else {
        document.querySelector('.start').remove();
        document.querySelector('.rating').remove();

        var _audio3 = new Audio();

        _audio3.src = "".concat(this.src, "audio/success.mp3");

        _audio3.play();

        var win = document.createElement('img');
        win.className = 'result-img';
        win.src = "".concat(this.src, "img/success.jpg");
        document.querySelector('.main-container').append(win);

        var _resultRating = document.createElement('p');

        _resultRating.className = 'res-rating';
        _resultRating.innerHTML = 'Win!';
        document.querySelector('.main-container').append(_resultRating);
        document.querySelector('.main-container').style.flexDirection = 'column';
      }
    }
  }]);

  return Action;
}();

/* harmony default export */ __webpack_exports__["default"] = (Action);

/***/ }),

/***/ "./src/app-container.js":
/*!******************************!*\
  !*** ./src/app-container.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppContainer = /*#__PURE__*/function () {
  function AppContainer(target, selector) {
    _classCallCheck(this, AppContainer);

    this.target = target;
    this.selector = selector;
    this.head = null;
    this.main = null;
  }

  _createClass(AppContainer, [{
    key: "render",
    value: function render() {
      var container = document.createElement('div');
      container.className = this.selector;
      document.querySelector(this.target).append(container);
      this.head = document.createElement('div');
      this.head.className = "header-".concat(this.selector);
      document.querySelector(".".concat(this.selector)).append(this.head);
      this.main = document.createElement('div');
      this.main.className = "main-".concat(this.selector);
      document.querySelector(".".concat(this.selector)).append(this.main);
    }
  }]);

  return AppContainer;
}();

/* harmony default export */ __webpack_exports__["default"] = (AppContainer);

/***/ }),

/***/ "./src/butt_menu.js":
/*!**************************!*\
  !*** ./src/butt_menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ButtMenu = /*#__PURE__*/function () {
  function ButtMenu(target, selector) {
    _classCallCheck(this, ButtMenu);

    this.target = target;
    this.selector = selector;
  }

  _createClass(ButtMenu, [{
    key: "render",
    value: function render() {
      var butt = document.createElement('div');
      butt.className = this.selector;
      butt.style.transform = 'rotate(0deg)';
      document.querySelector(".".concat(this.target)).append(butt);

      for (var i = 0; i < 3; i += 1) {
        var elem = document.createElement('div');
        elem.className = "line".concat(i);
        document.querySelector(".".concat(this.selector)).append(elem);
      }
    }
  }]);

  return ButtMenu;
}();

/* harmony default export */ __webpack_exports__["default"] = (ButtMenu);

/***/ }),

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cards = [['Main Page', 'Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'], [{
  word: 'cry',
  translation: 'плакать',
  image: 'img/cry.jpg',
  audioSrc: 'audio/cry.mp3'
}, {
  word: 'dance',
  translation: 'танцевать',
  image: 'img/dance.jpg',
  audioSrc: 'audio/dance.mp3'
}, {
  word: 'dive',
  translation: 'нырять',
  image: 'img/dive.jpg',
  audioSrc: 'audio/dive.mp3'
}, {
  word: 'draw',
  translation: 'рисовать',
  image: 'img/draw.jpg',
  audioSrc: 'audio/draw.mp3'
}, {
  word: 'fish',
  translation: 'ловить рыбу',
  image: 'img/fish.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'fly',
  translation: 'летать',
  image: 'img/fly.jpg',
  audioSrc: 'audio/fly.mp3'
}, {
  word: 'hug',
  translation: 'обнимать',
  image: 'img/hug.jpg',
  audioSrc: 'audio/hug.mp3'
}, {
  word: 'jump',
  translation: 'прыгать',
  image: 'img/jump.jpg',
  audioSrc: 'audio/jump.mp3'
}], [{
  word: 'open',
  translation: 'открывать',
  image: 'img/open.jpg',
  audioSrc: 'audio/open.mp3'
}, {
  word: 'play',
  translation: 'играть',
  image: 'img/play.jpg',
  audioSrc: 'audio/play.mp3'
}, {
  word: 'point',
  translation: 'указывать',
  image: 'img/point.jpg',
  audioSrc: 'audio/point.mp3'
}, {
  word: 'ride',
  translation: 'ездить',
  image: 'img/ride.jpg',
  audioSrc: 'audio/ride.mp3'
}, {
  word: 'run',
  translation: 'бегать',
  image: 'img/run.jpg',
  audioSrc: 'audio/run.mp3'
}, {
  word: 'sing',
  translation: 'петь',
  image: 'img/sing.jpg',
  audioSrc: 'audio/sing.mp3'
}, {
  word: 'skip',
  translation: 'пропускать, прыгать',
  image: 'img/skip.jpg',
  audioSrc: 'audio/skip.mp3'
}, {
  word: 'swim',
  translation: 'плавать',
  image: 'img/swim.jpg',
  audioSrc: 'audio/swim.mp3'
}], [{
  word: 'cat',
  translation: 'кот',
  image: 'img/cat.jpg',
  audioSrc: 'audio/cat.mp3'
}, {
  word: 'chick',
  translation: 'цыплёнок',
  image: 'img/chick.jpg',
  audioSrc: 'audio/chick.mp3'
}, {
  word: 'chicken',
  translation: 'курица',
  image: 'img/chicken.jpg',
  audioSrc: 'audio/chicken.mp3'
}, {
  word: 'dog',
  translation: 'собака',
  image: 'img/dog.jpg',
  audioSrc: 'audio/dog.mp3'
}, {
  word: 'horse',
  translation: 'лошадь',
  image: 'img/horse.jpg',
  audioSrc: 'audio/horse.mp3'
}, {
  word: 'pig',
  translation: 'свинья',
  image: 'img/pig.jpg',
  audioSrc: 'audio/pig.mp3'
}, {
  word: 'rabbit',
  translation: 'кролик',
  image: 'img/rabbit.jpg',
  audioSrc: 'audio/rabbit.mp3'
}, {
  word: 'sheep',
  translation: 'овца',
  image: 'img/sheep.jpg',
  audioSrc: 'audio/sheep.mp3'
}], [{
  word: 'bird',
  translation: 'птица',
  image: 'img/bird.jpg',
  audioSrc: 'audio/bird.mp3'
}, {
  word: 'fish',
  translation: 'рыба',
  image: 'img/fish1.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'frog',
  translation: 'жаба',
  image: 'img/frog.jpg',
  audioSrc: 'audio/frog.mp3'
}, {
  word: 'giraffe',
  translation: 'жирафа',
  image: 'img/giraffe.jpg',
  audioSrc: 'audio/giraffe.mp3'
}, {
  word: 'lion',
  translation: 'лев',
  image: 'img/lion.jpg',
  audioSrc: 'audio/lion.mp3'
}, {
  word: 'mouse',
  translation: 'мышь',
  image: 'img/mouse.jpg',
  audioSrc: 'audio/mouse.mp3'
}, {
  word: 'turtle',
  translation: 'черепаха',
  image: 'img/turtle.jpg',
  audioSrc: 'audio/turtle.mp3'
}, {
  word: 'dolphin',
  translation: 'дельфин',
  image: 'img/dolphin.jpg',
  audioSrc: 'audio/dolphin.mp3'
}], [{
  word: 'skirt',
  translation: 'юбка',
  image: 'img/skirt.jpg',
  audioSrc: 'audio/skirt.mp3'
}, {
  word: 'pants',
  translation: 'брюки',
  image: 'img/pants.jpg',
  audioSrc: 'audio/pants.mp3'
}, {
  word: 'blouse',
  translation: 'блузка',
  image: 'img/blouse.jpg',
  audioSrc: 'audio/blouse.mp3'
}, {
  word: 'dress',
  translation: 'платье',
  image: 'img/dress.jpg',
  audioSrc: 'audio/dress.mp3'
}, {
  word: 'boot',
  translation: 'ботинок',
  image: 'img/boot.jpg',
  audioSrc: 'audio/boot.mp3'
}, {
  word: 'shirt',
  translation: 'рубашка',
  image: 'img/shirt.jpg',
  audioSrc: 'audio/shirt.mp3'
}, {
  word: 'coat',
  translation: 'пальто',
  image: 'img/coat.jpg',
  audioSrc: 'audio/coat.mp3'
}, {
  word: 'shoe',
  translation: 'туфли',
  image: 'img/shoe.jpg',
  audioSrc: 'audio/shoe.mp3'
}], [{
  word: 'sad',
  translation: 'грустный',
  image: 'img/sad.jpg',
  audioSrc: 'audio/sad.mp3'
}, {
  word: 'angry',
  translation: 'сердитый',
  image: 'img/angry.jpg',
  audioSrc: 'audio/angry.mp3'
}, {
  word: 'happy',
  translation: 'счастливый',
  image: 'img/happy.jpg',
  audioSrc: 'audio/happy.mp3'
}, {
  word: 'tired',
  translation: 'уставший',
  image: 'img/tired.jpg',
  audioSrc: 'audio/tired.mp3'
}, {
  word: 'surprised',
  translation: 'удивлённый',
  image: 'img/surprised.jpg',
  audioSrc: 'audio/surprised.mp3'
}, {
  word: 'scared',
  translation: 'испуганный',
  image: 'img/scared.jpg',
  audioSrc: 'audio/scared.mp3'
}, {
  word: 'smile',
  translation: 'улыбка',
  image: 'img/smile.jpg',
  audioSrc: 'audio/smile.mp3'
}, {
  word: 'laugh',
  translation: 'смех',
  image: 'img/laugh.jpg',
  audioSrc: 'audio/laugh.mp3'
}]];
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/card_page.js":
/*!**************************!*\
  !*** ./src/card_page.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CardPage = /*#__PURE__*/function () {
  function CardPage(target, selector, array, id) {
    _classCallCheck(this, CardPage);

    this.target = target;
    this.selector = selector;
    this.array = array;
    this.id = id;
  }

  _createClass(CardPage, [{
    key: "renderCard",
    value: function renderCard() {
      document.querySelector('.name-category').innerHTML = this.array[0][this.id];
      var mode = document.querySelector('.mode').innerHTML;

      if (document.querySelector('.rating')) {
        document.querySelector('.rating').remove();
      }

      var rating = document.createElement('div');
      rating.className = 'rating';
      document.querySelector(".".concat(this.target)).append(rating);

      for (var i = 0; i < this.array[this.id].length; i += 1) {
        var elem = document.createElement('div');
        elem.className = "".concat(this.selector, " card");
        elem.id = i;
        document.querySelector(".".concat(this.target)).append(elem);
        var front = document.createElement('div');
        front.className = 'front-card';
        front.id = i;
        document.querySelectorAll(".".concat(this.selector))[i].append(front);
        var img = document.createElement('img');
        img.src = "./src/".concat(this.array[this.id][i].image);
        img.className = mode === 'TRAIN' ? 'img-card' : 'img-card img-play';
        img.style.opacity = 1;
        document.querySelectorAll('.front-card')[i].append(img);
        var descrip = document.createElement('div');
        descrip.className = mode === 'TRAIN' ? 'descrip-card' : 'descrip-card hide';
        descrip.innerHTML = "".concat(this.array[this.id][i].word);
        document.querySelectorAll('.front-card')[i].append(descrip);
        var back = document.createElement('div');
        back.className = 'back-card';
        back.id = i;
        document.querySelectorAll(".".concat(this.selector))[i].append(back);
        var imgBack = document.createElement('img');
        imgBack.src = "./src/".concat(this.array[this.id][i].image);
        imgBack.className = 'img-card';
        document.querySelectorAll('.back-card')[i].append(imgBack);
        var descripBack = document.createElement('div');
        descripBack.className = 'descrip-card';
        descripBack.innerHTML = "".concat(this.array[this.id][i].translation);
        document.querySelectorAll('.back-card')[i].append(descripBack);
        var rotate = document.createElement('img');
        rotate.className = mode === 'TRAIN' ? 'rotate' : 'rotate hide';
        rotate.src = './src/img/rotate.png';
        document.querySelectorAll(".".concat(this.selector))[i].append(rotate);
      }

      if (mode === 'PLAY') {
        var start = document.createElement('div');
        start.className = 'start';
        start.innerHTML = 'Start Game';
        document.querySelector('.main-container').append(start);
      }
    }
  }]);

  return CardPage;
}();

/* harmony default export */ __webpack_exports__["default"] = (CardPage);

/***/ }),

/***/ "./src/categories.js":
/*!***************************!*\
  !*** ./src/categories.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Categories = /*#__PURE__*/function () {
  function Categories(target, selector, array) {
    _classCallCheck(this, Categories);

    this.target = target;
    this.selector = selector;
    this.array = array;
    this.id = '';
  }

  _createClass(Categories, [{
    key: "renderCat",
    value: function renderCat() {
      if (document.querySelector('.name-category')) {
        document.querySelector('.name-category').remove();
      }

      var header = document.createElement('h1');
      header.className = 'name-category';
      header.innerHTML = "".concat(this.array[0][0]);
      document.querySelector('.switch').before(header);

      if (document.querySelector('.rating')) {
        document.querySelector('.rating').remove();
      }

      if (document.querySelector('.result-img')) {
        document.querySelector('.result-img').remove();
      }

      for (var i = 1; i < this.array[0].length; i += 1) {
        var element = document.createElement('div');
        element.className = document.querySelector('.mode').innerHTML === 'PLAY' ? "".concat(this.selector, " cat-play") : this.selector;
        element.id = i;
        document.querySelector(".".concat(this.target)).append(element);
        var img = document.createElement('img');
        img.className = 'img-category';
        img.src = "./src/".concat(this.array[i][1].image);
        img.id = i;
        document.querySelectorAll(".".concat(this.selector))[i - 1].append(img);
        var descrip = document.createElement('h2');
        descrip.innerHTML = this.array[0][i];
        descrip.id = i;
        document.querySelectorAll(".".concat(this.selector))[i - 1].append(descrip);
      }
    }
  }]);

  return Categories;
}();

/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu(array, target, selector) {
    _classCallCheck(this, Menu);

    this.target = target;
    this.array = array;
    this.selector = selector;
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var menu = document.createElement('ul');
      menu.className = this.selector;
      menu.style.left = '-400px';
      document.querySelector(".".concat(this.target)).append(menu);

      for (var i = 0; i < this.array.length; i += 1) {
        var list = document.createElement('a');
        list.className = i === 0 ? "".concat(menu.className, "-item active") : "".concat(menu.className, "-item");
        list.innerHTML = this.array[0][i];
        list.href = '#';
        list.id = i;
        document.querySelector(".".concat(menu.className)).append(list);
      }

      var back = document.createElement('div');
      back.className = 'menu-back';
      back.style.display = 'none';
      document.querySelector(".".concat(this.target)).append(back);
    }
  }]);

  return Menu;
}();

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/card.js");
/* harmony import */ var _app_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-container */ "./src/app-container.js");
/* harmony import */ var _butt_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./butt_menu */ "./src/butt_menu.js");
/* harmony import */ var _switch_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switch_mode */ "./src/switch_mode.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories */ "./src/categories.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action */ "./src/action.js");







var appContainer = new _app_container__WEBPACK_IMPORTED_MODULE_1__["default"]('body', 'container');
appContainer.render();
var buttMenu = new _butt_menu__WEBPACK_IMPORTED_MODULE_2__["default"](appContainer.head.className, 'butt_menu');
buttMenu.render();
var menu = new _menu__WEBPACK_IMPORTED_MODULE_4__["default"](_card__WEBPACK_IMPORTED_MODULE_0__["default"], appContainer.head.className, 'nav_bar');
menu.render();
var switchMode = new _switch_mode__WEBPACK_IMPORTED_MODULE_3__["default"](appContainer.head.className);
switchMode.render();
var categories = new _categories__WEBPACK_IMPORTED_MODULE_5__["default"](appContainer.main.className, 'category', _card__WEBPACK_IMPORTED_MODULE_0__["default"]);
categories.renderCat();
var action = new _action__WEBPACK_IMPORTED_MODULE_6__["default"](_card__WEBPACK_IMPORTED_MODULE_0__["default"]);
action.buttMenuClick();
action.elementClick();
action.menuClick();
action.switchClick();

/***/ }),

/***/ "./src/switch_mode.js":
/*!****************************!*\
  !*** ./src/switch_mode.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SwitchMode = /*#__PURE__*/function () {
  function SwitchMode(target) {
    _classCallCheck(this, SwitchMode);

    this.target = target;
  }

  _createClass(SwitchMode, [{
    key: "render",
    value: function render() {
      var switchMode = document.createElement('div');
      switchMode.className = 'switch train';
      document.querySelector(".".concat(this.target)).append(switchMode);
      var mode = document.createElement('h3');
      mode.className = 'mode';
      mode.innerHTML = 'TRAIN';
      document.querySelector('.switch').append(mode);
      var handle = document.createElement('div');
      handle.className = 'handle';
      document.querySelector('.switch').append(handle);
    }
  }]);

  return SwitchMode;
}();

/* harmony default export */ __webpack_exports__["default"] = (SwitchMode);

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/script.js ./style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/script.js */"./src/script.js");
module.exports = __webpack_require__(/*! ./style.css */"./style.css");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map