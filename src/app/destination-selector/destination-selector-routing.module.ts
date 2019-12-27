import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinationSelectorPage } from './destination-selector.page';

const routes: Routes = [
  {
    path: '',
    component: DestinationSelectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinationSelectorPageRoutingModule {}
