(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["atlas-atlas-module"],{

/***/ "./src/app/atlas/atlas-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/atlas/atlas-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AtlasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtlasRoutingModule", function() { return AtlasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _atlas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atlas.component */ "./src/app/atlas/atlas.component.ts");





const routes = [
    {
        path: ':id',
        component: _atlas_component__WEBPACK_IMPORTED_MODULE_2__["AtlasComponent"],
    },
    {
        path: '**',
        component: _atlas_component__WEBPACK_IMPORTED_MODULE_2__["AtlasComponent"],
    }
];
class AtlasRoutingModule {
}
AtlasRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AtlasRoutingModule });
AtlasRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AtlasRoutingModule_Factory(t) { return new (t || AtlasRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AtlasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AtlasRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/atlas/atlas.component.ts":
/*!******************************************!*\
  !*** ./src/app/atlas/atlas.component.ts ***!
  \******************************************/
/*! exports provided: AtlasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtlasComponent", function() { return AtlasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/blog/blog.component */ "./src/app/shared/blog/blog.component.ts");




class AtlasComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.title = 'Atlas';
        this.blog = 'atlas';
    }
    ngOnInit() { }
}
AtlasComponent.ɵfac = function AtlasComponent_Factory(t) { return new (t || AtlasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
AtlasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AtlasComponent, selectors: [["app-atlas"]], decls: 1, vars: 2, consts: [[3, "title", "blog"]], template: function AtlasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-blog", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("blog", ctx.blog);
    } }, directives: [_shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AtlasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-atlas',
                template: `
    <app-blog [title]="title" [blog]="blog"></app-blog>
  `
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/atlas/atlas.module.ts":
/*!***************************************!*\
  !*** ./src/app/atlas/atlas.module.ts ***!
  \***************************************/
/*! exports provided: AtlasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtlasModule", function() { return AtlasModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _atlas_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atlas-routing.module */ "./src/app/atlas/atlas-routing.module.ts");
/* harmony import */ var _atlas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./atlas.component */ "./src/app/atlas/atlas.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







class AtlasModule {
}
AtlasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AtlasModule });
AtlasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AtlasModule_Factory(t) { return new (t || AtlasModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _atlas_routing_module__WEBPACK_IMPORTED_MODULE_3__["AtlasRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AtlasModule, { declarations: [_atlas_component__WEBPACK_IMPORTED_MODULE_4__["AtlasComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _atlas_routing_module__WEBPACK_IMPORTED_MODULE_3__["AtlasRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AtlasModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_atlas_component__WEBPACK_IMPORTED_MODULE_4__["AtlasComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _atlas_routing_module__WEBPACK_IMPORTED_MODULE_3__["AtlasRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=atlas-atlas-module-es2015.js.map