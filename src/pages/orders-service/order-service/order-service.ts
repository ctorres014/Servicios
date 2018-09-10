import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'order-service',
  templateUrl: 'order-service.html',
})
export class OrderServicePage {
  orderService: number = 152452;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderServicePage');
  }

}
