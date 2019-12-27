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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var NativeRingtonesOriginal = /** @class */ (function (_super) {
    __extends(NativeRingtonesOriginal, _super);
    function NativeRingtonesOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeRingtonesOriginal.prototype.getRingtone = function () { return cordova(this, "getRingtone", {}, arguments); };
    NativeRingtonesOriginal.prototype.playRingtone = function (ringtoneUri) { return cordova(this, "playRingtone", {}, arguments); };
    NativeRingtonesOriginal.prototype.stopRingtone = function (ringtoneUri) { return cordova(this, "stopRingtone", {}, arguments); };
    NativeRingtonesOriginal.pluginName = "native-ringtones";
    NativeRingtonesOriginal.plugin = "cordova-plugin-native-ringtones";
    NativeRingtonesOriginal.pluginRef = "cordova.plugins.NativeRingtones";
    NativeRingtonesOriginal.repo = "https://github.com/TongZhangzt/cordova-plugin-native-ringtones";
    NativeRingtonesOriginal.platforms = ["Android", "iOS"];
    return NativeRingtonesOriginal;
}(IonicNativePlugin));
var NativeRingtones = new NativeRingtonesOriginal();
export { NativeRingtones };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1yaW5ndG9uZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0NuQyxtQ0FBaUI7Ozs7SUFPcEQscUNBQVc7SUFVWCxzQ0FBWSxhQUFDLFdBQW1CO0lBVWhDLHNDQUFZLGFBQUMsV0FBbUI7Ozs7OzswQkE3RGxDO0VBa0NxQyxpQkFBaUI7U0FBekMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBiZXRhXG4gKiBAbmFtZSBOYXRpdmUgUmluZ3RvbmVzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBwbHVnaW4gaGVscHMgZ2V0IHRoZSBuYXRpdmUgcmluZ3RvbmVzIGxpc3Qgb24gQW5kcm9pZCBvciBJT1MgZGV2aWNlcy5cbiAqIEFuZCB5b3UgY2FuIGFsc28gdXNlIHRoaXMgcGx1Z2luIHRvIHBsYXkgb3Igc3RvcCB0aGUgbmF0aXZlIHJpbmd0b25lcyBhbmQgY3VzdG9tIHJpbmd0b25lcyhhZGRlZCBpbiB0aGUgd3d3IGZvbGRlcikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGBcbiAqIGltcG9ydCB7IE5hdGl2ZVJpbmd0b25lcyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmF0aXZlLXJpbmd0b25lcy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHJpbmd0b25lczogTmF0aXZlUmluZ3RvbmVzKSB7IH1cbiAqXG4gKiAuLi5cbiAqIHRoaXMucmluZ3RvbmVzLmdldFJpbmd0b25lKCkudGhlbigocmluZ3RvbmVzKSA9PiB7IGNvbnNvbGUubG9nKHJpbmd0b25lcyk7IH0pO1xuICpcbiAqIHRoaXMucmluZ3RvbmVzLnBsYXlSaW5ndG9uZSgnYXNzZXRzL3Jpbmd0b25lcy9zb3VuZF8xLmNhZicpO1xuICpcbiAqIHRoaXMucmluZ3RvbmVzLnN0b3BSaW5ndG9uZSgnYXNzZXRzL3Jpbmd0b25lcy9zb3VuZF8xLmNhZicpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ25hdGl2ZS1yaW5ndG9uZXMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uYXRpdmUtcmluZ3RvbmVzJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLk5hdGl2ZVJpbmd0b25lcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVG9uZ1poYW5nenQvY29yZG92YS1wbHVnaW4tbmF0aXZlLXJpbmd0b25lcycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdGl2ZVJpbmd0b25lcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogR2V0IHRoZSByaW5ndG9uZSBsaXN0IG9mIHRoZSBkZXZpY2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gcmluZ3RvbmVzIGZvdW5kIHN1Y2Nlc3NmdWxseVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRSaW5ndG9uZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0YXJ0cyBwbGF5aW5nIHRoZSByaW5ndG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmluZ3RvbmVVcmkgVGhlIHBhdGggdG8gdGhlIHJpbmd0b25lIGZpbGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwbGF5UmluZ3RvbmUocmluZ3RvbmVVcmk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RvcHMgcGxheWluZyB0aGUgcmluZ3RvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJpbmd0b25lVXJpIFRoZSBwYXRoIHRvIHRoZSByaW5ndG9uZSBmaWxlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcFJpbmd0b25lKHJpbmd0b25lVXJpOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19