import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Finals } from './finals';

@NgModule({
  declarations: [
    Finals,
  ],
  imports: [
    IonicPageModule.forChild(Finals),
  ],
  exports: [
    Finals
  ]
})
export class FinalsModule {}
