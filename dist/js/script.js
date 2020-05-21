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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  // Variables
  var myAPI = 'http://localhost:3000/Boolean/php-ajax-dischi/partials/json/json-script.php';
  var albumsContainer = $('#albums');
  var albumsInput = $('#album-input'); // Init Handlebars

  var source = $('#album-template').html();
  var template = Handlebars.compile(source); // Start AJAX Call

  $.ajax({
    url: myAPI,
    method: 'GET',
    success: function success(res) {
      for (var i = 0; i < res.length; i++) {
        var item = res[i];
        var context = {
          albumCover: item.cover,
          albumName: item.album,
          albumArtist: item.artist,
          albumYear: item.year,
          albumData: i
        };
        var output = template(context);
        albumsContainer.append(output);
      }

      ;
    },
    error: function error() {
      console.log('Error API Call');
    }
  }); // End AJAX Call
  // Filtering artists and albums by writing in the input using AJAX

  albumsInput.keyup(function () {
    var newSearch = $(this).val().trim().toLowerCase();
    albumsContainer.html(''); // Start AJAX Call

    $.ajax({
      url: myAPI,
      method: 'GET',
      success: function success(res) {
        for (var i = 0; i < res.length; i++) {
          var item = res[i];

          if (item.artist.toLowerCase().includes(newSearch) || item.album.toLowerCase().includes(newSearch)) {
            var context = {
              albumCover: item.cover,
              albumName: item.album,
              albumArtist: item.artist,
              albumYear: item.year,
              albumData: i
            };
            var output = template(context);
            albumsContainer.append(output);
          }

          ;
        }

        ;
      },
      error: function error() {
        console.log('Error API Call');
      }
    }); // End AJAX Call
  }); // Filtering artists and albums by writing in the input

  /*albumsInput.keyup(function(){
     var newSearch = $(this).val().trim().toLowerCase();
       $('.album').each(function(){
        var albumArtist = $(this).children('h3').text().toLowerCase();
        var albumName = $(this).children('h2').text().toLowerCase();
          if ( albumArtist.includes(newSearch) || albumName.includes(newSearch) ){
           $(this).show();
        }
        else {
           $(this).hide();
        }
     });
  });*/
}); // End Ready Document

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/script.js ./src/scss/main.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\MAMP\htdocs\Boolean\php-ajax-dischi\src\js\script.js */"./src/js/script.js");
module.exports = __webpack_require__(/*! C:\MAMP\htdocs\Boolean\php-ajax-dischi\src\scss\main.scss */"./src/scss/main.scss");


/***/ })

/******/ });