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
var AudioManagementOriginal = /** @class */ (function (_super) {
    __extends(AudioManagementOriginal, _super);
    function AudioManagementOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioManagementOriginal.prototype.setAudioMode = function (mode) { return cordova(this, "setAudioMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagementOriginal.prototype.getAudioMode = function () { return cordova(this, "getAudioMode", {}, arguments); };
    AudioManagementOriginal.prototype.setVolume = function (type, volume) { return cordova(this, "setVolume", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    AudioManagementOriginal.prototype.getVolume = function (type) { return cordova(this, "getVolume", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagementOriginal.prototype.getMaxVolume = function (type) { return cordova(this, "getMaxVolume", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagementOriginal.pluginName = "AudioManagement";
    AudioManagementOriginal.plugin = "clovelced-plugin-audiomanagement";
    AudioManagementOriginal.pluginRef = "AudioManagement";
    AudioManagementOriginal.repo = "https://github.com/clovelCed/cordova-plugin-audiomanagement";
    AudioManagementOriginal.platforms = ["Android"];
    return AudioManagementOriginal;
}(IonicNativePlugin));
var AudioManagement = new AudioManagementOriginal();
export { AudioManagement };
(function (AudioManagement) {
    var AudioMode;
    (function (AudioMode) {
        AudioMode[AudioMode["SILENT"] = 0] = "SILENT";
        AudioMode[AudioMode["VIBRATE"] = 1] = "VIBRATE";
        AudioMode[AudioMode["NORMAL"] = 2] = "NORMAL";
    })(AudioMode = AudioManagementOriginal.AudioMode || (AudioManagementOriginal.AudioMode = {}));
    var VolumeType;
    (function (VolumeType) {
        VolumeType[VolumeType["RING"] = 0] = "RING";
        VolumeType[VolumeType["MUSIC"] = 1] = "MUSIC";
        VolumeType[VolumeType["NOTIFICATION"] = 2] = "NOTIFICATION";
        VolumeType[VolumeType["SYSTEM"] = 3] = "SYSTEM";
    })(VolumeType = AudioManagementOriginal.VolumeType || (AudioManagementOriginal.VolumeType = {}));
})(AudioManagementOriginal || (AudioManagementOriginal = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2F1ZGlvLW1hbmFnZW1lbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaURuQyxtQ0FBaUI7Ozs7SUFXcEQsc0NBQVksYUFBQyxJQUErQjtJQVc1QyxzQ0FBWTtJQWVaLG1DQUFTLGFBQUMsSUFBZ0MsRUFBRSxNQUFjO0lBZTFELG1DQUFTLGFBQUMsSUFBZ0M7SUFlMUMsc0NBQVksYUFBQyxJQUFnQzs7Ozs7OzBCQXJIL0M7RUFrRHFDLGlCQUFpQjtTQUF6QyxlQUFlO0FBd0U1QixXQUFpQixlQUFlO0lBQzlCLElBQVksU0FJWDtJQUpELFdBQVksU0FBUztRQUNuQiw2Q0FBVSxDQUFBO1FBQ1YsK0NBQU8sQ0FBQTtRQUNQLDZDQUFNLENBQUE7SUFDUixDQUFDLEVBSlcsU0FBUyxHQUFULHlCQUFTLEtBQVQseUJBQVMsUUFJcEI7SUFFRCxJQUFZLFVBS1g7SUFMRCxXQUFZLFVBQVU7UUFDcEIsMkNBQVEsQ0FBQTtRQUNSLDZDQUFLLENBQUE7UUFDTCwyREFBWSxDQUFBO1FBQ1osK0NBQU0sQ0FBQTtJQUNSLENBQUMsRUFMVyxVQUFVLEdBQVYsMEJBQVUsS0FBViwwQkFBVSxRQUtyQjtBQU1ILENBQUMsRUFsQmdCLGVBQWUsS0FBZixlQUFlLFFBa0IvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEF1ZGlvIE1hbmFnZW1lbnRcbiAqIEBkZXNjcmlwdGlvblxuICogQSBDb3Jkb3ZhIHBsdWdpbiB0byBtYW5hZ2Ugdm9sdW1lIG9mIGF1ZGlvIHN0cmVhbXMgZm9yOiByaW5nLCBtdXNpYywgbm90aWZpY2F0aW9uIGFuZCBzeXN0ZW0uIFBvc3NpYmxlXG4gKiByaW5nZXIgdmFsdWVzIGZvciB0aG9zZSBzdHJlYW1zIGFyZTogc2lsZW50LCB2aWJyYXRlIGFuZCBub3JtYWwuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBdWRpb01hbmFnZW1lbnQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2F1ZGlvLW1hbmFnZW1lbnQvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHVibGljIGF1ZGlvbWFuOiBBdWRpb01hbmFnZW1lbnQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHNldEF1ZGlvTW9kZSgpIHtcbiAqICB0aGlzLmF1ZGlvbWFuLnNldEF1ZGlvTW9kZShBdWRpb01hbmFnZW1lbnQuQXVkaW9Nb2RlLk5PUk1BTClcbiAqICAgIC50aGVuKCgpID0+IHtcbiAqICAgICBjb25zb2xlLmxvZygnRGV2aWNlIGF1ZGlvIG1vZGUgaXMgbm93IE5PUk1BTCcpO1xuICogICAgfSlcbiAqICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gKiAgICAgIGNvbnNvbGUubG9nKHJlYXNvbik7XG4gKiAgICB9KTtcbiAqIH1cbiAqXG4gKiBnZXRBdWRpb01vZGUoKSB7XG4gKiAgdGhpcy5hdWRpb21hbi5nZXRBdWRpb01vZGUoKVxuICogICAgLnRoZW4oKHZhbHVlOiBBdWRpb01hbmFnZW1lbnQuQXVkaW9Nb2RlUmV0dXJuKSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coJ0RldmljZSBhdWRpbyBtb2RlIGlzICcgKyB2YWx1ZS5sYWJlbCArICcgKCcgKyB2YWx1ZS5hdWRpb01vZGUgKyAnKScpO1xuICogICAgfSlcbiAqICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gKiAgICAgIGNvbnNvbGUubG9nKHJlYXNvbik7XG4gKiAgICB9KTtcbiAqIH1cbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBBdWRpb01vZGVSZXR1cm5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBdWRpb01hbmFnZW1lbnQnLFxuICBwbHVnaW46ICdjbG92ZWxjZWQtcGx1Z2luLWF1ZGlvbWFuYWdlbWVudCcsXG4gIHBsdWdpblJlZjogJ0F1ZGlvTWFuYWdlbWVudCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2xvdmVsQ2VkL2NvcmRvdmEtcGx1Z2luLWF1ZGlvbWFuYWdlbWVudCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXVkaW9NYW5hZ2VtZW50IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2V0cyB0aGUgYEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGVgIGZvciB0aGUgZGV2aWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0F1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGV9IG1vZGUgdGhlIGRldmljZSBjYW4gYmUgc2V0IHRvOiBTaWxlbnQsIE5vcm1hbCwgVmlicmF0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBzZXRBdWRpb01vZGUobW9kZTogQXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50IGBBdWRpb01hbmFnZW1lbnQuQXVkaW9Nb2RlYCBvZiB0aGUgZGV2aWNlLiBUaGVuYWJsZSByZXR1cm5zIGFuIG9iamVjdCB3aXRoXG4gICAqIGBsYWJlbGAgYW5kIGBhdWRpb01vZGVgIHZhbHVlcy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8QXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZVJldHVybj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEF1ZGlvTW9kZSgpOiBQcm9taXNlPEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGVSZXR1cm4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgc3BlY2lmaWVkIGBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZWAgZm9yIHRoZSBkZXZpY2Ugd2l0aCB0aGUgdmFsdWUgZnJvbSBgdm9sdW1lYC5cbiAgICpcbiAgICogQHBhcmFtIHtBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZX0gdHlwZSB0aGUgYEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlYCB0byBzZXRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZSB0aGUgdm9sdW1lIHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzXG4gIH0pXG4gIHNldFZvbHVtZSh0eXBlOiBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZSwgdm9sdW1lOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc3BlY2lmaWVkIGBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZWAncyBgdm9sdW1lYC4gVGhlbmFibGUgcmV0dXJucyBhbiBvYmplY3Qgd2l0aFxuICAgKiBhIG51bWVyaWMgcHJvcGVydHkgZm9yIHZvbHVtZSwgYHZvbHVtZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7QXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGV9IHR5cGUgdGhlIGBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZWAgdG8gZ2V0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHt2b2x1bWU6IG51bWJlcn0+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIGdldFZvbHVtZSh0eXBlOiBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZSk6IFByb21pc2U8eyB2b2x1bWU6IG51bWJlciB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHNwZWNpZmllZCBgQXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGVgJ3MgbWF4aW11bSBgdm9sdW1lYC4gVGhlbmFibGUgcmV0dXJucyBhblxuICAgKiBvYmplY3Qgd2l0aCBhIG51bWVyaWMgcHJvcGVydHksIGBtYXhWb2x1bWVgLlxuICAgKlxuICAgKiBAcGFyYW0ge0F1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlfSB0eXBlIHRoZSBgQXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGVgIHRvIGdldFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7bWF4Vm9sdW1lOiBudW1iZXJ9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBnZXRNYXhWb2x1bWUodHlwZTogQXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGUpOiBQcm9taXNlPHsgbWF4Vm9sdW1lOiBudW1iZXIgfT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIEF1ZGlvTWFuYWdlbWVudCB7XG4gIGV4cG9ydCBlbnVtIEF1ZGlvTW9kZSB7XG4gICAgU0lMRU5UID0gMCxcbiAgICBWSUJSQVRFLFxuICAgIE5PUk1BTFxuICB9XG5cbiAgZXhwb3J0IGVudW0gVm9sdW1lVHlwZSB7XG4gICAgUklORyA9IDAsXG4gICAgTVVTSUMsXG4gICAgTk9USUZJQ0FUSU9OLFxuICAgIFNZU1RFTVxuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBBdWRpb01vZGVSZXR1cm4ge1xuICAgIGF1ZGlvTW9kZTogQXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZTtcbiAgICBsYWJlbDogc3RyaW5nO1xuICB9XG59XG4iXX0=