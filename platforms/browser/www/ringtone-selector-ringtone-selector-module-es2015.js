(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ringtone-selector-ringtone-selector-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ringtone-selector/ringtone-selector.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ringtone-selector/ringtone-selector.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Ringtone Selection</ion-title>\n    <ion-buttons slot=\"primary\">\n        <ion-button>\n          <ion-icon style=\"opacity:0\" slot=\"icon-only\" name=\"settings\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item class=\"ringtone-item\" *ngFor=\"let ringtone of ringtonesList; let i = index\" (click)=\"updateRingtone(ringtone, i)\">\n      <strong>{{ringtone.Name}}</strong>\n      <ion-icon class=\"selected-icon\" *ngIf=\"i == selected\" name=\"checkmark\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ringtone-selector/ringtone-selector-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ringtone-selector/ringtone-selector-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: RingtoneSelectorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RingtoneSelectorPageRoutingModule", function() { return RingtoneSelectorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ringtone_selector_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ringtone-selector.page */ "./src/app/ringtone-selector/ringtone-selector.page.ts");




const routes = [
    {
        path: '',
        component: _ringtone_selector_page__WEBPACK_IMPORTED_MODULE_3__["RingtoneSelectorPage"]
    }
];
let RingtoneSelectorPageRoutingModule = class RingtoneSelectorPageRoutingModule {
};
RingtoneSelectorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RingtoneSelectorPageRoutingModule);



/***/ }),

/***/ "./src/app/ringtone-selector/ringtone-selector.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/ringtone-selector/ringtone-selector.module.ts ***!
  \***************************************************************/
/*! exports provided: RingtoneSelectorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RingtoneSelectorPageModule", function() { return RingtoneSelectorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ringtone_selector_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ringtone-selector-routing.module */ "./src/app/ringtone-selector/ringtone-selector-routing.module.ts");
/* harmony import */ var _ringtone_selector_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ringtone-selector.page */ "./src/app/ringtone-selector/ringtone-selector.page.ts");







let RingtoneSelectorPageModule = class RingtoneSelectorPageModule {
};
RingtoneSelectorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ringtone_selector_routing_module__WEBPACK_IMPORTED_MODULE_5__["RingtoneSelectorPageRoutingModule"]
        ],
        declarations: [_ringtone_selector_page__WEBPACK_IMPORTED_MODULE_6__["RingtoneSelectorPage"]]
    })
], RingtoneSelectorPageModule);



/***/ }),

/***/ "./src/app/ringtone-selector/ringtone-selector.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/ringtone-selector/ringtone-selector.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ringtone-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.selected-icon {\n  color: #8bffbbe5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BvbC9EZXNrdG9wL1VOSUZJL0h1bWFuQ29tcHV0ZXJJbnRlcmFjdGlvbi9Nb3ZpbmdBbGFybS9zcmMvYXBwL3Jpbmd0b25lLXNlbGVjdG9yL3Jpbmd0b25lLXNlbGVjdG9yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmluZ3RvbmUtc2VsZWN0b3IvcmluZ3RvbmUtc2VsZWN0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Jpbmd0b25lLXNlbGVjdG9yL3Jpbmd0b25lLXNlbGVjdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaW5ndG9uZS1pdGVte1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zZWxlY3RlZC1pY29ue1xuICAgIGNvbG9yOiM4YmZmYmJlNTtcbn1cblxuIiwiLnJpbmd0b25lLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zZWxlY3RlZC1pY29uIHtcbiAgY29sb3I6ICM4YmZmYmJlNTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ringtone-selector/ringtone-selector.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/ringtone-selector/ringtone-selector.page.ts ***!
  \*************************************************************/
/*! exports provided: RingtoneSelectorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RingtoneSelectorPage", function() { return RingtoneSelectorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/settings.service */ "./src/app/service/settings.service.ts");
/* harmony import */ var _service_ringtone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/ringtone.service */ "./src/app/service/ringtone.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");





let RingtoneSelectorPage = class RingtoneSelectorPage {
    constructor(settings, ringtone, storage) {
        this.settings = settings;
        this.ringtone = ringtone;
        this.storage = storage;
        this.ringtonesList = [];
        this.selectedRingtone = null;
        this.selected = null;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ringtonesList = yield this.ringtone.getRingtones();
            this.selectedRingtone = this.settings.getAlarmRingtone();
            this.ringtonesList.forEach((value, index) => {
                if (value.Name == this.selectedRingtone.Name) {
                    this.selected = index;
                }
            });
        });
    }
    updateRingtone(ringtone, index) {
        this.playRingtonePreview(ringtone.Url);
        this.selected = index;
        this.settings.setAlarmRingtone(ringtone);
    }
    playRingtonePreview(ringtoneUrl) {
        this.ringtone.playRingtonePreview(ringtoneUrl);
    }
    ngOnDestroy() {
        this.storage.setItem('selectedRingtone', this.ringtonesList[this.selected]);
    }
};
RingtoneSelectorPage.ctorParameters = () => [
    { type: _service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
    { type: _service_ringtone_service__WEBPACK_IMPORTED_MODULE_3__["RingtoneService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] }
];
RingtoneSelectorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ringtone-selector',
        template: __webpack_require__(/*! raw-loader!./ringtone-selector.page.html */ "./node_modules/raw-loader/index.js!./src/app/ringtone-selector/ringtone-selector.page.html"),
        styles: [__webpack_require__(/*! ./ringtone-selector.page.scss */ "./src/app/ringtone-selector/ringtone-selector.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _service_ringtone_service__WEBPACK_IMPORTED_MODULE_3__["RingtoneService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]])
], RingtoneSelectorPage);



/***/ })

}]);
//# sourceMappingURL=ringtone-selector-ringtone-selector-module-es2015.js.map