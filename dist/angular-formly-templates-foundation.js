// angular-formly-templates-foundation version 1.0.0-beta.0 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular-formly"), require("api-check"), require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular-formly", "api-check", "angular"], factory);
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
	
	  function addWrappers(formlyConfigProvider, formlyBootstrapApiCheck) {
	    var c = formlyBootstrapApiCheck;
	    formlyConfigProvider.setWrapper([{
	      name: "bootstrapLabel",
	      template: __webpack_require__(17),
	      apiCheck: {
	        templateOptions: c.shape({
	          label: c.string,
	          required: c.bool.optional
	        })
	      },
	      apiCheckInstance: c
	    }, { name: "bootstrapHasError", template: __webpack_require__(18) }]);
	  }
	  addWrappers.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
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
	
	  function addCheckboxType(formlyConfigProvider, formlyBootstrapApiCheck) {
	    var c = formlyBootstrapApiCheck;
	    formlyConfigProvider.setType({
	      name: "checkbox",
	      template: __webpack_require__(19),
	      wrapper: ["bootstrapHasError"],
	      apiCheck: {
	        templateOptions: c.shape({
	          label: c.string
	        })
	      },
	      apiCheckInstance: c
	    });
	  }
	  addCheckboxType.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addCheckboxType);
	
	  function addCheckboxType(formlyConfigProvider, formlyBootstrapApiCheck) {
	    var c = formlyBootstrapApiCheck;
	    formlyConfigProvider.setType({
	      name: "multiCheckbox",
	      template: __webpack_require__(20),
	      wrapper: ["bootstrapLabel", "bootstrapHasError"],
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
	  addCheckboxType.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
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
	      template: "<input class=\"form-control\" ng-model=\"model[options.key]\">",
	      wrapper: ["bootstrapLabel", "bootstrapHasError"]
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
	
	  function addRadioType(formlyConfigProvider, formlyBootstrapApiCheck) {
	    var c = formlyBootstrapApiCheck;
	    formlyConfigProvider.setType({
	      name: "radio",
	      template: __webpack_require__(21),
	      wrapper: ["bootstrapLabel", "bootstrapHasError"],
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
	  addRadioType.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addSelectType);
	
	  function addSelectType(formlyConfigProvider, formlyBootstrapApiCheck) {
	    var c = formlyBootstrapApiCheck;
	    formlyConfigProvider.setType({
	      name: "select",
	      template: __webpack_require__(22),
	      wrapper: ["bootstrapLabel", "bootstrapHasError"],
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
	  addSelectType.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addTextareaType);
	
	  function addTextareaType(formlyConfigProvider, formlyBootstrapApiCheck) {
	    var c = formlyBootstrapApiCheck;
	    formlyConfigProvider.setType({
	      name: "textarea",
	      template: "<textarea class=\"form-control\" ng-model=\"model[options.key]\"></textarea>",
	      wrapper: ["bootstrapLabel", "bootstrapHasError"],
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
	  addTextareaType.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.run(addAddonsManipulator);
	
	  function addAddonsManipulator(formlyConfig, formlyBootstrapApiCheck) {
	    var addonTemplate = __webpack_require__(23);
	    var addonChecker = formlyBootstrapApiCheck.shape({
	      "class": formlyBootstrapApiCheck.string.optional,
	      text: formlyBootstrapApiCheck.string.optional
	    }).strict.optional;
	    var api = formlyBootstrapApiCheck.shape({
	      templateOptions: formlyBootstrapApiCheck.shape({
	        addonLeft: addonChecker,
	        addonRight: addonChecker
	      })
	    });
	    formlyConfig.templateManipulators.preWrapper.push(function (template, options) {
	      if (options.type !== "input" || !options.templateOptions.addonLeft && !options.templateOptions.addonRight) {
	        return template;
	      }
	      formlyBootstrapApiCheck.warn([api], [options]);
	      return addonTemplate.replace("<formly-transclude></formly-transclude>", template);
	    });
	  }
	  addAddonsManipulator.$inject = ["formlyConfig", "formlyBootstrapApiCheck"];
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

	module.exports = "<div>\n  <label for=\"{{id}}\" class=\"control-label\">\n    {{to.label}}\n    {{to.required ? '*' : ''}}\n  </label>\n  <formly-transclude></formly-transclude>\n</div>\n"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"form-group\" ng-class=\"{'has-error': showError}\">\n  <formly-transclude></formly-transclude>\n</div>\n"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"checkbox\">\n\t<label>\n\t\t<input type=\"checkbox\"\n           class=\"formly-field-checkbox\"\n\t\t       ng-model=\"model[options.key]\">\n\t\t{{to.label}}\n\t\t{{to.required ? '*' : ''}}\n\t</label>\n</div>\n"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\"\n             id=\"{{id + '_'+ $index}}\"\n             ng-model=\"multiCheckbox.checked[$index]\"\n             ng-change=\"multiCheckbox.change()\">\n      {{option[to.labelProp || 'name']}}\n    </label>\n  </div>\n</div>\n"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" class=\"radio\">\n    <label>\n      <input type=\"radio\"\n             id=\"{{id + '_'+ $index}}\"\n             tabindex=\"0\"\n             ng-value=\"option[to.valueProp || 'value']\"\n             ng-model=\"model[options.key]\">\n      {{option[to.labelProp || 'name']}}\n    </label>\n  </div>\n</div>\n"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<select class=\"form-control\"\n        ng-model=\"model[options.key]\"\n        ng-options=\"option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options\">\n</select>\n"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div ng-class=\"{'input-group': to.addonLeft || to.addonRight}\">\n    <div class=\"input-group-addon\" ng-if=\"to.addonLeft\">\n        <i class=\"{{to.addonLeft.class}}\" ng-if=\"to.addonLeft.class\"></i>\n        <span ng-if=\"to.addonLeft.text\">{{to.addonLeft.text}}</span>\n    </div>\n    <formly-transclude></formly-transclude>\n    <div class=\"input-group-addon\" ng-if=\"to.addonRight\">\n        <i class=\"{{to.addonRight.class}}\" ng-if=\"to.addonRight.class\"></i>\n        <span ng-if=\"to.addonRight.text\">{{to.addonRight.text}}</span>\n    </div>\n</div>"

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlOThhNmIzYmFkNDcxZjYxY2FlMSIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5jb21tb24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm5nRm9ybWx5XCIsXCJhbWRcIjpcImFuZ3VsYXItZm9ybWx5XCIsXCJjb21tb25qczJcIjpcImFuZ3VsYXItZm9ybWx5XCIsXCJjb21tb25qc1wiOlwiYW5ndWxhci1mb3JtbHlcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImFwaUNoZWNrXCIsXCJhbWRcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanMyXCI6XCJhcGktY2hlY2tcIixcImNvbW1vbmpzXCI6XCJhcGktY2hlY2tcIn0iLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhci1maXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcnVuL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vLi90eXBlcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9tdWx0aUNoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3R5cGVzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3R5cGVzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3R5cGVzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9ydW4vYWRkb25zLmpzIiwid2VicGFjazovLy8uL3J1bi9kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9sYWJlbC5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2hhcy1lcnJvci5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL2NoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvbXVsdGlDaGVja2JveC5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL3JhZGlvLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvc2VsZWN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcnVuL2FkZG9ucy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsT0FBTSxDQUFDLE9BQU8sR0FBRyxtQkFBTyxDQUFDLENBQWdCLENBQUMsQzs7Ozs7Ozs7QUNBMUMsS0FBTSxZQUFZLEdBQUcsa0JBQWtCLENBQUM7QUFDeEMsS0FBTSxPQUFPLEdBQUcsbUJBQU8sQ0FBQyxDQUFlLENBQUMsQ0FBQztBQUN6QyxLQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLG1CQUFPLENBQUMsQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzRSxTQUFRLENBQUMsUUFBUSxDQUNmLDBCQUEwQixFQUMxQixtQkFBTyxDQUFDLENBQVcsQ0FBQyxDQUFDO0FBQ25CLFNBQU0sRUFBRTtBQUNOLFdBQU0sRUFBRSwyQkFBMkI7SUFDcEM7RUFDRixDQUFDLENBQ0gsQ0FBQztBQUNGLFNBQVEsQ0FBQyxRQUFRLENBQUMseUJBQXlCLEVBQUUsZ0JBQU8sQ0FBQyxDQUFDOztBQUV0RCxvQkFBTyxDQUFDLENBQVksQ0FBQyxDQUFD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QTZDLHdGQUF3RixvQkFBb0Isa0ZBQWtGLG1CQUFtQixzSkFBc0oscUJBQXFCLG9GQUFvRixvQkFBb0IsNEIiLCJmaWxlIjoiYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJhbmd1bGFyLWZvcm1seVwiKSwgcmVxdWlyZShcImFwaS1jaGVja1wiKSwgcmVxdWlyZShcImFuZ3VsYXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiYW5ndWxhci1mb3JtbHlcIiwgXCJhcGktY2hlY2tcIiwgXCJhbmd1bGFyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5nRm9ybWx5VGVtcGxhdGVzQm9vdHN0cmFwXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIiksIHJlcXVpcmUoXCJhcGktY2hlY2tcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZ0Zvcm1seVRlbXBsYXRlc0Jvb3RzdHJhcFwiXSA9IGZhY3Rvcnkocm9vdFtcIm5nRm9ybWx5XCJdLCByb290W1wiYXBpQ2hlY2tcIl0sIHJvb3RbXCJhbmd1bGFyXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGU5OGE2YjNiYWQ0NzFmNjFjYWUxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2luZGV4LmNvbW1vbicpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vaW5kZXguanNcbiAqKi8iLCJjb25zdCBuZ01vZHVsZU5hbWUgPSAnZm9ybWx5Rm91bmRhdGlvbic7XG5jb25zdCBhbmd1bGFyID0gcmVxdWlyZSgnLi9hbmd1bGFyLWZpeCcpO1xuY29uc3QgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShuZ01vZHVsZU5hbWUsIFtyZXF1aXJlKCdhbmd1bGFyLWZvcm1seScpXSk7XG5uZ01vZHVsZS5jb25zdGFudChcbiAgJ2Zvcm1seUZvdW5kYXRpb25BcGlDaGVjaycsXG4gIHJlcXVpcmUoJ2FwaS1jaGVjaycpKHtcbiAgICBvdXRwdXQ6IHtcbiAgICAgIHByZWZpeDogJ2FuZ3VsYXItZm9ybWx5LWZvdW5kYXRpb24nXG4gICAgfVxuICB9KVxuKTtcbm5nTW9kdWxlLmNvbnN0YW50KCdmb3JtbHlGb3VuZGF0aW9uVmVyc2lvbicsIFZFUlNJT04pO1xuXG5yZXF1aXJlKCcuL3dyYXBwZXJzJykobmdNb2R1bGUpO1xucmVxdWlyZSgnLi90eXBlcycpKG5nTW9kdWxlKTtcbnJlcXVpcmUoJy4vcnVuJykobmdNb2R1bGUpO1xuXG5leHBvcnQgZGVmYXVsdCBuZ01vZHVsZU5hbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5jb21tb24uanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifVxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJhcGlDaGVja1wiLFwiYW1kXCI6XCJhcGktY2hlY2tcIixcImNvbW1vbmpzMlwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qc1wiOlwiYXBpLWNoZWNrXCJ9XG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc29tZSB2ZXJzaW9ucyBvZiBhbmd1bGFyIGRvbid0IGV4cG9ydCB0aGUgYW5ndWxhciBtb2R1bGUgcHJvcGVybHksXG4vLyBzbyB3ZSBnZXQgaXQgZnJvbSB3aW5kb3cgaW4gdGhpcyBjYXNlLlxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XG5pZiAoIWFuZ3VsYXIudmVyc2lvbikge1xuICBhbmd1bGFyID0gd2luZG93LmFuZ3VsYXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9hbmd1bGFyLWZpeC9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFdyYXBwZXJzKTtcblxuICBmdW5jdGlvbiBhZGRXcmFwcGVycyhmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2spIHtcbiAgICBjb25zdCBjID0gZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2s7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcihbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdib290c3RyYXBMYWJlbCcsXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xhYmVsLmh0bWwnKSxcbiAgICAgICAgYXBpQ2hlY2s6IHtcbiAgICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGMuc2hhcGUoe1xuICAgICAgICAgICAgbGFiZWw6IGMuc3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGMuYm9vbC5vcHRpb25hbFxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGFwaUNoZWNrSW5zdGFuY2U6IGNcbiAgICAgIH0sXG4gICAgICB7bmFtZTogJ2Jvb3RzdHJhcEhhc0Vycm9yJywgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaGFzLWVycm9yLmh0bWwnKX1cbiAgICBdKTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL3dyYXBwZXJzL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuICByZXF1aXJlKCcuL2NoZWNrYm94JykobmdNb2R1bGUpO1xuICByZXF1aXJlKCcuL211bHRpQ2hlY2tib3gnKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoJy4vaW5wdXQnKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoJy4vcmFkaW8nKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoJy4vc2VsZWN0JykobmdNb2R1bGUpO1xuICByZXF1aXJlKCcuL3RleHRhcmVhJykobmdNb2R1bGUpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IGFkZG9ucyBmcm9tICcuL2FkZG9ucyc7XG5pbXBvcnQgZGVzY3JpcHRpb24gZnJvbSAnLi9kZXNjcmlwdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcbiAgYWRkb25zKG5nTW9kdWxlKTtcbiAgZGVzY3JpcHRpb24obmdNb2R1bGUpO1xufTtcblxuLy9leHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XG4vLyAgcmVxdWlyZSgnLi9hZGRvbnMnKShuZ01vZHVsZSk7XG4vLyAgcmVxdWlyZSgnLi9kZXNjcmlwdGlvbicpKG5nTW9kdWxlKTtcbi8vfTtcbi8vXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9ydW4vaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRDaGVja2JveFR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZENoZWNrYm94VHlwZShmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2spIHtcbiAgICBjb25zdCBjID0gZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2s7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY2hlY2tib3guaHRtbCcpLFxuICAgICAgd3JhcHBlcjogWydib290c3RyYXBIYXNFcnJvciddLFxuICAgICAgYXBpQ2hlY2s6IHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiBjLnNoYXBlKHtcbiAgICAgICAgICBsYWJlbDogYy5zdHJpbmdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhcGlDaGVja0luc3RhbmNlOiBjXG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9jaGVja2JveC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZENoZWNrYm94VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkQ2hlY2tib3hUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyLCBmb3JtbHlCb290c3RyYXBBcGlDaGVjaykge1xuICAgIGNvbnN0IGMgPSBmb3JtbHlCb290c3RyYXBBcGlDaGVjaztcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6ICdtdWx0aUNoZWNrYm94JyxcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL211bHRpQ2hlY2tib3guaHRtbCcpLFxuICAgICAgd3JhcHBlcjogWydib290c3RyYXBMYWJlbCcsICdib290c3RyYXBIYXNFcnJvciddLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBhcGlDaGVjazoge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGMuc2hhcGUoe1xuICAgICAgICAgIG9wdGlvbnM6IGMuYXJyYXlPZihjLm9iamVjdCksXG4gICAgICAgICAgbGFiZWxQcm9wOiBjLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICB2YWx1ZVByb3A6IGMuc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2tJbnN0YW5jZTogYyxcbiAgICAgIGNvbnRyb2xsZXI6IC8qIEBuZ0luamVjdCAqLyBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICAgY29uc3QgdG8gPSAkc2NvcGUudG87XG4gICAgICAgIGNvbnN0IG9wdHMgPSAkc2NvcGUub3B0aW9ucztcbiAgICAgICAgJHNjb3BlLm11bHRpQ2hlY2tib3ggPSB7XG4gICAgICAgICAgY2hlY2tlZDogW10sXG4gICAgICAgICAgY2hhbmdlOiBzZXRNb2RlbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgdGhlIGNoZWNrYm94ZXMgY2hlY2sgcHJvcGVydHlcbiAgICAgICAgY29uc3QgbW9kZWxWYWx1ZSA9ICRzY29wZS5tb2RlbFtvcHRzLmtleV07XG4gICAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkobW9kZWxWYWx1ZSkpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZVByb3AgPSB0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJztcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2godG8ub3B0aW9ucywgZnVuY3Rpb24odiwgaW5kZXgpIHtcbiAgICAgICAgICAgICRzY29wZS5tdWx0aUNoZWNrYm94LmNoZWNrZWRbaW5kZXhdID0gbW9kZWxWYWx1ZS5pbmRleE9mKHZbdmFsdWVQcm9wXSkgIT09IC0xO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0TW9kZWwoKSB7XG4gICAgICAgICAgJHNjb3BlLm1vZGVsW29wdHMua2V5XSA9IFtdO1xuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkLCAoY2hlY2tib3gsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3gpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsW29wdHMua2V5XS5wdXNoKHRvLm9wdGlvbnNbaW5kZXhdW3RvLnZhbHVlUHJvcCB8fCAndmFsdWUnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL211bHRpQ2hlY2tib3guanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRJbnB1dFR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZElucHV0VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogJ2lucHV0JyxcbiAgICAgIHRlbXBsYXRlOiAnPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmctbW9kZWw9XCJtb2RlbFtvcHRpb25zLmtleV1cIj4nLFxuICAgICAgd3JhcHBlcjogWydib290c3RyYXBMYWJlbCcsICdib290c3RyYXBIYXNFcnJvciddXG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9pbnB1dC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFJhZGlvVHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkUmFkaW9UeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyLCBmb3JtbHlCb290c3RyYXBBcGlDaGVjaykge1xuICAgIGNvbnN0IGMgPSBmb3JtbHlCb290c3RyYXBBcGlDaGVjaztcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6ICdyYWRpbycsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9yYWRpby5odG1sJyksXG4gICAgICB3cmFwcGVyOiBbJ2Jvb3RzdHJhcExhYmVsJywgJ2Jvb3RzdHJhcEhhc0Vycm9yJ10sXG4gICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICBub0Zvcm1Db250cm9sOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrOiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczogYy5zaGFwZSh7XG4gICAgICAgICAgb3B0aW9uczogYy5hcnJheU9mKGMub2JqZWN0KSxcbiAgICAgICAgICBsYWJlbFByb3A6IGMuc3RyaW5nLm9wdGlvbmFsLFxuICAgICAgICAgIHZhbHVlUHJvcDogYy5zdHJpbmcub3B0aW9uYWxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhcGlDaGVja0luc3RhbmNlOiBjXG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9yYWRpby5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0ICBuZ01vZHVsZSA9PiB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRTZWxlY3RUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRTZWxlY3RUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyLCBmb3JtbHlCb290c3RyYXBBcGlDaGVjaykge1xuICAgIGNvbnN0IGMgPSBmb3JtbHlCb290c3RyYXBBcGlDaGVjaztcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc2VsZWN0Lmh0bWwnKSxcbiAgICAgIHdyYXBwZXI6IFsnYm9vdHN0cmFwTGFiZWwnLCAnYm9vdHN0cmFwSGFzRXJyb3InXSxcbiAgICAgIGFwaUNoZWNrOiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczogYy5zaGFwZSh7XG4gICAgICAgICAgb3B0aW9uczogYy5hcnJheU9mKGMub2JqZWN0KSxcbiAgICAgICAgICBsYWJlbFByb3A6IGMuc3RyaW5nLm9wdGlvbmFsLFxuICAgICAgICAgIHZhbHVlUHJvcDogYy5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAgICAgZ3JvdXBQcm9wOiBjLnN0cmluZy5vcHRpb25hbFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrSW5zdGFuY2U6IGNcbiAgICB9KTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL3NlbGVjdC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0ICBuZ01vZHVsZSA9PiB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRUZXh0YXJlYVR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZFRleHRhcmVhVHlwZShmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2spIHtcbiAgICBjb25zdCBjID0gZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2s7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiAndGV4dGFyZWEnLFxuICAgICAgdGVtcGxhdGU6ICc8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuZy1tb2RlbD1cIm1vZGVsW29wdGlvbnMua2V5XVwiPjwvdGV4dGFyZWE+JyxcbiAgICAgIHdyYXBwZXI6IFsnYm9vdHN0cmFwTGFiZWwnLCAnYm9vdHN0cmFwSGFzRXJyb3InXSxcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgIG5nTW9kZWxBdHRyczoge1xuICAgICAgICAgIHJvd3M6IHthdHRyaWJ1dGU6ICdyb3dzJ30sXG4gICAgICAgICAgY29sczoge2F0dHJpYnV0ZTogJ2NvbHMnfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2s6IHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiBjLnNoYXBlKHtcbiAgICAgICAgICByb3dzOiBjLm51bWJlci5vcHRpb25hbCxcbiAgICAgICAgICBjb2xzOiBjLm51bWJlci5vcHRpb25hbFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrSW5zdGFuY2U6IGNcbiAgICB9KTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL3RleHRhcmVhLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5ydW4oYWRkQWRkb25zTWFuaXB1bGF0b3IpO1xuXG4gIGZ1bmN0aW9uIGFkZEFkZG9uc01hbmlwdWxhdG9yKGZvcm1seUNvbmZpZywgZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2spIHtcbiAgICB2YXIgYWRkb25UZW1wbGF0ZSA9IHJlcXVpcmUoJy4vYWRkb25zLmh0bWwnKTtcbiAgICBjb25zdCBhZGRvbkNoZWNrZXIgPSBmb3JtbHlCb290c3RyYXBBcGlDaGVjay5zaGFwZSh7XG4gICAgICBjbGFzczogZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2suc3RyaW5nLm9wdGlvbmFsLFxuICAgICAgdGV4dDogZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2suc3RyaW5nLm9wdGlvbmFsXG4gICAgfSkuc3RyaWN0Lm9wdGlvbmFsO1xuICAgIGNvbnN0IGFwaSA9IGZvcm1seUJvb3RzdHJhcEFwaUNoZWNrLnNoYXBlKHtcbiAgICAgIHRlbXBsYXRlT3B0aW9uczogZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2suc2hhcGUoe1xuICAgICAgICBhZGRvbkxlZnQ6IGFkZG9uQ2hlY2tlcixcbiAgICAgICAgYWRkb25SaWdodDogYWRkb25DaGVja2VyXG4gICAgICB9KVxuICAgIH0pO1xuICAgIGZvcm1seUNvbmZpZy50ZW1wbGF0ZU1hbmlwdWxhdG9ycy5wcmVXcmFwcGVyLnB1c2goZnVuY3Rpb24odGVtcGxhdGUsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLnR5cGUgIT09ICdpbnB1dCcgfHwgKCFvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5hZGRvbkxlZnQgJiYgIW9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmFkZG9uUmlnaHQpKSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGZvcm1seUJvb3RzdHJhcEFwaUNoZWNrLndhcm4oW2FwaV0sIFtvcHRpb25zXSk7XG4gICAgICByZXR1cm4gYWRkb25UZW1wbGF0ZS5yZXBsYWNlKCc8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT4nLCB0ZW1wbGF0ZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9ydW4vYWRkb25zLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5ydW4oYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcik7XG5cbiAgZnVuY3Rpb24gYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcihmb3JtbHlDb25maWcpIHtcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uIGFyaWFEZXNjcmliZWRCeSh0ZW1wbGF0ZSwgb3B0aW9ucywgc2NvcGUpIHtcbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5kZXNjcmlwdGlvbikgJiZcbiAgICAgICAgb3B0aW9ucy50eXBlICE9PSAncmFkaW8nICYmIG9wdGlvbnMudHlwZSAhPT0gJ2NoZWNrYm94Jykge1xuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoYW5ndWxhci5lbGVtZW50KHRlbXBsYXRlKVswXSk7XG4gICAgICAgIHZhciBtb2RlbEVscyA9IGFuZ3VsYXIuZWxlbWVudChlbC5xdWVyeVNlbGVjdG9yQWxsKCdbbmctbW9kZWxdJykpO1xuICAgICAgICBpZiAobW9kZWxFbHMpIHtcbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZChhbmd1bGFyLmVsZW1lbnQoXG4gICAgICAgICAgICAnPHAgaWQ9XCInICsgc2NvcGUuaWQgKyAnX2Rlc2NyaXB0aW9uXCInICtcbiAgICAgICAgICAgICdjbGFzcz1cImhlbHAtYmxvY2tcIicgK1xuICAgICAgICAgICAgJ25nLWlmPVwidG8uZGVzY3JpcHRpb25cIj4nICtcbiAgICAgICAgICAgICd7e3RvLmRlc2NyaXB0aW9ufX0nICtcbiAgICAgICAgICAgICc8L3A+J1xuICAgICAgICAgIClbMF0pO1xuICAgICAgICAgIG1vZGVsRWxzLmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBzY29wZS5pZCArICdfZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vcnVuL2Rlc2NyaXB0aW9uLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxuICA8bGFiZWwgZm9yPVxcXCJ7e2lkfX1cXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5cXG4gICAge3t0by5sYWJlbH19XFxuICAgIHt7dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319XFxuICA8L2xhYmVsPlxcbiAgPGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvbGFiZWwuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogc2hvd0Vycm9yfVxcXCI+XFxuICA8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9oYXMtZXJyb3IuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcblxcdDxsYWJlbD5cXG5cXHRcXHQ8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxuICAgICAgICAgICBjbGFzcz1cXFwiZm9ybWx5LWZpZWxkLWNoZWNrYm94XFxcIlxcblxcdFxcdCAgICAgICBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIj5cXG5cXHRcXHR7e3RvLmxhYmVsfX1cXG5cXHRcXHR7e3RvLnJlcXVpcmVkID8gJyonIDogJyd9fVxcblxcdDwvbGFiZWw+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdHlwZXMvY2hlY2tib3guaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicmFkaW8tZ3JvdXBcXFwiPlxcbiAgPGRpdiBuZy1yZXBlYXQ9XFxcIihrZXksIG9wdGlvbikgaW4gdG8ub3B0aW9uc1xcXCIgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXG4gICAgPGxhYmVsPlxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCJcXG4gICAgICAgICAgICAgaWQ9XFxcInt7aWQgKyAnXycrICRpbmRleH19XFxcIlxcbiAgICAgICAgICAgICBuZy1tb2RlbD1cXFwibXVsdGlDaGVja2JveC5jaGVja2VkWyRpbmRleF1cXFwiXFxuICAgICAgICAgICAgIG5nLWNoYW5nZT1cXFwibXVsdGlDaGVja2JveC5jaGFuZ2UoKVxcXCI+XFxuICAgICAge3tvcHRpb25bdG8ubGFiZWxQcm9wIHx8ICduYW1lJ119fVxcbiAgICA8L2xhYmVsPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdHlwZXMvbXVsdGlDaGVja2JveC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyYWRpby1ncm91cFxcXCI+XFxuICA8ZGl2IG5nLXJlcGVhdD1cXFwiKGtleSwgb3B0aW9uKSBpbiB0by5vcHRpb25zXFxcIiBjbGFzcz1cXFwicmFkaW9cXFwiPlxcbiAgICA8bGFiZWw+XFxuICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIlxcbiAgICAgICAgICAgICBpZD1cXFwie3tpZCArICdfJysgJGluZGV4fX1cXFwiXFxuICAgICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIlxcbiAgICAgICAgICAgICBuZy12YWx1ZT1cXFwib3B0aW9uW3RvLnZhbHVlUHJvcCB8fCAndmFsdWUnXVxcXCJcXG4gICAgICAgICAgICAgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCI+XFxuICAgICAge3tvcHRpb25bdG8ubGFiZWxQcm9wIHx8ICduYW1lJ119fVxcbiAgICA8L2xhYmVsPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdHlwZXMvcmFkaW8uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG4gICAgICAgIG5nLW9wdGlvbnM9XFxcIm9wdGlvblt0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJ10gYXMgb3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddIGdyb3VwIGJ5IG9wdGlvblt0by5ncm91cFByb3AgfHwgJ2dyb3VwJ10gZm9yIG9wdGlvbiBpbiB0by5vcHRpb25zXFxcIj5cXG48L3NlbGVjdD5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi90eXBlcy9zZWxlY3QuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1jbGFzcz1cXFwieydpbnB1dC1ncm91cCc6IHRvLmFkZG9uTGVmdCB8fCB0by5hZGRvblJpZ2h0fVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0XFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJ7e3RvLmFkZG9uTGVmdC5jbGFzc319XFxcIiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0LmNsYXNzXFxcIj48L2k+XFxuICAgICAgICA8c3BhbiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0LnRleHRcXFwiPnt7dG8uYWRkb25MZWZ0LnRleHR9fTwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCIgbmctaWY9XFxcInRvLmFkZG9uUmlnaHRcXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcInt7dG8uYWRkb25SaWdodC5jbGFzc319XFxcIiBuZy1pZj1cXFwidG8uYWRkb25SaWdodC5jbGFzc1xcXCI+PC9pPlxcbiAgICAgICAgPHNwYW4gbmctaWY9XFxcInRvLmFkZG9uUmlnaHQudGV4dFxcXCI+e3t0by5hZGRvblJpZ2h0LnRleHR9fTwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcnVuL2FkZG9ucy5odG1sXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=