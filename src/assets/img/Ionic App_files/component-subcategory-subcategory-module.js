(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-subcategory-subcategory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/subcategory/subcategory.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/subcategory/subcategory.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title class=\"text-center\">sub category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-grid>\n        <ion-row>\n          </ion-col>\n                <ion-col size=\"4\" [routerLink]=\"['/time-and-date']\" routerDirection=\"root\">\n                  <div class=\"thumbnail\"><img src=\"../../../assets/img/woundcare.jpg\">\n                    <ion-icon name=\"star-outline\"></ion-icon>\n                    <h1>Home</h1>\n                    <p>Wound Care</p>\n                  </div>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <div class=\"thumbnail\"><img src=\"../../../assets/img/pathalogy.jpg\">\n                    <ion-icon name=\"star-outline\"></ion-icon>\n                    <h1>Pathology</h1>\n                    <p>Service</p>\n                  </div>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <div class=\"thumbnail\"><img src=\"../../../assets/img/ambulance.jpeg\">\n                    <ion-icon name=\"star-outline\"></ion-icon>\n                    <h1>Ambulance</h1>\n                    <p>Service</p>\n                  </div>\n                </ion-col>\n               \n              </ion-row>\n      </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/component/subcategory/subcategory-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/subcategory/subcategory-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SubcategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryPageRoutingModule", function() { return SubcategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _subcategory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subcategory.page */ "./src/app/component/subcategory/subcategory.page.ts");




const routes = [
    {
        path: '',
        component: _subcategory_page__WEBPACK_IMPORTED_MODULE_3__["SubcategoryPage"]
    }
];
let SubcategoryPageRoutingModule = class SubcategoryPageRoutingModule {
};
SubcategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubcategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/component/subcategory/subcategory.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/subcategory/subcategory.module.ts ***!
  \*************************************************************/
/*! exports provided: SubcategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryPageModule", function() { return SubcategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _subcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subcategory-routing.module */ "./src/app/component/subcategory/subcategory-routing.module.ts");
/* harmony import */ var _subcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subcategory.page */ "./src/app/component/subcategory/subcategory.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let SubcategoryPageModule = class SubcategoryPageModule {
};
SubcategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubcategoryPageRoutingModule"]
        ],
        declarations: [_subcategory_page__WEBPACK_IMPORTED_MODULE_6__["SubcategoryPage"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
    })
], SubcategoryPageModule);



/***/ }),

/***/ "./src/app/component/subcategory/subcategory.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/component/subcategory/subcategory.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .thumbnail {\n  position: relative;\n  overflow: hidden;\n  text-align: center;\n}\nion-content .thumbnail h1 {\n  font-size: 0.87rem;\n}\nion-content .thumbnail p {\n  font-size: 0.87rem;\n}\nion-content .thumbnail ion-icon {\n  position: absolute;\n  top: -1px;\n  right: 0px;\n  background: var(--ion-color-primary);\n  color: #fff;\n  padding: 4px;\n  border-top-right-radius: 9px;\n}\nion-content .thumbnail img {\n  border-radius: 10px;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi93b3JtL3NyYy9hcHAvY29tcG9uZW50L3N1YmNhdGVnb3J5L3N1YmNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L3N1YmNhdGVnb3J5L3N1YmNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RSO0FERVE7RUFDRSxrQkFBQTtBQ0FWO0FEQ1M7RUFDQyxrQkFBQTtBQ0NWO0FEQ1E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDQ1Y7QURDUTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0NWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3N1YmNhdGVnb3J5L3N1YmNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnR7XG4gICAgLnRodW1ibmFpbHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGgxe1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44N3JlbTtcbiAgICAgICAgfXB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3cmVtO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IC0xcHg7XG4gICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA5cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW1ne1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB9XG4gICAgICB9XG59IiwiaW9uLWNvbnRlbnQgLnRodW1ibmFpbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLnRodW1ibmFpbCBoMSB7XG4gIGZvbnQtc2l6ZTogMC44N3JlbTtcbn1cbmlvbi1jb250ZW50IC50aHVtYm5haWwgcCB7XG4gIGZvbnQtc2l6ZTogMC44N3JlbTtcbn1cbmlvbi1jb250ZW50IC50aHVtYm5haWwgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTFweDtcbiAgcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOXB4O1xufVxuaW9uLWNvbnRlbnQgLnRodW1ibmFpbCBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/subcategory/subcategory.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/component/subcategory/subcategory.page.ts ***!
  \***********************************************************/
/*! exports provided: SubcategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryPage", function() { return SubcategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubcategoryPage = class SubcategoryPage {
    constructor() { }
    ngOnInit() {
    }
};
SubcategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subcategory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subcategory.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/subcategory/subcategory.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subcategory.page.scss */ "./src/app/component/subcategory/subcategory.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SubcategoryPage);



/***/ })

}]);
//# sourceMappingURL=component-subcategory-subcategory-module.js.map