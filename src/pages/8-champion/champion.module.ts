import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Champion } from './champion';

@NgModule({
  declarations: [
    Champion,
  ],
  imports: [
    IonicPageModule.forChild(Champion),
  ],
  exports: [
    Champion
  ]
})
export class ChampionModule {}
