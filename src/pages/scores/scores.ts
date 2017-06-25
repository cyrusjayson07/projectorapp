import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { database } from 'firebase';
/**
 * Generated class for the ScoresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-scores',
  templateUrl: 'scores.html',
})
export class ScoresPage {
  outletProjector: any;
  outletProjectorData: any;
  player1 = { name: '' };
  player2 = { name: ''};
  player1Scores : any;
  player2Scores : any;
  constructor(platform: Platform, public navCtrl: NavController, public db: AngularFireDatabase, public storage: Storage) {
    let __this = this;
    platform.ready().then((source) => {
      let loadData = database().ref('projectors/outlet001');
      loadData.child('projector').on('value', function(snapshot) {
        console.log(snapshot.val());
        __this.player1.name = snapshot.val().player1.name;
        __this.player2.name = snapshot.val().player2.name;
        //__this.player1Scores = snapshot.val().player1.scores;
        //__this.player2Scores = snapshot.val().player2.scores;
        console.log('scores', snapshot.val().player2.scores);
      });
      this.projectorListener();
    });
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
