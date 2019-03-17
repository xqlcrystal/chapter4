import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  private weather: any;
  private loader: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public loadingCtrl: LoadingController) {

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();
  }

  ionViewDidLoad() {
    this.presentLoading();
    this.http.get('https://ionic-in-action-api.herokuapp.com/weather')
      .subscribe(weather => {
        this.weather = weather.json();
        this.loader.dismiss();
      }, err => {

      });
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  getDirection(degree) {
    if (degree > 338) {
      degree = 360 - degree;
    }
    var index = Math.floor((degree + 22) / 45);
    return directions[index];
  }

}
