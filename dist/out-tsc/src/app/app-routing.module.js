import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
    {
        path: 'map',
        loadChildren: () => import('./map/map.module').then(m => m.MapPageModule)
    },
    {
        path: 'destination-selector',
        loadChildren: () => import('./destination-selector/destination-selector.module').then(m => m.DestinationSelectorPageModule)
    },
    {
        path: 'info',
        loadChildren: () => import('./info/info.module').then(m => m.InfoPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map