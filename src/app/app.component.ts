import { Component } from '@angular/core';
import { Platform, MenuController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Page
import { LoginPage,
         ListPendingServiceOrderPage} from '../pages/index';
//Service
import { UserProvider } from '../providers/user/user.provider';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private menuCtrl: MenuController, private _userProvider: UserProvider,
              public app: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this._userProvider.getStorage();
      if(!this._userProvider.token) {
        this.rootPage = LoginPage;
        this.menuCtrl.enable(false);
      }else {
        this.rootPage = ListPendingServiceOrderPage;
        this.menuCtrl.enable(true);
      }
      statusBar.styleDefault();
      splashScreen.show();
    });
  }

  logOut() {
    debugger;
    this._userProvider.logOut();
    this.rootPage = LoginPage;
    this.menuCtrl.enable(false);
  }

}

