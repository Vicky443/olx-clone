import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoriesPage } from '../categories/categories.page';
import { BrandDetailsPage } from '../brand-details/brand-details.page';

@Component({
  selector: 'filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage {

  constructor(private modalCtrl: ModalController) { }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  async openCategoriesModel() {
    const modal = await this.modalCtrl.create({
      component: CategoriesPage
    });
    return await modal.present();
  }

  async openBrandPopup() {
    const modal = await this.modalCtrl.create({
      component: BrandDetailsPage
    });
    return await modal.present();
  }

}
