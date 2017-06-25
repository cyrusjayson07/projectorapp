import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bumberscreen } from './bumberscreen';

@NgModule({
  declarations: [
    Bumberscreen,
  ],
  imports: [
    IonicPageModule.forChild(Bumberscreen),
  ],
  exports: [
    Bumberscreen
  ]
})
export class BumberscreenModule {}
