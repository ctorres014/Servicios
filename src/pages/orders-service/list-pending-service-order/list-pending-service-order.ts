import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';


@Component({
  selector: 'page-list-pending-service-order',
  templateUrl: 'list-pending-service-order.html',
})
export class ListPendingServiceOrderPage {
  look: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private menuCtrl: MenuController) {
        this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {

  }

}
