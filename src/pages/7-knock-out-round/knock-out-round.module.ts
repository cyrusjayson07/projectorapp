import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KnockOutRound } from './knock-out-round';

@NgModule({
  declarations: [
    KnockOutRound,
  ],
  imports: [
    IonicPageModule.forChild(KnockOutRound),
  ],
  exports: [
    KnockOutRound
  ]
})
export class KnockOutRoundModule {}
