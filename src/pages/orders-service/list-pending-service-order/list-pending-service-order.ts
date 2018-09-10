import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

// Modal-Page
import { FilterOSPendingPage } from '../filters/os-pending/filter-os-pending';

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

  showFilter() {
    this.navCtrl.push(FilterOSPendingPage);
  }
}
