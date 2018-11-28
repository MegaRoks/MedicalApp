import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HighPulsePage } from './high-pulse';

@NgModule({
  declarations: [
    HighPulsePage,
  ],
  imports: [
    IonicPageModule.forChild(HighPulsePage),
  ],
})
export class HighPulsePageModule {}
