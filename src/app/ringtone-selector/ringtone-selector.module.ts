import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RingtoneSelectorPageRoutingModule } from './ringtone-selector-routing.module';

import { RingtoneSelectorPage } from './ringtone-selector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RingtoneSelectorPageRoutingModule
  ],
  declarations: [RingtoneSelectorPage]
})
export class RingtoneSelectorPageModule {}
