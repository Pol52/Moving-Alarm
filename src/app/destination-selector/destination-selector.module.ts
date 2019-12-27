import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestinationSelectorPageRoutingModule } from './destination-selector-routing.module';

import { DestinationSelectorPage } from './destination-selector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinationSelectorPageRoutingModule
  ],
  declarations: [DestinationSelectorPage]
})
export class DestinationSelectorPageModule {}
