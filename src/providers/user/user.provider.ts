import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '../../config/config';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';



@Injectable()
export class UserProvider {
  token: string;

  constructor(public http: HttpClient, private storage: Storage,
              private platform: Platform) {

  }

  logIn(user: string, password: string) {
    let body = "username=" + user + "&password=" + password + "&grant_type=password";
    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(`${CONFIG.url}token`, body, { headers: reqHeader} );
  }

  setStorage(token: string) {
    if(this.platform.is('cordova')) {
      // dispositivo
      this.storage.ready()
                  .then(() =>{
                    this.storage.set('token', token);
                  });
    }else {
      // computadora
      localStorage.setItem("token", token);
    }
  }

  getStorage() {
    let promesa = new Promise((resolve, reject) => {
      if(this.platform.is('cordova')) {
        // dispositivo
        this.storage.ready()
                    .then(() => {
                      // obtenemos el storage
                      this.storage.get("token")
                                  .then(token => {
                                    if(token) {
                                      this.token = token;
                                    }
                                    resolve();
                                  })
                    })
      }else {
        // computadora
        if(localStorage.getItem("token")) {
          // Cargamos el storage porque existe
          this.token = localStorage.getItem("token");
        }
      }
        resolve();
    })





  }

  logOut() {
    if(this.platform.is('cordova')) {
      // dispositivo
      this.storage.ready()
                  .then(() =>{
                    this.storage.remove('token');
                  });
    }else {
      // computadora
      localStorage.removeItem("token");
    }
  }

}
