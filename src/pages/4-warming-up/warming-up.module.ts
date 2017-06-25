import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WarmingUp } from './warming-up';

@NgModule({
  declarations: [
    WarmingUp,
  ],
  imports: [
    IonicPageModule.forChild(WarmingUp),
  ],
  exports: [
    WarmingUp
  ]
})
export class WarmingUpModule {}
