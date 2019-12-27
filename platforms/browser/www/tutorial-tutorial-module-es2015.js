(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutorial-tutorial-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tutorial/tutorial.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tutorial/tutorial.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>tutorial</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"slides-wrapper\" >\n\t\t<ion-slides class=\"slides-wrapper\" pager=\"true\" [options]=\"slideOpts\">\n\t\t\t<ion-slide class=\"tutorial-slide\">\n\t\t\t\t<img class=\"tutorial-logo\" src=\"/assets/logo.png\">\n\t\t\t\t<h5>Welcome to</h5>\n\t\t\t\t<h1 class=\"app-name\"><strong>Moving Alarm</strong></h1>\n\t\t\t\t<h5>Never miss your stop again</h5>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide class=\"tutorial-slide\">\n\t\t\t\t<img class=\"tutorial-logo\" src=\"/assets/logo.png\">\n\t\t\t\t<h1>To set up a new alarm press on the <ion-icon name=\"notifications\" color=\"secondary\"></ion-icon> icon\n\t\t\t\t\tin the home page.</h1>\n\t\t\t\t<img class=\"img-slide\" src=\"/assets/images/slide1.png\">\n\t\t\t\t</ion-slide>\n\t\t\t\t<ion-slide class=\"tutorial-slide\">\n\t\t\t\t\t<img class=\"tutorial-logo\" src=\"/assets/logo.png\">\n\t\t\t\t\t<h1>Either use one of your recent destinations or press the \n\t\t\t\t\t\t<ion-icon color=\"secondary\" name=\"add\">\n\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t\ticon and use the map to look for your destination.\n\t\t\t\t\t</h1>\n\t\t\t\t\t<img class=\"img-slide\" src=\"/assets/images/slide2.png\">\n\t\t\t\t</ion-slide>\n\t\t\t\t<ion-slide class=\"tutorial-slide\">\n\t\t\t\t\t<img class=\"tutorial-logo\" src=\"/assets/logo.png\">\n\t\t\t\t\t<h1>Relax and wait for the alarm to ring when you get close to your destination.</h1>\n\t\t\t\t\t<img class=\"img-slide\" src=\"/assets/images/slide3.png\">\n\t\t\t\t\t<ion-button size=\"small\" (click)=\"endTutorial()\" color=\"secondary\">Start</ion-button>\n\t\t\t\t</ion-slide>\n\t\t\t</ion-slides>\n\t\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tutorial/tutorial-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/tutorial/tutorial-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TutorialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageRoutingModule", function() { return TutorialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutorial.page */ "./src/app/tutorial/tutorial.page.ts");




const routes = [
    {
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_3__["TutorialPage"]
    }
];
let TutorialPageRoutingModule = class TutorialPageRoutingModule {
};
TutorialPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TutorialPageRoutingModule);



/***/ }),

/***/ "./src/app/tutorial/tutorial.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.module.ts ***!
  \*********************************************/
/*! exports provided: TutorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutorial-routing.module */ "./src/app/tutorial/tutorial-routing.module.ts");
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorial.page */ "./src/app/tutorial/tutorial.page.ts");







let TutorialPageModule = class TutorialPageModule {
};
TutorialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__["TutorialPageRoutingModule"]
        ],
        declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]]
    })
], TutorialPageModule);



/***/ }),

/***/ "./src/app/tutorial/tutorial.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-size: 20px;\n}\n\n.slides-wrapper {\n  height: 100%;\n}\n\n.tutorial-slide {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.tutorial-slide ion-button {\n  margin-top: 30px;\n  position: absolute;\n  bottom: 0px;\n  margin-bottom: 50px;\n}\n\n.tutorial-slide h1 {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.tutorial-logo {\n  position: absolute;\n  margin: 0 auto;\n  top: 15px;\n  width: 60px;\n}\n\n.img-slide {\n  width: 50%;\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BvbC9EZXNrdG9wL1VOSUZJL0h1bWFuQ29tcHV0ZXJJbnRlcmFjdGlvbi9Nb3ZpbmdBbGFybS9zcmMvYXBwL3R1dG9yaWFsL3R1dG9yaWFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHV0b3JpYWwvdHV0b3JpYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURBSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNFUjs7QURDSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3R1dG9yaWFsL3R1dG9yaWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgZm9udC1zaXplOjIwcHg7XG59XG5cbi5zbGlkZXMtd3JhcHBlcntcbiAgICBoZWlnaHQ6MTAwJTtcbn1cblxuLnR1dG9yaWFsLXNsaWRle1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xuICAgIH1cbiAgICBcbiAgICBoMXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG4gICAgfVxufVxuXG4udHV0b3JpYWwtbG9nb3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICB0b3A6MTVweDtcbiAgICB3aWR0aDo2MHB4O1xufVxuXG4uaW1nLXNsaWRle1xuICAgIHdpZHRoOjUwJTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xufSIsIioge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zbGlkZXMtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnR1dG9yaWFsLXNsaWRlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi50dXRvcmlhbC1zbGlkZSBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi50dXRvcmlhbC1zbGlkZSBoMSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi50dXRvcmlhbC1sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiAxNXB4O1xuICB3aWR0aDogNjBweDtcbn1cblxuLmltZy1zbGlkZSB7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tutorial/tutorial.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tutorial/tutorial.page.ts ***!
  \*******************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let TutorialPage = class TutorialPage {
    constructor(router) {
        this.router = router;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() {
    }
    endTutorial() {
        this.router.navigate(['/home']);
    }
};
TutorialPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tutorial',
        template: __webpack_require__(/*! raw-loader!./tutorial.page.html */ "./node_modules/raw-loader/index.js!./src/app/tutorial/tutorial.page.html"),
        styles: [__webpack_require__(/*! ./tutorial.page.scss */ "./src/app/tutorial/tutorial.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TutorialPage);



/***/ })

}]);
//# sourceMappingURL=tutorial-tutorial-module-es2015.js.map