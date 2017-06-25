import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisconnectedPage } from './disconnected';

@NgModule({
  declarations: [
    DisconnectedPage,
  ],
  imports: [
    IonicPageModule.forChild(DisconnectedPage),
  ],
  exports: [
    DisconnectedPage
  ]
})
export class DisconnectedPageModule {}
