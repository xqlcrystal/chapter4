import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {

  reservation:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reservation = {
      checkin: new Date(),
      checkout: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      room: 156,
      rate: 121,
      wifi: 'resortwifi'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }

}
