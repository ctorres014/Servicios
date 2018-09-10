import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// storage
import { IonicStorageModule } from '@ionic/storage';
// Page
import { MyApp } from './app.component';
import { HomePage, LoginPage,
        ListPendingServiceOrderPage,
        ListCloseServiceOrderPage,
        FilterOSPendingPage,
        FilterOSClosePage,
        EquipmentPage,
        FilterEquipmentPage,
        OrderServicePage } from '../pages/index';
// Provider
import { UserProvider } from '../providers/user/user.provider';
import { OrderServiceProvider } from '../providers/order-service/order-service.provider';
import { EquipmentProvider } from '../providers/equipment/equipment.provider';
// Interceptor
import { AuthInterceptor } from '../auth/interceptor/auth.interceptor';
import { AuthProvider } from '../auth/auth-provider/auth.provider';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListPendingServiceOrderPage,
    ListCloseServiceOrderPage,
    FilterOSPendingPage,
    FilterOSClosePage,
    EquipmentPage,
    OrderServicePage,
    FilterEquipmentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{ backButtonText: 'Atrás' }),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  exports: [],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ListPendingServiceOrderPage,
    ListCloseServiceOrderPage,
    FilterOSPendingPage,
    FilterOSClosePage,
    EquipmentPage,
    OrderServicePage,
    FilterEquipmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    UserProvider,
    OrderServiceProvider,
    EquipmentProvider,

    // AuthProvider

  ]
})
export class AppModule {}
