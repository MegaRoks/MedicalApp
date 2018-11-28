import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AveragePulsePage } from './average-pulse';

@NgModule({
  declarations: [
    AveragePulsePage,
  ],
  imports: [
    IonicPageModule.forChild(AveragePulsePage),
  ],
})
export class AveragePulsePageModule {}
