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
/***/ function(module, exports) {

	function ajax_get(url, callback) {
	    xhr = new XMLHttpRequest();
	    xhr.open("GET", url, true);
	    xhr.send();

	    xhr.onreadystatechange = function() {
	        if (xhr.readyState == 4 && xhr.status == 200) {
	            try {
	                var data = JSON.parse(xhr.responseText);
	                callback(data);
	                console.log(data);
	            } catch(err) {
	                console.log(err.message + " in " + xhr.responseText);
	                return;
	            }
	            
	        }
	    };
	}

	var array = [];
	function find(array, value) {

	  for (var i = 0; i < array.length; i++) {
	    if (array[i] == value) return true;
	  }

	  return false;
	}


	var list = document.getElementById('select');
	ajax_get('js/data.json', function(data) {
	       for (var i=0; i < data.flights.length; i++) {
	            text.innerHTML += data.flights[i].direction.from + ' - ' + data.flights[i].direction.to + '<br>';
	            text.innerHTML += 'Arrival: ' + data.flights[i].arrival + '<br>';
	            text.innerHTML += 'Departure: ' + data.flights[i].departure + '<br><br>';
	            if (find(array, data.flights[i].carrier)) {
	                continue;
	            } else {
	                list.innerHTML += '<option>' + data.flights[i].carrier + '</option>';
	                array.push(data.flights[i].carrier);
	            }
	       }
	});

	function getSelectedText(elementId) {
	    var elt = document.getElementById(elementId);

	    if (elt.selectedIndex == -1)
	        return null;

	    return elt.options[elt.selectedIndex].text;
	}

	var select = document.getElementById('select');
	select.addEventListener('change', onChange);

	function onChange() {
	    text.innerHTML = '';
	    var selectText = getSelectedText(this.getAttribute('id'));
	    ajax_get('js/data.json', function(data) {
	           for (var i=0; i < data.flights.length; i++) {
	            if (selectText == 'All companies') {
	                text.innerHTML += data.flights[i].direction.from + ' - ' + data.flights[i].direction.to + '<br>';
	                text.innerHTML += 'Arrival: ' + data.flights[i].arrival + '<br>';
	                text.innerHTML += 'Departure: ' + data.flights[i].departure + '<br><br>';
	            } else {
	               if (data.flights[i].carrier == selectText) {
	                    // text.innerHTML += 'Id: ' + data.flights[i].id + '<br>';
	                    text.innerHTML += data.flights[i].direction.from + ' - ' + data.flights[i].direction.to + '<br>';
	                    text.innerHTML += 'Arrival: ' + data.flights[i].arrival + '<br>';
	                    text.innerHTML += 'Departure: ' + data.flights[i].departure + '<br><br>';

	               } else { continue;}
	            }
	        }
	    });
	}

/***/ }
/******/ ]);