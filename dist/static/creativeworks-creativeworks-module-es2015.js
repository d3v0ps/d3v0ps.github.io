(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["creativeworks-creativeworks-module"],{

/***/ "./src/app/creativeworks/creativeworks-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/creativeworks/creativeworks-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CreativeworksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreativeworksRoutingModule", function() { return CreativeworksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _creativeworks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creativeworks.component */ "./src/app/creativeworks/creativeworks.component.ts");





const routes = [
    {
        path: ':id',
        component: _creativeworks_component__WEBPACK_IMPORTED_MODULE_2__["CreativeworksComponent"],
    },
    {
        path: '**',
        component: _creativeworks_component__WEBPACK_IMPORTED_MODULE_2__["CreativeworksComponent"],
    }
];
class CreativeworksRoutingModule {
}
CreativeworksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreativeworksRoutingModule });
CreativeworksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreativeworksRoutingModule_Factory(t) { return new (t || CreativeworksRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreativeworksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreativeworksRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/creativeworks/creativeworks.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/creativeworks/creativeworks.component.ts ***!
  \**********************************************************/
/*! exports provided: CreativeworksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreativeworksComponent", function() { return CreativeworksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/blog/blog.component */ "./src/app/shared/blog/blog.component.ts");




class CreativeworksComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.title = 'Trabajos';
        this.blog = 'creativeworks';
    }
    ngOnInit() { }
}
CreativeworksComponent.ɵfac = function CreativeworksComponent_Factory(t) { return new (t || CreativeworksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
CreativeworksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreativeworksComponent, selectors: [["app-creativeworks"]], decls: 1, vars: 2, consts: [[3, "title", "blog"]], template: function CreativeworksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-blog", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("blog", ctx.blog);
    } }, directives: [_shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreativeworksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-creativeworks',
                template: `
    <app-blog [title]="title" [blog]="blog"></app-blog>
  `,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/creativeworks/creativeworks.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/creativeworks/creativeworks.module.ts ***!
  \*******************************************************/
/*! exports provided: CreativeworksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreativeworksModule", function() { return CreativeworksModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _creativeworks_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creativeworks-routing.module */ "./src/app/creativeworks/creativeworks-routing.module.ts");
/* harmony import */ var _creativeworks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./creativeworks.component */ "./src/app/creativeworks/creativeworks.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







class CreativeworksModule {
}
CreativeworksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CreativeworksModule });
CreativeworksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CreativeworksModule_Factory(t) { return new (t || CreativeworksModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _creativeworks_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreativeworksRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CreativeworksModule, { declarations: [_creativeworks_component__WEBPACK_IMPORTED_MODULE_4__["CreativeworksComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _creativeworks_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreativeworksRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreativeworksModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_creativeworks_component__WEBPACK_IMPORTED_MODULE_4__["CreativeworksComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _creativeworks_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreativeworksRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=creativeworks-creativeworks-module-es2015.js.map