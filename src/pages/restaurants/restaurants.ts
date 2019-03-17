import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {

  page = 0;
  total = 1;
  restaurants = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
  }

  ionViewDidLoad() {
    this.getRestaurants();
  }

  getRestaurants(){
    this.page++;
    this.http.get('https://ionic-in-action-api.herokuapp.com/restaurants?page='+this.page)
    .subscribe(res=>{      
      let restaurants=res.json().restaurants;  
      for(let restaurant of restaurants) {
        this.restaurants.push(restaurant);
      }                   
         
    },
    err=>{
      console.log(err);
    });
  }

}
