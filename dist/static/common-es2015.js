(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/get-sorted-links.ts":
/*!******************************************!*\
  !*** ./src/app/core/get-sorted-links.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((links, blog) => links
    .filter(link => link.route.startsWith(`/${blog}`))
    .sort((a, b) => {
    if (a.order < b.order) {
        return -1;
    }
    if (a.order > b.order) {
        return 1;
    }
    return 0;
}));


/***/ }),

/***/ "./src/app/shared/blog/blog.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/blog/blog.component.ts ***!
  \***********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _links_list_links_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../links-list/links-list.component */ "./src/app/shared/links-list/links-list.component.ts");





class BlogComponent {
    constructor(scully, titleService) {
        this.scully = scully;
        this.titleService = titleService;
        this.title = '';
        this.blog = '';
    }
    ngOnInit() {
        this.scully.getCurrent().subscribe(data => this.titleService.setTitle(`d3v0ps | ${data.title}`));
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyRoutesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], inputs: { title: "title", blog: "blog" }, decls: 10, vars: 2, consts: [[1, "navbar", "navbar-dark", "bg-dark", "justify-content-between"], [1, "navbar-brand"], [1, "container-fluid", "my-4"], [1, "row"], [1, "col-md-3", "col-12", "mb-2"], [3, "blog"], [1, "col"], [1, "card", "article", "p-4"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-links-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "scully-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blog", ctx.blog);
    } }, directives: [_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_3__["LinksListComponent"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyContentComponent"]], styles: ["[_ngcontent-%COMP%]::slotted(h1)  {\n        color:rgb(51, 6, 37);\n        background-color: rgb(248, 211, 236);\n        padding: 5px;\n        border-radius: 5px;\n        width: fit-content;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                template: `
    <nav class="navbar navbar-dark bg-dark justify-content-between">
      <a class="navbar-brand">{{ title }}</a>
    </nav>

    <div class="container-fluid my-4">
      <div class="row">

        <div class="col-md-3 col-12 mb-2">
          <app-links-list [blog]="blog"></app-links-list>
        </div>

        <div class="col">
          <div class="card article p-4">
            <scully-content></scully-content>
          </div>
        </div>

      </div>
    </div>
  `,
                styles: [
                    `
      ::slotted(h1)  {
        color:rgb(51, 6, 37);
        background-color: rgb(248, 211, 236);
        padding: 5px;
        border-radius: 5px;
        width: fit-content;
      }
    `
                ]
            }]
    }], function () { return [{ type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyRoutesService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], blog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/links-list/links-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/links-list/links-list.component.ts ***!
  \***********************************************************/
/*! exports provided: LinksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksListComponent", function() { return LinksListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_get_sorted_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/get-sorted-links */ "./src/app/core/get-sorted-links.ts");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function LinksListComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r3.route, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r3.title);
} }
class LinksListComponent {
    constructor(scully) {
        this.scully = scully;
        this.blog = '';
        this.links$ = null;
    }
    ngOnInit() {
        this.links$ = this.scully.available$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((links) => Object(src_app_core_get_sorted_links__WEBPACK_IMPORTED_MODULE_2__["default"])(links, this.blog)));
    }
}
LinksListComponent.ɵfac = function LinksListComponent_Factory(t) { return new (t || LinksListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"])); };
LinksListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinksListComponent, selectors: [["app-links-list"]], inputs: { blog: "blog" }, decls: 3, vars: 3, consts: [[1, "list-group", "card"], ["class", "list-group-item list-group-item-action", 3, "href", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", 3, "href"]], template: function LinksListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LinksListComponent_a_1_Template, 2, 2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.links$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinksListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-links-list',
                template: `
    <div class="list-group card">
      <a *ngFor="let link of links$ | async" [href]="link.route" class="list-group-item list-group-item-action">{{ link.title }}</a>
    </div>
  `
            }]
    }], function () { return [{ type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"] }]; }, { blog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./links-list/links-list.component */ "./src/app/shared/links-list/links-list.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/shared/blog/blog.component.ts");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyLibModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__["LinksListComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyLibModule"]], exports: [_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__["LinksListComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyLibModule"]],
                declarations: [_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__["LinksListComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]],
                exports: [_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__["LinksListComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map