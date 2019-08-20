import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  products =  [{
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
  },{
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
  constructor() { }

  ngOnInit() {
  }

}
