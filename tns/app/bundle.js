module.exports =
webpackJsonp([0],{

/***/ 118:
/* no static exports found */
/* exports used: default */
/*!**************************!*\
  !*** ./VueComponent.vue ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":1,"remove":true}!vue-style-loader!css-loader?{"url":false}!../~/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-a648ff1a","scoped":true,"hasInlineConfig":false}!sass-loader!../~/vue-loader/lib/selector?type=styles&index=0!./VueComponent.vue */ 123)
}
var Component = __webpack_require__(/*! ../~/vue-loader/lib/component-normalizer */ 157)(
  /* script */
  __webpack_require__(/*! !babel-loader!../~/vue-loader/lib/selector?type=script&index=0!./VueComponent.vue */ 121),
  /* template */
  __webpack_require__(/*! !../~/vue-loader/lib/template-compiler/index?{"id":"data-v-a648ff1a","hasScoped":true}!../~/vue-loader/lib/selector?type=template&index=0!./VueComponent.vue */ 158),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a648ff1a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/james/Projects/bitcoin-ns-vue/app/VueComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VueComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a648ff1a", Component.options)
  } else {
    hotAPI.reload("data-v-a648ff1a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 119:
/* no static exports found */
/* all exports used */
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueComponent__ = __webpack_require__(/*! ./VueComponent */ 118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VueComponent__);
var Vue = __webpack_require__(/*! nativescript-vue/dist/index */ 27);
var http = __webpack_require__(/*! http */ 26);



Vue.prototype.$http = http;

new Vue({
  components: {
    VueComponent: __WEBPACK_IMPORTED_MODULE_0__VueComponent___default.a
  },
  template: '\n    <page ref="page">\n      <action-bar title="{N} CODE Magazine"></action-bar>      \n      <stack-layout>\n        <vue-component></vue-component>\n      </stack-layout> \n    </page>\n  '
}).$start();

/***/ }),

/***/ 121:
/* exports provided: default */
/* all exports used */
/*!****************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/vue-loader/lib/selector.js?type=script&index=0!./VueComponent.vue ***!
  \****************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			currencies: []
		};
	},
	methods: {
		convertCurrencies: function convertCurrencies() {
			var _this = this;

			var codes = ["USD", "GBP", "EUR", "JPY", "UGX"];
			var url = "https://api.coinbase.com";
			url += "/v2/prices/spot?currency=";
			var result = {};
			codes.forEach(function (element) {
				console.log("tamtamtam");
				_this.$http.getJSON(url + element).then(function (response) {
					_this.currencies.push({
						currency: response.data.currency,
						amount: response.data.amount
					});
				}).catch(function (error) {
					console.log("ERROR: " + error);
				});
			});
			console.log(this.currencies.length);
		}
	},
	created: function created() {
		this.convertCurrencies();
	}
});

/***/ }),

/***/ 123:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":1,"remove":true}!../~/vue-style-loader!../~/css-loader?{"url":false}!../~/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-a648ff1a","scoped":true,"hasInlineConfig":false}!../~/sass-loader/lib/loader.js!../~/vue-loader/lib/selector.js?type=styles&index=0!./VueComponent.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 157:
/* no static exports found */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/vue-loader/lib/component-normalizer.js ***!
  \***************************************************/
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 158:
/* no static exports found */
/* all exports used */
/*!****************************************************************************************************************************************************************!*\
  !*** ../~/vue-loader/lib/template-compiler?{"id":"data-v-a648ff1a","hasScoped":true}!../~/vue-loader/lib/selector.js?type=template&index=0!./VueComponent.vue ***!
  \****************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('grid-layout', {
    attrs: {
      "rows": "*, 2*",
      "columns": "*"
    }
  }, [_c('label', {
    staticClass: "h1 text-center",
    attrs: {
      "text": "1 BTC",
      "row": "0",
      "col": "0",
      "verticalAlignment": "middle"
    }
  }), _vm._v(" "), _c('list-view', {
    staticClass: "list-group",
    attrs: {
      "items": _vm.currencies,
      "row": "1",
      "col": "0"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(item) {
        return [_c('grid-layout', {
          staticClass: "list-group-item",
          attrs: {
            "rows": "auto",
            "columns": "*, *"
          }
        }, [_c('label', {
          staticClass: "h2",
          attrs: {
            "text": item.currency,
            "row": "0",
            "col": "0"
          }
        }), _vm._v(" "), _c('label', {
          staticClass: "text-right",
          attrs: {
            "text": item.amount,
            "row": "0",
            "col": "1"
          }
        })])]
      }
    }])
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a648ff1a", module.exports)
  }
}

/***/ })

},[119]);