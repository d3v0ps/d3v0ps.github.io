function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["infiniteloop-infiniteloop-module"], {
  /***/
  "./src/app/infiniteloop/infiniteloop-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/infiniteloop/infiniteloop-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: InfiniteloopRoutingModule */

  /***/
  function srcAppInfiniteloopInfiniteloopRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfiniteloopRoutingModule", function () {
      return InfiniteloopRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _infiniteloop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./infiniteloop.component */
    "./src/app/infiniteloop/infiniteloop.component.ts");

    var routes = [{
      path: ':id',
      component: _infiniteloop_component__WEBPACK_IMPORTED_MODULE_2__["InfiniteloopComponent"]
    }, {
      path: '**',
      component: _infiniteloop_component__WEBPACK_IMPORTED_MODULE_2__["InfiniteloopComponent"]
    }];

    var InfiniteloopRoutingModule = function InfiniteloopRoutingModule() {
      _classCallCheck(this, InfiniteloopRoutingModule);
    };

    InfiniteloopRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InfiniteloopRoutingModule
    });
    InfiniteloopRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InfiniteloopRoutingModule_Factory(t) {
        return new (t || InfiniteloopRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InfiniteloopRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfiniteloopRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/infiniteloop/infiniteloop.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/infiniteloop/infiniteloop.component.ts ***!
    \********************************************************/

  /*! exports provided: InfiniteloopComponent */

  /***/
  function srcAppInfiniteloopInfiniteloopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfiniteloopComponent", function () {
      return InfiniteloopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/blog/blog.component */
    "./src/app/shared/blog/blog.component.ts");

    var InfiniteloopComponent =
    /*#__PURE__*/
    function () {
      function InfiniteloopComponent(router, route) {
        _classCallCheck(this, InfiniteloopComponent);

        this.router = router;
        this.route = route;
        this.title = 'Blog sobre desarrollo de Software';
        this.blog = 'infiniteloop';
      }

      _createClass(InfiniteloopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfiniteloopComponent;
    }();

    InfiniteloopComponent.ɵfac = function InfiniteloopComponent_Factory(t) {
      return new (t || InfiniteloopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    InfiniteloopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfiniteloopComponent,
      selectors: [["app-infiniteloop"]],
      decls: 1,
      vars: 2,
      consts: [[3, "title", "blog"]],
      template: function InfiniteloopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-blog", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("blog", ctx.blog);
        }
      },
      directives: [_shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfiniteloopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-infiniteloop',
          template: "\n    <app-blog [title]=\"title\" [blog]=\"blog\"></app-blog>\n  "
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/infiniteloop/infiniteloop.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/infiniteloop/infiniteloop.module.ts ***!
    \*****************************************************/

  /*! exports provided: InfiniteloopModule */

  /***/
  function srcAppInfiniteloopInfiniteloopModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfiniteloopModule", function () {
      return InfiniteloopModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _infiniteloop_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./infiniteloop-routing.module */
    "./src/app/infiniteloop/infiniteloop-routing.module.ts");
    /* harmony import */


    var _infiniteloop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./infiniteloop.component */
    "./src/app/infiniteloop/infiniteloop.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var InfiniteloopModule = function InfiniteloopModule() {
      _classCallCheck(this, InfiniteloopModule);
    };

    InfiniteloopModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: InfiniteloopModule
    });
    InfiniteloopModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function InfiniteloopModule_Factory(t) {
        return new (t || InfiniteloopModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _infiniteloop_routing_module__WEBPACK_IMPORTED_MODULE_3__["InfiniteloopRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InfiniteloopModule, {
        declarations: [_infiniteloop_component__WEBPACK_IMPORTED_MODULE_4__["InfiniteloopComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _infiniteloop_routing_module__WEBPACK_IMPORTED_MODULE_3__["InfiniteloopRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InfiniteloopModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_infiniteloop_component__WEBPACK_IMPORTED_MODULE_4__["InfiniteloopComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _infiniteloop_routing_module__WEBPACK_IMPORTED_MODULE_3__["InfiniteloopRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=infiniteloop-infiniteloop-module-es5.js.map