(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kernel-kernel-module"],{

/***/ "./src/app/kernel/kernel-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/kernel/kernel-routing.module.ts ***!
  \*************************************************/
/*! exports provided: KernelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KernelRoutingModule", function() { return KernelRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _kernel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kernel.component */ "./src/app/kernel/kernel.component.ts");





const routes = [
    {
        path: ':id',
        component: _kernel_component__WEBPACK_IMPORTED_MODULE_2__["KernelComponent"],
    },
    {
        path: '**',
        component: _kernel_component__WEBPACK_IMPORTED_MODULE_2__["KernelComponent"],
    }
];
class KernelRoutingModule {
}
KernelRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: KernelRoutingModule });
KernelRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function KernelRoutingModule_Factory(t) { return new (t || KernelRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](KernelRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KernelRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/kernel/kernel.component.ts":
/*!********************************************!*\
  !*** ./src/app/kernel/kernel.component.ts ***!
  \********************************************/
/*! exports provided: KernelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KernelComponent", function() { return KernelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/blog/blog.component */ "./src/app/shared/blog/blog.component.ts");




class KernelComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.title = 'Blog Personal';
        this.blog = 'kernel';
    }
    ngOnInit() { }
}
KernelComponent.ɵfac = function KernelComponent_Factory(t) { return new (t || KernelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
KernelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KernelComponent, selectors: [["app-kernel"]], decls: 1, vars: 2, consts: [[3, "title", "blog"]], template: function KernelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-blog", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("blog", ctx.blog);
    } }, directives: [_shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KernelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kernel',
                template: `
    <app-blog [title]="title" [blog]="blog"></app-blog>
  `
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/kernel/kernel.module.ts":
/*!*****************************************!*\
  !*** ./src/app/kernel/kernel.module.ts ***!
  \*****************************************/
/*! exports provided: KernelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KernelModule", function() { return KernelModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _kernel_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kernel-routing.module */ "./src/app/kernel/kernel-routing.module.ts");
/* harmony import */ var _kernel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kernel.component */ "./src/app/kernel/kernel.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







class KernelModule {
}
KernelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: KernelModule });
KernelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function KernelModule_Factory(t) { return new (t || KernelModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _kernel_routing_module__WEBPACK_IMPORTED_MODULE_3__["KernelRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](KernelModule, { declarations: [_kernel_component__WEBPACK_IMPORTED_MODULE_4__["KernelComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _kernel_routing_module__WEBPACK_IMPORTED_MODULE_3__["KernelRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KernelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_kernel_component__WEBPACK_IMPORTED_MODULE_4__["KernelComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _kernel_routing_module__WEBPACK_IMPORTED_MODULE_3__["KernelRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=kernel-kernel-module-es2015.js.map