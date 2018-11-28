import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LowPulsePage } from './low-pulse';

@NgModule({
  declarations: [
    LowPulsePage,
  ],
  imports: [
    IonicPageModule.forChild(LowPulsePage),
  ],
})
export class LowPulsePageModule {}
