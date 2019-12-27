(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"!tutorial\">\n\t<ion-toolbar >\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-button [routerLink]=\"['/info']\">\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"information-circle-outline\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<h1 class=\"logo-wrapper\">\n\t\t\t\t<img class=\"logo\" src=\"/assets/logo.png\">\t\n\t\t\t</h1>\t\t\t\t\t\n\t\t</ion-title>\n\t\t<ion-buttons slot=\"primary\">\n\t\t\t<ion-button [routerLink]=\"['/settings']\">\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"settings\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"slides-wrapper\" *ngIf=\"tutorial\">\n\t\t<ion-slides class=\"slides-wrapper\" pager=\"true\" [options]=\"slideOpts\">\n\t\t\t<ion-slide class=\"tutorial-slide\">\n\t\t\t\t<img class=\"tutorial-logo\" src=\"/assets/logo.png\">\n\t\t\t\t<h5>Welcome to</h5>\n\t\t\t\t<h1 class=\"app-name\"><strong>Moving Alarm</strong></h1>\n\t\t\t\t<h5>Never miss your stop again</h5>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide class=\"tutorial-slide\">\n\t\t\t\t<img class=\"tutorial-logo\" src=\"/assets/logo.png\">\n\t\t\t\t<h1>To set up a new alarm press on the <ion-icon name=\"notifications\" color=\"secondary\"></ion-icon> icon\n\t\t\t\t\tin the home page.</h1>\n\t\t\t\t\t<img class=\"img-slide\" src=\"/assets/images/slide1.png\">\n\t\t\t\t</ion-slide>\n\t\t\t\t<ion-slide class=\"tutorial-slide\">\n\t\t\t\t\t<img class=\"tutorial-logo\" src=\"/assets/logo.png\">\n\t\t\t\t\t<h1>Either use one of your recent destinations or press the \n\t\t\t\t\t\t<ion-icon color=\"secondary\" name=\"add\">\n\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t\ticon and use the map to look for your destination.\n\t\t\t\t\t</h1>\n\t\t\t\t\t<img class=\"img-slide\" src=\"/assets/images/slide2.png\">\n\t\t\t\t</ion-slide>\n\t\t\t\t<ion-slide class=\"tutorial-slide\">\n\t\t\t\t\t<img class=\"tutorial-logo\" src=\"/assets/logo.png\">\n\t\t\t\t\t<h1>Relax and wait for the alarm to ring when you get close to your destination.</h1>\n\t\t\t\t\t<img class=\"img-slide\" src=\"/assets/images/slide3.png\">\n\t\t\t\t\t<ion-button size=\"small\" (click)=\"endTutorial()\" color=\"secondary\">Start</ion-button>\n\t\t\t\t</ion-slide>\n\t\t\t</ion-slides>\n\t\t</div>\n\t\t<div class=\"page-wrapper\" *ngIf=\"!tutorial\">\n\t\t\t<div class=\"alarm-disabled\" *ngIf=\"!alarm.isActive()\">\n\t\t\t\t<p style=\"text-align: center;\">\n\t\t\t\t\tAlarm Status:\n\t\t\t\t\t<ion-chip color=\"danger\">\n\t\t\t\t\t\t<ion-label>Disabled</ion-label>\n\t\t\t\t\t</ion-chip>\n\t\t\t\t</p>\n\t\t\t\t<p>Set an alarm using the button below</p>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"alarm-enabled\" *ngIf=\"alarm.isActive()\">\t\t\t\t\n\t\t\t\t<div class=\"informations-wrapper\">\n\t\t\t\t\t<p style=\"text-align: center;\">\n\t\t\t\t\t\tAlarm Status:\n\t\t\t\t\t\t<ion-chip color=\"secondary\">\n\t\t\t\t\t\t\t<ion-label>Enabled</ion-label>\n\t\t\t\t\t\t</ion-chip>\n\t\t\t\t\t</p>\n\t\t\t\t\t<ion-spinner *ngIf=\"position.distance == -1\" color=\"secondary\" name=\"crescent\"></ion-spinner>\n\t\t\t\t\t<span *ngIf=\"position.distance >= 0\" class=\"information-title\">Distance: <strong\n\t\t\t\t\t\tclass=\"information-value\">{{position.distance | number:'1.1-1'}}</strong> Km</span>\n\t\t\t\t\t\t<span *ngIf=\"position.distance >= 0\" class=\"information-title\">Speed: <strong\n\t\t\t\t\t\t\tclass=\"information-value\">{{position.speed | number:'1.1-1' }}</strong> Km/h</span>\n\t\t\t\t\t\t\t<!-- <span *ngIf=\"position.distance >= 0\" class=\"information-title\">Time of Arrival: <strong class=\"information-value\">13:45</strong></span> -->\n\t\t\t\t\t\t\t<span *ngIf=\"position.distance >= 0\" class=\"information-title\">Ringtone: <strong\n\t\t\t\t\t\t\t\tclass=\"information-value\">{{settings.alarmRingtone.Name}}</strong></span>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<ion-fab *ngIf=\"!alarm.isActive() && !tutorial\" vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\"\n\t\t\t\t\t[routerLink]=\"['/destination-selector']\" class=\"fab\">\n\t\t\t\t\t<ion-fab-button>\n\t\t\t\t\t\t<ion-icon color=\"secondary\" style=\"font-size:100px;\" name=\"notifications\"></ion-icon>\n\t\t\t\t\t</ion-fab-button>\n\t\t\t\t</ion-fab>\n\t\t\t\t<ion-fab *ngIf=\"alarm.isActive() && !tutorial\" vertical=\"bottom\" horizontal=\"center\" class=\"fab\" slot=\"fixed\">\n\t\t\t\t\t<ion-fab-button (click)=\"disableAlarm()\" type=\"button\">\n\t\t\t\t\t\t<ion-icon *ngIf=\"!alarm.isRinging()\" color=\"warning\" style=\"font-size:100px;\" name=\"notifications-off\">\n\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t\t<ion-icon *ngIf=\"alarm.isRinging()\" color=\"secondary\" style=\"font-size:100px;\" name=\"notifications-off\">\n\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t</ion-fab-button>\n\t\t\t\t</ion-fab>\n\t\t\t\t\n\t\t\t</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alarm-disabled {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.add-button {\n  font-size: 70px;\n  height: 110px;\n}\n\n.informations-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  align-content: center;\n  height: 90%;\n}\n\n* {\n  font-size: 20px;\n}\n\n.information-title {\n  color: #ebebeb;\n}\n\n.information-title strong {\n  color: white;\n}\n\n.alarm-enabled {\n  height: 85%;\n}\n\n.alarm-disabled {\n  height: 85%;\n}\n\n.page-wrapper {\n  height: 100%;\n}\n\n.fab {\n  margin-bottom: 35px;\n}\n\n.slides-wrapper {\n  height: 100%;\n}\n\n.tutorial-slide {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.tutorial-slide ion-button {\n  margin-top: 30px;\n  position: absolute;\n  bottom: 0px;\n  margin-bottom: 50px;\n}\n\n.tutorial-slide h1 {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.img-slide {\n  width: 50%;\n  border: 1px solid white;\n}\n\n.app-name {\n  margin: 30px 0;\n}\n\n.app-name strong {\n  font-size: 28px;\n  margin: 30px 0;\n}\n\n.logo-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 0px !important;\n}\n\n.logo-wrapper img {\n  height: 27px;\n}\n\n.tutorial-logo {\n  position: absolute;\n  margin: 0 auto;\n  top: 15px;\n  width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BvbC9EZXNrdG9wL1VOSUZJL0h1bWFuQ29tcHV0ZXJJbnRlcmFjdGlvbi9Nb3ZpbmdBbGFybS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURDSTtFQUNJLFlBQUE7QUNDUjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FKOztBRENJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NSOztBREVJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0FSOztBRElBO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0FDREo7O0FESUE7RUFFSSxjQUFBO0FDRko7O0FESUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0ZSOztBRE1BO0VBRUksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHNCQUFBO0FDSko7O0FETUk7RUFDSSxZQUFBO0FDSlI7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmFsYXJtLWRpc2FibGVke1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG5cbi5hZGQtYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTo3MHB4O1xuICAgIGhlaWdodDogMTEwcHg7XG59XG5cbi5pbmZvcm1hdGlvbnMtd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OjkwJTtcbn1cblxuKntcbiAgICBmb250LXNpemU6MjBweDtcbn1cblxuLmluZm9ybWF0aW9uLXRpdGxle1xuICAgIGNvbG9yOiNlYmViZWI7XG4gICAgc3Ryb25ne1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG59XG5cbi5hbGFybS1lbmFibGVke1xuICAgIGhlaWdodDo4NSU7XG59XG5cbi5hbGFybS1kaXNhYmxlZHtcbiAgICBoZWlnaHQ6IDg1JTtcbn1cblxuLnBhZ2Utd3JhcHBlcntcbiAgICBoZWlnaHQ6MTAwJTtcbn1cblxuLmZhYntcbiAgICBtYXJnaW4tYm90dG9tOjM1cHg7XG59XG5cbi5zbGlkZXMtd3JhcHBlcntcbiAgICBoZWlnaHQ6MTAwJTtcbn1cblxuLnR1dG9yaWFsLXNsaWRle1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xuICAgIH1cbiAgICBcbiAgICBoMXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG4gICAgfVxufVxuXG4uaW1nLXNsaWRle1xuICAgIHdpZHRoOjUwJTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uYXBwLW5hbWV7XG4gICAgXG4gICAgbWFyZ2luOjMwcHggMDtcbiAgICBcbiAgICBzdHJvbmd7XG4gICAgICAgIGZvbnQtc2l6ZToyOHB4O1xuICAgICAgICBtYXJnaW46MzBweCAwO1xuICAgIH0gICAgXG59XG5cbi5sb2dvLXdyYXBwZXJ7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgaW1ne1xuICAgICAgICBoZWlnaHQ6MjdweDtcbiAgICB9XG59XG5cbi50dXRvcmlhbC1sb2dve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIHRvcDoxNXB4O1xuICAgIHdpZHRoOjYwcHg7XG59IiwiLmFsYXJtLWRpc2FibGVkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBoZWlnaHQ6IDExMHB4O1xufVxuXG4uaW5mb3JtYXRpb25zLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDkwJTtcbn1cblxuKiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmluZm9ybWF0aW9uLXRpdGxlIHtcbiAgY29sb3I6ICNlYmViZWI7XG59XG4uaW5mb3JtYXRpb24tdGl0bGUgc3Ryb25nIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWxhcm0tZW5hYmxlZCB7XG4gIGhlaWdodDogODUlO1xufVxuXG4uYWxhcm0tZGlzYWJsZWQge1xuICBoZWlnaHQ6IDg1JTtcbn1cblxuLnBhZ2Utd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmZhYiB7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5zbGlkZXMtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnR1dG9yaWFsLXNsaWRlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi50dXRvcmlhbC1zbGlkZSBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi50dXRvcmlhbC1zbGlkZSBoMSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5pbWctc2xpZGUge1xuICB3aWR0aDogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmFwcC1uYW1lIHtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG4uYXBwLW5hbWUgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW46IDMwcHggMDtcbn1cblxuLmxvZ28td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLmxvZ28td3JhcHBlciBpbWcge1xuICBoZWlnaHQ6IDI3cHg7XG59XG5cbi50dXRvcmlhbC1sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiAxNXB4O1xuICB3aWR0aDogNjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_alarm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/alarm.service */ "./src/app/service/alarm.service.ts");
/* harmony import */ var _service_position_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/position.service */ "./src/app/service/position.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _service_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/settings.service */ "./src/app/service/settings.service.ts");







var HomePage = /** @class */ (function () {
    function HomePage(alarm, position, alertCtrl, storage, settings) {
        var _this = this;
        this.alarm = alarm;
        this.position = position;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.settings = settings;
        this.alarmEnabled = false;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
        this.tutorial = false;
        this.storage.getItem('firstTime').then(function () {
            _this.tutorial = false;
        }, function (err) {
            _this.tutorial = true;
            _this.storage.setItem('firstTime', false);
        });
    }
    HomePage.prototype.endTutorial = function () {
        this.tutorial = false;
    };
    HomePage.prototype.disableAlarm = function () {
        if (this.alarm.isRinging()) {
            this.stopAlarm();
        }
        else {
            this.showPreemptiveAlarmDisabling();
        }
    };
    HomePage.prototype.showPreemptiveAlarmDisabling = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Alarm Disable',
                            message: '<span class="alert-message">Disable the alarm?</span>',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Yes',
                                    cssClass: 'accept',
                                    handler: function () {
                                        _this.stopAlarm();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.stopAlarm = function () {
        this.alarmEnabled = false;
        this.alarm.stop();
    };
    HomePage.ctorParameters = function () { return [
        { type: _service_alarm_service__WEBPACK_IMPORTED_MODULE_2__["AlarmService"] },
        { type: _service_position_service__WEBPACK_IMPORTED_MODULE_3__["PositionService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
        { type: _service_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_alarm_service__WEBPACK_IMPORTED_MODULE_2__["AlarmService"], _service_position_service__WEBPACK_IMPORTED_MODULE_3__["PositionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"], _service_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map