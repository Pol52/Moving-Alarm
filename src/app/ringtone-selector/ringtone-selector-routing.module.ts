import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RingtoneSelectorPage } from './ringtone-selector.page';

const routes: Routes = [
  {
    path: '',
    component: RingtoneSelectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RingtoneSelectorPageRoutingModule {}
