// angular-formly-templates-foundation version 1.0.0-beta.0 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular-formly"), require("api-check"), require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular-formly", "api-check", "../bower_components/angular/angular"], factory);
	else if(typeof exports === 'object')
		exports["ngFormlyTemplatesBootstrap"] = factory(require("angular-formly"), require("api-check"), require("angular"));
	else
		root["ngFormlyTemplatesBootstrap"] = factory(root["ngFormly"], root["apiCheck"], root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ngModuleName = "formlyFoundation";
	var angular = __webpack_require__(4);
	var ngModule = angular.module(ngModuleName, [__webpack_require__(2)]);
	ngModule.constant("formlyFoundationApiCheck", __webpack_require__(3)({
	  output: {
	    prefix: "angular-formly-foundation"
	  }
	}));
	ngModule.constant("formlyFoundationVersion", ("1.0.0-beta.0"));
	
	__webpack_require__(5)(ngModule);
	__webpack_require__(6)(ngModule);
	__webpack_require__(7)(ngModule);
	
	module.exports = ngModuleName;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// some versions of angular don't export the angular module properly,
	// so we get it from window in this case.
	"use strict";
	
	var angular = __webpack_require__(8);
	if (!angular.version) {
	  angular = window.angular;
	}
	module.exports = angular;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addWrappers);
	
	  function addWrappers(formlyConfigProvider, formlyFoundationApiCheck) {
	    var c = formlyFoundationApiCheck;
	    formlyConfigProvider.setWrapper([{
	      name: "templateLabel",
	      template: __webpack_require__(17),
	      apiCheck: {
	        templateOptions: c.shape({
	          label: c.string,
	          required: c.bool.optional
	        })
	      },
	      apiCheckInstance: c
	    }, { name: "templateHasError", template: __webpack_require__(18) }]);
	  }
	  addWrappers.$inject = ["formlyConfigProvider", "formlyFoundationApiCheck"];
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  __webpack_require__(9)(ngModule);
	  __webpack_require__(10)(ngModule);
	  __webpack_require__(11)(ngModule);
	  __webpack_require__(12)(ngModule);
	  __webpack_require__(13)(ngModule);
	  __webpack_require__(14)(ngModule);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var addons = _interopRequire(__webpack_require__(15));
	
	var description = _interopRequire(__webpack_require__(16));
	
	module.exports = function (ngModule) {
	  addons(ngModule);
	  description(ngModule);
	};
	
	//export default ngModule => {
	//  require('./addons')(ngModule);
	//  require('./description')(ngModule);
	//};
	//

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addCheckboxType);
	
	  function addCheckboxType(formlyConfigProvider, formlyFoundationApiCheck) {
	    var c = formlyFoundationApiCheck;
	    formlyConfigProvider.setType({
	      name: "checkbox",
	      template: __webpack_require__(19),
	      wrapper: ["templateHasError"],
	      apiCheck: {
	        templateOptions: c.shape({
	          label: c.string
	        })
	      },
	      apiCheckInstance: c
	    });
	  }
	  addCheckboxType.$inject = ["formlyConfigProvider", "formlyFoundationApiCheck"];
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addCheckboxType);
	
	  function addCheckboxType(formlyConfigProvider, formlyFoundationApiCheck) {
	    var c = formlyFoundationApiCheck;
	    formlyConfigProvider.setType({
	      name: "multiCheckbox",
	      template: __webpack_require__(20),
	      wrapper: ["templateLabel", "templateHasError"],
	      defaultOptions: {
	        noFormControl: false
	      },
	      apiCheck: {
	        templateOptions: c.shape({
	          options: c.arrayOf(c.object),
	          labelProp: c.string.optional,
	          valueProp: c.string.optional
	        })
	      },
	      apiCheckInstance: c,
	      controller: /* @ngInject */["$scope", function controller($scope) {
	        var to = $scope.to;
	        var opts = $scope.options;
	        $scope.multiCheckbox = {
	          checked: [],
	          change: setModel
	        };
	
	        // initialize the checkboxes check property
	        var modelValue = $scope.model[opts.key];
	        if (angular.isArray(modelValue)) {
	          (function () {
	            var valueProp = to.valueProp || "value";
	            angular.forEach(to.options, function (v, index) {
	              $scope.multiCheckbox.checked[index] = modelValue.indexOf(v[valueProp]) !== -1;
	            });
	          })();
	        }
	
	        function setModel() {
	          $scope.model[opts.key] = [];
	          angular.forEach($scope.multiCheckbox.checked, function (checkbox, index) {
	            if (checkbox) {
	              $scope.model[opts.key].push(to.options[index][to.valueProp || "value"]);
	            }
	          });
	        }
	      }]
	    });
	  }
	  addCheckboxType.$inject = ["formlyConfigProvider", "formlyFoundationApiCheck"];
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addInputType);
	
	  function addInputType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "input",
	      template: "<input class=\"\" ng-model=\"model[options.key]\">",
	      wrapper: ["templateLabel", "templateHasError"]
	    });
	  }
	  addInputType.$inject = ["formlyConfigProvider"];
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addRadioType);
	
	  function addRadioType(formlyConfigProvider, formlyFoundationApiCheck) {
	    var c = formlyFoundationApiCheck;
	    formlyConfigProvider.setType({
	      name: "radio",
	      template: __webpack_require__(22),
	      wrapper: ["templateLabel", "templateHasError"],
	      defaultOptions: {
	        noFormControl: false
	      },
	      apiCheck: {
	        templateOptions: c.shape({
	          options: c.arrayOf(c.object),
	          labelProp: c.string.optional,
	          valueProp: c.string.optional
	        })
	      },
	      apiCheckInstance: c
	    });
	  }
	  addRadioType.$inject = ["formlyConfigProvider", "formlyFoundationApiCheck"];
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addSelectType);
	
	  function addSelectType(formlyConfigProvider, formlyFoundationApiCheck) {
	    var c = formlyFoundationApiCheck;
	    formlyConfigProvider.setType({
	      name: "select",
	      template: __webpack_require__(21),
	      wrapper: ["templateLabel", "templateHasError"],
	      apiCheck: {
	        templateOptions: c.shape({
	          options: c.arrayOf(c.object),
	          labelProp: c.string.optional,
	          valueProp: c.string.optional,
	          groupProp: c.string.optional
	        })
	      },
	      apiCheckInstance: c
	    });
	  }
	  addSelectType.$inject = ["formlyConfigProvider", "formlyFoundationApiCheck"];
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addTextareaType);
	
	  function addTextareaType(formlyConfigProvider, formlyFoundationApiCheck) {
	    var c = formlyFoundationApiCheck;
	    formlyConfigProvider.setType({
	      name: "textarea",
	      template: "<textarea class=\"\" ng-model=\"model[options.key]\"></textarea>",
	      wrapper: ["templateLabel", "templateHasError"],
	      defaultOptions: {
	        ngModelAttrs: {
	          rows: { attribute: "rows" },
	          cols: { attribute: "cols" }
	        }
	      },
	      apiCheck: {
	        templateOptions: c.shape({
	          rows: c.number.optional,
	          cols: c.number.optional
	        })
	      },
	      apiCheckInstance: c
	    });
	  }
	  addTextareaType.$inject = ["formlyConfigProvider", "formlyFoundationApiCheck"];
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.run(addAddonsManipulator);
	
	  function addAddonsManipulator(formlyConfig, formlyFoundationApiCheck) {
	    var addonTemplate = __webpack_require__(23);
	    var addonChecker = formlyFoundationApiCheck.shape({
	      "class": formlyFoundationApiCheck.string.optional,
	      text: formlyFoundationApiCheck.string.optional
	    }).strict.optional;
	    var api = formlyFoundationApiCheck.shape({
	      templateOptions: formlyFoundationApiCheck.shape({
	        addonLeft: addonChecker,
	        addonRight: addonChecker
	      })
	    });
	    formlyConfig.templateManipulators.preWrapper.push(function (template, options) {
	      if (options.type !== "input" || !options.templateOptions.addonLeft && !options.templateOptions.addonRight) {
	        return template;
	      }
	      formlyFoundationApiCheck.warn([api], [options]);
	      return addonTemplate.replace("<formly-transclude></formly-transclude>", template);
	    });
	  }
	  addAddonsManipulator.$inject = ["formlyConfig", "formlyFoundationApiCheck"];
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.run(addDescriptionManipulator);
	
	  function addDescriptionManipulator(formlyConfig) {
	    formlyConfig.templateManipulators.preWrapper.push(function ariaDescribedBy(template, options, scope) {
	      if (angular.isDefined(options.templateOptions.description) && options.type !== "radio" && options.type !== "checkbox") {
	        var el = document.createElement("div");
	        el.appendChild(angular.element(template)[0]);
	        var modelEls = angular.element(el.querySelectorAll("[ng-model]"));
	        if (modelEls) {
	          el.appendChild(angular.element("<p id=\"" + scope.id + "_description\"" + "class=\"help-block\"" + "ng-if=\"to.description\">" + "{{to.description}}" + "</p>")[0]);
	          modelEls.attr("aria-describedby", scope.id + "_description");
	          return el.innerHTML;
	        } else {
	          return template;
	        }
	      } else {
	        return template;
	      }
	    });
	  }
	  addDescriptionManipulator.$inject = ["formlyConfig"];
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div>\r\n  <label for=\"{{id}}\" class=\"\">\r\n    {{to.label}}\r\n    {{to.required ? '*' : ''}}\r\n  </label>\r\n  <formly-transclude></formly-transclude>\r\n</div>\r\n"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"\" ng-class=\"{'has-error': showError}\">\r\n  <formly-transclude></formly-transclude>\r\n</div>\r\n"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"checkbox\">\r\n\t<label>\r\n\t\t<input type=\"checkbox\"\r\n           class=\"formly-field-checkbox\"\r\n\t\t       ng-model=\"model[options.key]\">\r\n\t\t{{to.label}}\r\n\t\t{{to.required ? '*' : ''}}\r\n\t</label>\r\n</div>\r\n"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"\">\r\n  <div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\">\r\n    <label>\r\n      <input type=\"checkbox\"\r\n             id=\"{{id + '_'+ $index}}\"\r\n             ng-model=\"multiCheckbox.checked[$index]\"\r\n             ng-change=\"multiCheckbox.change()\">\r\n      {{option[to.labelProp || 'name']}}\r\n    </label>\r\n  </div>\r\n</div>\r\n"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<select class=\"\"\r\n        ng-model=\"model[options.key]\"\r\n        ng-options=\"option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options\">\r\n</select>\r\n"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"\">\r\n  <div ng-repeat=\"(key, option) in to.options\" class=\"radio\">\r\n    <label>\r\n      <input type=\"radio\"\r\n             id=\"{{id + '_'+ $index}}\"\r\n             tabindex=\"0\"\r\n             ng-value=\"option[to.valueProp || 'value']\"\r\n             ng-model=\"model[options.key]\">\r\n      {{option[to.labelProp || 'name']}}\r\n    </label>\r\n  </div>\r\n</div>\r\n"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div ng-class=\"{'': to.addonLeft || to.addonRight}\">\r\n    <div class=\"\" ng-if=\"to.addonLeft\">\r\n        <i class=\"{{to.addonLeft.class}}\" ng-if=\"to.addonLeft.class\"></i>\r\n        <span ng-if=\"to.addonLeft.text\">{{to.addonLeft.text}}</span>\r\n    </div>\r\n    <formly-transclude></formly-transclude>\r\n    <div class=\"\" ng-if=\"to.addonRight\">\r\n        <i class=\"{{to.addonRight.class}}\" ng-if=\"to.addonRight.class\"></i>\r\n        <span ng-if=\"to.addonRight.text\">{{to.addonRight.text}}</span>\r\n    </div>\r\n</div>"

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlY2FlM2VmNjc2YjBkZjQ2MTA4OSIsIndlYnBhY2s6Ly8vQzovUmVwb3MvZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQzovUmVwb3MvZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uL3NyYy9pbmRleC5jb21tb24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm5nRm9ybWx5XCIsXCJhbWRcIjpcImFuZ3VsYXItZm9ybWx5XCIsXCJjb21tb25qczJcIjpcImFuZ3VsYXItZm9ybWx5XCIsXCJjb21tb25qc1wiOlwiYW5ndWxhci1mb3JtbHlcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImFwaUNoZWNrXCIsXCJhbWRcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanMyXCI6XCJhcGktY2hlY2tcIixcImNvbW1vbmpzXCI6XCJhcGktY2hlY2tcIn0iLCJ3ZWJwYWNrOi8vL0M6L1JlcG9zL2Zvcm1seS1qcy9hbmd1bGFyLWZvcm1seS10ZW1wbGF0ZXMtZm91bmRhdGlvbi9zcmMvYW5ndWxhci1maXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1JlcG9zL2Zvcm1seS1qcy9hbmd1bGFyLWZvcm1seS10ZW1wbGF0ZXMtZm91bmRhdGlvbi9zcmMvd3JhcHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1JlcG9zL2Zvcm1seS1qcy9hbmd1bGFyLWZvcm1seS10ZW1wbGF0ZXMtZm91bmRhdGlvbi9zcmMvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1JlcG9zL2Zvcm1seS1qcy9hbmd1bGFyLWZvcm1seS10ZW1wbGF0ZXMtZm91bmRhdGlvbi9zcmMvcnVuL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vQzovUmVwb3MvZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uL3NyYy90eXBlcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vQzovUmVwb3MvZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uL3NyYy90eXBlcy9tdWx0aUNoZWNrYm94LmpzIiwid2VicGFjazovLy9DOi9SZXBvcy9mb3JtbHktanMvYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24vc3JjL3R5cGVzL2lucHV0LmpzIiwid2VicGFjazovLy9DOi9SZXBvcy9mb3JtbHktanMvYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24vc3JjL3R5cGVzL3JhZGlvLmpzIiwid2VicGFjazovLy9DOi9SZXBvcy9mb3JtbHktanMvYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24vc3JjL3R5cGVzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vQzovUmVwb3MvZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uL3NyYy90eXBlcy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vQzovUmVwb3MvZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uL3NyYy9ydW4vYWRkb25zLmpzIiwid2VicGFjazovLy9DOi9SZXBvcy9mb3JtbHktanMvYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24vc3JjL3J1bi9kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9sYWJlbC5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2hhcy1lcnJvci5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL2NoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvbXVsdGlDaGVja2JveC5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL3NlbGVjdC5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL3JhZGlvLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcnVuL2FkZG9ucy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsT0FBTSxDQUFDLE9BQU8sR0FBRyxtQkFBTyxDQUFDLENBQWdCLENBQUMsQzs7Ozs7Ozs7QUNBMUMsS0FBTSxZQUFZLEdBQUcsa0JBQWtCLENBQUM7QUFDeEMsS0FBTSxPQUFPLEdBQUcsbUJBQU8sQ0FBQyxDQUFlLENBQUMsQ0FBQztBQUN6QyxLQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLG1CQUFPLENBQUMsQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzRSxTQUFRLENBQUMsUUFBUSxDQUNmLDBCQUEwQixFQUMxQixtQkFBTyxDQUFDLENBQVcsQ0FBQyxDQUFDO0FBQ25CLFNBQU0sRUFBRTtBQUNOLFdBQU0sRUFBRSwyQkFBMkI7SUFDcEM7RUFDRixDQUFDLENBQ0gsQ0FBQztBQUNGLFNBQVEsQ0FBQyxRQUFRLENBQUMseUJBQXlCLEVBQUUsZ0JBQU8sQ0FBQyxDQUFDOztBQUV0RCxvQkFBTyxDQUFDLENBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLG9CQUFPLENBQUMsQ0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDN0Isb0JBQU8sQ0FBQyxDQUFPLENBQUMsQ0FBQyxRQUFRLENB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b3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJhbmd1bGFyLWZvcm1seVwiKSwgcmVxdWlyZShcImFwaS1jaGVja1wiKSwgcmVxdWlyZShcImFuZ3VsYXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiYW5ndWxhci1mb3JtbHlcIiwgXCJhcGktY2hlY2tcIiwgXCJhbmd1bGFyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5nRm9ybWx5VGVtcGxhdGVzQm9vdHN0cmFwXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIiksIHJlcXVpcmUoXCJhcGktY2hlY2tcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZ0Zvcm1seVRlbXBsYXRlc0Jvb3RzdHJhcFwiXSA9IGZhY3Rvcnkocm9vdFtcIm5nRm9ybWx5XCJdLCByb290W1wiYXBpQ2hlY2tcIl0sIHJvb3RbXCJhbmd1bGFyXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGVjYWUzZWY2NzZiMGRmNDYxMDg5XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2luZGV4LmNvbW1vbicpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9SZXBvcy9mb3JtbHktanMvYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24vfi9qc2hpbnQtbG9hZGVyIUM6L1JlcG9zL2Zvcm1seS1qcy9hbmd1bGFyLWZvcm1seS10ZW1wbGF0ZXMtZm91bmRhdGlvbi9zcmMvaW5kZXguanNcbiAqKi8iLCJjb25zdCBuZ01vZHVsZU5hbWUgPSAnZm9ybWx5Rm91bmRhdGlvbic7XHJcbmNvbnN0IGFuZ3VsYXIgPSByZXF1aXJlKCcuL2FuZ3VsYXItZml4Jyk7XHJcbmNvbnN0IG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmdNb2R1bGVOYW1lLCBbcmVxdWlyZSgnYW5ndWxhci1mb3JtbHknKV0pO1xyXG5uZ01vZHVsZS5jb25zdGFudChcclxuICAnZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrJyxcclxuICByZXF1aXJlKCdhcGktY2hlY2snKSh7XHJcbiAgICBvdXRwdXQ6IHtcclxuICAgICAgcHJlZml4OiAnYW5ndWxhci1mb3JtbHktZm91bmRhdGlvbidcclxuICAgIH1cclxuICB9KVxyXG4pO1xyXG5uZ01vZHVsZS5jb25zdGFudCgnZm9ybWx5Rm91bmRhdGlvblZlcnNpb24nLCBWRVJTSU9OKTtcclxuXHJcbnJlcXVpcmUoJy4vd3JhcHBlcnMnKShuZ01vZHVsZSk7XHJcbnJlcXVpcmUoJy4vdHlwZXMnKShuZ01vZHVsZSk7XHJcbnJlcXVpcmUoJy4vcnVuJykobmdNb2R1bGUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGVOYW1lO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9SZXBvcy9mb3JtbHktanMvYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24vfi9qc2hpbnQtbG9hZGVyIUM6L1JlcG9zL2Zvcm1seS1qcy9hbmd1bGFyLWZvcm1seS10ZW1wbGF0ZXMtZm91bmRhdGlvbi9zcmMvaW5kZXguY29tbW9uLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIm5nRm9ybWx5XCIsXCJhbWRcIjpcImFuZ3VsYXItZm9ybWx5XCIsXCJjb21tb25qczJcIjpcImFuZ3VsYXItZm9ybWx5XCIsXCJjb21tb25qc1wiOlwiYW5ndWxhci1mb3JtbHlcIn1cbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwiYXBpQ2hlY2tcIixcImFtZFwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qczJcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanNcIjpcImFwaS1jaGVja1wifVxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNvbWUgdmVyc2lvbnMgb2YgYW5ndWxhciBkb24ndCBleHBvcnQgdGhlIGFuZ3VsYXIgbW9kdWxlIHByb3Blcmx5LFxyXG4vLyBzbyB3ZSBnZXQgaXQgZnJvbSB3aW5kb3cgaW4gdGhpcyBjYXNlLlxyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxuaWYgKCFhbmd1bGFyLnZlcnNpb24pIHtcclxuICBhbmd1bGFyID0gd2luZG93LmFuZ3VsYXI7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9SZXBvcy9mb3JtbHktanMvYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24vfi9qc2hpbnQtbG9hZGVyIUM6L1JlcG9zL2Zvcm1seS1qcy9hbmd1bGFyLWZvcm1seS10ZW1wbGF0ZXMtZm91bmRhdGlvbi9zcmMvYW5ndWxhci1maXgvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFdyYXBwZXJzKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkV3JhcHBlcnMoZm9ybWx5Q29uZmlnUHJvdmlkZXIsIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjaykge1xyXG4gICAgY29uc3QgYyA9IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjaztcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFdyYXBwZXIoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RlbXBsYXRlTGFiZWwnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xhYmVsLmh0bWwnKSxcclxuICAgICAgICBhcGlDaGVjazoge1xyXG4gICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiBjLnNoYXBlKHtcclxuICAgICAgICAgICAgbGFiZWw6IGMuc3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogYy5ib29sLm9wdGlvbmFsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXBpQ2hlY2tJbnN0YW5jZTogY1xyXG4gICAgICB9LFxyXG4gICAgICB7bmFtZTogJ3RlbXBsYXRlSGFzRXJyb3InLCB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9oYXMtZXJyb3IuaHRtbCcpfVxyXG4gICAgXSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9SZXBvcy9mb3JtbHktanMvYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24vfi9qc2hpbnQtbG9hZGVyIUM6L1JlcG9zL2Zvcm1seS1qcy9hbmd1bGFyLWZvcm1seS10ZW1wbGF0ZXMtZm91bmRhdGlvbi9zcmMvd3JhcHBlcnMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgcmVxdWlyZSgnLi9jaGVja2JveCcpKG5nTW9kdWxlKTtcclxuICByZXF1aXJlKCcuL211bHRpQ2hlY2tib3gnKShuZ01vZHVsZSk7XHJcbiAgcmVxdWlyZSgnLi9pbnB1dCcpKG5nTW9kdWxlKTtcclxuICByZXF1aXJlKCcuL3JhZGlvJykobmdNb2R1bGUpO1xyXG4gIHJlcXVpcmUoJy4vc2VsZWN0JykobmdNb2R1bGUpO1xyXG4gIHJlcXVpcmUoJy4vdGV4dGFyZWEnKShuZ01vZHVsZSk7XHJcbn07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1JlcG9zL2Zvcm1seS1qcy9hbmd1bGFyLWZvcm1seS10ZW1wbGF0ZXMtZm91bmRhdGlvbi9+L2pzaGludC1sb2FkZXIhQzovUmVwb3MvZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uL3NyYy90eXBlcy9pbmRleC5qc1xuICoqLyIsImltcG9ydCBhZGRvbnMgZnJvbSAnLi9hZGRvbnMnO1xyXG5pbXBvcnQgZGVzY3JpcHRpb24gZnJvbSAnLi9kZXNjcmlwdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgYWRkb25zKG5nTW9kdWxlKTtcclxuICBkZXNjcmlwdGlvbihuZ01vZHVsZSk7XHJcbn07XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuLy8gIHJlcXVpcmUoJy4vYWRkb25zJykobmdNb2R1bGUpO1xyXG4vLyAgcmVxdWlyZSgnLi9kZXNjcmlwdGlvbicpKG5nTW9kdWxlKTtcclxuLy99O1xyXG4vL1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9SZXBvcy9mb3JtbHktanMvYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24vfi9qc2hpbnQtbG9hZGVyIUM6L1JlcG9zL2Zvcm1seS1qcy9hbmd1bGFyLWZvcm1seS10ZW1wbGF0ZXMtZm91bmRhdGlvbi9zcmMvcnVuL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzhfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYW5ndWxhclwiXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRDaGVja2JveFR5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRDaGVja2JveFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIsIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjaykge1xyXG4gICAgY29uc3QgYyA9IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjaztcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xyXG4gICAgICBuYW1lOiAnY2hlY2tib3gnLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jaGVja2JveC5odG1sJyksXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVIYXNFcnJvciddLFxyXG4gICAgICBhcGlDaGVjazoge1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczogYy5zaGFwZSh7XHJcbiAgICAgICAgICBsYWJlbDogYy5zdHJpbmdcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBhcGlDaGVja0luc3RhbmNlOiBjXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1JlcG9zL2Zvcm1seS1qcy9hbmd1bGFyLWZvcm1seS10ZW1wbGF0ZXMtZm91bmRhdGlvbi9+L2pzaGludC1sb2FkZXIhQzovUmVwb3MvZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uL3NyYy90eXBlcy9jaGVja2JveC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkQ2hlY2tib3hUeXBlKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkQ2hlY2tib3hUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyLCBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2spIHtcclxuICAgIGNvbnN0IGMgPSBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2s7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ211bHRpQ2hlY2tib3gnLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tdWx0aUNoZWNrYm94Lmh0bWwnKSxcclxuICAgICAgd3JhcHBlcjogWyd0ZW1wbGF0ZUxhYmVsJywgJ3RlbXBsYXRlSGFzRXJyb3InXSxcclxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgICAgICBub0Zvcm1Db250cm9sOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICBhcGlDaGVjazoge1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczogYy5zaGFwZSh7XHJcbiAgICAgICAgICBvcHRpb25zOiBjLmFycmF5T2YoYy5vYmplY3QpLFxyXG4gICAgICAgICAgbGFiZWxQcm9wOiBjLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgICAgIHZhbHVlUHJvcDogYy5zdHJpbmcub3B0aW9uYWxcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBhcGlDaGVja0luc3RhbmNlOiBjLFxyXG4gICAgICBjb250cm9sbGVyOiAvKiBAbmdJbmplY3QgKi8gZnVuY3Rpb24oJHNjb3BlKSB7XHJcbiAgICAgICAgY29uc3QgdG8gPSAkc2NvcGUudG87XHJcbiAgICAgICAgY29uc3Qgb3B0cyA9ICRzY29wZS5vcHRpb25zO1xyXG4gICAgICAgICRzY29wZS5tdWx0aUNoZWNrYm94ID0ge1xyXG4gICAgICAgICAgY2hlY2tlZDogW10sXHJcbiAgICAgICAgICBjaGFuZ2U6IHNldE1vZGVsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgY2hlY2tib3hlcyBjaGVjayBwcm9wZXJ0eVxyXG4gICAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSAkc2NvcGUubW9kZWxbb3B0cy5rZXldO1xyXG4gICAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkobW9kZWxWYWx1ZSkpIHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlUHJvcCA9IHRvLnZhbHVlUHJvcCB8fCAndmFsdWUnO1xyXG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHRvLm9wdGlvbnMsIGZ1bmN0aW9uKHYsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tdWx0aUNoZWNrYm94LmNoZWNrZWRbaW5kZXhdID0gbW9kZWxWYWx1ZS5pbmRleE9mKHZbdmFsdWVQcm9wXSkgIT09IC0xO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRNb2RlbCgpIHtcclxuICAgICAgICAgICRzY29wZS5tb2RlbFtvcHRzLmtleV0gPSBbXTtcclxuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkLCAoY2hlY2tib3gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveCkge1xyXG4gICAgICAgICAgICAgICRzY29wZS5tb2RlbFtvcHRzLmtleV0ucHVzaCh0by5vcHRpb25zW2luZGV4XVt0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovUmVwb3MvZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uL34vanNoaW50LWxvYWRlciFDOi9SZXBvcy9mb3JtbHktanMvYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24vc3JjL3R5cGVzL211bHRpQ2hlY2tib3guanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZElucHV0VHlwZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZElucHV0VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xyXG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XHJcbiAgICAgIG5hbWU6ICdpbnB1dCcsXHJcbiAgICAgIHRlbXBsYXRlOiAnPGlucHV0IGNsYXNzPVwiXCIgbmctbW9kZWw9XCJtb2RlbFtvcHRpb25zLmtleV1cIj4nLFxyXG4gICAgICB3cmFwcGVyOiBbJ3RlbXBsYXRlTGFiZWwnLCAndGVtcGxhdGVIYXNFcnJvciddXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1JlcG9zL2Zvcm1seS1qcy9hbmd1bGFyLWZvcm1seS10ZW1wbGF0ZXMtZm91bmRhdGlvbi9+L2pzaGludC1sb2FkZXIhQzovUmVwb3MvZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uL3NyYy90eXBlcy9pbnB1dC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkUmFkaW9UeXBlKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkUmFkaW9UeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyLCBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2spIHtcclxuICAgIGNvbnN0IGMgPSBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2s7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ3JhZGlvJyxcclxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcmFkaW8uaHRtbCcpLFxyXG4gICAgICB3cmFwcGVyOiBbJ3RlbXBsYXRlTGFiZWwnLCAndGVtcGxhdGVIYXNFcnJvciddLFxyXG4gICAgICBkZWZhdWx0T3B0aW9uczoge1xyXG4gICAgICAgIG5vRm9ybUNvbnRyb2w6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIGFwaUNoZWNrOiB7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiBjLnNoYXBlKHtcclxuICAgICAgICAgIG9wdGlvbnM6IGMuYXJyYXlPZihjLm9iamVjdCksXHJcbiAgICAgICAgICBsYWJlbFByb3A6IGMuc3RyaW5nLm9wdGlvbmFsLFxyXG4gICAgICAgICAgdmFsdWVQcm9wOiBjLnN0cmluZy5vcHRpb25hbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGFwaUNoZWNrSW5zdGFuY2U6IGNcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovUmVwb3MvZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uL34vanNoaW50LWxvYWRlciFDOi9SZXBvcy9mb3JtbHktanMvYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24vc3JjL3R5cGVzL3JhZGlvLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgIG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkU2VsZWN0VHlwZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFNlbGVjdFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIsIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjaykge1xyXG4gICAgY29uc3QgYyA9IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjaztcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xyXG4gICAgICBuYW1lOiAnc2VsZWN0JyxcclxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc2VsZWN0Lmh0bWwnKSxcclxuICAgICAgd3JhcHBlcjogWyd0ZW1wbGF0ZUxhYmVsJywgJ3RlbXBsYXRlSGFzRXJyb3InXSxcclxuICAgICAgYXBpQ2hlY2s6IHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGMuc2hhcGUoe1xyXG4gICAgICAgICAgb3B0aW9uczogYy5hcnJheU9mKGMub2JqZWN0KSxcclxuICAgICAgICAgIGxhYmVsUHJvcDogYy5zdHJpbmcub3B0aW9uYWwsXHJcbiAgICAgICAgICB2YWx1ZVByb3A6IGMuc3RyaW5nLm9wdGlvbmFsLFxyXG4gICAgICAgICAgZ3JvdXBQcm9wOiBjLnN0cmluZy5vcHRpb25hbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGFwaUNoZWNrSW5zdGFuY2U6IGNcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovUmVwb3MvZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uL34vanNoaW50LWxvYWRlciFDOi9SZXBvcy9mb3JtbHktanMvYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24vc3JjL3R5cGVzL3NlbGVjdC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0ICBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFRleHRhcmVhVHlwZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRleHRhcmVhVHlwZShmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrKSB7XHJcbiAgICBjb25zdCBjID0gZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrO1xyXG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XHJcbiAgICAgIG5hbWU6ICd0ZXh0YXJlYScsXHJcbiAgICAgIHRlbXBsYXRlOiAnPHRleHRhcmVhIGNsYXNzPVwiXCIgbmctbW9kZWw9XCJtb2RlbFtvcHRpb25zLmtleV1cIj48L3RleHRhcmVhPicsXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVMYWJlbCcsICd0ZW1wbGF0ZUhhc0Vycm9yJ10sXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgbmdNb2RlbEF0dHJzOiB7XHJcbiAgICAgICAgICByb3dzOiB7YXR0cmlidXRlOiAncm93cyd9LFxyXG4gICAgICAgICAgY29sczoge2F0dHJpYnV0ZTogJ2NvbHMnfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYXBpQ2hlY2s6IHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGMuc2hhcGUoe1xyXG4gICAgICAgICAgcm93czogYy5udW1iZXIub3B0aW9uYWwsXHJcbiAgICAgICAgICBjb2xzOiBjLm51bWJlci5vcHRpb25hbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGFwaUNoZWNrSW5zdGFuY2U6IGNcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovUmVwb3MvZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uL34vanNoaW50LWxvYWRlciFDOi9SZXBvcy9mb3JtbHktanMvYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24vc3JjL3R5cGVzL3RleHRhcmVhLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLnJ1bihhZGRBZGRvbnNNYW5pcHVsYXRvcik7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZEFkZG9uc01hbmlwdWxhdG9yKGZvcm1seUNvbmZpZywgZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrKSB7XHJcbiAgICB2YXIgYWRkb25UZW1wbGF0ZSA9IHJlcXVpcmUoJy4vYWRkb25zLmh0bWwnKTtcclxuICAgIGNvbnN0IGFkZG9uQ2hlY2tlciA9IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zaGFwZSh7XHJcbiAgICAgIGNsYXNzOiBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc3RyaW5nLm9wdGlvbmFsLFxyXG4gICAgICB0ZXh0OiBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc3RyaW5nLm9wdGlvbmFsXHJcbiAgICB9KS5zdHJpY3Qub3B0aW9uYWw7XHJcbiAgICBjb25zdCBhcGkgPSBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc2hhcGUoe1xyXG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zaGFwZSh7XHJcbiAgICAgICAgYWRkb25MZWZ0OiBhZGRvbkNoZWNrZXIsXHJcbiAgICAgICAgYWRkb25SaWdodDogYWRkb25DaGVja2VyXHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIGZvcm1seUNvbmZpZy50ZW1wbGF0ZU1hbmlwdWxhdG9ycy5wcmVXcmFwcGVyLnB1c2goZnVuY3Rpb24odGVtcGxhdGUsIG9wdGlvbnMpIHtcclxuICAgICAgaWYgKG9wdGlvbnMudHlwZSAhPT0gJ2lucHV0JyB8fCAoIW9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmFkZG9uTGVmdCAmJiAhb3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnMuYWRkb25SaWdodCkpIHtcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLndhcm4oW2FwaV0sIFtvcHRpb25zXSk7XHJcbiAgICAgIHJldHVybiBhZGRvblRlbXBsYXRlLnJlcGxhY2UoJzxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPicsIHRlbXBsYXRlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovUmVwb3MvZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uL34vanNoaW50LWxvYWRlciFDOi9SZXBvcy9mb3JtbHktanMvYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24vc3JjL3J1bi9hZGRvbnMuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUucnVuKGFkZERlc2NyaXB0aW9uTWFuaXB1bGF0b3IpO1xyXG5cclxuICBmdW5jdGlvbiBhZGREZXNjcmlwdGlvbk1hbmlwdWxhdG9yKGZvcm1seUNvbmZpZykge1xyXG4gICAgZm9ybWx5Q29uZmlnLnRlbXBsYXRlTWFuaXB1bGF0b3JzLnByZVdyYXBwZXIucHVzaChmdW5jdGlvbiBhcmlhRGVzY3JpYmVkQnkodGVtcGxhdGUsIG9wdGlvbnMsIHNjb3BlKSB7XHJcbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5kZXNjcmlwdGlvbikgJiZcclxuICAgICAgICBvcHRpb25zLnR5cGUgIT09ICdyYWRpbycgJiYgb3B0aW9ucy50eXBlICE9PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoYW5ndWxhci5lbGVtZW50KHRlbXBsYXRlKVswXSk7XHJcbiAgICAgICAgdmFyIG1vZGVsRWxzID0gYW5ndWxhci5lbGVtZW50KGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuZy1tb2RlbF0nKSk7XHJcbiAgICAgICAgaWYgKG1vZGVsRWxzKSB7XHJcbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZChhbmd1bGFyLmVsZW1lbnQoXHJcbiAgICAgICAgICAgICc8cCBpZD1cIicgKyBzY29wZS5pZCArICdfZGVzY3JpcHRpb25cIicgK1xyXG4gICAgICAgICAgICAnY2xhc3M9XCJoZWxwLWJsb2NrXCInICtcclxuICAgICAgICAgICAgJ25nLWlmPVwidG8uZGVzY3JpcHRpb25cIj4nICtcclxuICAgICAgICAgICAgJ3t7dG8uZGVzY3JpcHRpb259fScgK1xyXG4gICAgICAgICAgICAnPC9wPidcclxuICAgICAgICAgIClbMF0pO1xyXG4gICAgICAgICAgbW9kZWxFbHMuYXR0cignYXJpYS1kZXNjcmliZWRieScsIHNjb3BlLmlkICsgJ19kZXNjcmlwdGlvbicpO1xyXG4gICAgICAgICAgcmV0dXJuIGVsLmlubmVySFRNTDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovUmVwb3MvZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uL34vanNoaW50LWxvYWRlciFDOi9SZXBvcy9mb3JtbHktanMvYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24vc3JjL3J1bi9kZXNjcmlwdGlvbi5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgPGxhYmVsIGZvcj1cXFwie3tpZH19XFxcIiBjbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAge3t0by5sYWJlbH19XFxyXFxuICAgIHt7dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319XFxyXFxuICA8L2xhYmVsPlxcclxcbiAgPGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvbGFiZWwuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBzaG93RXJyb3J9XFxcIj5cXHJcXG4gIDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3dyYXBwZXJzL2hhcy1lcnJvci5odG1sXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuXFx0PGxhYmVsPlxcclxcblxcdFxcdDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCJcXHJcXG4gICAgICAgICAgIGNsYXNzPVxcXCJmb3JtbHktZmllbGQtY2hlY2tib3hcXFwiXFxyXFxuXFx0XFx0ICAgICAgIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiPlxcclxcblxcdFxcdHt7dG8ubGFiZWx9fVxcclxcblxcdFxcdHt7dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319XFxyXFxuXFx0PC9sYWJlbD5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi90eXBlcy9jaGVja2JveC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgPGRpdiBuZy1yZXBlYXQ9XFxcIihrZXksIG9wdGlvbikgaW4gdG8ub3B0aW9uc1xcXCIgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgPGxhYmVsPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCJcXHJcXG4gICAgICAgICAgICAgaWQ9XFxcInt7aWQgKyAnXycrICRpbmRleH19XFxcIlxcclxcbiAgICAgICAgICAgICBuZy1tb2RlbD1cXFwibXVsdGlDaGVja2JveC5jaGVja2VkWyRpbmRleF1cXFwiXFxyXFxuICAgICAgICAgICAgIG5nLWNoYW5nZT1cXFwibXVsdGlDaGVja2JveC5jaGFuZ2UoKVxcXCI+XFxyXFxuICAgICAge3tvcHRpb25bdG8ubGFiZWxQcm9wIHx8ICduYW1lJ119fVxcclxcbiAgICA8L2xhYmVsPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdHlwZXMvbXVsdGlDaGVja2JveC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2VsZWN0IGNsYXNzPVxcXCJcXFwiXFxyXFxuICAgICAgICBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcclxcbiAgICAgICAgbmctb3B0aW9ucz1cXFwib3B0aW9uW3RvLnZhbHVlUHJvcCB8fCAndmFsdWUnXSBhcyBvcHRpb25bdG8ubGFiZWxQcm9wIHx8ICduYW1lJ10gZ3JvdXAgYnkgb3B0aW9uW3RvLmdyb3VwUHJvcCB8fCAnZ3JvdXAnXSBmb3Igb3B0aW9uIGluIHRvLm9wdGlvbnNcXFwiPlxcclxcbjwvc2VsZWN0PlxcclxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3R5cGVzL3NlbGVjdC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgPGRpdiBuZy1yZXBlYXQ9XFxcIihrZXksIG9wdGlvbikgaW4gdG8ub3B0aW9uc1xcXCIgY2xhc3M9XFxcInJhZGlvXFxcIj5cXHJcXG4gICAgPGxhYmVsPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCJcXHJcXG4gICAgICAgICAgICAgaWQ9XFxcInt7aWQgKyAnXycrICRpbmRleH19XFxcIlxcclxcbiAgICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCJcXHJcXG4gICAgICAgICAgICAgbmctdmFsdWU9XFxcIm9wdGlvblt0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJ11cXFwiXFxyXFxuICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiPlxcclxcbiAgICAgIHt7b3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddfX1cXHJcXG4gICAgPC9sYWJlbD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3R5cGVzL3JhZGlvLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctY2xhc3M9XFxcInsnJzogdG8uYWRkb25MZWZ0IHx8IHRvLmFkZG9uUmlnaHR9XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiXFxcIiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJ7e3RvLmFkZG9uTGVmdC5jbGFzc319XFxcIiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0LmNsYXNzXFxcIj48L2k+XFxyXFxuICAgICAgICA8c3BhbiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0LnRleHRcXFwiPnt7dG8uYWRkb25MZWZ0LnRleHR9fTwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiIG5nLWlmPVxcXCJ0by5hZGRvblJpZ2h0XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJ7e3RvLmFkZG9uUmlnaHQuY2xhc3N9fVxcXCIgbmctaWY9XFxcInRvLmFkZG9uUmlnaHQuY2xhc3NcXFwiPjwvaT5cXHJcXG4gICAgICAgIDxzcGFuIG5nLWlmPVxcXCJ0by5hZGRvblJpZ2h0LnRleHRcXFwiPnt7dG8uYWRkb25SaWdodC50ZXh0fX08L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3J1bi9hZGRvbnMuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9