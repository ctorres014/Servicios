import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler,
        HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingController, NavController } from 'ionic-angular';
// Provider
import { UserProvider } from '../../providers/user/user.provider';
import { AuthProvider } from '../auth-provider/auth.provider';
//...
import 'rxjs/add/operator/do';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _userProvider: UserProvider,
              // private _authProvider: AuthProvider,
              public loadingCtrl: LoadingController) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler):  Observable<HttpEvent<any>> {

    let loading = this.loadingCtrl.create({
       content: 'Verificando'
    })
    loading.present();
    this._userProvider.getStorage();
    if (this._userProvider.token){

        const clone_request = request.clone({
          setHeaders: {
            'Authorization': 'Bearer' + localStorage
          }
        });
        // Recibimos el response
        loading.dismiss();
        return next.handle(clone_request)

        // .do((event: HttpEvent<any>) => {
        //   loading.dismiss();
        // }, (err: any) => {
        //   if (err instanceof HttpErrorResponse) {
        //     if (err.status === 401) {
        //       // redirect to the login route
        //       // or show a modal
        //       console.log("Error 401");
        //       loading.dismiss();
        //     }
        //     else {
        //       console.log("Cualquier otro tipo de error");
        //       loading.dismiss();
        //     }
        //   }
        // });

    }else {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      // Recibimos el response
      loading.dismiss();
      return next.handle(request)
      // .do((event: HttpEvent<any>) => {
      //   loading.dismiss();
      // },(err: any) => {
      //     if (err instanceof HttpErrorResponse) {
      //       if (err.status === 401) {
      //         // redirect to the login route
      //         // or show a modal
      //         console.log("Error 401");
      //         loading.dismiss();
      //       }
      //       else {
      //         //this._authProvider.collectFailedRequest(request);
      //         console.log("Cualquier otro tipo de error");
      //         loading.dismiss();
      //       }
      //     }
      //   });
    }

  }
}
