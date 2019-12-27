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
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AudioManagement = /** @class */ (function (_super) {
    __extends(AudioManagement, _super);
    function AudioManagement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioManagement.prototype.setAudioMode = function (mode) { return cordova(this, "setAudioMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagement.prototype.getAudioMode = function () { return cordova(this, "getAudioMode", {}, arguments); };
    AudioManagement.prototype.setVolume = function (type, volume) { return cordova(this, "setVolume", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    AudioManagement.prototype.getVolume = function (type) { return cordova(this, "getVolume", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagement.prototype.getMaxVolume = function (type) { return cordova(this, "getMaxVolume", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagement.pluginName = "AudioManagement";
    AudioManagement.plugin = "clovelced-plugin-audiomanagement";
    AudioManagement.pluginRef = "AudioManagement";
    AudioManagement.repo = "https://github.com/clovelCed/cordova-plugin-audiomanagement";
    AudioManagement.platforms = ["Android"];
    AudioManagement = __decorate([
        Injectable()
    ], AudioManagement);
    return AudioManagement;
}(IonicNativePlugin));
export { AudioManagement };
(function (AudioManagement) {
    var AudioMode;
    (function (AudioMode) {
        AudioMode[AudioMode["SILENT"] = 0] = "SILENT";
        AudioMode[AudioMode["VIBRATE"] = 1] = "VIBRATE";
        AudioMode[AudioMode["NORMAL"] = 2] = "NORMAL";
    })(AudioMode = AudioManagement.AudioMode || (AudioManagement.AudioMode = {}));
    var VolumeType;
    (function (VolumeType) {
        VolumeType[VolumeType["RING"] = 0] = "RING";
        VolumeType[VolumeType["MUSIC"] = 1] = "MUSIC";
        VolumeType[VolumeType["NOTIFICATION"] = 2] = "NOTIFICATION";
        VolumeType[VolumeType["SYSTEM"] = 3] = "SYSTEM";
    })(VolumeType = AudioManagement.VolumeType || (AudioManagement.VolumeType = {}));
})(AudioManagement || (AudioManagement = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2F1ZGlvLW1hbmFnZW1lbnQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaURuQyxtQ0FBaUI7Ozs7SUFXcEQsc0NBQVksYUFBQyxJQUErQjtJQVc1QyxzQ0FBWTtJQWVaLG1DQUFTLGFBQUMsSUFBZ0MsRUFBRSxNQUFjO0lBZTFELG1DQUFTLGFBQUMsSUFBZ0M7SUFlMUMsc0NBQVksYUFBQyxJQUFnQzs7Ozs7O0lBbkVsQyxlQUFlO1FBRDNCLFVBQVUsRUFBRTtPQUNBLGVBQWU7MEJBbEQ1QjtFQWtEcUMsaUJBQWlCO1NBQXpDLGVBQWU7QUF3RTVCLFdBQWlCLGVBQWU7SUFDOUIsSUFBWSxTQUlYO0lBSkQsV0FBWSxTQUFTO1FBQ25CLDZDQUFVLENBQUE7UUFDViwrQ0FBTyxDQUFBO1FBQ1AsNkNBQU0sQ0FBQTtJQUNSLENBQUMsRUFKVyxTQUFTLEdBQVQseUJBQVMsS0FBVCx5QkFBUyxRQUlwQjtJQUVELElBQVksVUFLWDtJQUxELFdBQVksVUFBVTtRQUNwQiwyQ0FBUSxDQUFBO1FBQ1IsNkNBQUssQ0FBQTtRQUNMLDJEQUFZLENBQUE7UUFDWiwrQ0FBTSxDQUFBO0lBQ1IsQ0FBQyxFQUxXLFVBQVUsR0FBViwwQkFBVSxLQUFWLDBCQUFVLFFBS3JCO0FBTUgsQ0FBQyxFQWxCZ0IsZUFBZSxLQUFmLGVBQWUsUUFrQi9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQXVkaW8gTWFuYWdlbWVudFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIENvcmRvdmEgcGx1Z2luIHRvIG1hbmFnZSB2b2x1bWUgb2YgYXVkaW8gc3RyZWFtcyBmb3I6IHJpbmcsIG11c2ljLCBub3RpZmljYXRpb24gYW5kIHN5c3RlbS4gUG9zc2libGVcbiAqIHJpbmdlciB2YWx1ZXMgZm9yIHRob3NlIHN0cmVhbXMgYXJlOiBzaWxlbnQsIHZpYnJhdGUgYW5kIG5vcm1hbC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEF1ZGlvTWFuYWdlbWVudCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYXVkaW8tbWFuYWdlbWVudC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgYXVkaW9tYW46IEF1ZGlvTWFuYWdlbWVudCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogc2V0QXVkaW9Nb2RlKCkge1xuICogIHRoaXMuYXVkaW9tYW4uc2V0QXVkaW9Nb2RlKEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGUuTk9STUFMKVxuICogICAgLnRoZW4oKCkgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKCdEZXZpY2UgYXVkaW8gbW9kZSBpcyBub3cgTk9STUFMJyk7XG4gKiAgICB9KVxuICogICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAqICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcbiAqICAgIH0pO1xuICogfVxuICpcbiAqIGdldEF1ZGlvTW9kZSgpIHtcbiAqICB0aGlzLmF1ZGlvbWFuLmdldEF1ZGlvTW9kZSgpXG4gKiAgICAudGhlbigodmFsdWU6IEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGVSZXR1cm4pID0+IHtcbiAqICAgICBjb25zb2xlLmxvZygnRGV2aWNlIGF1ZGlvIG1vZGUgaXMgJyArIHZhbHVlLmxhYmVsICsgJyAoJyArIHZhbHVlLmF1ZGlvTW9kZSArICcpJyk7XG4gKiAgICB9KVxuICogICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAqICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcbiAqICAgIH0pO1xuICogfVxuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEF1ZGlvTW9kZVJldHVyblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0F1ZGlvTWFuYWdlbWVudCcsXG4gIHBsdWdpbjogJ2Nsb3ZlbGNlZC1wbHVnaW4tYXVkaW9tYW5hZ2VtZW50JyxcbiAgcGx1Z2luUmVmOiAnQXVkaW9NYW5hZ2VtZW50JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jbG92ZWxDZWQvY29yZG92YS1wbHVnaW4tYXVkaW9tYW5hZ2VtZW50JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZW1lbnQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBgQXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZWAgZm9yIHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7QXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZX0gbW9kZSB0aGUgZGV2aWNlIGNhbiBiZSBzZXQgdG86IFNpbGVudCwgTm9ybWFsLCBWaWJyYXRlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHNldEF1ZGlvTW9kZShtb2RlOiBBdWRpb01hbmFnZW1lbnQuQXVkaW9Nb2RlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgYEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGVgIG9mIHRoZSBkZXZpY2UuIFRoZW5hYmxlIHJldHVybnMgYW4gb2JqZWN0IHdpdGhcbiAgICogYGxhYmVsYCBhbmQgYGF1ZGlvTW9kZWAgdmFsdWVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBdWRpb01hbmFnZW1lbnQuQXVkaW9Nb2RlUmV0dXJuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXVkaW9Nb2RlKCk6IFByb21pc2U8QXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZVJldHVybj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBzcGVjaWZpZWQgYEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlYCBmb3IgdGhlIGRldmljZSB3aXRoIHRoZSB2YWx1ZSBmcm9tIGB2b2x1bWVgLlxuICAgKlxuICAgKiBAcGFyYW0ge0F1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlfSB0eXBlIHRoZSBgQXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGVgIHRvIHNldFxuICAgKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lIHRoZSB2b2x1bWUgdmFsdWVcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDNcbiAgfSlcbiAgc2V0Vm9sdW1lKHR5cGU6IEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlLCB2b2x1bWU6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzcGVjaWZpZWQgYEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlYCdzIGB2b2x1bWVgLiBUaGVuYWJsZSByZXR1cm5zIGFuIG9iamVjdCB3aXRoXG4gICAqIGEgbnVtZXJpYyBwcm9wZXJ0eSBmb3Igdm9sdW1lLCBgdm9sdW1lYC5cbiAgICpcbiAgICogQHBhcmFtIHtBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZX0gdHlwZSB0aGUgYEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlYCB0byBnZXRcbiAgICogQHJldHVybnMge1Byb21pc2U8e3ZvbHVtZTogbnVtYmVyfT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDJcbiAgfSlcbiAgZ2V0Vm9sdW1lKHR5cGU6IEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlKTogUHJvbWlzZTx7IHZvbHVtZTogbnVtYmVyIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc3BlY2lmaWVkIGBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZWAncyBtYXhpbXVtIGB2b2x1bWVgLiBUaGVuYWJsZSByZXR1cm5zIGFuXG4gICAqIG9iamVjdCB3aXRoIGEgbnVtZXJpYyBwcm9wZXJ0eSwgYG1heFZvbHVtZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7QXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGV9IHR5cGUgdGhlIGBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZWAgdG8gZ2V0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHttYXhWb2x1bWU6IG51bWJlcn0+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIGdldE1heFZvbHVtZSh0eXBlOiBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZSk6IFByb21pc2U8eyBtYXhWb2x1bWU6IG51bWJlciB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgQXVkaW9NYW5hZ2VtZW50IHtcbiAgZXhwb3J0IGVudW0gQXVkaW9Nb2RlIHtcbiAgICBTSUxFTlQgPSAwLFxuICAgIFZJQlJBVEUsXG4gICAgTk9STUFMXG4gIH1cblxuICBleHBvcnQgZW51bSBWb2x1bWVUeXBlIHtcbiAgICBSSU5HID0gMCxcbiAgICBNVVNJQyxcbiAgICBOT1RJRklDQVRJT04sXG4gICAgU1lTVEVNXG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEF1ZGlvTW9kZVJldHVybiB7XG4gICAgYXVkaW9Nb2RlOiBBdWRpb01hbmFnZW1lbnQuQXVkaW9Nb2RlO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gIH1cbn1cbiJdfQ==