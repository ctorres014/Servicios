import { Component, ErrorHandler } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

export class BaseComponent {
  loading: any;

  constructor(public loadingCtrl: LoadingController) { }


}
