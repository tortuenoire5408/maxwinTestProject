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

	__webpack_require__(1);
	__webpack_require__(7);
	module.exports = __webpack_require__(6);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	var getClockJS = __webpack_require__(6);
	var getDataJS = __webpack_require__(7);
	var striArray = __webpack_require__(8);
	var stringArray = __webpack_require__(9);


	document.write(
	    '<marquee id="txt" width="300" height="30" scrollamount="0" loop="-1">&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp</marquee>'
	    );
	document.write(
	    '<div id="marquee"><div id="marqueeText">Rolling Clouds</div></div>'
	    );
	document.write(
	    '<div id="clock" width="300" height="30"></div>'
	    );

	// getClock    
	setInterval(function(){
	    var time = new Date();
	    $("#clock").text(
	        getClockJS.getTime(time)
	        );
	    }
	    , 1000);


	//getData2
	delayTime();
	setInterval(function(){
	  delayTime();
	    }, 18000);


	function delayTime(){
	    $("#txt").text(" ");
	    $("#txt").attr('scrollamount','0');
	    $("#txt").stop();
	    console.log('delayTime');
	    setTimeout(function(){
	        getDataRestart()
	    }, 1000);
	  }

	function getDataRestart(){
	    var stringArrayLength = getDataJS.getJsonLength(stringArray);
	    var num = Math.floor(Math.random()*stringArrayLength);
	    var data = getDataJS.getJSON(stringArray, num);
	    $("#txt").text(data);
	    $("#txt").attr('scrollamount','5');
	    document.getElementById('txt').start();
	    $("#txt").prop('loop','-1');
	    console.log("getDataRestart");
	    setTimeout(function(){
	        changeLoop()
	    }, 5000);
	  }

	function changeLoop(){
	    $("#txt").prop('loop','1');
	    console.log("changeLoop");
	  }  

	//getData  
	getDataMoveIn();
	setInterval(function(){
	   getDataMoveIn();
	    }, 5000);


	function getDataMoveIn(){
	    var striArrayLength = getDataJS.getJsonLength(striArray);
	    var number = Math.floor(Math.random()*striArrayLength);
	    var data = getDataJS.getJSON(striArray, number)
	    $("#marqueeText").text(data);
	    $("#marqueeText").css("visibility","visible");
	    $("#marqueeText").css("top","5");
	    setTimeout(function(){
	        getDataMoveOut()
	    }, 3500);
	  }

	function getDataMoveOut(){
	    $("#marqueeText").css("visibility","hidden");
	    $("#marqueeText").css("top","30");
	    setTimeout(function(){
	        reset()
	    }, 500);
	  }

	function reset(){
	    $("#marqueeText").css("top","-20");
	  }    

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./project.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./project.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#marquee {\n\tposition: relative;\n\twidth: 300px;\n\theight: 30px;\n\toverflow: hidden;\n\toutline: 1px solid gray;\n}\n\n#marqueeText {\n\tposition: absolute;\n\ttop:-20px;\n\twidth: 300px;\n\theight: 30px;\n\ttext-align:center;\n\t-webkit-transition: all linear 0.5s;\n    -moz-transition: all linear 0.5s;\n    -ms-transition: all linear 0.5s;\n\t-webkit-transition: all linear 0.5s;\n\ttransition: all linear 0.5s;\n}", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	function getClock(){
	    this.getYear = function(time){
	        var year = time.getFullYear();
	        return year;
	    }
	    this.getMonth = function(time){
	        var month = (time.getMonth()+1);
	        return month;
	    }
	    this.getDate = function(time){
	        var date = time.getDate();
	        return date;
	    }
	    this.getHours = function(time){
	        var hours = time.getHours();
	        return hours;
	    }
	    this.getMinutes = function(time){
	        var minutes = time.getMinutes();
	        return minutes;
	    }
	    this.getSeconds = function(time){
	        var Seconds = time.getSeconds();
	        return Seconds;
	    }
	    this.getTime = function(time){
	        var year = this.getYear(time);
	        var month = (this.getMonth(time)+1);
	        var date = this.getDate(time);
	        var hours = this.getHours(time);
	        var minutes = this.getMinutes(time);
	        var Seconds = this.getSeconds(time);
	        if(month.length<2) month = "0"+month;
	        if(date.length<2) date = "0"+date;
	        if(hours.length<2) hours = "0"+hours;
	        if(minutes.length<2) minutes = "0"+minutes;
	        if(Seconds.length<2) Seconds = "0"+Seconds;
	        var timeFormat = year+"-"+month+"-"+date+" "+hours+":"+minutes+":"+Seconds;
	        return timeFormat;
	    }
	}

	module.exports = new getClock(); 

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	    getJsonLength : function(JSONArray){
	        var stringArray = JSONArray;
	        console.log(stringArray.length);
	        return stringArray.length;
	    },
	    getJSON : function(JSONArray, index){ 
	        var stringArray = JSONArray;
	        console.log(stringArray[index].string);
	        return stringArray[index].string;
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = [
		{
			"string": "星期一，猴子穿新衣"
		},
		{
			"string": "星期二，猴子肚子餓"
		},
		{
			"string": "星期三，猴子去爬山"
		},
		{
			"string": "星期四，猴子去考試"
		},
		{
			"string": "星期五，猴子去跳舞"
		},
		{
			"string": "星期六，猴子去斗六"
		},
		{
			"string": "星期七，猴子擦油漆"
		},
		{
			"string": "星期八，猴子吹喇叭"
		},
		{
			"string": "星期九，猴子去喝酒"
		},
		{
			"string": "星期十，猴子死翹翹"
		}
	];

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = [
		{
			"string": "東勢衛生所12/10(星期六)上午增加流感疫苗接種門診，請民眾多加利用!!",
			"delay": 12769
		},
		{
			"string": "105年12月8日(星期四)下午2點於臺中區漁會大甲辦事處舉辦「小眼花簾蛤」放流種苗活動",
			"delay": 14456
		},
		{
			"string": "龍井區衛生所105年12月20日上午8時30分於龍井區衛生所免費癌症篩檢活動",
			"delay": 13523
		}
	];

/***/ }
/******/ ]);