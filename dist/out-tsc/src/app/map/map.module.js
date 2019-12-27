import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MapPageRoutingModule } from './map-routing.module';
import { MapPage } from './map.page';
let MapPageModule = class MapPageModule {
};
MapPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MapPageRoutingModule
        ],
        declarations: [MapPage]
    })
], MapPageModule);
export { MapPageModule };
//# sourceMappingURL=map.module.js.map