import { Component, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NavController, AlertController } from 'ionic-angular';
// Service
import { UserProvider } from '../../providers/user/user.provider';
// Page
import { ListPendingServiceOrderPage } from '../index';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: string = '';
  password: string = '';

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
              private _userProvider: UserProvider) {

  }

  logIn() {
   this.verificarUsuario(this.user, this.password);
  }

  private verificarUsuario(user: string, password: string) {
    this._userProvider.setStorage("123456789");
    this.navCtrl.setRoot(ListPendingServiceOrderPage);
    // this._userProvider.logIn(user, password)
    //                   .subscribe((credential: any) => {
    //                     if(credential) {
    //                       this._userProvider.setStorage(credential.access_token);
    //                       this.navCtrl.setRoot(ListPendingServiceOrderPage);
    //                     }
    //                   },
    //                   (err : HttpErrorResponse)=>{
    //                     if(err.error) {
    //                       this.alertCtrl.create({
    //                         title: 'Usuario y/o contraseña inválida!',
    //                         subTitle: err.error.error_description,
    //                         buttons: ['Aceptar']
    //                       }).present();
    //                     }
    //                   });

  }

}
