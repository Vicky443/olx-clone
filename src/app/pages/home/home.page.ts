import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterPage } from '../filter/filter.page';
import { ProductDetailsPage } from '../product-details/product-details.page';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  products = [{
    title: 'TATASKYPE DTH - 9MONTH FREE',
    url: 'assets/img/products/p1.jpg',
    price: 1200,
    isFeatured: true,
    location: 'SALAMAT PUR , MUMBAI'
  }, {
    title: 'TATASKYPE DTH - 9MONTH FREE',
    url: 'assets/img/products/p2.jpg',
    price: 1200,
    isFeatured: true,
    location: 'SALAMAT PUR , MUMBAI'
  }, {
    title: 'TATASKYPE DTH - 9MONTH FREE',
    url: 'assets/img/products/p3.jpg',
    price: 1200,
    isFeatured: true,
    location: 'SALAMAT PUR , MUMBAI'
  }, {
    title: 'TATASKYPE DTH - 9MONTH FREE',
    url: 'assets/img/products/p4.jpg',
    price: 1200,
    isFeatured: true,
    location: 'SALAMAT PUR , MUMBAI'
  }];
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: FilterPage
    });
    return await modal.present();
  }


  async popDetailsPage() {
    const modal = await this.modalController.create({
      component: ProductDetailsPage
    });
    return await modal.present();

  }

}
