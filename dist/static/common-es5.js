function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/core/get-sorted-links.ts":
  /*!******************************************!*\
    !*** ./src/app/core/get-sorted-links.ts ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreGetSortedLinksTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = function (links, blog) {
      return links.filter(function (link) {
        return link.route.startsWith("/".concat(blog));
      }).sort(function (a, b) {
        if (a.order < b.order) {
          return -1;
        }

        if (a.order > b.order) {
          return 1;
        }

        return 0;
      });
    };
    /***/

  },

  /***/
  "./src/app/shared/links-list/links-list.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/links-list/links-list.component.ts ***!
    \***********************************************************/

  /*! exports provided: LinksListComponent */

  /***/
  function srcAppSharedLinksListLinksListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinksListComponent", function () {
      return LinksListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_core_get_sorted_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/get-sorted-links */
    "./src/app/core/get-sorted-links.ts");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LinksListComponent_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r1.route, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.title);
      }
    }

    var LinksListComponent =
    /*#__PURE__*/
    function () {
      function LinksListComponent(scully) {
        _classCallCheck(this, LinksListComponent);

        this.scully = scully;
        this.blog = '';
        this.links$ = null;
      }

      _createClass(LinksListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.links$ = this.scully.available$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (links) {
            return Object(src_app_core_get_sorted_links__WEBPACK_IMPORTED_MODULE_2__["default"])(links, _this.blog);
          }));
        }
      }]);

      return LinksListComponent;
    }();

    LinksListComponent.ɵfac = function LinksListComponent_Factory(t) {
      return new (t || LinksListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"]));
    };

    LinksListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LinksListComponent,
      selectors: [["app-links-list"]],
      inputs: {
        blog: "blog"
      },
      decls: 3,
      vars: 3,
      consts: [[1, "list-group", "card"], ["class", "list-group-item list-group-item-action", 3, "href", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", 3, "href"]],
      template: function LinksListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LinksListComponent_a_1_Template, 2, 2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.links$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinksListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-links-list',
          template: "\n    <div class=\"list-group card\">\n      <a *ngFor=\"let link of links$ | async\" [href]=\"link.route\" class=\"list-group-item list-group-item-action\">{{ link.title }}</a>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"]
        }];
      }, {
        blog: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./links-list/links-list.component */
    "./src/app/shared/links-list/links-list.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__["LinksListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__["LinksListComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__["LinksListComponent"]],
          exports: [_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__["LinksListComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map