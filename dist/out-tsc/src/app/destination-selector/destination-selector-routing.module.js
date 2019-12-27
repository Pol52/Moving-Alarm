import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DestinationSelectorPage } from './destination-selector.page';
const routes = [
    {
        path: '',
        component: DestinationSelectorPage
    }
];
let DestinationSelectorPageRoutingModule = class DestinationSelectorPageRoutingModule {
};
DestinationSelectorPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DestinationSelectorPageRoutingModule);
export { DestinationSelectorPageRoutingModule };
//# sourceMappingURL=destination-selector-routing.module.js.map