import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetCode } from './get-code';

@NgModule({
  declarations: [
    GetCode,
  ],
  imports: [
    IonicPageModule.forChild(GetCode),
  ],
  exports: [
    GetCode
  ]
})
export class GetCodeModule {}
