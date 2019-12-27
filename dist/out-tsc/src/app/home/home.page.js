import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SettingsService } from '../service/settings.service';
let HomePage = class HomePage {
    constructor(storage, router, settings) {
        this.storage = storage;
        this.router = router;
        this.settings = settings;
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd && event.url == "/home" && !this.activeDestination)
                this.loadDestination();
        }, err => {
            console.log(err);
        });
    }
    ngOnInit() {
        console.log(this.settings.prova);
    }
    loadDestination() {
        this.loading = true;
        this.storage.getItem('activeDestination').then(activeDestination => {
            this.activeDestination = activeDestination;
            this.loading = false;
        }, err => {
            this.loading = false;
            console.log(err);
        });
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NativeStorage, Router, SettingsService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map