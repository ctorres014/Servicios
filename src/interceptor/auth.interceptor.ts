import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler,
        HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserProvider } from '../providers/user/user.provider';
// Componente Base
import { BaseComponent } from '../pages/base-component/base-component';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _userProvider: UserProvider,
              public loadingCtrl: LoadingController) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler):  Observable<HttpEvent<any>> {
    let loading = this.loadingCtrl.create({
       content: 'Verificando'
    })
    loading.present();
    if (localStorage.getItem('token') != undefined ){

        const clone_request = request.clone({
          setHeaders: {
            'Authorization': 'Bearer' + localStorage
          }
        });
        loading.dismiss();
        return next.handle(clone_request)

    }else {
      console.log(request);
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      loading.dismiss();
      return next.handle(request);
    }

  }
}
