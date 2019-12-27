(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["destination-selector-destination-selector-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/destination-selector/destination-selector.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/destination-selector/destination-selector.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Destinations</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"secondary\" fill=\"clear\" [routerLink]=\"['/map']\">\n        <ion-icon slot=\"icon-only\" name=\"add-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"savedDestinations\">\n    <ion-list-header>\n      <h5 class=\"list-header\">\n        Recent Destinations\n      </h5>\n    </ion-list-header>\n    <ion-item-sliding *ngFor=\"let destination of savedDestinations; let i = index\">\n      <ion-item button (click)=\"showDestinationConfirmationAlert(destination)\">\n        <ion-avatar>\n          <img src=\"../../assets/images/588891debc2fc2ef3a1860a2.png\">\n        </ion-avatar>\n        <ion-label class=\"item-label\">\n          <h2>\n            <strong>{{destination.extra.featureName}}</strong>\n          </h2>\n          <h5>\n            {{destination.subAdminArea}}\n          </h5>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"deleteRecentDestination(i)\">\n          <ion-icon name=\"trash\"></ion-icon> <span>Delete</span>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>    \n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/destination-selector/destination-selector-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/destination-selector/destination-selector-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DestinationSelectorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationSelectorPageRoutingModule", function() { return DestinationSelectorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _destination_selector_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./destination-selector.page */ "./src/app/destination-selector/destination-selector.page.ts");




var routes = [
    {
        path: '',
        component: _destination_selector_page__WEBPACK_IMPORTED_MODULE_3__["DestinationSelectorPage"]
    }
];
var DestinationSelectorPageRoutingModule = /** @class */ (function () {
    function DestinationSelectorPageRoutingModule() {
    }
    DestinationSelectorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DestinationSelectorPageRoutingModule);
    return DestinationSelectorPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/destination-selector/destination-selector.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/destination-selector/destination-selector.module.ts ***!
  \*********************************************************************/
/*! exports provided: DestinationSelectorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationSelectorPageModule", function() { return DestinationSelectorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _destination_selector_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./destination-selector-routing.module */ "./src/app/destination-selector/destination-selector-routing.module.ts");
/* harmony import */ var _destination_selector_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./destination-selector.page */ "./src/app/destination-selector/destination-selector.page.ts");







var DestinationSelectorPageModule = /** @class */ (function () {
    function DestinationSelectorPageModule() {
    }
    DestinationSelectorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _destination_selector_routing_module__WEBPACK_IMPORTED_MODULE_5__["DestinationSelectorPageRoutingModule"]
            ],
            declarations: [_destination_selector_page__WEBPACK_IMPORTED_MODULE_6__["DestinationSelectorPage"]]
        })
    ], DestinationSelectorPageModule);
    return DestinationSelectorPageModule;
}());



/***/ }),

/***/ "./src/app/destination-selector/destination-selector.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/destination-selector/destination-selector.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-header {\n  width: 100%;\n  text-align: center;\n  color: var(--ion-text-color);\n}\n\n.item-label {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BvbC9EZXNrdG9wL1VOSUZJL0h1bWFuQ29tcHV0ZXJJbnRlcmFjdGlvbi9Nb3ZpbmdBbGFybS9zcmMvYXBwL2Rlc3RpbmF0aW9uLXNlbGVjdG9yL2Rlc3RpbmF0aW9uLXNlbGVjdG9yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVzdGluYXRpb24tc2VsZWN0b3IvZGVzdGluYXRpb24tc2VsZWN0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kZXN0aW5hdGlvbi1zZWxlY3Rvci9kZXN0aW5hdGlvbi1zZWxlY3Rvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1oZWFkZXJ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4uaXRlbS1sYWJlbHtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbn0iLCIubGlzdC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4uaXRlbS1sYWJlbCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/destination-selector/destination-selector.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/destination-selector/destination-selector.page.ts ***!
  \*******************************************************************/
/*! exports provided: DestinationSelectorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationSelectorPage", function() { return DestinationSelectorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_position_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/position.service */ "./src/app/service/position.service.ts");
/* harmony import */ var _service_alarm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/alarm.service */ "./src/app/service/alarm.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var DestinationSelectorPage = /** @class */ (function () {
    function DestinationSelectorPage(storage, loadingCtrl, position, alarm, router, alertCtrl) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.position = position;
        this.alarm = alarm;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.savedDestinations = [];
    }
    DestinationSelectorPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentOpeningLoading()];
                    case 1:
                        _a.sent();
                        this.storage.getItem('savedDestinations').then(function (savedDestinations) {
                            _this.savedDestinations = savedDestinations;
                            _this.dismissLoading();
                        }, function (err) {
                            _this.dismissLoading();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DestinationSelectorPage.prototype.presentOpeningLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var loading;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.loadingCtrl.create({
                                        duration: 10000
                                    })];
                                case 1:
                                    loading = _a.sent();
                                    return [4 /*yield*/, loading.present()];
                                case 2:
                                    _a.sent();
                                    resolve();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    DestinationSelectorPage.prototype.dismissLoading = function () {
        this.loadingCtrl.dismiss();
    };
    DestinationSelectorPage.prototype.showDestinationConfirmationAlert = function (destination) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Enable Alarm',
                            message: '<span class="alert-message">Enable the alarm for ' + destination.extra.featureName + ' ?</span>',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Enable',
                                    cssClass: 'accept',
                                    handler: function () {
                                        _this.enableAlarm(destination);
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
    DestinationSelectorPage.prototype.enableAlarm = function (destination) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentOpeningLoading()];
                    case 1:
                        _a.sent();
                        this.position.turnOnGPS().then(function (gpsIsOn) {
                            if (gpsIsOn) {
                                _this.position.setDestination(destination);
                                _this.alarm.start();
                                _this.dismissLoading();
                                _this.router.navigate(['/home']);
                            }
                            else {
                                _this.dismissLoading();
                                _this.showNoGPSAlert();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DestinationSelectorPage.prototype.showNoGPSAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'GPS Disabled',
                            message: '<span class="alert-message">GPS needs to be enabled to set a destination.</span>',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
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
    DestinationSelectorPage.prototype.deleteRecentDestination = function (index) {
        this.savedDestinations.splice(index, 1);
        this.storage.setItem('savedDestinations', this.savedDestinations);
    };
    DestinationSelectorPage.ctorParameters = function () { return [
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _service_position_service__WEBPACK_IMPORTED_MODULE_4__["PositionService"] },
        { type: _service_alarm_service__WEBPACK_IMPORTED_MODULE_5__["AlarmService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    DestinationSelectorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-destination-selector',
            template: __webpack_require__(/*! raw-loader!./destination-selector.page.html */ "./node_modules/raw-loader/index.js!./src/app/destination-selector/destination-selector.page.html"),
            styles: [__webpack_require__(/*! ./destination-selector.page.scss */ "./src/app/destination-selector/destination-selector.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _service_position_service__WEBPACK_IMPORTED_MODULE_4__["PositionService"], _service_alarm_service__WEBPACK_IMPORTED_MODULE_5__["AlarmService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], DestinationSelectorPage);
    return DestinationSelectorPage;
}());



/***/ })

}]);
//# sourceMappingURL=destination-selector-destination-selector-module-es5.js.map