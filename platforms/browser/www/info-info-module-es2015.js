(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/info/info.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/info/info.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>About</ion-title>\n\t\t<ion-buttons slot=\"primary\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon style=\"opacity:0\" slot=\"icon-only\" name=\"settings\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\t\n\t<div class=\"informations-wrapper\">\n\t\t<img class=\"logo\" src=\"/assets/logo.png\">\n\t\t<h2>Moving Alarm</h2>\n\t\t<p class=\"zero-margin\">Never miss your stop again</p>\n\t\t<p class=\"zero-margin\">Paolo Innocenti</p>\n\t\t<p class=\"zero-margin\">Progetto Human Computer Interaction</p>\n\t</div>\n\t<div class=\"version-wrapper\">\n\t\t\t<span>v1.0.1</span>\n\t\t</div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/info/info-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/info/info-routing.module.ts ***!
  \*********************************************/
/*! exports provided: InfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageRoutingModule", function() { return InfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.page */ "./src/app/info/info.page.ts");




const routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_3__["InfoPage"]
    }
];
let InfoPageRoutingModule = class InfoPageRoutingModule {
};
InfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfoPageRoutingModule);



/***/ }),

/***/ "./src/app/info/info.module.ts":
/*!*************************************!*\
  !*** ./src/app/info/info.module.ts ***!
  \*************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-routing.module */ "./src/app/info/info-routing.module.ts");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info.page */ "./src/app/info/info.page.ts");







let InfoPageModule = class InfoPageModule {
};
InfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _info_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoPageRoutingModule"]
        ],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]]
    })
], InfoPageModule);



/***/ }),

/***/ "./src/app/info/info.page.scss":
/*!*************************************!*\
  !*** ./src/app/info/info.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 60px;\n  margin: 0 auto;\n}\n\n.informations-wrapper {\n  text-align: center;\n  height: 90%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  align-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.version-wrapper {\n  position: absolute;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n\n.zero-margin {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BvbC9EZXNrdG9wL1VOSUZJL0h1bWFuQ29tcHV0ZXJJbnRlcmFjdGlvbi9Nb3ZpbmdBbGFybS9zcmMvYXBwL2luZm8vaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL2luZm8vaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9pbmZvL2luZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XG4gICAgd2lkdGg6NjBweDtcbiAgICBtYXJnaW46MCBhdXRvO1xufVxuXG4uaW5mb3JtYXRpb25zLXdyYXBwZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi52ZXJzaW9uLXdyYXBwZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTowO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG4uemVyby1tYXJnaW57XG4gICAgbWFyZ2luOjA7XG59IiwiLmxvZ28ge1xuICB3aWR0aDogNjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pbmZvcm1hdGlvbnMtd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnZlcnNpb24td3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi56ZXJvLW1hcmdpbiB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/info/info.page.ts":
/*!***********************************!*\
  !*** ./src/app/info/info.page.ts ***!
  \***********************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InfoPage = class InfoPage {
    constructor() { }
    ngOnInit() {
    }
};
InfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: __webpack_require__(/*! raw-loader!./info.page.html */ "./node_modules/raw-loader/index.js!./src/app/info/info.page.html"),
        styles: [__webpack_require__(/*! ./info.page.scss */ "./src/app/info/info.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InfoPage);



/***/ })

}]);
//# sourceMappingURL=info-info-module-es2015.js.map