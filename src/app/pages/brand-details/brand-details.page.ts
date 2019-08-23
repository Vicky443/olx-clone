import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'brand-details',
  templateUrl: './brand-details.page.html',
  styleUrls: ['./brand-details.page.scss'],
})
export class BrandDetailsPage  {

  constructor( private modalCtrl: ModalController ) { }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
