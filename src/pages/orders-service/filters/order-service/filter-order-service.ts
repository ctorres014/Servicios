import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { FormControl } from '@angular/forms';
// Provider
import { EquipmentProvider } from '../../../../providers/equipment/equipment.provider';
// Page
import { EquipmentPage } from '../../../equipment/equipment';

@Component({
  selector: 'filter-order-service',
  templateUrl: 'filter-order-service.html',
})
export class FilterOrderServicePage {
  searchClient: string = '';
  searchModel: string = '';
  clientSelected: string;
  modelSelected: string;

  itemsClient: any;
  itemsModel: any;

  searching: boolean;
  searchControl: FormControl;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private _equipmentProvider: EquipmentProvider) {
        this.searchControl = new FormControl();
  }

  ionViewDidLoad() {

  }


  setFilteredClient() {
    this.searching = true;
    if(this.searchClient === '') {
      this.itemsClient = [];
      this.searching = false;
      return;
    }
    this.itemsClient = this._equipmentProvider.filterClients(this.searchClient);
    this.searching = false;
  }

  setFilteredModel() {
    //this.searching = true;
    if(this.searchModel === '') {
      this.itemsModel = [];
      return;
    }
    this.itemsModel = this._equipmentProvider.filterModel(this.searchModel);
  }

  selectedClient(client: string) {
    this.clientSelected = client;
    this.searchClient = '';
  }

  selectedModel(model: string) {
    this.modelSelected = model;
    this.searchModel = '';
  }


  applyFilter() {
    let loading = this.loadingCtrl.create({
      content:'Verificando'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.setRoot(EquipmentPage);
    }, 2500);
  }

}
