import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';


@Component({
  selector: 'filter-os-pending',
  templateUrl: 'filter-os-pending.html',
})
export class FilterOSPendingPage {

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController) {
  }

  applyFilter() {
    let loading = this.loadingCtrl.create({
      content:'Verificando'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.pop();
    }, 2500);
  }

}
