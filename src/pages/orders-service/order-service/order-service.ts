import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
// Page
import { FilterEquipmentPage } from '../../equipments/filters/equipment/filter-equipment';

@Component({
  selector: 'order-service',
  templateUrl: 'order-service.html',
})
export class OrderServicePage {
  // Admin segmen
  segment: string ='OSDetails';
  segmentOrderService: string = 'OSDetails';
  segmentWorked: string = 'worked';
  // Page reference
  filterEquipment = FilterEquipmentPage;
  
  orderService: number = 152452;
  inconvenientes: string = "Inconvenientes en el carro y cabezales";
  trabajosPendientes: string = "Retirar para recambio de equipo";

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderServicePage');
  }

  closeOS() {
    const confirm = this.alertCtrl.create({
      title: 'Desea cerrar la OS?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            return false;
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            return true;
          }
        }
      ]
    });
    confirm.present();
  }
}
