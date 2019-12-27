import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DestinationSelectorPageRoutingModule } from './destination-selector-routing.module';
import { DestinationSelectorPage } from './destination-selector.page';
let DestinationSelectorPageModule = class DestinationSelectorPageModule {
};
DestinationSelectorPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            DestinationSelectorPageRoutingModule
        ],
        declarations: [DestinationSelectorPage]
    })
], DestinationSelectorPageModule);
export { DestinationSelectorPageModule };
//# sourceMappingURL=destination-selector.module.js.map