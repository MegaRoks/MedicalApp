import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PulsePage } from './pulse';

@NgModule({
  declarations: [
    PulsePage,
  ],
  imports: [
    IonicPageModule.forChild(PulsePage),
  ],
})
export class PulsePageModule {}
