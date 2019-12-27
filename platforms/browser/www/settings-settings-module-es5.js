(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n    <ion-buttons slot=\"primary\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon style=\"opacity:0\" slot=\"icon-only\" name=\"settings\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item button [routerLink]=\"['/ringtone-selector']\" detail>\n      <ion-label>Ringtone</ion-label>\n      <ion-label class=\"selected-ringtone\" *ngIf=\"settings.getAlarmRingtone() != null\" >{{settings.getAlarmRingtone().Name}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Volume</ion-label>\n      <ion-range (ionChange)=\"updateAlarmVolume()\" [(ngModel)]=\"alarmVolume\" color=\"primary\" slot=\"end\" min=\"0.1\" step=\"0.1\" max=\"1\"></ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-label>Activation Distance(km)</ion-label>\n      <ion-input class=\"distance-input\" (ionChange)=\"updateAlarmDistance()\" [(ngModel)]=\"alarmDistance\" color=\"primary\" slot=\"end\" inputmode=\"numeric\"></ion-input>\n    </ion-item>\n    <ion-item button [routerLink]=\"['/tutorial']\" detail>\n      <ion-label>\n        Show Tutorial\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");




var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
var SettingsPageRoutingModule = /** @class */ (function () {
    function SettingsPageRoutingModule() {
    }
    SettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SettingsPageRoutingModule);
    return SettingsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected-ringtone {\n  color: #cccfdd;\n  padding-right: 5px;\n  text-align: end;\n}\n\n.distance-input {\n  text-align: right;\n  max-width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BvbC9EZXNrdG9wL1VOSUZJL0h1bWFuQ29tcHV0ZXJJbnRlcmFjdGlvbi9Nb3ZpbmdBbGFybS9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQtcmluZ3RvbmV7XG4gICAgY29sb3I6I2NjY2ZkZDtcbiAgICBwYWRkaW5nLXJpZ2h0OjVweDtcbiAgICB0ZXh0LWFsaWduOmVuZDtcbn1cblxuLmRpc3RhbmNlLWlucHV0e1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgbWF4LXdpZHRoOjMwJTtcbiAgfSIsIi5zZWxlY3RlZC1yaW5ndG9uZSB7XG4gIGNvbG9yOiAjY2NjZmRkO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLmRpc3RhbmNlLWlucHV0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1heC13aWR0aDogMzAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/settings.service */ "./src/app/service/settings.service.ts");



var SettingsPage = /** @class */ (function () {
    function SettingsPage(settings) {
        this.settings = settings;
        this.alarmVolume = this.settings.getAlarmVolume();
        this.alarmDistance = this.settings.getAlarmDistance();
    }
    SettingsPage.prototype.updateAlarmVolume = function () {
        this.settings.setAlarmVolume(this.alarmVolume);
    };
    SettingsPage.prototype.updateAlarmDistance = function () {
        this.settings.setAlarmDistance(this.alarmDistance);
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
    ]; };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es5.js.map