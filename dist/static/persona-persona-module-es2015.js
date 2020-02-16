(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["persona-persona-module"],{

/***/ "./src/app/persona/persona-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/persona/persona-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PersonaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaRoutingModule", function() { return PersonaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _persona_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persona.component */ "./src/app/persona/persona.component.ts");





const routes = [
    {
        path: ':id',
        component: _persona_component__WEBPACK_IMPORTED_MODULE_2__["PersonaComponent"],
    },
    {
        path: '**',
        component: _persona_component__WEBPACK_IMPORTED_MODULE_2__["PersonaComponent"],
    }
];
class PersonaRoutingModule {
}
PersonaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PersonaRoutingModule });
PersonaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PersonaRoutingModule_Factory(t) { return new (t || PersonaRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PersonaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonaRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/persona/persona.component.ts":
/*!**********************************************!*\
  !*** ./src/app/persona/persona.component.ts ***!
  \**********************************************/
/*! exports provided: PersonaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaComponent", function() { return PersonaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/blog/blog.component */ "./src/app/shared/blog/blog.component.ts");



class PersonaComponent {
    constructor() {
        this.title = 'Información Personal';
        this.blog = 'persona';
    }
    ngOnInit() { }
}
PersonaComponent.ɵfac = function PersonaComponent_Factory(t) { return new (t || PersonaComponent)(); };
PersonaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonaComponent, selectors: [["app-persona"]], decls: 1, vars: 2, consts: [[3, "title", "blog"]], template: function PersonaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-blog", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("blog", ctx.blog);
    } }, directives: [_shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_1__["BlogComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-persona',
                template: `
    <app-blog [title]="title" [blog]="blog"></app-blog>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/persona/persona.module.ts":
/*!*******************************************!*\
  !*** ./src/app/persona/persona.module.ts ***!
  \*******************************************/
/*! exports provided: PersonaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaModule", function() { return PersonaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _persona_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./persona-routing.module */ "./src/app/persona/persona-routing.module.ts");
/* harmony import */ var _persona_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persona.component */ "./src/app/persona/persona.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







class PersonaModule {
}
PersonaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PersonaModule });
PersonaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PersonaModule_Factory(t) { return new (t || PersonaModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _persona_routing_module__WEBPACK_IMPORTED_MODULE_3__["PersonaRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PersonaModule, { declarations: [_persona_component__WEBPACK_IMPORTED_MODULE_4__["PersonaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _persona_routing_module__WEBPACK_IMPORTED_MODULE_3__["PersonaRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PersonaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_persona_component__WEBPACK_IMPORTED_MODULE_4__["PersonaComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _persona_routing_module__WEBPACK_IMPORTED_MODULE_3__["PersonaRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=persona-persona-module-es2015.js.map