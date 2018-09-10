import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
//Page
import { LoginPage,
         ListPendingServiceOrderPage,
         ListCloseServiceOrderPage,
         FilterEquipmentPage,
         OrderServicePage } from '../pages/index';
//Service
import { UserProvider } from '../providers/user/user.provider';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  login = LoginPage;
  listOSPending = ListPendingServiceOrderPage;
  listOSClose = ListCloseServiceOrderPage;
  equipment = FilterEquipmentPage;
  // Eliminar esta linea--- solo para prueba
  orderService = OrderServicePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private menuCtrl: MenuController, private _userProvider: UserProvider,
              public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this._userProvider.getStorage();
      if(!this._userProvider.token) {
        this.rootPage = this.login;
        this.menuCtrl.enable(false);
      }else {
        this.rootPage = ListPendingServiceOrderPage;
        this.menuCtrl.enable(true);
      }
      statusBar.styleDefault();
      splashScreen.show();
    });
  }

  logOut(page: any) {
    const confirm = this.alertCtrl.create({
      title: '¿Desea salir de GESOS?',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Si',
          handler: () => {
            this._userProvider.logOut();
            this.rootPage = this.login;
            this.menuCtrl.enable(false);
          }
        }
      ]
    });
    confirm.present();
  }

  openPage(page: any) {
    this.rootPage = page;
    this.menuCtrl.close();
  }

}

