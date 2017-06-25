import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SemiFinals } from './semi-finals';

@NgModule({
  declarations: [
    SemiFinals,
  ],
  imports: [
    IonicPageModule.forChild(SemiFinals),
  ],
  exports: [
    SemiFinals
  ]
})
export class SemiFinalsModule {}
