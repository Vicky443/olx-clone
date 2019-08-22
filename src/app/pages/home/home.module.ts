import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { FilterPage } from '../filter/filter.page';
import { ProductDetailsPage } from '../product-details/product-details.page';
import { HomePageRoutingModule } from './home-routing.module';
import { CategoriesPage } from '../categories/categories.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage , FilterPage, ProductDetailsPage, CategoriesPage],
  entryComponents: [
    FilterPage , ProductDetailsPage , HomePage , CategoriesPage
  ]
})
export class HomePageModule {}
