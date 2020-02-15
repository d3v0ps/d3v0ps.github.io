(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["infiniteloop-infiniteloop-module"],{

/***/ "./src/app/infiniteloop/infiniteloop-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/infiniteloop/infiniteloop-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: InfiniteloopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteloopRoutingModule", function() { return InfiniteloopRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _infiniteloop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infiniteloop.component */ "./src/app/infiniteloop/infiniteloop.component.ts");





const routes = [
    {
        path: ':id',
        component: _infiniteloop_component__WEBPACK_IMPORTED_MODULE_2__["InfiniteloopComponent"],
    },
    {
        path: '**',
        component: _infiniteloop_component__WEBPACK_IMPORTED_MODULE_2__["InfiniteloopComponent"],
    }
];
class InfiniteloopRoutingModule {
}
InfiniteloopRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InfiniteloopRoutingModule });
InfiniteloopRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InfiniteloopRoutingModule_Factory(t) { return new (t || InfiniteloopRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InfiniteloopRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfiniteloopRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/infiniteloop/infiniteloop.component.ts":
/*!********************************************************!*\
  !*** ./src/app/infiniteloop/infiniteloop.component.ts ***!
  \********************************************************/
/*! exports provided: InfiniteloopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteloopComponent", function() { return InfiniteloopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/links-list/links-list.component */ "./src/app/shared/links-list/links-list.component.ts");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");





class InfiniteloopComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() { }
}
InfiniteloopComponent.ɵfac = function InfiniteloopComponent_Factory(t) { return new (t || InfiniteloopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
InfiniteloopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfiniteloopComponent, selectors: [["app-infiniteloop"]], decls: 25, vars: 0, consts: [[1, "navbar", "navbar-dark", "bg-dark", "justify-content-between"], [1, "navbar-brand"], [1, "container-fluid", "my-4"], [1, "row"], [1, "col-2"], ["blog", "infiniteloop"], [1, "col-10"], [1, "card", "p-4"]], template: function InfiniteloopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "In Finite Loop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-links-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "scully-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n\n");
    } }, directives: [_shared_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__["LinksListComponent"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyContentComponent"]], styles: ["[_ngcontent-%COMP%]::slotted(h1)  {\r\n  color:rgb(51, 6, 37);\r\n  background-color: rgb(248, 211, 236);\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5maW5pdGVsb29wL2luZmluaXRlbG9vcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0NBRUM7RUFDQyxvQkFBb0I7RUFDcEIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9pbmZpbml0ZWxvb3AvaW5maW5pdGVsb29wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiA6OnNsb3R0ZWQoaDEpICB7XHJcbiAgY29sb3I6cmdiKDUxLCA2LCAzNyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjExLCAyMzYpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfiniteloopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-infiniteloop',
                templateUrl: './infiniteloop.component.html',
                styleUrls: ['./infiniteloop.component.css'],
                preserveWhitespaces: true,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/infiniteloop/infiniteloop.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/infiniteloop/infiniteloop.module.ts ***!
  \*****************************************************/
/*! exports provided: InfiniteloopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteloopModule", function() { return InfiniteloopModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _infiniteloop_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infiniteloop-routing.module */ "./src/app/infiniteloop/infiniteloop-routing.module.ts");
/* harmony import */ var _infiniteloop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./infiniteloop.component */ "./src/app/infiniteloop/infiniteloop.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







class InfiniteloopModule {
}
InfiniteloopModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: InfiniteloopModule });
InfiniteloopModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function InfiniteloopModule_Factory(t) { return new (t || InfiniteloopModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _infiniteloop_routing_module__WEBPACK_IMPORTED_MODULE_3__["InfiniteloopRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InfiniteloopModule, { declarations: [_infiniteloop_component__WEBPACK_IMPORTED_MODULE_4__["InfiniteloopComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _infiniteloop_routing_module__WEBPACK_IMPORTED_MODULE_3__["InfiniteloopRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InfiniteloopModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_infiniteloop_component__WEBPACK_IMPORTED_MODULE_4__["InfiniteloopComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _infiniteloop_routing_module__WEBPACK_IMPORTED_MODULE_3__["InfiniteloopRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=infiniteloop-infiniteloop-module-es2015.js.map