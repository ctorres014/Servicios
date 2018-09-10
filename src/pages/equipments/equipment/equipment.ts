import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';
// Provider
import { EquipmentProvider } from '../../../providers/equipment/equipment.provider';
// Page
import { FilterEquipmentPage } from './../filters/equipment/filter-equipment';

@Component({
  selector: 'page-equipment',
  templateUrl: 'equipment.html',
})
export class EquipmentPage {
  searchTerm: string = '';
  items: any;
  searching: boolean;
  searchControl: FormControl;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _equipmentProvider: EquipmentProvider) {
      this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.setFilteredItems();
    // this.searchControl.valueChanges.debounceTime(100).subscribe(search => {
    //     this.searching = false;
    //     this.setFilteredItems();
    // });
  }

  shouldShowCancel() {
    console.log('Se cancelo');

  }

  setFilteredItems() {
    // this.searching = true;
    this.items = this._equipmentProvider.filterClients(this.searchTerm);
  }

  onCancel(event: any) {
    console.log('onCancel', event);
  }

  showFilter() {
    this.navCtrl.push(FilterEquipmentPage);
  }

}
