import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  sliderConfig = {
    slidesPerView: 1.9,
    spaceBetween: 10,
    centeredSlides: true,
    initialSlide: 1,
  };

  sliderProductConfig = {
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 100,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true,
    // },
  };

  cat = [
    {
      category: 'Pizza',
      expanded: true,
      name: 'Hawai',
      price: 10,
      products: [
        { id: 0, name: 'Salami', price: '8' },
        { id: 1, name: 'Classic', price: '5' },
        { id: 2, name: 'Tuna', price: '9' },
        { id: 3, name: 'Hawai', price: '7' }

      ]
    },
    {
      category: 'Pizza',
      expanded: true,
      name: 'Hawai',
      price: 10,
      products: [
        { id: 0, name: 'Salami', price: '8' },
        { id: 1, name: 'Classic', price: '5' },
        { id: 2, name: 'Tuna', price: '9' },
        { id: 3, name: 'Hawai', price: '7' }

      ]
    },
    {
      category: 'Pizza',
      expanded: true,
      name: 'Salami',
      price: 10,
      products: [
        { id: 0, name: 'Salami', price: '8' },
        { id: 1, name: 'Classic', price: '5' },
        { id: 2, name: 'Tuna', price: '9' },
        { id: 3, name: 'Hawai', price: '7' }

      ]
    },
    {
      category: 'Pizza',
      expanded: true,
      name: 'Hawai',
      price: 10,
      products: [
        { id: 0, name: 'Salami', price: '8' },
        { id: 1, name: 'Classic', price: '5' },
        { id: 2, name: 'Tuna', price: '9' },
        { id: 3, name: 'Hawai', price: '7' }

      ]
    },
    {
      category: 'Pasta',
      expanded: true,
      name: 'Mac & Cheese',
      price: 8,
      products: [
        { id: 4, name: 'Mac & Cheese', price: '8' },
        { id: 5, name: 'Bolognese', price: '6' }
      ]
    },
    {
      category: 'Salad',
      name: 'Basic',
      price: 8,
      products: [
        { id: 6, name: 'Ham & Egg', price: '8' },
        { id: 7, name: 'Basic', price: '5' },
        { id: 8, name: 'Ceaser', price: '9' }
      ]
    }
  ];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }



  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


}
