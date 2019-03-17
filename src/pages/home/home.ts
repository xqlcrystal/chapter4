import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];
  constructor(public navCtrl: NavController) {

    this.items = [
      {
        'title': 'See your reservation',
        'icon': 'document',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA',
        'page': 'ReservationPage'
      },
      {
        'title': 'Current weather',
        'icon': 'partly-sunny',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135',
        'page': 'WeatherPage'
      },
      {
        'title': 'Nearby restaurants',
        'icon': 'restaurant',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529',
        'page': 'RestaurantsPage'
      }
    ]

  }

  openNavDetailsPage(page:string) {
    this.navCtrl.push(page);
  }

}
