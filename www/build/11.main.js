webpackJsonp([11],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bumberscreen__ = __webpack_require__(360);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BumberscreenModule", function() { return BumberscreenModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BumberscreenModule = (function () {
    function BumberscreenModule() {
    }
    return BumberscreenModule;
}());
BumberscreenModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bumberscreen__["a" /* Bumberscreen */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bumberscreen__["a" /* Bumberscreen */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__bumberscreen__["a" /* Bumberscreen */]
        ]
    })
], BumberscreenModule);

//# sourceMappingURL=bumberscreen.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bumberscreen; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Bumberscreen page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Bumberscreen = (function () {
    function Bumberscreen(navCtrl, db, storage) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.storage = storage;
        this.projectorListener();
    }
    Bumberscreen.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Bumberscreen');
    };
    Bumberscreen.prototype.gotoPage = function (page, pageType) {
        if (!!page) {
            if (!!pageType) {
                if (pageType.toLowerCase() === 'root') {
                    this.navCtrl.setRoot(page, {}, { animate: true, direction: 'back' });
                }
            }
            else {
                this.navCtrl.push(page);
            }
        }
        page = null;
    };
    Bumberscreen.prototype.projectorListener = function () {
        var __this = this;
        this.outletProjector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_firebase__["database"])().ref('/projectors/outlet001');
        this.outletProjector.child('projector').off();
        this.outletProjector.child('projector').on('child_changed', function (snapshot) {
            console.log("projectorListener");
            __this.projectorDetails();
        });
    };
    Bumberscreen.prototype.projectorDetails = function () {
        console.log("projectorDetails");
        var __this = this;
        this.outletProjectorData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_firebase__["database"])().ref('/projectors/outlet001');
        this.outletProjectorData.child('projector').off();
        this.outletProjectorData.child('projector').on('value', function (snapshot) {
            if (snapshot.val()) {
                __this.screenFilter(snapshot.val());
            }
        });
    };
    Bumberscreen.prototype.screenFilter = function (data) {
        console.log(data);
        switch (data.display_type) {
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
    };
    return Bumberscreen;
}());
Bumberscreen = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-bumberscreen',template:/*ion-inline-start:"/Users/cyrusjaysonbarredo/Documents/bitbucket/p4q-projector/src/pages/3-bumberscreen/bumberscreen.html"*/'<ion-content>\n  <ion-grid padding>\n    <ion-row>\n      <ion-col col-4 text-center>\n        <img src="../../assets/images/02 - Sign in (1-3).png" alt="Icon">\n        <br>\n        <img class="criteria" src="../../assets/images/clean.svg" alt="Icon">\n        <img class="criteria" src="../../assets/images/pour.svg" alt="Icon">\n        <img class="criteria" src="../../assets/images/skim.svg" alt="Icon">\n        <img class="criteria" src="../../assets/images/check.svg" alt="Icon">\n        <img class="criteria" src="../../assets/images/serve.svg" alt="Icon">\n      </ion-col>\n      <ion-col text-center col-6>\n        <img src="../../assets/images/Logo-with-draught-challenge.png" alt="Logo">\n\n        <br>\n\n        <button margin-top ion-button clear text-uppercase\n                (click)="gotoPage(\'WarmingUp\')">\n          Let\'s play draught\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-footer no-border>\n    <ion-navbar transparent>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n\n          </ion-col>\n          <ion-col col-6 text-right>\n            &copy; 2017 Copyright Heineken N.V. All Rights Reserved\n            |\n            Legal disclaimer\n            |\n            Cookie and privacy policy\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-navbar>\n  </ion-footer>\n</ion-content>\n\n'/*ion-inline-end:"/Users/cyrusjaysonbarredo/Documents/bitbucket/p4q-projector/src/pages/3-bumberscreen/bumberscreen.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], Bumberscreen);

//# sourceMappingURL=bumberscreen.js.map

/***/ })

});
//# sourceMappingURL=11.main.js.map