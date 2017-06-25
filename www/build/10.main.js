webpackJsonp([10],{

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__warming_up__ = __webpack_require__(361);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarmingUpModule", function() { return WarmingUpModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WarmingUpModule = (function () {
    function WarmingUpModule() {
    }
    return WarmingUpModule;
}());
WarmingUpModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__warming_up__["a" /* WarmingUp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__warming_up__["a" /* WarmingUp */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__warming_up__["a" /* WarmingUp */]
        ]
    })
], WarmingUpModule);

//# sourceMappingURL=warming-up.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarmingUp; });
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
 * Generated class for the WarmingUp page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WarmingUp = (function () {
    function WarmingUp(platform, navCtrl, db, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.db = db;
        this.storage = storage;
        this.criterias = [];
        this.player1 = { name: '' };
        var __this = this;
        platform.ready().then(function (source) {
            var loadData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_firebase__["database"])().ref('projectors/outlet001');
            loadData.child('projector').on('value', function (snapshot) {
                console.log(snapshot.val());
                __this.player1.name = snapshot.val().player1.name;
            });
            _this.projectorListener();
        });
        this.criterias = [
            {
                source: '../../assets/images/clean.svg',
                rating: {
                    value: -1,
                    isSelected: false,
                }
            },
            {
                source: '../../assets/images/pour.svg',
                rating: {
                    value: -1,
                    isSelected: false,
                }
            },
            {
                source: '../../assets/images/skim.svg',
                rating: {
                    value: -1,
                    isSelected: false,
                }
            },
            {
                source: '../../assets/images/check.svg',
                rating: {
                    value: -1,
                    isSelected: false,
                }
            },
            {
                source: '../../assets/images/serve.svg',
                rating: {
                    value: -1,
                    isSelected: false,
                }
            },
        ];
    }
    WarmingUp.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Bumberscreen');
    };
    WarmingUp.prototype.gotoPage = function (page, pageType) {
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
    WarmingUp.prototype.projectorListener = function () {
        var __this = this;
        this.outletProjector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_firebase__["database"])().ref('/projectors/outlet001');
        this.outletProjector.child('projector').off();
        this.outletProjector.child('projector').on('child_changed', function (snapshot) {
            console.log("projectorListener");
            __this.projectorDetails();
        });
    };
    WarmingUp.prototype.projectorDetails = function () {
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
    WarmingUp.prototype.screenFilter = function (data) {
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
    return WarmingUp;
}());
WarmingUp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-warming-up',template:/*ion-inline-start:"/Users/cyrusjaysonbarredo/Documents/bitbucket/p4q-projector/src/pages/4-warming-up/warming-up.html"*/'<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-5>\n        <img src="../../assets/images/Logo-with-draught-challenge.png" alt="Icon">\n\n        <section>\n          <h2 text-uppercase>{{this.player1.name}}</h2>\n        </section>\n      </ion-col>\n      <ion-col col-3>\n        <ion-grid>\n          <ion-row *ngFor="let criteria of criterias">\n            <ion-col class="criteria">\n              <img class="criteria__icon" [src]="criteria.source" alt="Icon">\n            </ion-col>\n            <ion-col></ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n      <ion-col col-4>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-footer no-border>\n    <ion-navbar transparent hideBackButton="true">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-navbar>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/cyrusjaysonbarredo/Documents/bitbucket/p4q-projector/src/pages/4-warming-up/warming-up.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], WarmingUp);

//# sourceMappingURL=warming-up.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map