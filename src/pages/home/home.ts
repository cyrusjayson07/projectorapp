import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { database } from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  outletProjector: any;
  outletProjectorData: any;
  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public storage: Storage) {
    this.projectorListener();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bumberscreen');
  }

  gotoPage(page: string, pageType?: string) {
    if (!!page) {
      if(!!pageType) {
        if(pageType.toLowerCase() === 'root') {
          this.navCtrl.setRoot(page,  {}, {animate: true, direction: 'back'});
        }
      } else {
        this.navCtrl.push(page);
      }
    }
    page = null;
  }

  projectorListener(){
    let __this = this;
    this.outletProjector = database().ref('/projectors/outlet001');
    this.outletProjector.child('projector').off();
    this.outletProjector.child('projector').on('child_changed', function(snapshot) {
      console.log("projectorListener");
       __this.projectorDetails();
    });
  }

  projectorDetails(){
    console.log("projectorDetails");
    let __this = this;
    this.outletProjectorData = database().ref('/projectors/outlet001');
    this.outletProjectorData.child('projector').off();
    this.outletProjectorData.child('projector').on('value', function(snapshot) {
      if(snapshot.val()){
        __this.screenFilter(snapshot.val());
      }
    });
  }

  screenFilter(data){
    console.log(data);
    switch(data.display_type){
      case "connected":
        this.gotoPage('Bumberscreen');
        console.log("connection to projector is successful");
      break;
      case "disconnected":
        this.gotoPage('GetCode');
        console.log("Disconnected: redirect to home");
      break;

      case "video":
        this.gotoPage('VideoPage');
        console.log("redirect to video player");
      break;
      case "image":
        this.gotoPage('ImagePage');
        console.log("redirect to image viewer");
      break;
      case "audio":
        this.gotoPage('AudioPage');
        console.log("redirect to audio player");
      break;

      case "players":
        this.gotoPage('PlayersPage');
        console.log("redirect to matchup_info display");
      break;

      case "warmup":
        this.gotoPage('WarmingUp');
        console.log("redirect to display_score");
      break;
      case "scores":
        this.gotoPage('ScoresPage');
        console.log("redirect to display_score");
      break;

      case "champion":
        this.gotoPage('Champion');
        console.log("redirect to champion");
      break;
    }
  }

}
