import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// Modal-Page
import { FilterOSClosePage } from '../filters/os-close/filter-os-close';

@Component({
  selector: 'page-list-close-service-order',
  templateUrl: 'list-close-service-order.html',
})
export class ListCloseServiceOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showFilter() {
    this.navCtrl.push(FilterOSClosePage);
  }
}
