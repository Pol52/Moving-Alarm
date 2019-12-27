var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var NativeRingtones = /** @class */ (function (_super) {
    __extends(NativeRingtones, _super);
    function NativeRingtones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeRingtones.prototype.getRingtone = function () { return cordova(this, "getRingtone", {}, arguments); };
    NativeRingtones.prototype.playRingtone = function (ringtoneUri) { return cordova(this, "playRingtone", {}, arguments); };
    NativeRingtones.prototype.stopRingtone = function (ringtoneUri) { return cordova(this, "stopRingtone", {}, arguments); };
    NativeRingtones.pluginName = "native-ringtones";
    NativeRingtones.plugin = "cordova-plugin-native-ringtones";
    NativeRingtones.pluginRef = "cordova.plugins.NativeRingtones";
    NativeRingtones.repo = "https://github.com/TongZhangzt/cordova-plugin-native-ringtones";
    NativeRingtones.platforms = ["Android", "iOS"];
    NativeRingtones = __decorate([
        Injectable()
    ], NativeRingtones);
    return NativeRingtones;
}(IonicNativePlugin));
export { NativeRingtones };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1yaW5ndG9uZXMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBaUNOLG1DQUFpQjs7OztJQU9wRCxxQ0FBVztJQVVYLHNDQUFZLGFBQUMsV0FBbUI7SUFVaEMsc0NBQVksYUFBQyxXQUFtQjs7Ozs7O0lBM0JyQixlQUFlO1FBRDNCLFVBQVUsRUFBRTtPQUNBLGVBQWU7MEJBbEM1QjtFQWtDcUMsaUJBQWlCO1NBQXpDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAYmV0YVxuICogQG5hbWUgTmF0aXZlIFJpbmd0b25lc1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgcGx1Z2luIGhlbHBzIGdldCB0aGUgbmF0aXZlIHJpbmd0b25lcyBsaXN0IG9uIEFuZHJvaWQgb3IgSU9TIGRldmljZXMuXG4gKiBBbmQgeW91IGNhbiBhbHNvIHVzZSB0aGlzIHBsdWdpbiB0byBwbGF5IG9yIHN0b3AgdGhlIG5hdGl2ZSByaW5ndG9uZXMgYW5kIGN1c3RvbSByaW5ndG9uZXMoYWRkZWQgaW4gdGhlIHd3dyBmb2xkZXIpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgXG4gKiBpbXBvcnQgeyBOYXRpdmVSaW5ndG9uZXMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25hdGl2ZS1yaW5ndG9uZXMvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSByaW5ndG9uZXM6IE5hdGl2ZVJpbmd0b25lcykgeyB9XG4gKlxuICogLi4uXG4gKiB0aGlzLnJpbmd0b25lcy5nZXRSaW5ndG9uZSgpLnRoZW4oKHJpbmd0b25lcykgPT4geyBjb25zb2xlLmxvZyhyaW5ndG9uZXMpOyB9KTtcbiAqXG4gKiB0aGlzLnJpbmd0b25lcy5wbGF5UmluZ3RvbmUoJ2Fzc2V0cy9yaW5ndG9uZXMvc291bmRfMS5jYWYnKTtcbiAqXG4gKiB0aGlzLnJpbmd0b25lcy5zdG9wUmluZ3RvbmUoJ2Fzc2V0cy9yaW5ndG9uZXMvc291bmRfMS5jYWYnKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICduYXRpdmUtcmluZ3RvbmVzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmF0aXZlLXJpbmd0b25lcycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5OYXRpdmVSaW5ndG9uZXMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1RvbmdaaGFuZ3p0L2NvcmRvdmEtcGx1Z2luLW5hdGl2ZS1yaW5ndG9uZXMnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXRpdmVSaW5ndG9uZXMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcmluZ3RvbmUgbGlzdCBvZiB0aGUgZGV2aWNlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHJpbmd0b25lcyBmb3VuZCBzdWNjZXNzZnVsbHlcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UmluZ3RvbmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzdGFydHMgcGxheWluZyB0aGUgcmluZ3RvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJpbmd0b25lVXJpIFRoZSBwYXRoIHRvIHRoZSByaW5ndG9uZSBmaWxlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGxheVJpbmd0b25lKHJpbmd0b25lVXJpOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0b3BzIHBsYXlpbmcgdGhlIHJpbmd0b25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByaW5ndG9uZVVyaSBUaGUgcGF0aCB0byB0aGUgcmluZ3RvbmUgZmlsZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BSaW5ndG9uZShyaW5ndG9uZVVyaTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==